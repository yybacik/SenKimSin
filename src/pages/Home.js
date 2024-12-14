import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-header">Hoş Geldiniz!</h1>
      <p className="home-description">
        Kişiliğinizi keşfetmek ve kendinizi daha yakından tanımak için sizi testlerimize davet ediyoruz.
      </p>

      <div className="home-test-section">
        <h2 className="home-test-title">Popüler Testlerimiz</h2>
        <div className="home-test-cards">
          <div className="home-test-card">
            <h3>MBTI Kişilik Testi</h3>
            <p>16 farklı kişilik türünden hangisi olduğunu öğren!</p>
            <button className="home-test-button">Teste Başla</button>
          </div>
          <div className="home-test-card">
            <h3>Big Five Testi</h3>
            <p>Beş Faktör Kişilik Teorisine göre analiz yap.</p>
            <button className="home-test-button">Teste Başla</button>
          </div>
          <div className="home-test-card">
            <h3>Stres Seviyesi Testi</h3>
            <p>Stres seviyeni öğren ve çözüm önerileri al!</p>
            <button className="home-test-button">Teste Başla</button>
          </div>
        </div>
      </div>

      <div className="home-new-tests">
        <div className="home-new-tests-marquee">
          <h2>🆕 Yeni Eklenenler 🆕 Yeni Eklenenler 🆕 Yeni Eklenenler 🆕 Yeni Eklenenler 🆕 Yeni Eklenenler 🆕 Yeni Eklenenler 🆕 Yeni Eklenenler</h2>
        </div>
        <ul className="home-new-tests-list">
          <li>Empati Testi</li>
          <li>Duygusal Zeka Testi</li>
          <li>Liderlik Potansiyeli Testi</li>
        </ul>
      </div>

      <div className="home-example-result">
        <h2 className="home-example-result-title">📊 Örnek Test Sonucu: MBTI Testi</h2>
        <div className="home-example-result-content">
          <h3>ENFP (Macera Ruhlu)</h3>
          <p>
            **Macera Ruhlu** kişiler yaratıcı, enerjik ve tutkuludur. İnsanlarla kolayca bağ kurar
            ve büyük hayaller kurmayı sever.
          </p>
          <p><strong>Sembol Hayvanınız:</strong> 🦋 Kelebek</p>
          <p>
            Kelebek gibi, değişime açıksınız ve her yeni fırsatta hayatın tadını çıkarıyorsunuz.
          </p>
          <a
            href="/documents/example-mbti-result.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="home-pdf-link"
          >
            Örnek Test Sonucunu PDF Olarak Görüntüle
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
