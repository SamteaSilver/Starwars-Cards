import StarShipCard from '../components/StarShipCard'
import axios from 'axios'

export const API = async () => {
    try {
        const url = 'https://swapi.dev/api/starships/';
        const response = await axios.get(url);
        console.log(response.data)
        return response.data;
    }
    catch (err) {
        console.error(err.message);
    }
}
