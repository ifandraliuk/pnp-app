import axios from 'axios';


const API_URL = "/users/"

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    //axios storage data in it, check if not null
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService