import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { 
  FaUser, 
  FaMoneyBillWave, 
  FaCalendarAlt, 
  FaShieldAlt, 
  FaCheck, 
  FaFileAlt, 
  FaStar 
} from 'react-icons/fa';
import TermsModal from '../components/TermsModal';

const BakiciOlPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    gender: '',
    address: '',
    city: '',
    careType: [],
    hourlyRate: '',
    experience: '',
    description: '',
    education: '',
    languages: [],
    availability: [],
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'acceptTerms') {
        setFormData({
          ...formData,
          [name]: checkbox.checked,
        });
      } else if (name.startsWith('careType') || name.startsWith('languages') || name.startsWith('availability')) {
        const arrayName = name.split('[')[0];
        const newArray = [...(formData[arrayName as keyof typeof formData] as string[])];
        
        if (checkbox.checked) {
          newArray.push(value);
        } else {
          const index = newArray.indexOf(value);
          if (index !== -1) {
            newArray.splice(index, 1);
          }
        }
        
        setFormData({
          ...formData,
          [arrayName]: newArray,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend here
    console.log('Form submitted:', formData);
    // Move to success step
    setStep(4);
    window.scrollTo(0, 0);
  };

  // Benefits data
  const benefits = [
    {
      icon: <FaMoneyBillWave size={40} className="text-primary" />,
      title: 'Rekabetçi Ücretler',
      description: 'Kendi ücretinizi belirleyin ve deneyiminize göre rekabetçi fiyatlar sunun.',
    },
    {
      icon: <FaCalendarAlt size={40} className="text-primary" />,
      title: 'Esnek Çalışma',
      description: 'Kendi çalışma takvimini ve saatlerini belirleyerek size uygun zamanlarda çalışın.',
    },
    {
      icon: <FaShieldAlt size={40} className="text-primary" />,
      title: 'Güvenli Ödemeler',
      description: 'Tüm ödemeler platform üzerinden güvenli bir şekilde gerçekleştirilir.',
    },
    {
      icon: <FaStar size={40} className="text-primary" />,
      title: 'Değerlendirmeler',
      description: 'Olumlu değerlendirmeler toplayarak itibarınızı ve iş fırsatlarınızı artırın.',
    },
  ];

  // Render form based on current step
  const renderForm = () => {
    switch(step) {
      case 1:
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Kişisel Bilgiler</h4>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Adınız*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Soyadınız*</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-posta Adresiniz*</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Telefon Numaranız*</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Şifre*</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Şifre Tekrar*</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="confirmPassword" 
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="birthDate" className="form-label">Doğum Tarihi*</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      id="birthDate" 
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Cinsiyet*</label>
                    <select 
                      className="form-select" 
                      id="gender" 
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="Kadın">Kadın</option>
                      <option value="Erkek">Erkek</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Adres*</label>
                    <textarea 
                      className="form-control" 
                      id="address" 
                      name="address" 
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">Şehir*</label>
                    <select 
                      className="form-select" 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="İstanbul">İstanbul</option>
                      <option value="Ankara">Ankara</option>
                      <option value="İzmir">İzmir</option>
                      <option value="Bursa">Bursa</option>
                      <option value="Antalya">Antalya</option>
                      {/* Add other cities as needed */}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="d-flex justify-content-end mt-4">
                <button 
                  type="button" 
                  className="btn btn-primary px-4 py-2" 
                  onClick={nextStep}
                >
                  Devam Et
                </button>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Bakıcılık Bilgileri</h4>
              
              <div className="mb-4">
                <label className="form-label fw-bold">Sunduğunuz Bakıcılık Hizmetleri*</label>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="careType1" 
                        name="careType[0]" 
                        value="Bebek Bakıcısı"
                        onChange={handleChange}
                        checked={formData.careType.includes('Bebek Bakıcısı')}
                      />
                      <label className="form-check-label" htmlFor="careType1">
                        Bebek Bakıcısı
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="careType2" 
                        name="careType[1]" 
                        value="Yaşlı Bakıcısı"
                        onChange={handleChange}
                        checked={formData.careType.includes('Yaşlı Bakıcısı')}
                      />
                      <label className="form-check-label" htmlFor="careType2">
                        Yaşlı Bakıcısı
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="careType3" 
                        name="careType[2]" 
                        value="Hasta Bakıcısı"
                        onChange={handleChange}
                        checked={formData.careType.includes('Hasta Bakıcısı')}
                      />
                      <label className="form-check-label" htmlFor="careType3">
                        Hasta Bakıcısı
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="careType4" 
                        name="careType[3]" 
                        value="Engelli Bakıcısı"
                        onChange={handleChange}
                        checked={formData.careType.includes('Engelli Bakıcısı')}
                      />
                      <label className="form-check-label" htmlFor="careType4">
                        Engelli Bakıcısı
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="hourlyRate" className="form-label">Saatlik Ücret (₺)*</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="hourlyRate" 
                      name="hourlyRate" 
                      min="50" 
                      max="500"
                      value={formData.hourlyRate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="experience" className="form-label">Deneyim (Yıl)*</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="experience" 
                      name="experience" 
                      min="0" 
                      max="50"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Kendiniz Hakkında*</label>
                    <textarea 
                      className="form-control" 
                      id="description" 
                      name="description" 
                      rows={5}
                      placeholder="Kendinizi, deneyimlerinizi ve bakım yaklaşımınızı anlatın..."
                      value={formData.description}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="education" className="form-label">Eğitim ve Sertifikalar</label>
                    <textarea 
                      className="form-control" 
                      id="education" 
                      name="education" 
                      rows={3}
                      placeholder="Eğitim durumunuzu, mezun olduğunuz okulları ve varsa ilgili sertifikalarınızı belirtin..."
                      value={formData.education}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="d-flex justify-content-between mt-4">
                <button 
                  type="button" 
                  className="btn btn-outline-primary px-4 py-2" 
                  onClick={prevStep}
                >
                  Geri
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary px-4 py-2" 
                  onClick={nextStep}
                >
                  Devam Et
                </button>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Ek Bilgiler ve Onay</h4>
              
              <div className="mb-4">
                <label className="form-label fw-bold">Konuştuğunuz Diller*</label>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="language1" 
                        name="languages[0]" 
                        value="Türkçe"
                        onChange={handleChange}
                        checked={formData.languages.includes('Türkçe')}
                      />
                      <label className="form-check-label" htmlFor="language1">
                        Türkçe
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="language2" 
                        name="languages[1]" 
                        value="İngilizce"
                        onChange={handleChange}
                        checked={formData.languages.includes('İngilizce')}
                      />
                      <label className="form-check-label" htmlFor="language2">
                        İngilizce
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="language3" 
                        name="languages[2]" 
                        value="Almanca"
                        onChange={handleChange}
                        checked={formData.languages.includes('Almanca')}
                      />
                      <label className="form-check-label" htmlFor="language3">
                        Almanca
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="language4" 
                        name="languages[3]" 
                        value="Fransızca"
                        onChange={handleChange}
                        checked={formData.languages.includes('Fransızca')}
                      />
                      <label className="form-check-label" htmlFor="language4">
                        Fransızca
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="language5" 
                        name="languages[4]" 
                        value="Rusça"
                        onChange={handleChange}
                        checked={formData.languages.includes('Rusça')}
                      />
                      <label className="form-check-label" htmlFor="language5">
                        Rusça
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="language6" 
                        name="languages[5]" 
                        value="Arapça"
                        onChange={handleChange}
                        checked={formData.languages.includes('Arapça')}
                      />
                      <label className="form-check-label" htmlFor="language6">
                        Arapça
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="form-label fw-bold">Çalışma Durumu*</label>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="availability1" 
                        name="availability[0]" 
                        value="Tam zamanlı"
                        onChange={handleChange}
                        checked={formData.availability.includes('Tam zamanlı')}
                      />
                      <label className="form-check-label" htmlFor="availability1">
                        Tam zamanlı
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="availability2" 
                        name="availability[1]" 
                        value="Yarı zamanlı"
                        onChange={handleChange}
                        checked={formData.availability.includes('Yarı zamanlı')}
                      />
                      <label className="form-check-label" htmlFor="availability2">
                        Yarı zamanlı
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="availability3" 
                        name="availability[2]" 
                        value="Hafta içi"
                        onChange={handleChange}
                        checked={formData.availability.includes('Hafta içi')}
                      />
                      <label className="form-check-label" htmlFor="availability3">
                        Hafta içi
                      </label>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="availability4" 
                        name="availability[3]" 
                        value="Hafta sonu"
                        onChange={handleChange}
                        checked={formData.availability.includes('Hafta sonu')}
                      />
                      <label className="form-check-label" htmlFor="availability4">
                        Hafta sonu
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="acceptTerms" 
                    name="acceptTerms"
                    onChange={handleChange}
                    checked={formData.acceptTerms}
                    required
                  />
                  <label className="form-check-label" htmlFor="acceptTerms">
                    <span className="text-muted">
                      <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal" className="text-decoration-none">Kullanım Şartları</a>,
                      <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal" className="text-decoration-none"> Gizlilik Politikası</a> ve
                      <a href="#" data-bs-toggle="modal" data-bs-target="#membershipModal" className="text-decoration-none"> Üyelik Sözleşmesi</a>'ni okudum, kabul ediyorum.
                    </span>
                  </label>
                </div>
              </div>
              
              <div className="d-flex justify-content-between mt-4">
                <button 
                  type="button" 
                  className="btn btn-outline-primary px-4 py-2" 
                  onClick={prevStep}
                >
                  Geri
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary px-4 py-2" 
                  onClick={handleSubmit}
                  disabled={!formData.acceptTerms}
                >
                  Başvuruyu Tamamla
                </button>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 text-center">
              <div className="mb-4">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaCheck size={40} className="text-primary" />
                </div>
              </div>
              
              <h3 className="fw-bold mb-3">Başvurunuz Alındı!</h3>
              <p className="mb-4">
                Başvurunuz başarıyla alındı. Ekibimiz en kısa sürede başvurunuzu inceleyecek ve 
                sizinle iletişime geçecektir. Bu süreçte e-posta ve telefonunuzu kontrol etmeyi unutmayın.
              </p>
              
              <div className="alert alert-info" role="alert">
                <FaFileAlt className="me-2" />
                Lütfen başvuru sürecinizi hızlandırmak için kimlik ve ilgili sertifikalarınızın 
                fotoğraflarını hazır bulundurun.
              </div>
              
              <Link href="/" className="btn btn-primary px-4 py-2 mt-3">
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="fw-bold display-4 mb-3">Bakıcı Olun</h1>
              <p className="lead mb-4">
                Esnek çalışma saatleri, rekabetçi ücretler ve güvenli bir platform ile 
                binlerce aileye hizmet verin. Sizde BakıcıBul ailesine katılın!
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
                {/* Replace with actual image */}
                <div className="bg-secondary bg-opacity-25 h-100 w-100 d-flex align-items-center justify-content-center">
                  <p className="text-center fs-3 text-white">Bakıcı Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-5">
        <div className="container">
          {step < 4 && (
            <div className="mb-5">
              <div className="progress" style={{ height: '8px' }}>
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: `${(step / 3) * 100}%` }} 
                  aria-valuenow={(step / 3) * 100} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span className={`${step >= 1 ? 'text-primary fw-bold' : 'text-muted'}`}>Kişisel Bilgiler</span>
                <span className={`${step >= 2 ? 'text-primary fw-bold' : 'text-muted'}`}>Bakıcılık Bilgileri</span>
                <span className={`${step >= 3 ? 'text-primary fw-bold' : 'text-muted'}`}>Onay</span>
              </div>
            </div>
          )}
          
          <div className="row">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                {renderForm()}
              </form>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">Bakıcı Olmanın Avantajları</h4>
                  
                  {benefits.map((benefit, index) => (
                    <div key={index} className="d-flex mb-4">
                      <div className="me-3">
                        {benefit.icon}
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">{benefit.title}</h5>
                        <p className="text-muted mb-0">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  <hr className="my-4" />
                  
                  <div className="text-center">
                    <h5 className="fw-bold mb-3">Destek mi lazım?</h5>
                    <Link href="/iletisim" className="btn btn-outline-primary">
                      Bize Ulaşın
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Bakıcılarımız Ne Diyor?</h2>
            <p className="text-muted">Platform üzerinden çalışan bakıcıların deneyimleri</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="me-1" />
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "3 yıldır BakıcıBul üzerinden bebek bakıcılığı yapıyorum. Platform sayesinde 
                    güvenilir ailelerle çalışma fırsatı buldum ve ücretlerim her zaman düzenli ödendi."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Fatma Aksoy</h6>
                      <p className="mb-0 small text-muted">Bebek Bakıcısı, 3 yıldır üye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="me-1" />
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "Emekli hemşireyim ve platform üzerinden yaşlı bakıcılığı yapıyorum. Kendi çalışma 
                    saatlerimi belirleyebilmek ve tecrübemi kullanabilmek benim için çok değerli."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Ali Yıldız</h6>
                      <p className="mb-0 small text-muted">Yaşlı Bakıcısı, 2 yıldır üye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="me-1" />
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "Üniversite eğitimim sırasında part-time çalışmak için ideal bir platform. 
                    Ailelerle doğrudan iletişim kurabilmek ve güvenli bir ortamda çalışmak harika."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Zeynep Şahin</h6>
                      <p className="mb-0 small text-muted">Bebek Bakıcısı, 1 yıldır üye</p>
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
          <h2 className="fw-bold mb-3">Siz de Bakıcı Olmak İster misiniz?</h2>
          <p className="lead mb-4">
            Binlerce aileye hizmet verin, kendi çalışma saatlerinizi belirleyin ve 
            deneyiminize uygun ücretler kazanın.
          </p>
          <div>
            <a href="#top" className="btn btn-light btn-lg px-4 me-3">
              Hemen Başvurun
            </a>
            <Link href="/nasil-calisir" className="btn btn-outline-light btn-lg px-4">
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>
      {/* Terms & Conditions Modal */}
      <TermsModal 
        modalId="termsModal" 
        title="Kullanım Şartları" 
        content={`
          <h4>Kullanım Şartları</h4>
          <p>Son güncelleme: 04.03.2025</p>
          
          <h5>1. Giriş</h5>
          <p>BakıcıBul platformuna hoş geldiniz. Bu kullanım şartları, platformumuzun kullanımını düzenleyen kuralları ve şartları içermektedir.</p>
          
          <h5>2. Platform Kullanımı</h5>
          <p>2.1. Kullanıcılar, platform üzerindeki tüm işlemlerinde Türkiye Cumhuriyeti kanunlarına uymakla yükümlüdür.</p>
          <p>2.2. Platform üzerinden yapılan her işlem kayıt altına alınmaktadır.</p>
          <p>2.3. Kullanıcılar, platformda paylaştıkları tüm bilgilerin doğruluğundan sorumludur.</p>
          
          <h5>3. Üyelik</h5>
          <p>3.1. Platform üyeliği için gerçek ve doğru bilgiler kullanılmalıdır.</p>
          <p>3.2. Tek bir kişi birden fazla hesap açamaz.</p>
          <p>3.3. Hesap bilgilerinin gizliliği kullanıcının sorumluluğundadır.</p>
          
          <h5>4. Hizmet Şartları</h5>
          <p>4.1. Platform, bakıcılar ve aileler arasında aracı konumundadır.</p>
          <p>4.2. Platform üzerinden anlaşılan hizmetlerde sorumluluk taraflara aittir.</p>
          <p>4.3. Platform, bakıcılar hakkında temel kontrolleri yapmakla birlikte, nihai seçim ve güvenlik önlemleri kullanıcının sorumluluğundadır.</p>
          
          <h5>5. Ücretlendirme</h5>
          <p>5.1. Platform kullanım ücretleri ve komisyon oranları web sitesinde belirtilmiştir.</p>
          <p>5.2. Ödeme işlemleri güvenli ödeme altyapısı üzerinden gerçekleştirilir.</p>
          
          <h5>6. İptal ve İade</h5>
          <p>6.1. Hizmet iptalleri için belirlenen sürelere ve kurallara uyulmalıdır.</p>
          <p>6.2. İade koşulları, hizmetin durumuna göre değerlendirilir.</p>
          
          <h5>7. Yasaklı Davranışlar</h5>
          <p>7.1. Platform üzerinden yasa dışı içerik paylaşımı yasaktır.</p>
          <p>7.2. Diğer kullanıcılara karşı taciz, tehdit veya rahatsız edici davranışlar yasaktır.</p>
          <p>7.3. Platform altyapısına zarar verecek herhangi bir işlem yasaktır.</p>
          
          <h5>8. Sözleşme Değişiklikleri</h5>
          <p>8.1. Platform, bu kullanım şartlarını önceden bildirmeksizin değiştirme hakkını saklı tutar.</p>
          <p>8.2. Değişiklikler, sitede yayınlandığı tarihten itibaren geçerli olur.</p>
          
          <h5>9. Uyuşmazlık Çözümü</h5>
          <p>9.1. Platform ile kullanıcı arasındaki anlaşmazlıklarda Türkiye Cumhuriyeti yasaları geçerlidir.</p>
          <p>9.2. Uyuşmazlık durumunda Türkiye Cumhuriyeti mahkemeleri yetkilidir.</p>
        `}
      />
      
      {/* Privacy Policy Modal */}
      <TermsModal 
        modalId="privacyModal" 
        title="Gizlilik Politikası" 
        content={`
          <h4>Gizlilik Politikası</h4>
          <p>Son güncelleme: 04.03.2025</p>
          
          <h5>1. Toplanan Bilgiler</h5>
          <p>1.1. Kimlik bilgileri (ad, soyad, doğum tarihi)</p>
          <p>1.2. İletişim bilgileri (e-posta, telefon, adres)</p>
          <p>1.3. Ödeme bilgileri</p>
          <p>1.4. Profil bilgileri ve özgeçmiş (bakıcılar için)</p>
          <p>1.5. Kullanım istatistikleri ve çerezler</p>
          
          <h5>2. Bilgilerin Kullanımı</h5>
          <p>2.1. Hizmet sunumu ve iyileştirmesi için</p>
          <p>2.2. Kullanıcı hesaplarının yönetimi için</p>
          <p>2.3. Güvenlik ve doğrulama işlemleri için</p>
          <p>2.4. Yasal yükümlülüklerin yerine getirilmesi için</p>
          <p>2.5. İletişim ve bilgilendirme amaçlı</p>
          
          <h5>3. Bilgilerin Paylaşımı</h5>
          <p>3.1. Bakıcılar ve aileler arasında gerekli bilgiler paylaşılır</p>
          <p>3.2. Yasal zorunluluk durumunda resmi kurumlarla paylaşılabilir</p>
          <p>3.3. Ödeme işlemleri için finansal kuruluşlarla paylaşılabilir</p>
          <p>3.4. Kullanıcı izni olmadan üçüncü taraflarla ticari amaçlı paylaşım yapılmaz</p>
          
          <h5>4. Veri Güvenliği</h5>
          <p>4.1. Verileriniz endüstri standardı güvenlik önlemleriyle korunmaktadır</p>
          <p>4.2. Düzenli güvenlik değerlendirmeleri ve güncellemeleri yapılmaktadır</p>
          <p>4.3. Veri ihlali durumunda kullanıcılar bilgilendirilir</p>
          
          <h5>5. Kullanıcı Hakları</h5>
          <p>5.1. Kişisel verilere erişim hakkı</p>
          <p>5.2. Kişisel verilerin düzeltilmesi veya güncellenmesi hakkı</p>
          <p>5.3. Kişisel verilerin silinmesi hakkı</p>
          <p>5.4. Veri işleme kısıtlama hakkı</p>
          <p>5.5. Veri taşınabilirliği hakkı</p>
          
          <h5>6. Çerezler</h5>
          <p>6.1. Platform, çerezleri kullanıcı deneyimini geliştirmek için kullanır</p>
          <p>6.2. Çerezleri tarayıcı ayarlarından yönetebilirsiniz</p>
          
          <h5>7. Çocukların Gizliliği</h5>
          <p>7.1. Platform, 18 yaşından küçüklerin kullanımı için tasarlanmamıştır</p>
          <p>7.2. Bilinçli olarak 18 yaşından küçüklerden kişisel veri toplanmaz</p>
          
          <h5>8. Politika Değişiklikleri</h5>
          <p>8.1. Bu gizlilik politikası periyodik olarak güncellenebilir</p>
          <p>8.2. Önemli değişiklikler kullanıcılara bildirilir</p>
          
          <h5>9. İletişim</h5>
          <p>Gizlilik politikası hakkında sorularınız için iletisim@bakicibul.com adresine e-posta gönderebilirsiniz.</p>
        `}
      />
      
      {/* Membership Agreement Modal */}
      <TermsModal 
        modalId="membershipModal" 
        title="Üyelik Sözleşmesi" 
        content={`
          <h4>Üyelik Sözleşmesi</h4>
          <p>Son güncelleme: 04.03.2025</p>
          
          <h5>1. Taraflar</h5>
          <p>Bu üyelik sözleşmesi, BakıcıBul platformu (bundan sonra "Platform" olarak anılacaktır) ile Platforma üye olan kullanıcı (bundan sonra "Üye" olarak anılacaktır) arasında düzenlenmiştir.</p>
          
          <h5>2. Sözleşmenin Konusu</h5>
          <p>İşbu sözleşme, Üye'nin Platform'a üyeliği ve Platform üzerinden sunulan hizmetlerden yararlanması ile ilgili şartları ve yükümlülükleri belirler.</p>
          
          <h5>3. Üyelik</h5>
          <p>3.1. Platform'a üye olabilmek için 18 yaşını doldurmuş olmak gerekmektedir.</p>
          <p>3.2. Üyelik işlemi sırasında verilen bilgilerin doğru ve güncel olması zorunludur.</p>
          <p>3.3. Üye, hesap bilgilerinin gizliliğini korumakla yükümlüdür.</p>
          <p>3.4. Platform, herhangi bir neden belirtmeksizin üyelik başvurusunu reddetme veya üyeliği askıya alma hakkına sahiptir.</p>
          
          <h5>4. Üye Türleri ve Hakları</h5>
          <p>4.1. Aile Üyeliği: Bakıcı arama, değerlendirme ve iletişim kurma haklarına sahiptir.</p>
          <p>4.2. Bakıcı Üyeliği: Profil oluşturma, hizmet sunma ve iletişim kurma haklarına sahiptir.</p>
          
          <h5>5. Ücretlendirme</h5>
          <p>5.1. Platform üyelik ve hizmet ücretleri web sitesinde belirtilmiştir.</p>
          <p>5.2. Platform, ücretlendirme politikasını değiştirme hakkını saklı tutar.</p>
          <p>5.3. Ücretlendirme değişiklikleri, en az 30 gün önceden bildirilir.</p>
          
          <h5>6. Üye Yükümlülükleri</h5>
          <p>6.1. Üye, Platform'u yasal amaçlar için kullanmayı kabul eder.</p>
          <p>6.2. Üye, diğer kullanıcıların haklarına saygı göstermeyi kabul eder.</p>
          <p>6.3. Üye, Platform üzerinden gerçekleştirdiği işlemlerden ve iletişimden sorumludur.</p>
          
          <h5>7. Platform Yükümlülükleri</h5>
          <p>7.1. Platform, teknik altyapıyı sürekli ve güvenli şekilde sağlamayı taahhüt eder.</p>
          <p>7.2. Platform, kullanıcı bilgilerinin gizliliğini korumak için gerekli önlemleri alır.</p>
          <p>7.3. Platform, hizmet kalitesini artırmak için sürekli iyileştirmeler yapar.</p>
          
          <h5>8. Sözleşme Süresi ve Fesih</h5>
          <p>8.1. Bu sözleşme, üyelik devam ettiği sürece yürürlükte kalır.</p>
          <p>8.2. Üye, istediği zaman üyeliğini sonlandırabilir.</p>
          <p>8.3. Platform, Üye'nin sözleşme şartlarını ihlal etmesi durumunda üyeliği sonlandırabilir.</p>
          
          <h5>9. Uyuşmazlık Çözümü</h5>
          <p>9.1. Bu sözleşmeden doğan uyuşmazlıklarda Türkiye Cumhuriyeti yasaları geçerlidir.</p>
          <p>9.2. Uyuşmazlık durumunda Türkiye Cumhuriyeti mahkemeleri yetkilidir.</p>
        `}
      />
    </Layout>
  );
};

export default BakiciOlPage;