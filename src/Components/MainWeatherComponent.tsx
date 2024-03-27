import React, { useEffect } from 'react'
import up from '../assets/up_arrow.png'
import upBlock from '../assets/up_arrow_block.png'
import down from '../assets/down_arrow.png'
import downBlock from '../assets/down_arrow_block.png'
import water from '../assets/water_drop.png'
import wind from '../assets/wind.png'
import star from '../assets/star_unfilled.png'
import { getLocationCoords } from '../Dataservice/dataservice'


const MainWeatherComponent = () => {

useEffect(() =>{
    // getLocationCoords()
},[])


    return (
        <div className='bg-blue-400 w-screen pt-[5rem] pb-12'>
            <div className='flex justify-between mx-16 pb-4'>
                <div className=' text-3xl'>
                    <h1>Local Time:</h1>
                    <p>00:00PM</p>
                </div>

                <div className='text-center'>
                    <h1 className='text-5xl'>Manteca, CA</h1>
                    <p className='text-3xl'>Mon, March 25, 2024</p>
                </div>

                <img className='object-contain' src={star} alt="" />
            </div>

            <div className='bg-white border-black border-solid border-[3px] mx-16'>
                <div className='grid grid-cols-4 px-4 py-6'>

                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-3xl'>sunny</h1>
                        <img className='iconImage' src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <p className=' text-8xl'>65 F</p>
                        <p className='text-3xl'>Feels Like 64F</p>
                    </div>

                    <div className='grid grid-rows-3 justify-center'>
                        <div className='flex justify-between align-middle items-center max-w-48'>
                            <img className='pe-4' src={upBlock} alt="" />
                            <p>High: 69F</p>
                        </div>
                        <div className='flex justify-between align-middle items-center max-w-48'>
                            <img className='pe-4' src={downBlock} alt="" />
                            <p>Low: 69F</p>
                        </div>
                        <div className='flex justify-between align-middle items-center max-w-48'>
                            <img className='pe-4' src={water} alt="" />
                            <p>Humidity: 69F</p>
                        </div>

                    </div>
                    <div className='grid grid-rows-3 justify-center'>
                        <div className='flex justify-between align-middle items-center max-w-48'>
                            <img className='pe-4' src={wind} alt="" />
                            <p>Wind: 5.55mph</p>
                        </div>
                        <div className='flex justify-between align-middle items-center max-w-48'>
                            <img className='pe-4' src={up} alt="" />
                            <p>Sunrise: 7am</p>
                        </div>
                        <div className='flex justify-between align-middle items-center max-w-48'>
                            <img className='pe-4' src={down} alt="" />
                            <p>Sunset: 4pm</p>
                        </div>

                    </div>



                </div>
            </div>


        </div>
    )
}

export default MainWeatherComponent