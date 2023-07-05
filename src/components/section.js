import React, {useContext} from 'react'
import '../App.css';
import cities from '../cities.json'
import WeatherContext from '../context/weathercontext'

function Section() {
    const {setCity} = useContext(WeatherContext)
    const handleChange = ((e) => {
        setCity(e.target.value)
    })
    
  return (
    <div>
        <h1 className='head'>HAVA DURUMU</h1>
        
        
            <select  onChange={handleChange}>
                {cities.map(( city) => (
                    <option key={city.id}>{city.name}</option>
                ))}
            </select>
            
        
        
      
    </div>
  )
}

export default Section
