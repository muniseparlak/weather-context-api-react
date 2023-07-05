import axios from "axios";
import { createContext,  useEffect, useState } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    const [weather, setWeather] = useState() 
    const [city, setCity ] = useState("Adana")
    const [current, setCurrent] = useState()
    
    
    useEffect(() => {
        
            const key = "f3746edb76fc1bd8e7f6aace861f8d90"
           axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=tr&cnt=7`)
           .then((res) => {
            setWeather(res.data.list)
            res.data.list.map((item) => setCurrent(item.main))
           })
    }, [city])
     
    


    const values = {weather, setWeather, city, setCurrent,  setCity}

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}

export default WeatherContext