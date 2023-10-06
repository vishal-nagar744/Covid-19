import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./statewise.css";


const StateWise = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
        getData();
    })
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="heading-span">INDIA</span> COVID 19 DASHBOARD</h1>
                </div>
                <div className="table-container">
                    <table class="table table-hover">
                        <thead className='table-ytdark'>
                            <tr>
                                <td>State</td>
                                <td>Confirmed</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                                <td>Active</td>
                                <td>Updated on</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curEle, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{curEle.state}</td>
                                            <td>{curEle.confirmed}</td>
                                            <td>{curEle.recovered}</td>
                                            <td>{curEle.deaths}</td>
                                            <td>{curEle.active}</td>
                                            <td>{curEle.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default StateWise;


       