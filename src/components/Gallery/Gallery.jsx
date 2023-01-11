import React from 'react'
import "./Gallery.css"
// import "./Gallery.js"
const Gallery = () => {

    const galleryS = document.querySelector('#portfolio');
const container = document.querySelector('.container-gallery');
const numberText = document.querySelector('.numbertext');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
// console.log(next);
// console.log(previous);


const photos = document.querySelectorAll('.photos');
// console.log(photos);
photos[0].classList.toggle('active');
let pact = 0;
const totalImg = photos.length;
// console.log(pact);

const updateCounter = () => {
    numberText.innerHTML = `${pact+1} / ${totalImg}`;
};
updateCounter();

// console.log(numberText.innerHTML);


next.addEventListener('click', () => {
    photos.item(pact).classList.toggle('active');
    pact = pact + 1 === totalImg ? 0 : pact + 1;
    photos.item(pact % totalImg).classList.toggle('active');
    updateCounter();
});

previous.addEventListener('click', () => {
    photos.item(pact).classList.toggle('active');
    pact = pact === 0 ? 28 : pact - 1;
    photos.item(pact % totalImg).classList.toggle('active');
    updateCounter();
});

const slideShow = () => {
    photos.item(pact).classList.toggle('active');
    pact = pact + 1 === totalImg ? 0 : pact + 1;
    photos.item(pact % totalImg).classList.toggle('active');
    updateCounter();
};

const galleryOptions = {
    rootMargin: "-50% 0px 0px 0px"
};
let autoScroll;
const galleryObserver = new IntersectionObserver((sections) => {
    sections.forEach(section => {
        if (section.isIntersecting) {
            autoScroll = setInterval(slideShow, 3000);
        } else {
            clearInterval(autoScroll);
        }
    });
}, galleryOptions);

galleryObserver.observe(galleryS);

  return (
    <div>
       <section id="portfolio" className="shadow">
        <div className="container">
          <div className="row narrow section-intro with-bottom-sep">
            <div className="col-twelve">
              <p className="text-center" data-aos="fade-up" data-aos-offset={300}>Witness the awesomeness</p>
              <h3 className="section-title text-center" data-aos="fade-up" data-aos-offset={300}>Gallery</h3>
              <div className="container-gallery mx-auto my-5" data-aos="fade-up" data-aos-offset={300}>
                <span className="previous">❮</span>
                <span className="next">❯</span>
                <span className="numbertext">1 / 30</span>
                <div className="photos">
                  <img src="/public/images/gallery/1.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/2.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/3.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/4.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/5.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/6.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/7.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/8.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/9.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/10.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/11.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/12.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/13.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/14.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/15.webp" style={{width: 'auto', height: '100%'}} />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/16.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/17.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/18.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/19.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/20.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/21.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/22.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/23.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/24.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/25.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/26.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/27.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/28.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/29.webp" />
                </div>
                <div className="photos">
                  <img src="/public/images/gallery/30.webp" />
                </div>
              </div>
            </div>
          </div>
          {/* end row section-intro */}
        </div>
      </section>
    </div>
  )
}

export default Gallery