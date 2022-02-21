import { Navbar,Container, Row, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import logo from '../../public/my-img.png'
import { useState } from "react";
import { useRouter } from "next/router";

export default function Nabars({navigation}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter()
    const ClickHandler = (id) => {
        router.push('/')
    }
    const HireButtonHandler = () =>  {

        router.push('/hire-developers')
      
    }
    const ApplyHandler = () => {
    
        router.push('/apply-for-job')
      
    }
  return (
    <div style={{width: '100%',}}>
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
                <Nav.Link  className="mt-2"> <span className="right-nav-span">Login</span>
                </Nav.Link>
                       
            </Nav>
            </div>    
        </Navbar.Collapse>      
        </Navbar>

      <Offcanvas className="offcanvas_container w-100" show={show} onHide={handleClose} scroll={true} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img
        src="/my-img.png"
        alt="Picture of the author"
        className="canvas_img"
      /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
   
            <div style={{width: '100%'}}>
             <button onClick={HireButtonHandler}  className="offcangetstarted_btn">Hire Remote Developers</button>
             <button onClick={ApplyHandler} className="Applydev_btn">Apply As Developer</button>
             <button  className="Login_btn">Login</button>
            </div>    
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
