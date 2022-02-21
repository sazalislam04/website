import { Row ,Col} from "react-bootstrap";
import Navbartwo from "../../components/Navbars/Navbartwo";
import MainFooter from '../../components/Footers/MainFooter'
import HireCard from "../../components/HireCard";
import { createClient } from 'contentful'
import { useRouter } from "next/router";

export async function getStaticProps() {

    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
    })
  
    const res = await client.getEntries({ content_type: "hire" })
  
    return {
      props: {
        hire: res.items,
      },
      revalidate: 1
    }
  }

export default function SitemapHireDevelopers({hire}) {
    const router = useRouter()
console.log(hire)
    const GoBackHandler = () => {
        router.push('/sitemap')
    }
  return (
<div style={{width: "100%"}}>
 
    <Navbartwo/>
        <div className="sitemap_hire_section">  
             <Row className="container mx-auto">
                 <p onClick={GoBackHandler} className="go_back_btn">Go Back</p>
            <p className="sitemap_hire_title">Hire Developers</p>
             <p className="sitemap_based_text">Hire developers based on skill</p>
             <div className="technology_div mt-4">
                {hire.map(data => (
                    <HireCard key={data.sys.id} data={data} />
                ))}
            </div>
             </Row>
        </div>
    <MainFooter/>
   
</div>
  );
}
