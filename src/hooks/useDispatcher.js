import { useState, useEffect } from 'react'

const useDispatcher = dispatch => {
    const [isLoading, setIsLoading] = useState(true)
    const [content, setContent] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        makeRequest()
    }, [])

    const makeRequest = async () => {
        try {
            const response = await dispatch()
            setContent(response)
        } catch (e) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    const reload = () => {
        setIsLoading(true)
        makeRequest()
    }

    return [isLoading, error, content, reload]
}

export { useDispatcher }