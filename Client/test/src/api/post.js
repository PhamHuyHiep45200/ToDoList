import {createApiRequest} from './index'

export const getPost=()=>{
    return createApiRequest({
        url:'/post',
        method: 'GET',
    })
}

export const postPost=(name,age,userName)=>{
    return createApiRequest({
        url:'/post',
        method: 'POST',
        data:{name,age,userName}
    })
}