import { useCandidates } from "../hooks/useCandidates";
import React, { createContext } from 'react';

export const CandidatesContext = createContext();

export const CandidatesProvider = ({ children }) => {
    const {candidates, loading, error} = useCandidates();

    return (
        <CandidatesContext.Provider value={{ candidates, loading, error }}>
            {children}
        </CandidatesContext.Provider>
    )
}