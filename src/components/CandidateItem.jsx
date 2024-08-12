import React from 'react';
import { Link } from 'react-router-dom';

const CandidateItem = ({ candidate }) => {
    return (
        <div>
            <img src={candidate.thumbnail} alt={candidate.title} />
            <h3>{candidate.title}</h3>
            <p>{candidate.category}</p>
            <p>{candidate.age} años</p>
            <Link to={`/candidate/${candidate.id}`}> Ver detalles del candidato </Link>
        </div>
    )
}

export default CandidateItem;