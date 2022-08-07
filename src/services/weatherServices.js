const API_KEY = "8f9553eecec879ff4afc52ab062c2123";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
	const url = new URL(BASE_URL + "/" + infoType);
	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

	return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
	const {
		name
	} = data;

	return {
		name,
	};
};

const getFormattedWeatherData = async (searchParams) => {
	const formattedCurrentWeather = await getWeatherData(
		"weather",
		searchParams
	).then(formatCurrentWeather);

	return { ...formattedCurrentWeather };
};

export default getFormattedWeatherData;
