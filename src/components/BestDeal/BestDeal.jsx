import './BestDeal.css'
import Button from '../Button/Button'

const BestDeal = () => {
  return (
    <section className='BestDeal' id='BestDeal'>
        <div className="header">
            <div className="text-container">
                <span>Best Deal</span>
                <h3>Find Your Best Deal Right Now!</h3>
            </div>
            <div className="btns-container">
                <Button text='Appartment' icon={false} semicircular={false}/>
                <Button text='Villa House' icon={false} semicircular={false}/>
                <Button text='Penthouse' icon={false} semicircular={false}/>
            </div>
        </div>
        <div className="body-container">
            <div className="box-container">
                <div className="boxes">

                    <div className="box">
                        <h6>185 m2</h6>
                        <p>Total Flat Space</p>
                    </div>

                    <div className="box">
                        <h6>26th</h6>
                        <p>Floor number</p>
                    </div>

                    <div className="box">
                        <h6>4</h6>
                        <p>Number of rooms</p>
                    </div>

                    <div className="box">
                        <h6>Yes</h6>
                        <p>Parking Available</p>
                    </div>

                    <div className="box">
                        <h6>Bank</h6>
                        <p>Payment Process</p>
                    </div>
                </div>
            </div>

            <div className="image-container">
                <img src="/assets/images/property-05.jpg" alt="property" />
            </div>

            <div className="info-container">
                <h6>Extra Info About Property</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</p>
                <p>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                <Button text='Schedule a visit' icon={true} semicircular={true}/>
            </div>
        </div>
    </section>
  )
}

export default BestDeal