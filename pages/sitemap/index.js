import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import { useRouter } from "next/router";

export default function Sitemap() {
    const router = useRouter()
    const SitemapHandler = (routes) => {
        router.push(`/sitemap/${routes}`)
    }
    const SingleSitemapHandler  = (routes) => {
        router.push(`/${routes}`)
    }
  return (
<div style={{width: "100%"}}>
 
    <Navbartwo/>
      <div className="mx-auto sitemap_main_div" >
        <Row className="container-fluid mx-auto">
                <h2 className="sitemap_title">Uptal Sitemap</h2>
                <Col className="site_mapcolam" lg={4} md={4} sm={12}>
                    <p className="sitemap_home">Home</p>
                    <div className="sitemap_div">
                        <p onClick={() => SingleSitemapHandler('hire-developers')}  className="sitemap_colamtitle">Hire Remote Developers</p>                    
                        <p onClick={() => SitemapHandler('hire-developers')} className="sitemap_linktext">Hire skill-based developers</p>
                        <p className="sitemap_linktext">Hire location-based developers</p>
                        <p onClick={() => SitemapHandler('interview-questions')} className="sitemap_linktext">Interview Q/A</p>
                        <p className="sitemap_linktext">Job description templates</p>
                        <p className="sitemap_linktext">Development services</p>
                        <p className="sitemap_linktext">Customer signup</p>
                        <p className="sitemap_linktext">How to hire</p>
                    </div>
                    <div className="sitemap_div">
                        <p onClick={() => SitemapHandler('apply-for-job')}  className="sitemap_colamtitle">Apply for Jobs</p>                    
                        <p onClick={() => SitemapHandler('jobs')} className="sitemap_linktext">Skill-based jobs</p>
                        <p className="sitemap_linktext">Month-wise top software jobs</p>
                        <p className="sitemap_linktext">Latest remote developer jobs</p>
                        <p onClick={() => SitemapHandler('resume')}  className="sitemap_linktext">Resume guides</p>
                        <p className="sitemap_linktext">Developer signup</p>
                        <p className="sitemap_linktext">Jobs for LatAm developers</p>
                    </div>
                </Col>
                <Col lg={8} md={8} sm={12}>
                    <Row className="">
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_rightcolam_div">
                            <p className="sitemap_colamtitle">Uptal Reviews</p> 
                            <p className="sitemap_linktext">Customer reviews</p>
                            <p className="sitemap_linktext">Developer reviews</p>
                            <p className="sitemap_linktext">Developer stories</p>
                            </div>               
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <div className="sitemap_rightcolam_div">
                            <p className="sitemap_colamtitle">Support</p> 
                            <p className="sitemap_linktext">Contact us</p>
                            <p className="sitemap_linktext">Developer support</p>
                            <p className="sitemap_linktext">Customer support</p>
                          </div> 
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_rightcolam_div">
                            <p className="sitemap_colamtitle">Company</p> 
                            <p onClick={() => SitemapHandler('blog')} className="sitemap_linktext">Blog</p>
                            <p className="sitemap_linktext">Press</p>
                            <p className="sitemap_linktext">About us</p>
                            <p className="sitemap_linktext">Privacy policy</p>
                            <p className="sitemap_linktext">Terms of service</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_rightcolam_div">
                            <p className="sitemap_colamtitle">Social Media</p> 
                            <p className="sitemap_linktext">Twitter</p>
                            <p className="sitemap_linktext">LinkedIn</p>
                            <p className="sitemap_linktext">Facebook</p>
                            <p className="sitemap_linktext">Instagram</p>
                            <p className="sitemap_linktext">Youtube</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="sitemap_career_div">
                                <p className="sitemap_colamtitle">Careers</p> 
                                <p className="sitemap_linktext">Non-developer jobs</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
        </Row>
      </div>
    <MainFooter/>
   
</div>
  );
}
