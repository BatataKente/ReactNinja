import {useEffect, useState} from 'react'

export const useFetch = url => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(
        () => {
            const controller = new AbortController()
            fetch(url, {signal: controller.signal})
            .then(
                response => {
                    if(!response.ok) throw Error('could not fetch the data for data resource')
                    return response.json()
                }
            )
            .then(
                data => {
                    setData(data)
                    setIsLoading(false)
                    setError(null)
                }
            )
            .catch(
                error => {
                    setIsLoading(false)
                    setError(error.message)
                }
            )
            return () => controller.abort()
        }, [url]
    )
    return {data, isLoading, error}
}