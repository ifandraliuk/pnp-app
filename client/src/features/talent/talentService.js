import axios from "axios";

const API_URL = '/talents/'

const getTalent = async (token) => {

    console.log('frontend request to get all talents')
    const response = await axios.get(API_URL)
    return response.data
}


const talentService = {
    getTalent

}

export default talentService