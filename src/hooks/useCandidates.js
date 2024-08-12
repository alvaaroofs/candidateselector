import { useState, useEffect } from "react";
import candidatesData from "../mocks/candidates.json"

//En este caso, crearemos un custom hook para obtener los datos del candidatos.json que yo mismo
//he creado

export const useCandidates = () => {
    const [candidates, setCandidates] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setCandidates(candidatesData.candidates)
            setLoading(false)
        } catch (error) {
            setError('Error, no existen los candidatos')
            setLoading(false)
        }
    }, [])

    return { candidates, loading, error }
}