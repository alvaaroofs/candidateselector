import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesContext';

const CandidatePage = () => {
  const { id } = useParams();
  const { candidates } = useContext(CandidatesContext);

  const candidate = candidates.find(c => c.id === parseInt(id));

  if (!candidate) {
    return <p>Candidato no encontrado</p>;
  }

  return (
    <div>
      <h2>{candidate.title}</h2>
      <p>{candidate.category}</p>
      <p>{candidate.age} años</p>
      <p><strong>Descripción:</strong> {candidate.description}</p>
      <img src={candidate.thumbnail} alt={candidate.title} />
      <div>
        {candidate.images.map((img, index) => (
          <img key={index} src={img} alt={`${candidate.title} ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CandidatePage;
