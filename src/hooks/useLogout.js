import React, { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth, projectFirestore } from '../firebase/config'

export const useLogout = () => {

    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const { dispatch, user } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {

            //update online status

            const { uid } = user;
            await projectFirestore.collection('users').doc(uid).update({ online: false });

            //sign the use out
            await projectAuth.signOut();

            dispatch({ type: 'LOGOUT' })

            setIsPending(false);
            setError(null);

            // update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch (error) {
            setError(error.message);
            setIsPending(false);
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)
      }, [])

      return { logout, error, isPending }
}
