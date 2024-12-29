import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">Hakkımızda</h1>
      <p className="about-description">
        Kişiliğinizi keşfetmek ve kendinizi daha yakından tanımak için buradayız!
        Bu platform, insanlara kendilerini anlamalarına ve daha bilinçli kararlar almalarına yardımcı olmayı amaçlar.
      </p>
      <div className="about-content">
        <div className="about-card">
          <h2>Misyonumuz</h2>
          <p>
            Hayata dair en önemli keşif yolculuğu, kendimizi anlamaktan geçer.
            Bu site, kişilik analizleri ve testlerle bu yolculuğunuzda size rehberlik eder.
          </p>
        </div>
        <div className="about-card">
          <h2>Vizyonumuz</h2>
          <p>
            Daha güçlü bir topluluk oluşturmak için bireylerin güçlü ve zayıf yönlerini anlamalarını sağlamak.
            Geleceği inşa etmek için bireysel farkındalığı artırıyoruz.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <h3>Öne Çıkan Özelliklerimiz</h3>
        <ul>
          <li>Kapsamlı ve bilimsel testler</li>
          <li>Kullanıcı dostu arayüz</li>
          <li>Özgün ve interaktif içerikler</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
