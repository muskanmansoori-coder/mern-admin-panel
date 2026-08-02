import { NavLink } from "react-router-dom"
import { useAuth } from "../store/auth"

export const About = () => {
  const {userr}=useAuth();
    return(
        
        <section>
      <main>
        <div>
            <div className="container grid-two--cols">
                
  <div>
    <p className="para">welcome, {userr?`${userr.username} to our website`:`to our website`}</p>
<h1 className="choose">Why Choose Us</h1>
  <p className="about">Expertise:Our team focuses on delivering clean code, intuitive user experiences, and scalable solutions tailored to your business goals.</p>
    <br/>
    <p className="about">Customization:Every project is tailored to meet your unique business needs.
    We create designs that reflect your brand and vision.</p>
    <br/>
    <p className="about">Customer-Centric Approach:bYour satisfaction is our highest priority.
    We work closely with you to deliver the best possible results.</p>
    <br/>
    <p className="about">Affordability:We provide high-quality services at competitive prices.
    Our team ensures timely delivery and dependable support.</p>
    <br/>
    <p className="about">Reliability:We provide high-quality services at competitive prices.
    Our team ensures timely delivery and dependable support.</p>
  </div>

  <div>
                    <img src="/images/about.png" width="400" height="400" alt="login page"/>
                </div>
  
                </div>
                <div className="btn-div container">
                    <NavLink to="/contact">
                    <button>Connect</button>
                    </NavLink>
                   
                   <NavLink to="/service">
                   <button className="learn">Learn more</button>
                   </NavLink>
                </div>
            </div>
        
      </main>
        </section>
        
    )
}