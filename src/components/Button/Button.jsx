import './Button.css'

const Button = ({text,icon,semicircular}) => {
  return (
    <button className='primary-btn' >
        <div className="contenaire" style={{borderRadius:(semicircular)?'200px':'8px'}}>
            {(icon)?<i className="fa-solid fa-calendar"></i>:''}
            <span>{text}</span>
        </div>
    </button>
  )
}

export default Button