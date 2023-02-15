import { useEffect, useState } from 'react'
import API from '../API/Api'

function useLoginUser({ credential }) {
    const [newToken, setNewToken] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        async function PostLogin() {
            //New instance class API
            const callAPI = new API()

            await callAPI.post(`'/login', ${credential}`)
                .then((data) => {
                    console.log(data)
                })
                .catch((error) => {
                    setError(error)
                }
                )

        }
        PostLogin()
    }, [credential])
    // return Data or Error 
    return { userData, error }
}


export default useCallUserData