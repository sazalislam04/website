import { Navbar,Container, Row, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useState } from "react";
import { useRouter } from "next/router";
import Indicator from "../Indicator";

export default function Navbartwo() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter()
    const ClickHandler = () => {
        router.push('/')
    }
    const HireButtonHandler = () =>  {
      if(router.route === '/hire-developers')
      {
        router.push('https://client.uptal.org/')
      }
      else{
        router.push('/hire-developers')
      }
    }
    const ApplyHandler = () => {
      if(router.route === '/apply-for-job')
      {
        router.push('https://developer.uptal.org/')
      }
      else{
        router.push('/apply-for-job')
      }
    }
    const BlogHandler = () => {
      router.push('/blog')
    }
  return (

     <div  className="navtwo" style={{width: '100%'}}>
          <Navbar collapseOnSelect expand="lg" bg="" variant="light">

<Navbar.Brand onClick={ClickHandler}> <p className="navtwo_logo">Uptal.</p> </Navbar.Brand>

<Navbar.Toggle className="mb-4" onClick={handleShow} aria-controls="responsive-navbar-nav" style={{color: 'black'}} />
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
    </Nav>
    <div className="nav-itmes">
    <Nav >

        <Nav.Link onClick={ApplyHandler} className="mt-2 "> <span className="right-nav-span">Apply As Developer</span></Nav.Link>
        <Nav.Link className="mx-2" >
                <button onClick={HireButtonHandler} className="getstarted_btn">Hire Remote Developers</button>
        </Nav.Link>
        <Nav.Link onClick={BlogHandler} className="mt-2"> <span className="right-nav-span">Blog</span>
        </Nav.Link>
                
    </Nav>
    </div>    
</Navbar.Collapse>      
        </Navbar>
        <Offcanvas className="offcanvas_container w-100" show={show} onHide={handleClose} scroll={true} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title onClick={ClickHandler}><img
          src="/my-img.png"
          alt="Picture of the author"
          className="canvas_img"
        /></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

              <div style={{width: '100%'}}>
                <button onClick={HireButtonHandler}  className="offcangetstarted_btn">Hire Remote Developers</button>
                <button onClick={ApplyHandler} className="Applydev_btn">Apply As Developer</button>
                <button onClick={BlogHandler} className="Login_btn">Blog</button>
              </div>    
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    
  );
}
