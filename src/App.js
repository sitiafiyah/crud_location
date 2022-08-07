import './App.css';
import React, { useEffect, useState } from "react";
import DisplayFormDataInTable from './component/mahasiswa/DisplayFormDataInTable';
import getFormattedWeatherData from "./services/weatherServices";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	// const [address, setAddress] = useState("")
	// const [lat, setLat] = useState(null);
	// const [lon, setLon] = useState(null);
	// const [city, setCity] = useState("Malang");
	
	// useEffect(() => {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition((position) => {
	// 			setLat(position.coords.latitude);
	// 			setLon(position.coords.longitude);
	// 		});
	// 	}
	// }, [lat, lon])

	// useEffect(() => {
	// 	const getCity = async () => {
	// 		await getFormattedWeatherData({ lat: lat, lon: lon, units: "metric" }).then((data) => {
	// 			setCity(data.name);
	// 		});
	// 	};

	// 	getCity();

	// }, [lat, lon]);
	

	// const API_KEY = "AIzaSyDywZbRdHei-X1qgWTAw1UnCdyjxPGa-ps";
	// const URL = "https://maps.google.com/maps/api/geocode/json?latlng=";

	// useEffect(() => {
	// 	const setPosition = ({coords : {latitude, longitude}}) => {
	// 		setLat(latitude);
	// 		setLon(longitude);
	// 		fetch(`${URL}${lat},${lon}`)
	// 		.then(resp => resp.json(), e => console.error(e))
	// 		.then(({results: [{formatted_address}]}) =>{
	// 			setAddress(formatted_address)
	// 		})
	// 	}

	// 	navigator.geolocation.getCurrentPosition(setPosition)

	// 	let watcher = navigator.geolocation.watchPosition(
	// 		setPosition,
	// 		err => console.error(err),
	// 		{ enableHighAccuracy: true}
	// 	)

	// 	return() => {
	// 		navigator.geolocation.clearWatch(watcher)
	// 	}
	// })


	return (
		<div className="App">
			<DisplayFormDataInTable/>
		</div>
	);
}

export default App;
