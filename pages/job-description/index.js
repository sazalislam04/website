import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import { createClient } from 'contentful'
import { useRouter } from 'next/router';


export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "jobDescription" })

  return {
    props: {
      jobs: res.items,
    },
    revalidate: 1
  }
}



export default function Applyjob({jobs}) {
  const router = useRouter()
    const ClickHandler = (slug) => {
        router.push(`/job-description/${slug}`)
    }
  return (
<div style={{width: "100%"}}>
    <Row className="mx-auto">
            <Navbartwo/>
        

        <div>
          <div className="talent_section">
                
            </div>

            <div className="brand_section">
                
                <Row className="container mx-auto">
                <p  className="brand_title">Based on Skills</p>
                {jobs.map((job)=>{
                  return(
                    <Col onClick={()=>{ClickHandler(job.fields.slug)}} key={job.sys.id}>
                      <img src={'https:' + job.fields.skillLogo.fields.file.url}></img>
                      <p>{job.fields.skill}</p>
                    </Col>)
                  
                })}
                </Row>
            </div> 

            <div className="expact_section">
                <Row className="container  mx-auto expact_row">
                    <div className="expact_description_div" >
                      <p className="expact_title">What you can expect</p>
                      <p className="expact_text">It all starts with a conversation—we’ll work with you to find out what hard and soft <br />
                      skills you’re looking for, quickly zero in on a shortlist of talents, and help guide your <br />
                      through the hiring process.</p>
                    </div>
                    <div className="expact_point_div">
                        <div className="expact_point">
                        <img style={{
            height: '30px'}}  alt="Picture of the author"  src="/numone.png"/>
                            <p className="expact_text ms-3"> <span className="fw-bold">Sign up and set up your meeting</span> <br/>
                            Give us a few details and set up
                            a time to talk with your recruiter</p>
                        </div>
                        <div className="expact_point">
                        <img style={{
            height: '30px'}}  alt="Picture of the author"  src="/twoicon.png"/>
                            <p className="expact_text ms-3"> <span className="fw-bold"> Meet with your recruiter</span> <br/>
                            Your recruiter will show up with a shortlist of “top matches”</p>
                        </div>
                        <div className="expact_point">
                        <img style={{
            height: '30px'}}  alt="Picture of the author"  src="/numthree.png"/>
                            <p className="expact_text ms-3"> <span className="fw-bold"> Review and hire talent</span> <br/>
                            Interview the top matches, see who’s a hire, or get anothershortlist</p>
                        </div>
                    </div>
                    <div className="talk_two_btn_div">
                        <button className="talk_two_btn">Talk to a recruitor</button>
                    </div>
                </Row>
            </div>

            <div className="faq_section">
      `       <Row className="container-xxl container-xl container-lg container-md  container-sm container-xs mx-auto faq_row justify-content-lg-evenly">
                <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
                  <p className="faq_title">Frequently asked questions</p>
                </Col>
                <Col xl={6} xxl={6} lg={5} md={6} sm={6}>
                    <div className="fa_question">
                      <p className="faq_point_title">Why use talent scout?</p>
                      <p className="faq_text">Its the quick way to hire highly-qualified talent – and with very little <br /> effort on your part.</p>
                    </div>
                    <hr />
                    <div className="fa_question">
                      <p className="faq_point_title">Who can I meet this way?</p>
                      <p className="faq_text">People with years of experience in creative, design, development, and <br /> marketing: the very best people on our platform, handpicked from <br /> hundreds of thousands globally.</p>
                    </div>
                    <hr />
                    <div className="fa_question">
                      <p className="faq_point_title">How is Talent Scout different from a staffing agency?</p>
                      <p className="faq_text">First off, we’re fast. Staffing agencies can take weeks and even months <br /> to find the right fit, and often mark up costs by 75% (that’s on the low <br /> end).</p>
                    </div>
                    <hr />
                    <div className="fa_question">
                      <p className="faq_point_title">Do I have to pay for this service?</p>
                      <p className="faq_text">When our specialized recruiters share your shortlist with you, they’ll <br /> include the hourly rate for each professional – that’s all you’ll pay: there <br /> aren’t any extra fees outside these rates.</p>
                    </div>
                </Col>
              </Row>
            </div>

            <div className="join_work_section">
            <Row className='container-fluid join_full_container justify-content-center mx-auto'>
              <Col lg={12} md={12} sm={12} xs={12} className='w-100 '>
                    <Row className="join_work_container justify-content-md-between">
                    <Col className="d-flex justify-content-start " lg={4} md={4} sm={4} xs={12}>
                      <img
                      src="/joinimg.png"
                      alt="Picture of the author"
                      className="join_img"
                      />
                    </Col>
                    <Col lg={8} md={8} sm={8} xs={12}>
                        <p className='join_title'>Join the world’s work marketplace</p>
                      <div  className='join_footer_row'>
                      <Row className="justify-content-lg-between justify-content-md-around">
                        <hr className='horizontal_line' />
                          <Col lg={8} md={8} sm={12}>
                            <p className='join_text'>Access a pre-screened pool of remote talent, shortlisted for you by specialized recruiters who help you select the best talent based on your business needs.</p>
                          </Col>
                          <Col lg={3} md={3} sm={12}>
                            <button className='talent_btn'>Find Talent</button>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
              </Col>
              </Row>
            </div>
            
            <div className="join_work_container_mobile">
                  <Row className="container join_work_container justify-content-md-between mx-auto">
                  <Col className=""  lg={4} md={4} sm={4} xs={12}>
                    <img
                    src="/joinimg.png"
                    alt="Picture of the author"
                    className="join_img_foremploye"
                    />
                  </Col>
                  <Col className="" lg={8} md={8} sm={8} xs={12}>
                      <p className='join_title'>Join the world’s work marketplace</p>
                      <div  className='join_footer_row'>
                      <Row className="justify-content-lg-between justify-content-md-between">
                        <hr className='horizontal_line' />
                        <Col lg={8} md={8} sm={12}>
                          <p className='join_text'>Find great talent. Build your business. Take your career to the next level.</p>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                          <button className='talent_btn'>Find Talent</button>
                        </Col>
                      </Row>
                      </div>
                  </Col>
                </Row>
            </div>
        </div>
      <MainFooter/>
    </Row>
</div>
  );
}