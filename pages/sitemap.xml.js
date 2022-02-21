import { createClient } from 'contentful'

const Sitemap = () => {};

export async function getServerSideProps({ res }){
  const baseUrl = "https://www.uptal.org"
  // const blogUrl = new Site() 

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_KEY,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
  })
 
 
  const re = await client.getEntries({ content_type: "blog" })
  const blogs = re.items
  const extraUrl = ['/index.js',
                    '/blog',
                    '/blog/category/digital-workplace',
                    '/blog/category/diversity-inclusion',
                    '/blog/category/employer-branding',
                    '/blog/category/hiring-tips',
                    '/blog/category/remote-work'
                    ]

  
//'/blogs/'+(blog.fields.slug)
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${extraUrl
        .map((url) => {
          return `
            <url>
              <loc>${baseUrl + url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1</priority>
            </url>
          `;
        })
        .join("")}
      ${blogs.map(blog => {
        return `
            <url>
              <loc>${baseUrl +'/blog/'+(blog.fields.slug)}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        
      }).join("")

      }
      
      
    </urlset>
  `;
      

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
