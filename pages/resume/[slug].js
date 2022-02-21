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
    content_type: "resumeGuide" 
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
    content_type: 'resumeGuide',
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
      <div style={{width: "100%"}}>
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
                      <button className="interview_q_btn">Apply for {skill} jobs</button>
                      </div>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
                    </Col>
                  </Row>
                </Row>
            </div>
            <div className='container-fluid hire_details_banner_mobile'>
                    <Row className="container-fluid  mx-auto banner_row d-md-flex d-sm-flex justify-content-md-center justify-content-sm-center">
                    <Col lg={4} md={10} sm={12} xs={12}>
                      <img src={'https:' + skillLogo.fields.file.url} className='details_img' />
                    </Col>
                    <Col className='align-items-center' lg={7} md={10} sm={12} xs={12}>
                      <h1 className='details_title'>{title}</h1>
                      <div className='d-flex blog_details_container'>
                        <p className='blog_detailsone'>{intro}</p>
                      </div>
                      <div  className='mt-3'>
                      <button className="interview_q_btn">Apply for {skill} jobs</button>
                      </div>
                    </Col>
                   
                  </Row>
            </div>

            <div className='Question_section'>
              <Row className='Question_row container-fluid mx-auto ' >
                  <Col  lg={8} md={8} sm={12}>
                    <p>{documentToReactComponents(content)}</p>
                  </Col>

              </Row>
            </div>
  
          <Footer/>
      </Row>
      </div>
    );
}