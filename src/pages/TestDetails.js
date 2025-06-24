import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TestDetails.css';

const testData = [
  {
    id: 1,
    title: 'MBTI Kişilik Testi',
    description: '16 farklı kişilik türünü keşfedin.',
    type: 'Kişilik Testi',
    difficulty: 'Orta',
    duration: '10 dakika',
    questionCount: 20,
  },
  // Diğer testler...
];

function TestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const test = testData.find((test) => test.id === parseInt(id));

  if (!test) {
    return <h1>Test bulunamadı!</h1>;
  }

  const handleStartTest = () => {
    navigate(`/solve/${id}`);
  };

  return (
    <div>
      <h1>{test.title}</h1>
      <p>{test.description}</p>
      <p><strong>Tür:</strong> {test.type}</p>
      <p><strong>Zorluk:</strong> {test.difficulty}</p>
      <p><strong>Süre:</strong> {test.duration}</p>
      <p><strong>Soru Sayısı:</strong> {test.questionCount}</p>
      <button onClick={handleStartTest}>Teste Başla</button>
    </div>
  );
}

export default TestDetails;
