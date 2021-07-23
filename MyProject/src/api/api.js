import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'b79d95aa-87b5-4f23-94a2-f3e61c1d9f98'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = (currentPage, pageSize) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
}
export const getProfileUsers = (userId) => {
    return instance.get(`profile/${userId}`)

}
export  const getHeaderLogin=()=>{
 return instance.get(`auth/me`).then(responce => responce.data)
}
export  const getUnFollowUsers=(userId)=>{
    return instance.delete(`follow/${userId}`).then(responce => responce.data)
}
export const  getFollowUsers=(userId)=>{
    return instance.post(`follow/${userId}`).then(responce => responce.data)
}