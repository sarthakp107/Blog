import React, { useReducer } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, error: null, success: false }
        case 'ADDED_DOCUMENT':
            return { isPending: flase, document: action.payload, error: null, success: true }
        case 'ERROR':
            return { isPending: false, document: null, error: action.payload, success: false }

    }

}


export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = useState(false);

    //collection reference
    const collectionRef = projectFirestore.collection(collection);

    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    }


    //add a document
    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' });

        try {
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await collectionRef.add({...doc, createdAt});
            dispatchIfNotCancelled({type: 'ADDED_DOCUMENT', payload: addedDocument})

        } catch (error) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err })
        }
    }

    //delete a document
    const deleteDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' });

        try {

        } catch (error) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err })
        }
    }


    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return {addDocument, deleteDocument, response}
}
