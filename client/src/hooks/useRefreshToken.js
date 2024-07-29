import { axiosInstance } from "../api/apiConfig";
import useAuth from "./useAuth";

export default function useRefreshToken() {
    const { isLoggedIn, setAccessToken, setCSRFToken } = useAuth()

    const refresh = async () => {
        if(!isLoggedIn){
            return
        }
        
        const response = await axiosInstance.post('auth/refresh-token')
        setAccessToken(response.data.access)
        setCSRFToken(response.headers["x-csrftoken"])

        return { accessToken: response.data.access, csrfToken: response.headers["x-csrftoken"] }
    }

    return refresh
}