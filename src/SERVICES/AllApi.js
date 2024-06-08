import { CommonApi } from "./CommonApi"

// BASE URL OF THE API ENDPONIT
const Base_url = ""


// LOGIN
export const UserLogin = async (data)=>{

    return await CommonApi("POST",`${Base_url}/endpoint`,data)

}


// GET ORDER DEATILS
export const GetOrder = async (data)=>{

    return await CommonApi("POST",`${Base_url}/endpoint`,data)

}


// GET FILTER DEATILS
export const getfilter = async (data)=>{

    return await CommonApi("GET",`${Base_url}/endpoint`,data)

}


