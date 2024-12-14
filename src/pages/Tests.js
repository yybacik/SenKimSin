import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tests.css';

const testData = [
  {
    id: 1,
    title: 'MBTI Kişilik Testi',
    description: '16 farklı kişilik türünü keşfedin.',
    type: 'Kişilik Testi',
    difficulty: 'Orta'
  },
  {
    id: 2,
    title: 'Big Five (Beş Faktör) Testi',
    description: 'Beş faktörlü kişilik testini çözerek kendinizi tanıyın.',
    type: 'Kişilik Testi',
    difficulty: 'Zor'
  },
  {
    id: 3,
    title: 'Stres Yönetimi Testi',
    description: 'Stres seviyenizi öğrenin ve başa çıkma yollarını keşfedin.',
    type: 'Psikolojik Test',
    difficulty: 'Kolay'
  },
  {
    id: 4,
    title: 'Özsaygı Testi',
    description: 'Kendi özsaygınızı değerlendirin.',
    type: 'Kişisel Gelişim Testi',
    difficulty: 'Orta'
  },
  {
    id: 5,
    title: 'Duygusal Zeka (EQ) Testi',
    description: 'Duygusal zekanızı ölçün ve duygularınızı nasıl kontrol edeceğinizi öğrenin.',
    type: 'Kişisel Gelişim Testi',
    difficulty: 'Zor'
  }
];

function Tests() {
  const navigate = useNavigate();

  const handleDiscoverTestsClick = () => {
    navigate('/discover');
  };
  return (
    <div className="tests-page">

      <section className="introduction-section">
        <h1>Kendinizi Keşfedin!</h1>
        <p className="introduction-text">
          Kişisel özelliklerinizi, duygusal zekanızı ve stres seviyenizi keşfetmeye hazır mısınız?
          Eğlenceli ve ilgi çekici bu testlerle, hem kendinizi daha yakından tanıyacak hem de kişisel gelişiminize katkı sağlayacaksınız. Hadi, testleri keşfetmeye başlayalım!
        </p>
        <button className="cta-button" onClick={handleDiscoverTestsClick}>Testleri Keşfet</button>
      </section>


      <h1>Testler</h1>
      <p>Aşağıdaki testleri çözerek kendinizi daha iyi tanıyabilirsiniz.</p>

      <div className="test-list">
        {testData.map(test => (
          <div key={test.id} className="test-card">
            <h2 className="test-title">{test.title}</h2>
            <p className="test-description">{test.description}</p>
            <p><strong>Tür:</strong> {test.type}</p>
            <p><strong>Zorluk:</strong> {test.difficulty}</p>
            <button className="start-button">Teste Başla</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tests;
