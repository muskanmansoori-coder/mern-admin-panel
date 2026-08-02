import { NavLink } from "react-router-dom"

export const Home = () => {
    return(
        <section>
        <main>
         
              <div className="container grid-two--cols">
                  
    <div>
      <p className="para">we are the best IT company</p>
  <h1 className="home">Welcome to Muskan Website</h1>
  <p className="hm">We are passionate about creating modern, responsive, and user-friendly websites that help businesses grow online. Our team focuses on quality, innovation, and customer satisfaction, delivering reliable web solutions tailored to meet every client's unique needs.
  </p>
  <div className="btn-div container">
                      <NavLink to="/contact">
                      <button>Connect</button>
                      </NavLink>
                     
                     <NavLink to="/service">
                     <button className="learn">Learn more</button>
                     </NavLink>
                  </div>
    </div>
  
    <div>
                      <img src="/images/home1.png" width="400" height="400" alt="login page"/>
                    
                  </div>
    
                 
                  
             </div>
          <div className="grid-four--cols extra container">
<div className="div1">
    <p className="num">50+</p>
    <p>Registered Companies</p>
</div>
<div className="div1">
    <p className="num">100,00+</p>
    <p>Happy Clients</p>
</div>
<div className="div1">
    <p className="num">500+</p>
    <p>Well Known Developers</p>
</div>
<div className="div1">
    <p className="num">24/7</p>
    <p>Service</p>
</div>
          </div>

          <div className="container grid-two--cols last-div">
          <div>
                      <img src="/images/home2.png" width="400" height="400" alt="login page"/>
                    
                  </div>
                  
    <div>

 
      <p className="para">we are here to help you</p>
  <h1 className="home">Get Started Today</h1>

  <p className="hm">
  Take the first step toward building your online presence with us. Contact our team today and let us create a modern, responsive, and reliable website tailored to your business needs.
  </p>
  <div className="btn-div container">
                      <NavLink to="/contact">
                      <button>Connect</button>
                      </NavLink>
                     
                     <NavLink to="/service">
                     <button className="learn">Learn more</button>
                     </NavLink>
                  </div>
    </div>
  
   
    
                 
                  
             </div>
        </main>
          </section>
    )
}