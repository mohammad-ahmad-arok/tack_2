import Card from '../Card/Card'
import './Properties.css'

const Properties = () => {

    const cardData =[
        {
            id:1
            ,img:'/assets/images/property-01.jpg'
            ,type:'Luxury Villa'
            ,prise:'$2.264.000'
            ,location:'18 New Street Miami, OR 97219'
            ,bathrooms:'8'
            ,bedrooms:'8'
            ,area:'545m2'
            ,floor:'3'
            ,parking:'6 sports'
        },
        {
            id:2
            ,img:'/assets/images/property-02.jpg'
            ,type:'Luxury Villa'
            ,prise:'$1.180.000'
            ,location:'54 Mid Street Florida, OR 27001'
            ,bathrooms:'5'
            ,bedrooms:'6'
            ,area:'450m2'
            ,floor:'3'
            ,parking:'8 sports'
        },
        {
            id:3
            ,img:'/assets/images/property-03.jpg'
            ,type:'Luxury Villa'
            ,prise:'$1.460.000'
            ,location:'26 Old Street Miami, OR 38540'
            ,bathrooms:'5'
            ,bedrooms:'4'
            ,area:'225m2'
            ,floor:'3'
            ,parking:'10 sports'
        },
        {
            id:4
            ,img:'/assets/images/property-04.jpg'
            ,type:'Apartment'
            ,prise:'$584.500'
            ,location:'12 New Street Miami, OR 12650'
            ,bathrooms:'3'
            ,bedrooms:'4'
            ,area:'125m2'
            ,floor:'25th'
            ,parking:'2 cars'
        },
        {
            id:5
            ,img:'/assets/images/property-05.jpg'
            ,type:'Penthouse'
            ,prise:'$925.600'
            ,location:'34 Beach Street Miami, OR42680'
            ,bathrooms:'4'
            ,bedrooms:'4'
            ,area:'180m2'
            ,floor:'38th'
            ,parking:'2 cars'
        },
        ,
        {
            id:6
            ,img:'/assets/images/property-06.jpg'
            ,type:'Modern Condo'
            ,prise:'$450.000'
            ,location:'22 New Street Portland, OR16540'
            ,bathrooms:'2'
            ,bedrooms:'3'
            ,area:'165m2'
            ,floor:'26th'
            ,parking:'3 cars'
        }
        
]

  return (
    <section className='Properties' id='Properties'>
        <div className="text-container">
            <span>Properties</span>
            <h3>We Provide The Best Property You Like</h3>
        </div>
        <div className="card-container">
            {cardData.map((card) => {              
                return (
                    <Card 
                        key={card.id}
                        img={card.img}
                        type={card.type}
                        prise={card.prise}
                        location={card.location}
                        bathrooms={card.bathrooms}
                        bedrooms={card.bedrooms}
                        area={card.area}
                        floor={card.floor}
                        parking={card.parking}  
                    />
                )
            })}
        </div>
    </section>
    
  )
}

export default Properties