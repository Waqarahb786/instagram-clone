import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"

import {  setUserProfile } from "@/redux/authSlice"

const useGetUserProfile=(userId)=>{
    const dispatch = useDispatch()
    // const [userProfile,setUserProfile] = useState(null)
    
    useEffect(()=>{
        const fetchUserProfile = async()=>{
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/user/${userId}/profile`,{withCredentials:true})
                if(res.data.success){
                    console.log(res,"response")
                    
                    dispatch(setUserProfile(res?.data.user))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserProfile()
    },[userId])
}

export default useGetUserProfile;