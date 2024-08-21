import './Hero.css'
import Slide from './Slide';

const Hero = () => {
    let index = 0;
    function showSlide (n) {
        let slides = document.querySelector('.slides');
        let slide = document.querySelectorAll('.slide');
        let dots = document.querySelectorAll('.dot');

        index = (n + slide.length) % slide.length;
        slides.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }


  return (
    <div className="slider" id='Home'>
        <div className="slides">
            <Slide img='/assets/images/banner-01.jpg' text='HURRY! GET THE BEST VILLA FOR YOU'/>
            <Slide img='/assets/images/banner-02.jpg' text='HURRY! GET THE BEST VILLA FOR YOU'/>
            <Slide img='/assets/images/banner-03.jpg' text='HURRY! GET THE BEST VILLA FOR YOU'/>
        </div>
        <div className="controls">
            <button className="prev" onClick={() => showSlide(index - 1)}><i className="fa-solid fa-chevron-left"></i></button>
            <button className="next" onClick={() => showSlide(index + 1)}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
        <div className="indicators">
            <span className="dot active" data-slide="0" onClick={(e) => showSlide(parseInt(e.target.dataset.slide))}></span>
            <span className="dot" data-slide="1" onClick={(e) => showSlide(parseInt(e.target.dataset.slide))}></span>
            <span className="dot" data-slide="2" onClick={(e) => showSlide(parseInt(e.target.dataset.slide))}></span>
        </div>
    </div>
  )
}

export default Hero