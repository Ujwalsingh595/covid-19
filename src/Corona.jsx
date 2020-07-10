import React, { useEffect,useState } from "react";
import Navbar  from "./Navbar";
import Footer from "./Footer"
const Corona=()=>{
    const [covidData,setcovidData]=useState([]);
    useEffect(()=>{
        fetch("https://api.covid19india.org/data.json")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.statewise);
            setcovidData(data.statewise)
        })
    },[])
    
    return(
        <>
        <Navbar/>
        <div className="table-responsive">
            <table  className="table table-bordered table-striped text-center">
                <thead>
                <tr>
                    
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Last Updated time</th>
                    </tr>
                </thead>
                <tbody>
                {
                covidData.map((item)=>{
                return <tr><td>{item.state}</td>
                <td>{item.confirmed}</td>
                <td>{item.active}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
                <td>{item.lastupdatedtime}</td>
                </tr>
                })                    
                }
                </tbody>
            </table>
        </div>
        <Footer/>
        </>
    )
}
export default Corona;