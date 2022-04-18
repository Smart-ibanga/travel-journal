import React from 'react'
// import reactimg1 from "../images/Mount-Fiji.png"
import reactimg2 from '../images/location-id.png'



export default function Card(props) {
    return (
        <section className='card'>
               <img 
               src={`${props.imageUrl}`}
               alt="Mount-Fiji"
               className='mount-img' 
               /> 
               <div className='about'>
                    <div className='location'>
                            <img src={reactimg2} alt='google map' className='google-map'/>
                            <span className='country'>{props.location}</span>
                            <span className='map-link'><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" >View on Google Maps</a></span>
                    </div>
                    <h1 className='title'>{props.title}</h1>
                    <p className='date'>{props.startDate} - {props.endDate}</p>
                    <p className='desc'>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
        </section>
    )
}