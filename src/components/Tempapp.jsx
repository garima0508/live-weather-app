import React, { useEffect, useState } from 'react';
import './css/styles.css';
const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState('mumbai');
    useEffect(()=>{
        const fetchApi=async()=>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f79021ca0cd10a2c096369fe55ceb6bf`;
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return (
        <>
            <div className='box'>
               <div className='inputData'>
                   <input type="search" className='inputField' value={search} onChange={(event)=>setSearch(event.target.value)}/>
               </div>
            {
                !city?(<h1 className='errorMsg'>No Data Found</h1>):(
                    <div>
                        <div className='info'>
                            <h1 className='location'>
                                <i className="fas fa-street-view"></i>{search}
                            </h1>
                            <h2 className='temp'>
                                {city.temp}°Cel
                            </h2>
                            <h3 className='tempmin_max'>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>)
            }
            </div>
        </>
    );
};
export default Tempapp;