import React from 'react'
import "./Wing.css"
import logo1 from '../assets/logo_east.png'
import logo2 from '../assets/logo_interno.png'
import logo3 from '../assets/logo_satt.png'
const Wing = () => {
  return (
    <section id="wings" className="shadow">
    <div className="wings__header" data-aos="fade-up" data-aos-offset="300">
        <h3 className="section-title text-center">Our Wings</h3>
        <span>What we do.</span>
      </div>
      <div className="wings__card--area">
            <div className="wings__card wings--east" data-aos="fade-up">
                <div className="wings__card--head">
                    <img className="wings__card--head--logo" src={logo1} alt="Entrepreneurship Accords and Startup growth Traffic">
            </img>
          </div>
          <div className="wings__card--body w-100 h-100">
                    <h4>Entrepreneurship Accords and Startup growth Traffic</h4>
            <p className="lead">Collaborates with all other E-Cells to foster Entrepreneurship activities and enhance the prevalent startup culture.</p>
            <a href="https://eastecellvssut.tech/" class="btn btn-outline-dark btn-east">Visit Site</a>
          </div>
          </div>
            <div className="wings__card wings--interno" data-aos="fade-up">
                <div className="wings__card--head">
                    <img className="wings__card--head--logo" src={logo2} alt="InternO"></img>

                </div>
                <div className="wings__card--body w-100 h-100">
                    <h4>InternO</h4>
            <p className="lead">InternO intends to provide students with internships in successful startups. We have proudly collaborated with 17 companies and counting for more.</p>
            <a href="https://ecellvssutinterno.tech/" class="btn btn-outline-dark btn-interno">Visit Site</a>
                </div>
        </div>
        <div className="wings__card wings--satt" data-aos="fade-up">
                <div className="wings__card--head">
                    <img className="wings__card--head--logo" src={logo3} alt="Startup Acceleration Think Tank"></img>

                </div>
                <div className="wings__card--body w-100 h-100">
                    <h4>Startup Acceleration Think Tank</h4>
            <p className="lead">Start-up acceleration, development, enhancement programs and think tank to inoculate startup ideas.</p>
            <a href="https://sattecellvssut.tech/" class="btn btn-outline-dark btn-satt">Visit Site</a>
                </div>
            </div>
        </div>
    </section>
          
  )
}

export default Wing
