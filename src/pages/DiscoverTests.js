import React from 'react';
import './DiscoverTests.css';

function DiscoverTests() {
  function handleDiscoverTestsClick() {
    console.log("Big Five (Beş Faktör) Kişilik Testi'ne başla butonuna tıklandı.");
    // İsterseniz yönlendirme yapabilirsiniz
    // navigate('/big-five-test');
  }

  return (
    <div className="discover-tests-page">
      <h1>Testleri Keşfet</h1>
      <p>Burada tüm testlerin detaylı açıklamalarını bulabilir ve istediğinizi çözmeye başlayabilirsiniz.</p>

      <div className="discover-test-list">
        <div className="discover-test-card">
          <h2>MBTI Kişilik Testi</h2>
          <p>MBTI (Myers-Briggs Type Indicator), insanların farklı kişilik türlerini anlamalarına yardımcı olan bir kişilik envanteridir. Bu test, insanların dört temel dikotomiye (zıt kavramlara) dayalı olarak 16 farklı kişilik türünden birine ait olduklarını belirlemelerine olanak tanır. Bu dikotomiler şunlardır:</p>
          <ul>
            <li>Extraversion (Dışadönüklük) - Introversion (İçedönüklük)</li>
            <li>Sensing (Duyumsama) - Intuition (Sezgi)</li>
            <li>Thinking (Düşünme) - Feeling (Hissetme)</li>
            <li>Judging (Yargılama) - Perceiving (Algılama)</li>
          </ul>
          <p>Bu testi çözerek hangi kişilik tipine ait olduğunuzu öğrenebilir ve güçlü ve zayıf yönlerinizi keşfedebilirsiniz.</p>
          <button className="discover-start-button">Teste Başla</button>
        </div>

        <div className="discover-test-card">
          <h2>Big Five (Beş Faktör) Kişilik Testi</h2>
          <p>Beş Faktör Kişilik Modeli (OCEAN), kişiliği 5 temel faktör üzerinden tanımlar. Bu faktörler, bireyin karakter özelliklerini belirlemede yaygın olarak kullanılan evrensel bir kişilik modelidir. Bu faktörler şunlardır:</p>
          <ul>
            <li><strong>Açıklık (Openness):</strong> Yeni deneyimlere ve farklı fikirlere açıklık.</li>
            <li><strong>Sorumluluk (Conscientiousness):</strong> Düzenli, dikkatli ve sorumluluk bilincine sahip olma.</li>
            <li><strong>Dışadönüklük (Extraversion):</strong> Sosyal olma, enerji dolu olma ve insanlarla etkileşim kurma eğilimi.</li>
            <li><strong>Uyumluluk (Agreeableness):</strong> Başkalarıyla işbirliği yapma, empati kurma ve yardımsever olma eğilimi.</li>
            <li><strong>Duygusal Denge (Neuroticism):</strong> Duygusal olarak ne kadar dengeli ve stresle nasıl başa çıktığınız.</li>
          </ul>
          <p>Bu testi çözerek bu beş faktördeki güçlü ve zayıf yönlerinizi keşfedebilir ve kendinizi daha iyi anlayabilirsiniz.</p>
          <button className="discover-start-button" onClick={handleDiscoverTestsClick}>Teste Başla</button>
        </div>

        <div className="discover-test-card">
          <h2>DISC Kişilik Testi</h2>
          <p>DISC Kişilik Envanteri, bireylerin davranış eğilimlerini dört ana kategoriye ayırır: Dominance (Hakimiyet), Influence (Etkileme), Steadiness (Sebat), ve Conscientiousness (İtina). Bu model, özellikle iş dünyasında bireylerin iletişim ve takım çalışması stillerini anlamak için kullanılır.</p>
          <ul>
            <li><strong>Dominance (D):</strong> Sonuç odaklı, kararli, rekabetçi bireyler.</li>
            <li><strong>Influence (I):</strong> İkna edici, enerjik ve dışa dönük bireyler.</li>
            <li><strong>Steadiness (S):</strong> Sabırlı, güvenilir ve takım oyuncusu bireyler.</li>
            <li><strong>Conscientiousness (C):</strong> Detay odaklı, kuralcı ve analitik bireyler.</li>
          </ul>
          <p>Bu testi çözerek iş hayatında ve günlük hayatta nasıl davrandığınızı anlayabilir ve takım içindeki rolünüzü daha iyi kavrayabilirsiniz.</p>
          <button className="discover-start-button">Teste Başla</button>
        </div>
      </div>
    </div>
  );
}

export default DiscoverTests;
