import Button from '../Button/Button'
import './NavBar.css'

const NavBar = () => {
    const showMobileNav = () =>{
        const menu = document.querySelector(".nav-mobile")
        menu.classList.toggle("active")
    }

    const addClassActive = (el) =>{        
        document.querySelectorAll('.nav-menu a').forEach(link => link.classList.remove('active'));
        el.classList.add('active');
    }

  return (
    <>
    <nav>
        <div className="desktop-nav">
            <div className="header">
                <div className="company-info">
                    <div className="items">
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <span>info@company.com</span>
                        </div>
                        <div className="map">
                            <i className="fa-solid fa-map"></i>
                            <span>Sunny Isles Beach, FL 33160</span>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <ul>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
            <div className="main-nav">
                <div className="logo">
                    <h2>VILLA</h2>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><a href="#Home" className='active' onClick={(e)=>addClassActive(e.target)}>home</a></li>
                        <li><a href="#Properties" onClick={(e)=>addClassActive(e.target)}>properties</a></li>
                        <li><a href="#PropertyDetails" onClick={(e)=>addClassActive(e.target)}>property details</a></li>
                        <li><a href="#ContactUs" onClick={(e)=>addClassActive(e.target)}>contact us</a></li>
                        <li><Button text='Schedule a visit' icon={true} semicircular={true}/></li>
                    </ul>
                    <button className='menu-btn' onClick={()=>showMobileNav()}><i className='fas fa-bars'></i></button>
                </div>
            </div>
        </div>
        
    </nav>
    <div className="nav-mobile">
        <div className="nav-menu">
            <ul>
                <li><a href="#Home" className='active' onClick={(e)=>addClassActive(e.target)}>home</a></li>
                <li><a href="#Properties" onClick={(e)=>addClassActive(e.target)}>properties</a></li>
                <li><a href="#PropertyDetails" onClick={(e)=>addClassActive(e.target)}>property details</a></li>
                <li><a href="#ContactUs" onClick={(e)=>addClassActive(e.target)}>contact us</a></li>
                <li><Button text='Schedule a visit' icon={true} semicircular={true}/></li>
            </ul>
        </div>
        <div className="company-info">
            <div className="items">
                <div className="email">
                    <i className="fa-solid fa-envelope"></i>
                    <span>info@company.com</span>
                </div>
                <div className="map">
                    <i className="fa-solid fa-map"></i>
                    <span>Sunny Isles Beach, FL 33160</span>
                </div>
            </div>
        </div>
        <div className="social-media">
            <ul>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar