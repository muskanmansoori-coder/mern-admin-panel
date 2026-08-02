import { useAuth } from "../store/auth"

export const Service = () => {
    const {servicedata}=useAuth();
    return(
       
              <section className="section-services">
                <main className="container">
                  <h1 className="ser">Our Services</h1>
          
                  <div className="service-grid grid-three--cols">
                
                   {servicedata.map((curElem, index)=>{
                        const{provider, price, service, description}=curElem;
return(
    <div key={index} className="main-div">
    <div>
        <img src="/images/home2.png" alt="img" width={200} height={300}/>
    </div>
    <div className="text-div">
        <div className="grid-two--cols col">
            <div><p className="paraa">{provider}</p></div>
            <div><p className="paraa">{price}</p></div>
        </div>
        <div><h2 className="head">{service}</h2></div>
        <div><p className="paraa">{description}</p></div>
    </div>
</div>
)
                    })}
                   </div>
                   

             
                </main>
              </section>
            
    )
}