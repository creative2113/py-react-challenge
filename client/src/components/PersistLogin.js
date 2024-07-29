import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/usePrivate'
import useRefreshToken from '../hooks/useRefreshToken'

export default function PersistLogin() {

    const refresh = useRefreshToken()
    const { accessToken, isLoggedIn, setUser, setIsLoggedIn } = useAuth()
    const [loading, setLoading] = useState(true)
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        let isMounted = true
    
        async function verifyUser() {
            if (!isLoggedIn) {
                isMounted && setLoading(false)
                return
            }
    
            try {
                await refresh()
                const { data } = await axiosPrivate.get('auth/user')
                setUser(data)
            } catch (error) {
                setIsLoggedIn(false);
                console.log(error?.response)
            } finally {
                isMounted && setLoading(false)
            }
        }
    
        !accessToken ? verifyUser() : setLoading(false)
    
        return () => {
            isMounted = false
        }
    }, [])
    

    return (
        loading ? "Loading" : <Outlet />
    )
}
