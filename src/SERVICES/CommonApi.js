import axios from "axios";


// AXIOS CONFIG
export const CommonApi = async (reqmethod, apiurl, reqbody) => {


    const config = {

        method: reqmethod,
        url: apiurl,
        data: reqbody,
        headers: { "Content-Type": "application/json" }

    }

    return await axios(config).then((res)=>{return res}).catch((err)=>{return err})


}