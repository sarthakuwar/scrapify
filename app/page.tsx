import Searchbar from "@/components/Searchbar"
 import HeroCarousel from "@/components/HeroCarousel"

const home = () => {
  return (
    <>
     <section className ="px-6 md:px-20 py-20 " >
       <div className ="flex max-xl:flex-col">
        <div className ="flex flex-col justify-center">
          <h1 className="head-text">
            unleash the power of <span className="text-primary"></span> </h1>
            <p className="mt-6"> powerful self server product and analytics </p>
          <Searchbar/>
        </div>
        <HeroCarousel/> 
       </div>

     </section>
     <section className=" trending-section">
      <h2 className="section text"> Trending</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {['apple iphone 15','book','sneakers'].map
        ((products)=>(
          <div>{products}</div>
        ))}
      </div>
     </section>

    </>
  )
}

export default home
