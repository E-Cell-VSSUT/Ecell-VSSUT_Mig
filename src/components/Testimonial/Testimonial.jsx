import React from 'react'
import "./Testimonial.css"
const Testimonial = () => {
  return (
    <div>
       <section id="testimonials" className="shadow">

         <section className="testim" id="testim">
      <div className="wrap">
                <h3 className="text-center" data-aos="fade-up">Testimonials</h3>
                <p data-aos="fade-up">What people are saying</p>
                <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
                <span id="left-arrow" className="arrow left fa fa-chevron-left"></span>

                <ul className="dots" id="testim-dots">
                    <li className="dot active"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                    <li className="dot"></li>
                    
                </ul>

                <div className="cont pb-5" id="testim-content" data-aos="fade-up">

                    <div className="active">
                        {/* <div class="img "><img src="images/testimonial/LNMishra.jpg"></div> */}
                        <h2>Shri L N Mishra, Former Director of MCL (Mahanadi Coalfields Limited).</h2>
                        <p>E-Cell VSSUT Burla truely deserves personal appreciation. The kind of start-ups they've established within this short time is remarkable.</p>
                    </div>

                    <div>
                        {/* <div class="img"><img src="images/testimonial/iitkgp.jpg"></div> */}
                        <h2>Dean, RMSOEE IIT Kharagpur</h2>
                        <p>A very young Entrepreneurship Cell with a very healthy start-up culture. </p>
                    </div>

                    <div>
                        {/* <div class="img"><img src="images/testimonial/orissapostnew.jpg"></div> */}
                        <h2>OrissaPost</h2>
                        <p> An amazing and engaging student society of Odisha where young engineering undergrads generate ideas quite refreshing with a vision for social change.</p>
                    </div>

                    <div>
                        {/* <div class="img"><img src="images/testimonial/mayankrajput.jpg"></div> */}
                        <h2>Mayank Rajput, CEO at RoboManiax EduTech Pvt. Ltd.</h2>
                        <p>A superb team and a fantastic work culture make up E-cell VSSUT. Looking forward to collaboration with this body.</p>
                    </div>

                </div>
     </div>
   
       </section>
       </section>

       
    </div>
  )
}

export default Testimonial
