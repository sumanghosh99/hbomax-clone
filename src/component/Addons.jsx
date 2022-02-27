import { Link } from "react-router-dom"

export const Addons = ()=>{

    return(
   
  // <div>
   <>
   
        <nav className="Addon_nav">
   
         <div  className="imghbo">
           <img src="https://play.hbomax.com/assets/images/branding/desktop/hbomax/dt-hbomax-logo-in_app.svg" alt="" />
         </div>
         <div className="addon">
             <Link to ='/login'>
             SIGN IN
             </Link> 
               
         </div>
   
   
        </nav>
   
   
    <div className="mainDiv">
   
        <div className="step1">
           <h3>STEP 1 OF 3</h3>
        </div>

      <div className="love">
        <h2>Get Everything You Love with a Plan That Works for You</h2>
       
      </div>

      <div className="monthly">
        <button className="monthly1" >Monthly</button>
        <button className="yearly">Yearly</button>
      </div>

       <div className="save">
         <p>Save 16%</p>
       </div> 
      
   
   
      <div className="ads">
   
          <div className="withads">
            <div className="mo">
              <h1>With Ads</h1>
              <h1 className="dollar">$9.99 <span className="m">/mo</span> </h1>
            </div>
       
                  <ul className="exclusive">
                    <li className="access"> <span>+</span>Exclusive streaming access to the biggest Warner Bros. movies of 2022 at no extra cost</li>
                    <li className="watch"><span>+</span>Watch everything with limited ads for a lower price</li>
                  </ul>
   
                    <button className="selectplan " id="select">
                    <Link to='/register'>
                    SELECT PLAN

                    </Link>
                    </button>
   
          </div>


          <div className="premium">
   
                <div className="mo">
                  <h1>Ad-Free</h1>
                  <h1 className="dollar">$14.99 <span className="m">/mo</span> </h1>
                </div>
       
              <ul className="exclusive">
              <li className="access"> <span>+</span>Exclusive streaming access to the biggest Warner Bros. movies of 2022 at no extra cost</li>
              <li className="watch"><span>+</span>Download your favorites to watch on-the-go</li>
              <li className="watch"><span>+</span>Stream in 4K UHD (as available) </li>
              </ul>
   
                <button className="selectplan">
                <Link to='/register'>
                SELECT PLAN

                </Link>
                </button>
           </div>
      </div>
    </div>
   
        <footer className="footerparts">
   
             <ul className="privacyparts">
    
                    <li>Privacy Policy</li>
                    <li>Do Not Sell My Personal Information</li>
                    <li>Terms of Use</li>
                    <li>Ad choices</li>
                    <li>Just want HBO?</li>
                    <li>Info</li>
            </ul>
         </footer>
    </>
 
   
   
   
   
   
    )
   
   
   
   
   
   
   }