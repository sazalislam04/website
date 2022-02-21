import React,  {useEffect, useState} from 'react';
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Navbartwo from '../../components/Navbars/Navbartwo';
import Meta from '../../partial/seo-meta';
import { Row, Col, Offcanvas,Card , Accordion, useAccordionButton} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter } from "next/router";
import { Button, TextField } from '@mui/material';
import Footer from '../../components/Footers/Footers';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "hire" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  
  const { items } = await client.getEntries({
    content_type: 'hire',
    'fields.slug': params.slug
  }) 

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0] },
    revalidate: 1
  }
}


export default function HireDevelopers({post}) {
  const [tech, setTech] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    const { title,skill, skillLogo ,content ,intro} = post.fields;
 
    
    const headingTypes = [BLOCKS.HEADING_2]
  
  //const headings = content.json.content.filter(item => headingTypes.includes(item.nodeType))
  
    const document = {
      nodeType: 'document',
      content: headingTypes,
    }
   
    const main = {
        
        renderNode: {
             [BLOCKS.HEADING_2]: (node, pext) =>{
                const strUnderscores = String(pext).replace(/ /g,"_")
             
                return(
                    <p className="description_title"><a id={strUnderscores}>{pext} </a></p>
                )
             }
            
          },  
    };

    const options = {
        
      renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) =>
           " ",
          [BLOCKS.HEADING_3]: (node, next) =>
           " ",
          [BLOCKS.HEADING_4]: (node, next) =>
           " ",
          [BLOCKS.HEADING_5]: (node, next) =>
           " ",
          [BLOCKS.HEADING_6]: (node, next) =>
           " ",
           [BLOCKS.UL_LIST]: (node, next) =>
           " ",
           [BLOCKS.LIST_ITEM]: (node, next) =>
           " ",
           [BLOCKS.HR]: (node, next) =>
           " ",
           [BLOCKS.OL_LIST]: (node, next) =>
           " ",
           [BLOCKS.QUOTE]: (node, next) =>
           " ",
           [BLOCKS.TABLE]: (node, next) =>
           " ",
           [BLOCKS.TABLE_CELL]: (node, next) =>
           " ",
           [BLOCKS.TABLE_ROW]: (node, next) =>
           " ",
           [BLOCKS.TABLE_HEADER_CELL]: (node, next) =>
           " ",
           [BLOCKS.HEADING_2]: (node, pext) =>{
              const strUnderscores = String(pext).replace(/ /g,"_")

               return(
                  <p className="table_link"><a href={"#"+strUnderscores}>{pext}</a> </p>
               )
           }
          
        },  
  }; 

    return (
      <div>
        <Row className="mx-auto">
            <Navbartwo/>
            <Meta
            title={title}
            image={'https:' + skillLogo.fields.file.url}
            />
            <div className='hire_details_banner_section'>
                <Row className='container-fluid hire_details_banner mx-auto'>
                    <Row className="container  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-between justify-content-sm-between">
                    <Col className='align-items-center' lg={7} md={6} sm={6} xs={12}>
                      <h1 className='hire__details_title'>{title}</h1>
                      <div className='d-flex blog_details_container'>
                        <p className='hire_banner_text'>{intro}</p>
                      </div>
                      <div className='mt-3'>
                      <input type="text" className="hire_blog_inputs" placeholder='Your work Email'/>
                      <button className="hire_blog_developer_btn">Hire {skill} Developer</button>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
                    </Col>
                  </Row>
                </Row>
            </div>
            <div className='container-fluid hire_details_banner_mobile'>
                    <Row className="  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-center justify-content-sm-center">
                    <Col lg={4} md={10} sm={12} xs={12}>
                      <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
                    </Col>
                    <Col className='align-items-center' lg={7} md={10} sm={12} xs={12}>
                      <h1 className='details_title'>{title}</h1>
                      <div className='d-flex blog_details_container'>
                        <p className='blog_detailsone'>{intro}</p>
                      </div>
                      <div  className='mt-3'>
                      <input type="text" className="hire_blog_inputs" placeholder='Your work Email'/>
                      <button className="hire_blog_developer_btn">Hire {skill} Developer</button>
                      </div>
                    </Col>
                   
                  </Row>
            </div>

            <div className="hire_expact_section">
                <Row className="container-fluid  mx-auto expact_row">
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
                    <div className="talk_two_btn_div text-center">

                        <button className="hire_expect_btn mt-3">Remote Developers</button>

                    </div>
                </Row>
            </div>

         <div>
          <Row className='container-fluid mx-auto justify-content-lg-start justify-content-sm-center  justify-content-md-center description_container hire_description_container'>
              <Col className="table_colam pt-0" lg={2}>
                <div className='hire_table_content'>
                    <p className='table_content_title'>TABLE OF CONTENTS</p>
                    <p>{documentToReactComponents(content,options)}</p>
                </div>
              </Col>
              <Col className='description_colam' lg={10} md={12} sm={12} xs={12}>
                <div  className='container'>
                  <p className='description'>{documentToReactComponents(content,main)}</p>
                </div>
              </Col>
          
            </Row>
         </div>
     
         <div>
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
          
          <div className='hire_faq_section'>
              <Row className='container justify-content-center mx-auto '>
                <Row className=' mx-auto hire_faq_row pb-4 pt-4'>
                    <p className='hire_details_faq ms-3'>Frequently Asked Questions</p>
                
                        <Accordion >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header> <span className='accordion_title'>What is the no-risk trial period for Turing ReactJS developers?</span> </Accordion.Header>
                            <Accordion.Body>
                            The purpose of the two-week no-risk trial period is to start working with the developers and include them in the team. If you are satisfied with the developers, you keep working with them and pay their salary including the first two weeks. But, if you are not satisfied during the trial period, then you won’t pay anything.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header> <span className='accordion_title'>How are Turing ReactJS developers different?</span> </Accordion.Header>
                            <Accordion.Body>
                            Turing offers top-quality, cost-effective, and highly productive ReactJS developers who belong to the top 1% of the worlds remote developers. All Turing ReactJS developers are selected only after going through a series of rigorous tests where their skills are evaluated for a Silicon Valley bar. Daily standups are mandatory for every Turing developer as they keep the developer and the customer in alignment with the discussed goal. All Turing remote ReactJS developers work for at least 4 hours in your time zone for your convenience.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header> <span className='accordion_title'>How do I hire ReactJS Developers?</span> </Accordion.Header>
                            <Accordion.Body>
                            If you wish to hire the best ReactJS developers who are willing to work in your timezone, try Turing jobs platform. Turing goes deep into the global talent pool to source ReactJS developers from across the world and vets them to a Silicon Valley level. Companies can hire remote reactJS developers within 3-5 days with Turing.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header> <span className='accordion_title'>How does Turing vet remote ReactJS engineers?</span> </Accordion.Header>
                            <Accordion.Body>
                            Turing has created the first and only Intelligent Talent Cloud to vet remote developers for a Silicon Valley bar. Turing tests developers based upon actual skills vs. self-reported experience from traditional resumes or job interviews. Every developer at Turing has to clear our tests for programming languages, data structures, algorithms, system designs, software specialization, frameworks, and more. Each Turing developer goes through our automated seniority assessment test comprising 57 calibrated questions in 5 areas — project impact, engineering excellence, communication, people, and direction.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header> <span className='accordion_title'>For which other skills can I hire remote developers from Turing?</span> </Accordion.Header>
                            <Accordion.Body>
                            With Turing, you can hire the best remote developers for 100+ skills such as React, Node, Python, Angular, Swift, React Native, Android, Java, Rails, Golang, PHP, Vue, DevOps, Machine Learning, etc. Turing also offers developers based on tech stack and seniority.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5">
                            <Accordion.Header> <span className='accordion_title'>Are ReactJS developers in demand?</span> </Accordion.Header>
                            <Accordion.Body>
                            According to a Quess report, React JS is one of the top digital skill jobs in demand. If you are planning to scale your ReactJS developers team, try Turing. It makes hiring easy for companies by offering vetted remote ReactJS developers for a Silicon Valley bar at half the price.
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                   
                </Row>
            </Row>
          </div>

            <div className="technology_section">
                <Row className='container mx-auto'>
                      <p className="based_text ms-2">Based on Skills</p>
                    <div className="technology_div hire_tech_div">
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
              
            <div className="Based_role_section based_hire_section">
              <Row className='container justify-content-center mx-auto'>
             
                <p className="based_role_text ms-2">Based on role</p>
                    <div className="Based_role_div hire_based_role_div">
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
            <div className="Based_role_section_mobile based_hire_section">
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
          <Footer/>

          <div className="table_content_btn_row">
               <button onClick={handleShow} className='table_content_btn'>Table of Content</button>
          </div>

          <Offcanvas className="details_offcanvas_container w-100 h-50 bg-dark" show={show} onHide={handleClose} scroll={true} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
            <div  style={{width: '100%', marginLeft: '20px'}}>
                  <p className='table_content_title text-light'>TABLE OF CONTENTS</p>
                  <p>{documentToReactComponents(content,options)}</p>

             
            </div>
            <button onClick={handleClose} className='table_content_offcanvasbtn'>Table of Content</button>
        </Offcanvas.Body>
          </Offcanvas>
      </Row>
      </div>
    );
}