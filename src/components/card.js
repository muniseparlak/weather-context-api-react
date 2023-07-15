import React, {useContext, useState, useEffect} from 'react'
import WeatherContext from '../context/weathercontext'
import '../App.css';

function Card() {

    const {weather } = useContext(WeatherContext)
    const [day, setDay] = useState()
    const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

    useEffect(() => {
        !weather ? console.log("yükleniyor...") : console.log("yüklendi")

        setDay(days)
    })

   
  return (
    <div className='Card'>
        <>{weather &&

weather.map((item, id) =>
    item.weather.map((weat) =>

        <div className='weather' key={weather.id}>
            
            <h1> {days[id]}</h1>
           
           <br></br>
           <h3>{weat.description}</h3>
           <img src={`http://openweathermap.org/img/w/${weat.icon}.png`} alt='weather icon'/> 
           
           <h3>{Math.round(item.main.temp_min)}<span>°C </span> </h3>
           <br></br>
           <hr></hr>
           <div className='humidity'>
           <h3>Nem: {item.main.humidity}%  <i class="fa-solid fa-droplet"></i></h3>
           </div>
        </div>
      
    ))
}
</>
</div>
  )}






export default Card
