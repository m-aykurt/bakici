import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaCheck, 
  FaLanguage, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaCommentAlt,
  FaClock,
  FaHeart,
  FaShieldAlt,
  FaUser,
  FaRegClock
} from 'react-icons/fa';

// Mock data for caregivers
const caregiversData = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    type: 'Bebek Bakıcısı',
    rating: 4.9,
    reviews: 58,
    image: '/bakici1.jpg',
    location: 'Kadıköy, İstanbul',
    hourlyRate: 150,
    experience: 5,
    description: 'Bebek bakımında 5 yıllık tecrübem var. 0-3 yaş arası bebeklerin bakımında uzmanım. Çocuk gelişimi konusunda eğitimim var ve her çocuğun bireysel ihtiyaçlarına önem veriyorum. Sevgi dolu ve sabırlı bir yaklaşımım var. Daha önce birçok ailede çalıştım ve referanslarım mevcuttur.',
    services: ['Bebek Bakımı', 'Oyun Etkinlikleri', 'Beslenme', 'Uyku Düzeni', 'Gelişim Aktiviteleri'],
    languages: ['Türkçe', 'İngilizce'],
    availability: ['Hafta içi', 'Tam zamanlı'],
    education: 'Çocuk Gelişimi, İstanbul Üniversitesi',
    certifications: ['İlk Yardım Sertifikası', 'Çocuk Gelişimi Sertifikası'],
    age: 28,
    reviews_list: [
      {
        id: 1,
        author: 'Deniz Yılmaz',
        rating: 5,
        date: '15 Ocak 2023',
        content: 'Ayşe Hanım bebeğimizle mükemmel ilgileniyor. Çok memnunuz, kesinlikle tavsiye ederim!'
      },
      {
        id: 2,
        author: 'Meltem Şahin',
        rating: 5,
        date: '3 Kasım 2022',
        content: 'Çok profesyonel ve sevecen. 1 yaşındaki kızım onu çok seviyor. Her zaman dakik ve güvenilir.'
      },
      {
        id: 3,
        author: 'Ahmet Korkmaz',
        rating: 4,
        date: '20 Eylül 2022',
        content: 'Bebeğimizle ilgilenmesinden çok memnunuz. Bazen geç kalsa da işini iyi yapıyor.'
      }
    ]
  },
  {
    id: 2,
    name: 'Mehmet Demir',
    type: 'Yaşlı Bakıcısı',
    rating: 4.7,
    reviews: 42,
    image: '/bakici2.jpg',
    location: 'Beşiktaş, İstanbul',
    hourlyRate: 180,
    experience: 7,
    description: 'Yaşlı bakımında profesyonel tecrübeye sahibim. Medikal geçmişim var ve yaşlılarla çalışmayı seviyorum. Hastane deneyimim olduğu için medikal ihtiyaçlar konusunda destek sağlayabiliyorum. Sabırlı ve anlayışlı bir kişiliğe sahibim. Özellikle kronik rahatsızlığı olan yaşlılar konusunda deneyimliyim.',
    services: ['Yaşlı Bakımı', 'Medikal Destek', 'Ev İşleri Yardımı', 'İlaç Takibi', 'Kişisel Bakım'],
    languages: ['Türkçe'],
    availability: ['Hafta içi', 'Hafta sonu', 'Yarı zamanlı'],
    education: 'Hemşirelik, Ankara Üniversitesi',
    certifications: ['Hemşirelik Lisansı', 'Yaşlı Bakım Sertifikası'],
    age: 35,
    reviews_list: [
      {
        id: 1,
        author: 'Sema Öztürk',
        rating: 5,
        date: '20 Şubat 2023',
        content: 'Mehmet Bey annemle çok iyi ilgileniyor. Medikal bilgisi sayesinde annemin sağlık takibi çok iyi yapılıyor.'
      },
      {
        id: 2,
        author: 'Ali Yıldız',
        rating: 4,
        date: '15 Aralık 2022',
        content: 'Babamın bakımını üstlendi ve çok memnunuz. Tek sorun bazen iletişimde gecikmeler yaşanması.'
      }
    ]
  }
];

const BakiciDetayPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Find caregiver based on id parameter
  const caregiver = caregiversData.find(c => c.id === Number(id));
  
  // If caregiver not found or page is still loading
  if (!caregiver) {
    return (
      <Layout>
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
          <p className="mt-3">Bakıcı bilgileri yükleniyor...</p>
        </div>
      </Layout>
    );
  }
  
  // Limit reviews to show initially
  const displayedReviews = showAllReviews 
    ? caregiver.reviews_list 
    : caregiver.reviews_list.slice(0, 2);
  
  const handleContactClick = () => {
    setShowContactInfo(true);
  };
  
  return (
    <Layout>
      <div className="bg-light py-5">
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">Ana Sayfa</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/bakicilar" className="text-decoration-none">Bakıcılar</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">{caregiver.name}</li>
            </ol>
          </nav>
          
          <div className="row">
            {/* Left Column - Profile Info */}
            <div className="col-lg-8 mb-4 mb-lg-0">
              {/* Profile Card */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="position-relative rounded overflow-hidden" style={{ height: '240px' }}>
                        {/* Replace with actual image */}
                        <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                          <p className="m-0">Profil Resmi</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-8">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h2 className="card-title fw-bold mb-0">{caregiver.name}</h2>
                        <span className="badge bg-primary d-flex align-items-center p-2">
                          <FaStar className="me-1" /> {caregiver.rating}
                        </span>
                      </div>
                      
                      <h5 className="text-muted mb-3">{caregiver.type}</h5>
                      
                      <div className="d-flex align-items-center mb-3">
                        <FaMapMarkerAlt className="text-primary me-2" />
                        <span>{caregiver.location}</span>
                      </div>
                      
                      <div className="row mb-3">
                        <div className="col-sm-6 mb-2 mb-sm-0">
                          <div className="d-flex align-items-center">
                            <div className="bg-light rounded-circle p-2 me-2">
                              <FaRegClock className="text-primary" />
                            </div>
                            <div>
                              <p className="mb-0 small text-muted">Deneyim</p>
                              <p className="mb-0 fw-bold">{caregiver.experience} Yıl</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-sm-6">
                          <div className="d-flex align-items-center">
                            <div className="bg-light rounded-circle p-2 me-2">
                              <FaUser className="text-primary" />
                            </div>
                            <div>
                              <p className="mb-0 small text-muted">Yaş</p>
                              <p className="mb-0 fw-bold">{caregiver.age} Yaş</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="d-flex flex-wrap mt-4">
                        <div className="me-2 mb-2">
                          <span className="badge bg-light text-dark p-2 px-3">
                            <FaStar className="text-warning me-1" /> {caregiver.reviews} Değerlendirme
                          </span>
                        </div>
                        {caregiver.availability.map((item, index) => (
                          <div key={index} className="me-2 mb-2">
                            <span className="badge bg-light text-dark p-2 px-3">
                              <FaClock className="text-primary me-1" /> {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About Section */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">Hakkında</h4>
                  <p className="card-text">{caregiver.description}</p>
                  
                  <hr className="my-4" />
                  
                  <h5 className="fw-bold mb-3">Eğitim & Sertifikalar</h5>
                  <div className="mb-3">
                    <p className="fw-bold mb-1">Eğitim</p>
                    <p className="mb-0">{caregiver.education}</p>
                  </div>
                  
                  <div>
                    <p className="fw-bold mb-1">Sertifikalar</p>
                    <ul className="mb-0">
                      {caregiver.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Services Section */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">Sunulan Hizmetler</h4>
                  <div className="row">
                    {caregiver.services.map((service, index) => (
                      <div key={index} className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <div className="me-2 text-primary">
                            <FaCheck />
                          </div>
                          <span>{service}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <hr className="my-4" />
                  
                  <h5 className="fw-bold mb-3">Konuştuğu Diller</h5>
                  <div className="d-flex flex-wrap">
                    {caregiver.languages.map((language, index) => (
                      <div key={index} className="d-flex align-items-center me-4 mb-2">
                        <FaLanguage className="text-primary me-2" size={20} />
                        <span>{language}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Reviews Section */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold mb-0">Yorumlar ({caregiver.reviews})</h4>
                    <div className="d-flex align-items-center">
                      <FaStar className="text-warning me-2" size={22} />
                      <span className="fw-bold fs-5">{caregiver.rating}/5</span>
                    </div>
                  </div>
                  
                  {displayedReviews.map((review) => (
                    <div key={review.id} className="mb-4 pb-4 border-bottom">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-secondary me-3" style={{ width: '50px', height: '50px' }}></div>
                          <div>
                            <h6 className="mb-0 fw-bold">{review.author}</h6>
                            <p className="mb-0 small text-muted">{review.date}</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < review.rating ? "text-warning me-1" : "text-muted me-1"} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-0">{review.content}</p>
                    </div>
                  ))}
                  
                  {caregiver.reviews_list.length > 2 && !showAllReviews && (
                    <div className="text-center">
                      <button 
                        className="btn btn-outline-primary" 
                        onClick={() => setShowAllReviews(true)}
                      >
                        Tüm Yorumları Göster
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact & Booking */}
            <div className="col-lg-4">
              {/* Price & Booking Card */}
              <div className="card border-0 shadow-sm mb-4 sticky-top" style={{ top: '100px' }}>
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <h3 className="mb-0 fw-bold text-primary">{caregiver.hourlyRate} ₺</h3>
                    <p className="text-muted">saatlik ücret</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Uygunluk</h5>
                    {caregiver.availability.map((time, index) => (
                      <div key={index} className="d-flex align-items-center mb-2">
                        <FaCalendarAlt className="text-primary me-2" />
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                  
                  {!showContactInfo ? (
                    <button 
                      className="btn btn-primary w-100 mb-3 py-2" 
                      onClick={handleContactClick}
                    >
                      <FaPhoneAlt className="me-2" /> İletişim Bilgilerini Göster
                    </button>
                  ) : (
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3">İletişim</h5>
                      <div className="d-flex align-items-center mb-2">
                        <FaPhoneAlt className="text-primary me-2" />
                        <a href="tel:+905551234567" className="text-decoration-none">+90 555 123 4567</a>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaEnvelope className="text-primary me-2" />
                        <a href="mailto:info@example.com" className="text-decoration-none">info@example.com</a>
                      </div>
                    </div>
                  )}
                  
                  <Link 
                    href={`/mesajlar/new?id=${caregiver.id}&name=${caregiver.name}`} 
                    className="btn btn-outline-primary w-100 mb-3 py-2"
                  >
                    <FaCommentAlt className="me-2" /> Mesaj Gönder
                  </Link>
                  
                  <button className="btn btn-outline-danger w-100 py-2">
                    <FaHeart className="me-2" /> Favorilere Ekle
                  </button>
                  
                  <hr className="my-4" />
                  
                  <div className="text-center">
                    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <FaShieldAlt className="text-primary" size={24} />
                    </div>
                    <h5 className="fw-bold mb-2">Güvenli Hizmet</h5>
                    <p className="small text-muted mb-0">
                      Tüm bakıcılarımız kapsamlı bir şekilde kontrol edilir ve düzenli olarak değerlendirilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BakiciDetayPage;