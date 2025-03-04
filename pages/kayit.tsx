import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaFacebook, FaGoogle } from 'react-icons/fa';
import TermsModal from '../components/TermsModal';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: 'family', // Default is 'family', another option is 'caregiver'
    acceptTerms: false,
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    
    // Clear error when field is changed
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      acceptTerms: '',
    };
    
    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Ad alanı zorunludur';
      isValid = false;
    }
    
    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Soyad alanı zorunludur';
      isValid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin';
      isValid = false;
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon alanı zorunludur';
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Şifre alanı zorunludur';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
      isValid = false;
    }
    
    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifreler eşleşmiyor';
      isValid = false;
    }
    
    // Terms validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Kullanım şartlarını kabul etmelisiniz';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // In a real app, you would make an API call to register the user
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          accountType: 'family',
          acceptTerms: false,
        });
      }, 1500);
    }
  };

  return (
    <Layout>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              {isSubmitted ? (
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4 p-md-5 text-center">
                    <div className="mb-4">
                      <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                        <FaUser size={40} className="text-success" />
                      </div>
                    </div>
                    
                    <h2 className="fw-bold mb-3">Kayıt Başarılı!</h2>
                    <p className="mb-4">
                      Hesabınız başarıyla oluşturuldu. E-posta adresinize gönderilen 
                      aktivasyon bağlantısını kullanarak hesabınızı doğrulayabilirsiniz.
                    </p>
                    
                    <div className="d-grid gap-2">
                      <Link href="/giris" className="btn btn-primary py-2">
                        Giriş Yap
                      </Link>
                      <Link href="/" className="btn btn-outline-primary py-2">
                        Ana Sayfaya Dön
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4 p-md-5">
                    <div className="text-center mb-4">
                      <h1 className="fw-bold mb-1">Üye Ol</h1>
                      <p className="text-muted">
                        Hemen üye olun ve platformumuzu kullanmaya başlayın.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <div className="d-flex justify-content-center gap-3">
                          <div className="form-check">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="accountType" 
                              id="accountTypeFamily" 
                              value="family"
                              checked={formData.accountType === 'family'}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="accountTypeFamily">
                              Aile
                            </label>
                          </div>
                          <div className="form-check">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="accountType" 
                              id="accountTypeCaregiver" 
                              value="caregiver"
                              checked={formData.accountType === 'caregiver'}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="accountTypeCaregiver">
                              Bakıcı
                            </label>
                          </div>
                        </div>
                        
                        {formData.accountType === 'caregiver' && (
                          <div className="alert alert-info mt-3" role="alert">
                            <small>
                              Bakıcı olarak kaydolmak için daha detaylı bir forma ihtiyacımız var. 
                              <Link href="/bakici-ol" className="ms-1 text-decoration-none">
                                Bakıcı başvuru formuna git
                              </Link>
                            </small>
                          </div>
                        )}
                      </div>
                      
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Ad</label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <FaUser />
                              </span>
                              <input 
                                type="text" 
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                id="firstName" 
                                name="firstName"
                                placeholder="Adınız"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                              />
                              {errors.firstName && (
                                <div className="invalid-feedback">
                                  {errors.firstName}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Soyad</label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <FaUser />
                              </span>
                              <input 
                                type="text" 
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                id="lastName" 
                                name="lastName"
                                placeholder="Soyadınız"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                              />
                              {errors.lastName && (
                                <div className="invalid-feedback">
                                  {errors.lastName}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-posta Adresi</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaEnvelope />
                          </span>
                          <input 
                            type="email" 
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email" 
                            name="email"
                            placeholder="E-posta adresiniz"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          {errors.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Telefon Numarası</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaPhone />
                          </span>
                          <input 
                            type="tel" 
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            id="phone" 
                            name="phone"
                            placeholder="Telefon numaranız"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                          {errors.phone && (
                            <div className="invalid-feedback">
                              {errors.phone}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Şifre</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaLock />
                          </span>
                          <input 
                            type="password" 
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="password" 
                            name="password"
                            placeholder="Şifreniz (en az 6 karakter)"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          {errors.password && (
                            <div className="invalid-feedback">
                              {errors.password}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className="form-label">Şifre Tekrar</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaLock />
                          </span>
                          <input 
                            type="password" 
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            id="confirmPassword" 
                            name="confirmPassword"
                            placeholder="Şifrenizi tekrar girin"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                          {errors.confirmPassword && (
                            <div className="invalid-feedback">
                              {errors.confirmPassword}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className={`mb-4 ${errors.acceptTerms ? 'is-invalid' : ''}`}>
                        <div className="form-check">
                          <input 
                            className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                            type="checkbox" 
                            id="acceptTerms" 
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-check-label" htmlFor="acceptTerms">
                            <small className="text-muted">
                              <span>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal" className="text-decoration-none">Kullanım Şartları</a>,
                                <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal" className="text-decoration-none"> Gizlilik Politikası</a> ve
                                <a href="#" data-bs-toggle="modal" data-bs-target="#membershipModal" className="text-decoration-none"> Üyelik Sözleşmesi</a>'ni okudum, kabul ediyorum.
                              </span>
                            </small>
                          </label>
                        </div>
                        {errors.acceptTerms && (
                          <div className="invalid-feedback">
                            {errors.acceptTerms}
                          </div>
                        )}
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100 py-2 mb-4" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Kaydınız Oluşturuluyor...
                          </>
                        ) : 'Üye Ol'}
                      </button>
                      
                      <div className="text-center mb-4">
                        <p className="text-muted mb-0">
                          Zaten bir hesabınız var mı? <Link href="/giris" className="text-decoration-none">Giriş Yap</Link>
                        </p>
                      </div>
                      
                      <div className="d-flex align-items-center mb-4">
                        <hr className="flex-grow-1" />
                        <span className="px-3 text-muted">veya</span>
                        <hr className="flex-grow-1" />
                      </div>
                      
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <button 
                            type="button" 
                            className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
                            onClick={() => {
                              setIsLoading(true);
                              // Simulate Google Auth
                              setTimeout(() => {
                                setIsLoading(false);
                                setIsSubmitted(true);
                              }, 1500);
                            }}
                            disabled={isLoading}
                          >
                            <FaGoogle className="me-2" /> Google ile Kayıt
                          </button>
                        </div>
                        <div className="col-sm-6">
                          <button 
                            type="button" 
                            className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
                            onClick={() => {
                              setIsLoading(true);
                              // Simulate Facebook Auth
                              setTimeout(() => {
                                setIsLoading(false);
                                setIsSubmitted(true);
                              }, 1500);
                            }}
                            disabled={isLoading}
                          >
                            <FaFacebook className="me-2" /> Facebook ile Kayıt
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
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

export default RegisterPage;