import React, { useReducer } from 'react'
import { projectFirestore } from '../firebase/config'

const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return {isPending: true, document:null , error: null, success: false}
        case 'ERROR':
            return {isPending: false, document:null , error: action.payload, success: false}
        
    }

}


export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            
        }
    }

  const res = projectFirestore.collection(collection);
}
