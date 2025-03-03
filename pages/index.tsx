import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { FaStar, FaSearch, FaMapMarkerAlt, FaUserShield, FaHandshake } from 'react-icons/fa';

// Mock data for featured caregivers
const featuredCaregivers = [
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
  },
  {
    id: 3,
    name: 'Zeynep Kaya',
    type: 'Bebek Bakıcısı',
    rating: 4.8,
    reviews: 63,
    image: '/bakici3.jpg',
    location: 'Ataşehir, İstanbul',
    hourlyRate: 140,
    experience: 4,
  },
  {
    id: 4,
    name: 'Ali Şahin',
    type: 'Yaşlı Bakıcısı',
    rating: 4.9,
    reviews: 51,
    image: '/bakici4.jpg',
    location: 'Bakırköy, İstanbul',
    hourlyRate: 170,
    experience: 8,
  },
];

export default function Home() {
  const [searchType, setSearchType] = useState('bebek');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for', searchType, 'bakıcısı in', location);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pe-lg-5 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">Güvenilir Bakıcılara Hızlıca Ulaşın</h1>
              <p className="lead mb-4">
                Türkiye'nin en güvenilir bakıcı platformunda aileniz için uygun bakıcıyı bulun. 
                Bebek ve yaşlı bakımında uzman ve kontrol edilmiş bakıcılarla tanışın.
              </p>
              
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <form onSubmit={handleSearch}>
                    <div className="row g-3">
                      <div className="col-md-5">
                        <label className="form-label">Bakıcı Tipi</label>
                        <select 
                          className="form-select" 
                          value={searchType}
                          onChange={(e) => setSearchType(e.target.value)}
                        >
                          <option value="bebek">Bebek Bakıcısı</option>
                          <option value="yasli">Yaşlı Bakıcısı</option>
                          <option value="hasta">Hasta Bakıcısı</option>
                          <option value="engelli">Engelli Bakıcısı</option>
                        </select>
                      </div>
                      
                      <div className="col-md-5">
                        <label className="form-label">Konum</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaMapMarkerAlt />
                          </span>
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Şehir veya ilçe"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-2">
                        <label className="form-label">&nbsp;</label>
                        <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center" type="submit">
                          <FaSearch className="me-2" /> Ara
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '500px' }}>
                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                  <p className="m-0">Hero Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <h2 className="fw-bold">10,000+</h2>
              <p className="mb-0">Kayıtlı Bakıcı</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h2 className="fw-bold">15,000+</h2>
              <p className="mb-0">Mutlu Aile</p>
            </div>
            <div className="col-md-4">
              <h2 className="fw-bold">50,000+</h2>
              <p className="mb-0">Tamamlanan Hizmet</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Nasıl Çalışır?</h2>
            <p className="text-muted">Sadece üç adımda ihtiyacınıza uygun bakıcıya ulaşın</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FaSearch size={30} className="text-primary" />
                  </div>
                  <h5 className="card-title fw-bold">1. Bakıcı Arayın</h5>
                  <p className="card-text text-muted">
                    İhtiyacınıza uygun bakıcıları konum ve referanslarına göre filtreleyin ve bulun.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FaUserShield size={30} className="text-primary" />
                  </div>
                  <h5 className="card-title fw-bold">2. Profilleri İnceleyin</h5>
                  <p className="card-text text-muted">
                    Bakıcıların detaylı profillerini, referanslarını ve diğer ailelerin yorumlarını inceleyin.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <FaHandshake size={30} className="text-primary" />
                  </div>
                  <h5 className="card-title fw-bold">3. İletişime Geçin</h5>
                  <p className="card-text text-muted">
                    Seçtiğiniz bakıcıyla direkt iletişime geçin ve hizmeti başlatın.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link href="/nasil-calisir" className="btn btn-primary px-4 py-2">
              Daha Fazla Bilgi Alın
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Caregivers Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">Öne Çıkan Bakıcılar</h2>
            <Link href="/bakicilar" className="btn btn-outline-primary">
              Tümünü Gör
            </Link>
          </div>
          
          <div className="row g-4">
            {featuredCaregivers.map((caregiver) => (
              <div key={caregiver.id} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative" style={{ height: '200px' }}>
                    {/* Replace with actual image */}
                    <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                      <p className="m-0">Bakıcı Resmi</p>
                    </div>
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-primary d-flex align-items-center p-2">
                        <FaStar className="me-1" /> {caregiver.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">{caregiver.name}</h5>
                    <p className="text-muted small mb-2">{caregiver.type} · {caregiver.experience} yıl deneyim</p>
                    
                    <div className="d-flex align-items-center mb-3">
                      <FaMapMarkerAlt className="text-primary me-2" size={14} />
                      <span className="small">{caregiver.location}</span>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">{caregiver.hourlyRate} ₺/saat</span>
                      <Link href={`/bakicilar/${caregiver.id}`} className="btn btn-sm btn-outline-primary">
                        Profili Gör
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Müşteri Yorumları</h2>
            <p className="text-muted">Platformumuzdan hizmet alan ailelerin deneyimleri</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-1" />
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "Seçtiğimiz bakıcı Ayşe Hanım bebeğimizle harika ilgileniyor. Platformda 
                    tüm referansları ve geçmiş deneyimleri görebildiğimiz için çok güvenle 
                    seçim yapabildik."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-secondary me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Deniz Yılmaz</h6>
                      <p className="mb-0 small text-muted">İstanbul</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-1" />
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "Annem için aradığım yaşlı bakıcısını burada buldum. Mehmet Bey çok 
                    profesyonel ve sabırlı biri. Annem de kendisinden son derece memnun. 
                    Teşekkürler BakıcıBul!"
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-secondary me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Sema Öztürk</h6>
                      <p className="mb-0 small text-muted">Ankara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-1" />
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "Bu platform sayesinde ikiz bebeklerimize bakacak tecrübeli bir bakıcı 
                    bulduk. Hem güvenlik kontrolleri hem de kullanım kolaylığı açısından 
                    herkese tavsiye ediyorum."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-secondary me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Ahmet Korkmaz</h6>
                      <p className="mb-0 small text-muted">İzmir</p>
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Siz de bakıcı olmak ister misiniz?</h2>
              <p className="lead mb-0">Esnek çalışma saatleri ve rekabetçi ücretlerle binlerce aileye hizmet verin.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/bakici-ol" className="btn btn-light btn-lg px-4">
                Hemen Başvurun
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}