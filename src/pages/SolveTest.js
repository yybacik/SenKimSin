import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SolveTest.css';

const testQuestions = {
  1: [
    { id: 1, question: 'Grup aktivitelerine katılmayı mı yoksa bireysel çalışmayı mı tercih edersiniz?', options: ['Grup', 'Bireysel'] },
    { id: 2, question: 'Planlı mı yoksa spontane olmayı mı daha çok tercih edersiniz?', options: ['Planlı', 'Spontane'] }
  ],
  2: [
    { id: 1, question: 'Sorumluluklarınızı ne kadar önceliklendiriyorsunuz?', options: ['Her zaman', 'Bazen', 'Nadiren'] },
    { id: 2, question: 'Yeni bilgiler öğrenmekten ne kadar hoşlanırsınız?', options: ['Çok', 'Orta', 'Az'] }
  ],
  // Diğer test soruları
};

function SolveTest() {
  const { id } = useParams();
  const questions = testQuestions[id];
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Yanıtlar:', answers);
    alert('Test tamamlandı!');
  };

  if (!questions) {
    return <h1>Bu teste ait sorular bulunamadı!</h1>;
  }

  return (
    <div className="solve-test-page">
      <h1>Test Çöz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id} className="question-block">
            <p className="question-text">{q.question}</p>
            {q.options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  onChange={() => handleOptionChange(q.id, option)}
                  required
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" className="submit-button">Testi Tamamla</button>
      </form>
    </div>
  );
}

export default SolveTest;
