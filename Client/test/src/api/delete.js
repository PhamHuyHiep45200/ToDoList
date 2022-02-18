import {createApiRequest} from './index'

export const deletePost=(postId)=>{
    return createApiRequest({
        url:`/delete/${postId}`,
        method: 'GET',
    })
}