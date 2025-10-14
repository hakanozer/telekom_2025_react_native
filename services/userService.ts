import apiClient from "./apiConfig"

export const userLogin = (email: string, password: string) => {
    const sendObj = {
        email: email,
        password: password
    }
    return apiClient.post('auth/login', sendObj)
}