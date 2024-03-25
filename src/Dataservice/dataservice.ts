import { ILocation } from "../Interfaces/interface"

export const getWeather = async () =>{
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=${APIkey}`)
    const data= await promise.json();
    console.log(data[0].country, data[0].name, data[0].lat, data[0].lon);
}

let city = "manteca"
let APIkey = ""
export const getLocationCoords = async () =>{
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=${APIkey}`)
    const data:ILocation[] = await promise.json();
    console.log(data[0].country, data[0].name, data[0].lat, data[0].lon);
}