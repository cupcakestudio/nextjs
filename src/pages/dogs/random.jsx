//DOM client side
export default function RandomDog({imgUrl}) {
 console.log(imgUrl);
  return (<>
    <h1>Random dog</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <img src={imgUrl} alt="random dog"/>
    
    </>
  )
}
//Server side
export async function getServerSideProps() {
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();
 

  return {
    props: {
      imgUrl: data.message,
    },
  }
}

