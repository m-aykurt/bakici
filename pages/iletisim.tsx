import React, { useState } from 'react';
import Layout from '../components/Layout';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Lütfen tüm gerekli alanları doldurun.',
      });
      return;
    }
    
    // Simulate form submission
    // In a real app, you would send this data to your backend
    setTimeout(() => {
      setSubmitStatus({
        submitted: true,
        success: true,
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-4 mb-3">İletişim</h1>
          <p className="lead mb-0">
            Sorularınız mı var? Bize ulaşın, size yardımcı olmaktan memnuniyet duyarız.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Column - Contact Information */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">İletişim Bilgileri</h3>
                  
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                        <FaMapMarkerAlt className="text-primary" size={22} />
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Adres</h5>
                      <p className="mb-0 text-muted">
                        Mustafa Kemal Mahallesi, Dumlupınar Bulvarı<br />
                        No: 274, D:118<br />
                        Çankaya, Ankara
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                        <FaPhoneAlt className="text-primary" size={22} />
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Telefon</h5>
                      <p className="mb-0 text-muted">
                        <a href="tel:+905551234567" className="text-decoration-none text-muted">+90 555 123 45 67</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                        <FaEnvelope className="text-primary" size={22} />
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">E-posta</h5>
                      <p className="mb-0 text-muted">
                        <a href="mailto:info@bakicibul.com" className="text-decoration-none text-muted">info@bakicibul.com</a><br />
                        <a href="mailto:destek@bakicibul.com" className="text-decoration-none text-muted">destek@bakicibul.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                        <FaClock className="text-primary" size={22} />
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Çalışma Saatleri</h5>
                      <p className="mb-0 text-muted">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 10:00 - 14:00<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <h5 className="fw-bold mb-3">Bizi Takip Edin</h5>
                  <div className="d-flex">
                    <a href="#" className="me-3 text-decoration-none">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <FaFacebook className="text-primary" size={18} />
                      </div>
                    </a>
                    <a href="#" className="me-3 text-decoration-none">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <FaTwitter className="text-primary" size={18} />
                      </div>
                    </a>
                    <a href="#" className="me-3 text-decoration-none">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <FaInstagram className="text-primary" size={18} />
                      </div>
                    </a>
                    <a href="#" className="text-decoration-none">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <FaLinkedin className="text-primary" size={18} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">Bize Mesaj Gönderin</h3>
                  
                  {submitStatus.submitted && (
                    <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-danger'} mb-4`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label fw-bold">Adınız Soyadınız*</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            placeholder="Adınız Soyadınız"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label fw-bold">E-posta Adresiniz*</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="ornek@mail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="subject" className="form-label fw-bold">Konu</label>
                          <select 
                            className="form-select" 
                            id="subject" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                          >
                            <option value="">Konu Seçin</option>
                            <option value="Genel Sorular">Genel Sorular</option>
                            <option value="Bakıcı Olmak İstiyorum">Bakıcı Olmak İstiyorum</option>
                            <option value="Teknik Destek">Teknik Destek</option>
                            <option value="İş Birliği">İş Birliği</option>
                            <option value="Diğer">Diğer</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="message" className="form-label fw-bold">Mesajınız*</label>
                          <textarea 
                            className="form-control" 
                            id="message" 
                            name="message" 
                            rows={6} 
                            placeholder="Mesajınızı buraya yazın..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" value="" id="privacyCheck" required />
                          <label className="form-check-label small" htmlFor="privacyCheck">
                            <span className="text-muted">
                              Kişisel verilerimin işlenmesine ve 
                              <a href="/gizlilik-politikasi" className="text-decoration-none"> Gizlilik Politikası</a>'nda 
                              belirtilen şartlara izin veriyorum.
                            </span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary py-2 px-4">
                          Mesajı Gönder
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="ratio ratio-21x9" style={{ minHeight: '400px' }}>
                {/* Replace with actual Google Maps embed */}
                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                  <p className="m-0 fs-3">Harita Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Sıkça Sorulan Sorular</h2>
            <p className="text-muted">İletişim konusunda merak edilenler</p>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="contactFAQ">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span className="fw-bold">Ne kadar sürede dönüş yapıyorsunuz?</span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Tüm mesajlara en geç 24 saat içinde yanıt vermeye çalışıyoruz. Acil durumlar için 
                      lütfen müşteri hizmetleri numaramızı arayınız.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <span className="fw-bold">Teknik bir sorun yaşıyorum, ne yapmalıyım?</span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Teknik sorunlar için destek@bakicibul.com adresine e-posta gönderebilir veya yukarıdaki 
                      iletişim formunu kullanarak "Teknik Destek" konusunu seçebilirsiniz. Sorununuzu mümkün olduğunca 
                      detaylı açıklamanız çözüm sürecini hızlandıracaktır.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <span className="fw-bold">Bakıcı olarak nasıl kaydolabilirim?</span>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Bakıcı olarak kaydolmak için web sitemizin üst menüsünde bulunan "Bakıcı Ol" 
                      butonuna tıklayarak kayıt formunu doldurabilirsiniz. Kayıt işleminden sonra 
                      kimlik doğrulama sürecine yönlendirileceksiniz.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <span className="fw-bold">İş birliği teklifleri için kiminle görüşebilirim?</span>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      İş birliği teklifleri için isbirligi@bakicibul.com adresine e-posta gönderebilir veya 
                      iletişim formunda "İş Birliği" konusunu seçerek detayları paylaşabilirsiniz. Pazarlama 
                      ekibimiz sizinle en kısa sürede iletişime geçecektir.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Bize Ulaşın, Yardım Edelim</h2>
          <p className="lead mb-4">
            Sorularınız için 7/24 telefon hattımızdan bize ulaşabilir veya e-posta gönderebilirsiniz.
          </p>
          <div>
            <a href="tel:+905551234567" className="btn btn-light btn-lg px-4 me-3">
              <FaPhoneAlt className="me-2" /> Hemen Arayın
            </a>
            <a href="mailto:info@bakicibul.com" className="btn btn-outline-light btn-lg px-4">
              <FaEnvelope className="me-2" /> E-posta Gönderin
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;