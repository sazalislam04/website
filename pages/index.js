import { Row ,Col} from "react-bootstrap";
import HomeHeader from "../components/HomeComponents/HomeHeader";
import Homeslide from "../components/HomeComponents/Homeslide";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const ClickHandler = () => {
      router.push('/hire-developers')
  }
  const ApplyBtnHandler = () => {
    router.push('/apply-for-job')
    
  }
  // backgroundColor: "#f4f4f6"
  return (
    <div className="homesection" style={{width:"100%", backgroundColor: "#f4f4f6"}}>
      <Row className="home">
        <HomeHeader/>
        <Row className="container mx-auto d-flex justify-content-center p-0 mt-4">
            <Row className="justify-content-xs-center justify-content-sm-center justify-content-md-evenly  justify-content-lg-evenly  gy-3 cardcontainer justify-content-xl-evenly p-3 mx-auto">
            <h1 className="maintitle fw-bold text-center">Matching great developers with world-class companies</h1>
                <Col className="text-center justify-content-center  pb-4 ps-3 pe-3 content-colam" lg={4} md={10} sm={12}>
                 <button className="businessbtn">Businesses</button>
                    <h5 className="cardtitle fw-bold">Uptal for enterprises</h5>
                    <p className="card-pera">
                    Uptal lets you hire  vetted  <br />
                    remote developers with  <br />  strong technical and communication skills.
                  </p>
                    <button onClick={ClickHandler} className="hirebtn">Hire Now</button>
                </Col>
                <Col className="text-center pb-4 ps-3 pe-3  content-colam" lg={4}  md={10} sm={12}>
          
                  <button className="developers">Developers</button>
                    <h5 className="cardtitle fw-bold">Uptal for developers</h5>
                    <p className="card-pera">
                    Join a community of developers <br />
                    and get full time, long term  <br /> remote jobs with better compensation.
                  </p>
                    <button onClick={ApplyBtnHandler} className="joinbtn">Apply Now</button>
                  
                </Col>
            </Row>
        </Row>
        <div className="home_brand_section">
          <Row className="container-fluid mx-auto justify-content-around">
              <Col lg={2} sm={4} md={3} xs={6}>
              <img
                  src="/paypal-color-v1.svg"
                  alt="Picture of the author"
                  className="brand_img paypal_img"
                />
              </Col>
              <Col lg={2} sm={4} md={3} xs={6}>
              <img
                  src="/walmart-color-v1.svg"
                  alt="Picture of the author"
                  className="brand_img"
                />
              </Col>
              <Col lg={2} sm={4} md={3} xs={6}>
              <img
                  src="/amazon-color-v1.svg"
                  alt="Picture of the author"
                  className="brand_img"
                />
              </Col>
              <Col lg={2} sm={4} md={3} xs={6}>
                    <img
                        src="/intuit-color-v1.svg"
                        alt="Picture of the author"
                        className="brand_img"
                    />
              </Col>
              <Col lg={2} sm={4} md={3} xs={6}>
              <img
                  src="/mircrosoft.jpg"
                  alt="Picture of the author"
                  className="brand_img"
                />
              </Col>
              <Col lg={2} sm={4} md={3} xs={6}>
              <img
                  src="/barclays-color-v1.svg"
                  alt="Picture of the author"
                  className="brand_img"
                />
              </Col>
          </Row>
        </div>
        <Homeslide/>
      </Row>
    </div>
  );
}
