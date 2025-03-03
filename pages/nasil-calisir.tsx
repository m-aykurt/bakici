import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { 
  FaSearch, 
  FaUserShield, 
  FaHandshake, 
  FaComments, 
  FaStar, 
  FaLock, 
  FaIdCard, 
  FaFileAlt, 
  FaPhone, 
  FaCheck
} from 'react-icons/fa';

const HowItWorksPage = () => {
  // Step data for the how it works section
  const steps = [
    {
      icon: <FaSearch size={36} className="text-primary" />,
      title: '1. İhtiyacınıza Uygun Bakıcı Arayın',
      description: 'Bebek veya yaşlı bakımı için filtreleme seçeneklerini kullanarak ihtiyacınıza uygun, konumunuza yakın bakıcıları bulun.',
    },
    {
      icon: <FaUserShield size={36} className="text-primary" />,
      title: '2. Bakıcı Profillerini İnceleyin',
      description: 'Bakıcıların geçmiş deneyimlerini, eğitim bilgilerini, referanslarını ve diğer ailelerin değerlendirmelerini görüntüleyin.',
    },
    {
      icon: <FaComments size={36} className="text-primary" />,
      title: '3. Bakıcıyla İletişime Geçin',
      description: 'Seçtiğiniz bakıcıyla platform üzerinden mesajlaşarak detayları konuşun ve sorularınızı sorun.',
    },
    {
      icon: <FaHandshake size={36} className="text-primary" />,
      title: '4. Hizmeti Başlatın',
      description: 'Anlaştığınız bakıcı ile çalışmaya başlayın ve güvenilir bakım hizmetinin keyfini çıkarın.',
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Bakıcılar nasıl seçiliyor?',
      answer: 'Tüm bakıcılarımız kapsamlı bir doğrulama sürecinden geçer. Kimlik doğrulaması, sabıka kaydı kontrolü, referans kontrolü ve yüz yüze görüşme aşamalarını başarıyla tamamlayan bakıcılar platformumuzda hizmet verebilir.'
    },
    {
      question: 'Ücretlendirme nasıl yapılıyor?',
      answer: 'Bakıcılar kendi saatlik ücretlerini belirler. Bu ücret genellikle bakıcının deneyimine, eğitimine ve sunduğu hizmetlere göre değişiklik gösterir. Tüm ödemeler platform üzerinden güvenli bir şekilde yapılır.'
    },
    {
      question: 'Bakıcı ile anlaşamazsak ne olur?',
      answer: 'İlk birkaç saat içinde hizmet kalitesinden memnun kalmazsanız, başka bir bakıcıyla çalışmanızı sağlıyoruz. Memnuniyet garantimiz kapsamında uygun bir çözüm sunulacaktır.'
    },
    {
      question: 'Aynı bakıcıyı düzenli olarak çağırabilir miyim?',
      answer: 'Evet, bir bakıcıyla çalışmaktan memnun kaldıysanız, düzenli hizmet almak için özel anlaşmalar yapabilirsiniz. Platformumuz üzerinden düzenli zamanlı rezervasyonlar yapabilirsiniz.'
    },
    {
      question: 'Acil durumda bakıcı bulabilir miyim?',
      answer: 'Evet, platformumuz üzerinden "Acil Bakım" seçeneğini kullanarak, mevcut ve hemen hizmet verebilecek bakıcıları filtreleyebilirsiniz.'
    },
    {
      question: 'Bakıcıları nasıl değerlendirebilirim?',
      answer: 'Hizmet tamamlandıktan sonra, bakıcınızı 5 yıldız üzerinden değerlendirebilir ve deneyiminiz hakkında yorum yazabilirsiniz. Bu değerlendirmeler diğer ailelerin doğru bakıcıyı seçmesine yardımcı olur.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="fw-bold display-4 mb-3">Nasıl Çalışır?</h1>
              <p className="lead mb-4">
                BakıcıBul, aileniz için güvenilir bakıcıları bulmanızı kolaylaştıran basit ve güvenli bir platformdur. 
                İşte size mükemmel bakıcıyı bulma sürecinin nasıl işlediği.
              </p>
              <Link href="/bakicilar" className="btn btn-light btn-lg">
                Hemen Bakıcı Bul
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
                {/* Replace with actual image */}
                <div className="bg-secondary bg-opacity-25 h-100 w-100 d-flex align-items-center justify-content-center">
                  <p className="text-center fs-3 text-white">Aile ve Bakıcı Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Dört Kolay Adımda Bakıcı Bulun</h2>
            <p className="text-muted">Platform kullanımı basit ve kullanıcı dostu tasarlandı.</p>
          </div>
          
          <div className="row g-4">
            {steps.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      {step.icon}
                    </div>
                    <h4 className="card-title fw-bold mb-3">{step.title}</h4>
                    <p className="card-text text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Güvenlik ve Güven Önceliğimizdir</h2>
            <p className="text-muted">
              BakıcıBul olarak, ailenizin güvenliğini her şeyin üzerinde tutuyoruz. 
              Her bakıcı platform tarafından titizlikle incelenir.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <FaIdCard size={36} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="card-title fw-bold text-center mb-3">Kimlik Doğrulama</h4>
                  <p className="card-text text-muted">
                    Her bakıcı için resmi kimlik doğrulaması yapılır. 
                    Platformumuzdaki tüm kişilerin gerçek kimlik bilgileri kontrol edilir ve doğrulanır.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <FaFileAlt size={36} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="card-title fw-bold text-center mb-3">Kapsamlı İnceleme</h4>
                  <p className="card-text text-muted">
                    Tüm bakıcılar için sabıka kaydı kontrolü yapılır. 
                    Geçmiş iş deneyimleri ve referansları kontrol edilir, 
                    eğitim ve sertifikaları doğrulanır.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <FaStar size={36} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="card-title fw-bold text-center mb-3">Şeffaf Değerlendirmeler</h4>
                  <p className="card-text text-muted">
                    Bakıcıların profilleri gerçek ailelerin yorumlarını içerir. 
                    Bu değerlendirmeler sadece platformumuz üzerinden hizmet alan aileler 
                    tarafından yazılabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link href="/guvenlik" className="btn btn-outline-primary">
              Güvenlik Politikamız Hakkında Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      {/* For Caregivers Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Bakıcılar İçin BakıcıBul</h2>
              <p className="lead mb-4">
                Bakıcı olarak platformumuza katılın, esnek çalışma saatleri ve 
                rekabetçi ücretlerle ailelere hizmet verin.
              </p>
              
              <div className="mb-4">
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <FaCheck className="bg-primary text-white p-1 rounded" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Ücretsiz Profil Oluşturun</h5>
                    <p className="text-muted">
                      Deneyiminizi, becerilerinizi ve uygunluğunuzu gösteren detaylı bir profil oluşturun.
                    </p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="me-3">
                    <FaCheck className="bg-primary text-white p-1 rounded" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Kendi Fiyatınızı Belirleyin</h5>
                    <p className="text-muted">
                      Deneyiminize ve sunduğunuz hizmetlere göre kendi saatlik ücretinizi siz belirleyin.
                    </p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="me-3">
                    <FaCheck className="bg-primary text-white p-1 rounded" size={24} />
                  </div>
                  <div>
                    <h5 className="fw-bold">Güvenli Ödeme</h5>
                    <p className="text-muted">
                      Tüm ödemeler platform üzerinden güvenli bir şekilde yapılır, hiç bir zaman ödeme sorunu yaşamazsınız.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link href="/bakici-ol" className="btn btn-primary btn-lg">
                Bakıcı Olarak Kaydol
              </Link>
            </div>
            
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
                {/* Replace with actual image */}
                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                  <p className="m-0 fs-3">Bakıcı Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Sıkça Sorulan Sorular</h2>
            <p className="text-muted">Platform hakkında merak edilenler</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item border-0 mb-3 shadow-sm">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button 
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`} 
                        aria-expanded={index === 0 ? 'true' : 'false'} 
                        aria-controls={`collapse${index}`}
                      >
                        <span className="fw-bold">{faq.question}</span>
                      </button>
                    </h2>
                    <div 
                      id={`collapse${index}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      aria-labelledby={`heading${index}`} 
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body py-3">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <p className="mb-3">Başka sorularınız mı var?</p>
            <Link href="/iletisim" className="btn btn-outline-primary">
              <FaPhone className="me-2" /> Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Aileniz İçin En İyi Bakıcıyı Bulun</h2>
          <p className="lead mb-4">
            Binlerce güvenilir bakıcı arasından seçim yapın ve ailenize uygun bakıcıyı hemen bugün bulun.
          </p>
          <Link href="/bakicilar" className="btn btn-light btn-lg px-4 me-3">
            Bakıcıları Keşfet
          </Link>
          <Link href="/kayit" className="btn btn-outline-light btn-lg px-4">
            Ücretsiz Üye Ol
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;