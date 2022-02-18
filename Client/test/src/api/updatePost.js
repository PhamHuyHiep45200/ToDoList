import {createApiRequest} from './index'

export const getIdUpdate= (postId)=>{
    return createApiRequest({
        url:`/update/${postId}`,
        method: 'GET',
    })
}
export const updatePost=(postId,name,age,userName)=>{
    return createApiRequest({
        url:`/update/${postId}`,
        method: 'POST',
        data:{name,age,userName}
    })
}