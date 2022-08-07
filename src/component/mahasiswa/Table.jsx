import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import getFormattedWeatherData from "../../services/weatherServices";
import Loader from "./Loader";


function Table({ tableData }) {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });
        }
    }, [lat, lon])

    useEffect(() => {
        const getCity = async () => {
            if (lat && lon) {
                await getFormattedWeatherData({ lat: lat, lon: lon, units: "metric" }).then((data) => {
                    setCity(data.name);
                });
            }
        };

        getCity();
    }, [lat, lon])

    const setLocationUser = (indexBtn) => {
        setLoading(true);
        var x = document.getElementById("button" + indexBtn);
        if (x) {
            x.style.display = "none";
            document.getElementById("location" + indexBtn).append(city)
        }
        setTimeout(setLoading(false), 10000)
    }

    return (
        <div>
            <h4> Table Mahasiswa </h4>
            {loading ? <Loader /> :
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>NIM</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Gender</th>
                                <th>Hobby</th>
                                <th>Comment</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{data.nim}</td>
                                            <td>{data.name}</td>
                                            <td>{data.address}</td>
                                            <td>{data.gender}</td>
                                            <td>{data.hobby}</td>
                                            <td>{data.comment}</td>
                                            <td id={"location" + i}>
                                                <button className="btn btn-primary" onClick={() => setLocationUser(i)} id={"button" + i}> Set Location </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {
                                tableData.length === 0 &&
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        No records found to display!
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>

            }

        </div>
    );
}

export default Table;
