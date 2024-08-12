import React, { useContext } from 'react';
import CandidateItem from './CandidateItem.jsx';
import { CandidatesContext } from '../context/CandidatesContext';

//La funcion de CandidateList es recibir la lista de candidatos mediante el componente CandidateItem
//y renderizar
const CandidateList = () => {
    const { candidates, loading, error } = useContext(CandidatesContext)

    if (loading) return <p>Cargando candidatos a decano...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            {candidates.map(candidate => (
                <CandidateItem key={candidate.id} candidate={candidate} />
            ))}
        </div>
    )
}

export default CandidateList;