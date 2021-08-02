import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'b79d95aa-87b5-4f23-94a2-f3e61c1d9f98'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsersAPI(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data);
    },
    getProfileUsersAPI(userId) {

        return profileAPI.getProfile(userId);

    },

    getUnFollowUsersAPI(userId) {
        return instance.delete(`follow/${userId}`).then(responce => responce.data);
    },
    getFollowUsersAPI(userId) {
        return instance.post(`follow/${userId}`).then(responce => responce.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
    savePhotos(photo) {
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
        export const authMe = {
            Me() {
                return instance.get(`auth/me`).then(responce => responce.data);
            },
            loginMe(email, password, rememberMe = false) {
                return instance.post(`auth/login`, {email, password, rememberMe}).then(responce => responce.data);
            },
            logoutMe() {
                return instance.delete(`auth/login`).then(responce => responce.data);
            }
        }