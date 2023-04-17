import Head from 'next/head'
import Image from 'next/image'
export default function Dogs({data}){
  const {content} = data;
  console.log(content);
  return <><h1>Slug page</h1>
  <Head>
    <title>{data.title}</title>
  </Head>
   <h1>{content.heading}</h1>
   <p>{content.text}</p>
   <Image src={content.image.src}
      alt="Cute dog"
      width={content.image.width}
      height={content.image.height}
      sizes="{max-width: 750px} 100vw, 750px"></Image>

 </>;
}
//SERVER SIDE
export async function getServerSideProps(context){
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug
  const res = await fetch(api)
  
  //json-fy 
 if (res.status != 200) {
  return {
    notFound: true
  }
 }
  const data = await res.json()
  console.log(data);
  return {
    props: {
      data: data
    }
  }
}