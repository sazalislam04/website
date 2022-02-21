import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import HireCard from '../../components/HireCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoIosArrowForward } from 'react-icons/io';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createClient } from 'contentful'
import { useRouter } from "next/router";
import { useState } from "react";
import JobCard from "../../components/JobCard";
export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "jobs" })

  return {
    props: {
      job: res.items,
    },
    revalidate: 1
  }
}
export default function Intro({job}) {
 
  const [tech, setTech] = useState(false)
  const router = useRouter()
  const TechnologyHandler = (tech) => {
    if(tech === 'react')
    {
      router.push('https://www.uptal.org/hire/reactjs')
    }
    else if(tech === 'python')
    {
      router.push('https://www.uptal.org/hire/python')
    }
  }
  return (
<div style={{width: "100%"}}>
    <Row className="mx-auto">
            <Navbartwo/>
        <div>
          <Row className="container-fluid justify-content-xl-evenly justify-content-lg-evenly justify-content-sm-start justify-content-xs-start  mx-auto employe_banner_section mt-4 gy-3">
                  <Col className="" lg={6} md={6} sm={10}>
                    <p className="employe_title">Your shortcut to pre-vetted talent</p>
                    <p className="employe_text ">Talk to a recruiter and get a shortlist within 2 days</p>
                    <div className="anchor_talkbtn ">
                          <button className="talk_btn">Talk to a recruiter</button>
                          <a className="looking_anchor ms-2">Looking for work?</a>
                    </div>
                  </Col>
                  <Col className="text-end" lg={6} md={6} sm={10}>
                      <img
                      src="/employe-bannerimg.jpg"
                      alt="Picture of the author"
                      className="employe_banner_img"
                    />
                  </Col>
          </Row>
        </div>

        <div>
            <div className="talent_section">
                <Row className="container mx-auto">
                  <p className="talent_title">Pre-vetted talent available to start in these fields</p>
                  <div className="talent_div">
                      <div className="talent_item">
                        <img
                              src="/fullstack.png"
                              alt="Picture of the author"
                              className="talent_img"
                          />
                          <p className="talent_text">FullStack Developer</p>
                      </div>
                      <div className="talent_item">
                        <img
                              src="/datascience.png"
                              alt="Picture of the author"
                              className="talent_img"
                          />
                          <p className="talent_text">Data Science</p>
                      </div>
                      <div className="talent_item">
                          <img
                              src="/cloud.png"
                              alt="Picture of the author"
                              className="talent_img"
                          />
                          <p  className="talent_text">Cloud</p>
                      </div>
                  </div>
                </Row>
            </div>

            <div className="brand_section">
                <Row className="container mx-auto">
                    <div>
                        <p className="brand_title">Leading brands trust Talent Scout</p>
                        <p  className="brand_description">From startups to Fortune 500: brands trust our recruiters to help find the best people for them</p>
                    </div>
                    <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
                        <img
                            src="/mircrosoft.jpg"
                            alt="Picture of the author"
                            className="employe_brand_img"
                        />
                    </Col>
                    <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
                          <img
                          src="/paypal-color-v1.svg"
                          alt="Picture of the author"
                          className="employe_brand_img"
                        />
                    </Col>
                    <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
                          <img
                            src="/walmart-color-v1.svg"
                            alt="Picture of the author"
                            className="employe_brand_img"
                            />
                    </Col>
                    <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
                          <img
                            src="/intuit-color-v1.svg"
                            alt="Picture of the author"
                            className="employe_brand_img"
                        />
                    </Col>

                    <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
                    <img
                        src="/barclays-color-v1.svg"
                        alt="Picture of the author"
                        className="employe_brand_img"
                    />
                    </Col>
                    <Col xxl={2} xl={2} lg={2} md={4} sm={3} xs={4}>
                          <img
                            src="/amazon-color-v1.svg"
                            alt="Picture of the author"
                            className="employe_brand_img"
                        />
                    </Col>
                  
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
            
            <div className="technology_section">
             
                <Row className="container mx-auto mt-4">
                <p className="based_text">Based on Skills</p>
                    <div className="technology_div">
                        <div onClick={() => TechnologyHandler('react')} className="technology_colam">
                          <img
                              src="/React-svg.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">React.js</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Node_js.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">Node.js</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                        </div>
                        <div onClick={() => TechnologyHandler('python')} className="technology_colam">
                          <img
                              src="/Python_.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Python.js</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/AWS.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">AWS</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Javascript.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Javascript</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/react_native.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">React Native</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Postgre_SQL.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">PostgreSQL</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Ruby_on_Rails.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">Ruby On Rails</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Java_developers.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Java</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Angular.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />  
                          <p className="technology_text">Angular</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div><div className="technology_colam">
                          <img
                              src="/Golang.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Golang</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/PHP.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">PHP</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/ML_engineers.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Machine Le..</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Android.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">Android</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Django_developers.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Django</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Laravel.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Laravel</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Magento.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Magento</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Node_js_two.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">React/Node</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                    </div>
                </Row>
           </div>
            <div className="technology_section_mobile">
                  <p className="based_text ">Based on Skills</p>
                    <div className="technology_div">
                        <div onClick={() => TechnologyHandler('react')} className="technology_colam">
                          <img
                              src="/React-svg.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">React.js</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Node_js.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">Node.js</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                        </div>
                        <div onClick={() => TechnologyHandler('python')} className="technology_colam">
                          <img
                              src="/Python_.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Python.js</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/AWS.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">AWS</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Javascript.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Javascript</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/react_native.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">React Native</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Postgre_SQL.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">PostgreSQL</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Ruby_on_Rails.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">Ruby On Rails</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>

                        {
                            tech && <>
                            <div className="technology_colam">
                          <img
                              src="/Java_developers.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Java</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Angular.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />  
                          <p className="technology_text">Angular</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div><div className="technology_colam">
                          <img
                              src="/Golang.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Golang</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/PHP.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">PHP</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/ML_engineers.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Machine Le..</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Android.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          />
                          <p className="technology_text">Android</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Django_developers.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Django</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Laravel.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Laravel</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Magento.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">Magento</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                        <div className="technology_colam">
                          <img
                              src="/Node_js_two.svg"
                              alt="Picture of the author"
                              className="hire_tech_img"
                          /> 
                          <p className="technology_text">React/Node</p>
                          <IoIosArrowForward className="hire_arrow_icon ms-2"/>

                        </div>
                            </>
                        }
                        
                    </div>
                {tech === false ? <p onClick={() => setTech(true)} className="see_more mt-3">+ See more positions</p> : <p onClick={() => setTech(false)} className="see_more mt-3">- See more positions</p>}
            </div>
            
            <div className="Based_role_section">
             <Row className="container mx-auto mt-4">
             <p className="based_role_text">Based on role</p>
                 <div className="Based_role_div">
                     <div className="based_role_colam">
                       <img
                           src="/Full_Stack.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">FullStack Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/role_backend.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">Backend Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/Front_end_developers.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">Frondend Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/Mobile_developers.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">Mobile Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/app_developer.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">App Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                 </div>
             </Row>
            </div>
            <div className="Based_role_section_mobile">
             <p className="based_role_text">Based on role</p>
                 <div className="Based_role_div">
                     <div className="based_role_colam">
                       <img
                           src="/Full_Stack.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">FullStack <br/> Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/role_backend.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">Backend <br/> Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/Front_end_developers.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">Frondend <br/> Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/Mobile_developers.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">Mobile <br/> Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                     <div className="based_role_colam">
                       <img
                           src="/app_developer.svg"
                           alt="Picture of the author"
                           className="hire_tech_img"
                       />
                       <p className="technology_text">App Developers</p>
                       <IoIosArrowForward className="hire_arrow_icon ms-2"/>
                     </div>
                 </div>
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

            <Row className='container join_full_container justify-content-center mx-auto'>
              <Col lg={12} md={12} sm={12} xs={12} className='w-100 '>
                    <Row className="join_work_container justify-content-md-between">
                    <Col className="d-flex justify-content-start " lg={4} md={4} sm={12} xs={12}>
                      <img
                      src="/joinimg.png"
                      alt="Picture of the author"
                      className="join_img"
                      />
                    </Col>
                    <Col lg={8} md={8} sm={12} xs={12}>
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

      <MainFooter/>
    </Row>
</div>
  );
}
{/* <Row className="container-fluid mx-auto gy-3 justify-content-evenly gorious_section">
<Col lg={6} md={6} sm={12}>
  <img
    src="/regorious.jpg"
    alt="Picture of the author"
    className="regorious_img"
  />
</Col>
<Col lg={5} md={6} sm={12}>
  <p className="rigorious_title ms-2">Rigorous Vetting</p>
  <div className="gorious_div mt-4">
      <img
        src="/goroious-check-icon.svg"
        alt="Picture of the author"
        className="regorious_icon"
      />
      <div>
         <p className="gorious_point_title">5+ hours of tests and interviews</p>
         <p className="gorious_text">More rigorous than Silicon Valley job interviews. We test for 100+ skills, data structures, algorithms, systems design, software specializations & frameworks.</p>
      </div>
  </div>
  <div className="gorious_div">
      <img
        src="/gorious-box-icon.svg"
        alt="Picture of the author"
        className="regorious_icon"
      />
      <div>
        <p className="gorious_point_title">Seniority tests</p>
          <p className="gorious_text">We select excellent communicators who can proactively take ownership of business and product objectives without micromanagement.</p>
      </div>
  </div>
</Col>
</Row> */}

{/* <Row className="container mx-auto">
<Col>
  <div style={{paddingTop:"50px"}}>
      <p className="brand_title">Hire Uptal Developers</p>
  </div>
  <Row className="mx-auto mt-3">
      {hire.map(data => (
        <HireCard key={data.sys.id} data={data} />
      ))}
  </Row>
</Col>
</Row>  */}