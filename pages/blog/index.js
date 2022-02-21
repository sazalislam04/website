import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import BlogCard from "../../components/BlogCard";
import { createClient } from 'contentful'
import Filteritem from "../../components/Filteritem";
import { Row } from "react-bootstrap";
import Nabars from "../../components/Navbars/Navbars";
import Footer from "../../components/Footers/Footers";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })

  const res = await client.getEntries({ content_type: "blog" })

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1
  }
}


export default function Blog({ blogs }) {


  return (
       
    <Row className="mx-auto">
     <Nabars/>
     
     <Filteritem />
    
      <Row className="mx-auto mt-3">
          {blogs.map(blog => (
            <BlogCard key={blog.sys.id} blog={blog} />
          ))}
      </Row>
      <Footer/>
    </Row>
    
  );
}
