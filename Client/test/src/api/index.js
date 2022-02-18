import axios from 'axios'

const localhost='http://localhost:5000'

export const createApiRequest = async ({url,method,data})=>{
    try {
        const result= await axios({
            method,
            url:`${localhost}${url}`,
            data
        })
        return (
            {
                success:true,
                data:result
            }
        )
    }
    catch (e){
        const { response } = e
        console.log("loi", e)
        return (
            {
                success: false,
                data: response
            }
        )
    }
}