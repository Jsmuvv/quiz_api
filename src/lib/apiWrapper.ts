import axios, { isAxiosError } from "axios";
import { UserFormDataType } from "../types";
import { APIResponse } from "../types"
import { UserType } from "../types";
const baseURL: string = "https://fakebook-re49.onrender.com"
const userEndpoint: string = "/users"

const apiClientNoAuth = () => axios.create({
    baseURL: baseURL
})


async function register( newUserData:UserFormDataType ): Promise<APIResponse<UserType>> {
    let error;
    let data;
    try{
        const response = await apiClientNoAuth().post(userEndpoint,newUserData)
        data = response.data
    } catch( err ) {
        if ( axios.isAxiosError( err ) ){
            error = err.message
        } else {
            error = 'Someting went wrong'
        }
    }
    return { error,data }
}


export {
    register
}