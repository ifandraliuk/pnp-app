import axios from "axios";

const API_URL = '/general'

// Create general info
const createGeneral = async (generalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, generalData )
    return response.data
}

// Get general info
const getGeneral = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}
const generalService = {
    createGeneral, 
    getGeneral

}

export default generalService