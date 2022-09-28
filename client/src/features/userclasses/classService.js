import axios from "axios";

const API_URL = '/classes/'

// Get class
const getClass = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log('frontend request to get user class')
    const response = await axios.get(API_URL, config)
    return response.data
}

// Post class to user
const addClass = async (classData, token) => {
    console.log('frontend request to post a class to user')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + 'forme', classData, config )
    return response.data
}

const classService = {
    getClass, addClass

}

export default classService