import { Row, Col} from "react-bootstrap";
import { useRouter } from "next/router";

export default function HomeHeader() {

  const router = useRouter()
  const ClickHandler = () => {
      router.push('/blog')
  }
    return (
        <div>
          <Row className="Header_Row  flex-md-row flex-sm-row  flex-lg-row justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between  justify-content-xs-between pb-0 mx-auto">
          <Col className="text-center" lg={3} md={3} sm={4} xs={6}>
              <p className="website_title">Uptal.</p>
          </Col>
          <Col className="mt-3" lg={3} md={3} sm={4} xs={6}>
              <p onClick={ClickHandler} className="home_blog_btn Header_Btn1 mt-2">Blog</p>  
          </Col>
        </Row>
        </div>
    
    );
  }
