import axios from "axios";

const API_URL = '/attributes/'

// Create attributes
const createAttributes = async (attributesData, token) => {
    console.log("frontend - create attribute")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, attributesData, config )
    console.log(response, response.data)
    return response.data
}

// Get general info
const getAttributes = async (token) => {
    console.log("frontend request: get attributes")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}
const attrService = {
    createAttributes, 
    getAttributes

}

export default attrService