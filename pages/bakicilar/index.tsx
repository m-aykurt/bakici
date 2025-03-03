import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { FaStar, FaMapMarkerAlt, FaFilter, FaSearch } from 'react-icons/fa';

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
    description: 'Bebek bakımında 5 yıllık tecrübem var. 0-3 yaş arası bebeklerin bakımında uzmanım.',
    services: ['Bebek Bakımı', 'Oyun Etkinlikleri', 'Beslenme'],
    languages: ['Türkçe', 'İngilizce'],
    availability: ['Hafta içi', 'Tam zamanlı'],
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
    description: 'Yaşlı bakımında profesyonel tecrübeye sahibim. Medikal geçmişim var ve yaşlılarla çalışmayı seviyorum.',
    services: ['Yaşlı Bakımı', 'Medikal Destek', 'Ev İşleri Yardımı'],
    languages: ['Türkçe'],
    availability: ['Hafta içi', 'Hafta sonu', 'Yarı zamanlı'],
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
    description: 'Çocuk gelişimi mezunuyum ve bebek bakımında 4 yıllık tecrübem var. Çocuklarla vakit geçirmeyi seviyorum.',
    services: ['Bebek Bakımı', 'Eğitici Oyunlar', 'Okul Öncesi Eğitim'],
    languages: ['Türkçe', 'İngilizce'],
    availability: ['Tam zamanlı'],
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
    description: 'Hemşirelik geçmişim var ve yaşlı bakımında uzmanım. Hastalık durumlarında özel bakım sağlayabilirim.',
    services: ['Yaşlı Bakımı', 'Medikal Destek', 'Fiziksel Terapi Yardımı'],
    languages: ['Türkçe', 'Almanca'],
    availability: ['Hafta içi', 'Yarı zamanlı', 'Tam zamanlı'],
  },
  {
    id: 5,
    name: 'Fatma Öztürk',
    type: 'Bebek Bakıcısı',
    rating: 4.6,
    reviews: 37,
    image: '/bakici5.jpg',
    location: 'Maltepe, İstanbul',
    hourlyRate: 130,
    experience: 3,
    description: 'İki çocuk annesiyim ve bebek bakımında tecrübeliyim. Sabırlı ve sevecen bir yaklaşımım var.',
    services: ['Bebek Bakımı', 'Oyun Etkinlikleri'],
    languages: ['Türkçe'],
    availability: ['Hafta içi', 'Hafta sonu', 'Yarı zamanlı'],
  },
  {
    id: 6,
    name: 'Ahmet Yıldız',
    type: 'Yaşlı Bakıcısı',
    rating: 4.8,
    reviews: 45,
    image: '/bakici6.jpg',
    location: 'Şişli, İstanbul',
    hourlyRate: 190,
    experience: 6,
    description: 'Yaşlı bakımında uzun yıllar çalıştım. Alzheimer ve Parkinson hastaları ile de çalışma tecrübem var.',
    services: ['Yaşlı Bakımı', 'Medikal Destek', 'Fiziksel Egzersiz'],
    languages: ['Türkçe', 'İngilizce'],
    availability: ['Tam zamanlı'],
  },
  {
    id: 7,
    name: 'Hatice Demir',
    type: 'Bebek Bakıcısı',
    rating: 4.7,
    reviews: 29,
    image: '/bakici7.jpg',
    location: 'Üsküdar, İstanbul',
    hourlyRate: 145,
    experience: 5,
    description: 'Pedagoji mezunuyum ve çocuk gelişimi konusunda uzmanlığım var. Bebeklerle çalışmaktan keyif alıyorum.',
    services: ['Bebek Bakımı', 'Gelişim Aktiviteleri', 'Beslenme'],
    languages: ['Türkçe', 'Fransızca'],
    availability: ['Hafta içi', 'Hafta sonu', 'Yarı zamanlı'],
  },
  {
    id: 8,
    name: 'Mustafa Aydın',
    type: 'Yaşlı Bakıcısı',
    rating: 4.9,
    reviews: 55,
    image: '/bakici8.jpg',
    location: 'Beylikdüzü, İstanbul',
    hourlyRate: 175,
    experience: 9,
    description: 'Fizyoterapi geçmişim var ve yaşlı bakımında uzmanım. Hastane sonrası bakım konusunda tecrübeliyim.',
    services: ['Yaşlı Bakımı', 'Rehabilitasyon', 'Fiziksel Terapi'],
    languages: ['Türkçe'],
    availability: ['Hafta içi', 'Tam zamanlı'],
  },
];

const BakicilarPage = () => {
  const [caregivers, setCaregivers] = useState(caregiversData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    minRating: 0,
    minExperience: 0,
    maxPrice: 1000,
  });

  // Filter caregivers based on search term and filters
  useEffect(() => {
    let filteredCaregivers = caregiversData;

    // Search filter
    if (searchTerm) {
      filteredCaregivers = filteredCaregivers.filter(
        (caregiver) =>
          caregiver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          caregiver.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          caregiver.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Type filter
    if (filters.type) {
      filteredCaregivers = filteredCaregivers.filter(
        (caregiver) => caregiver.type === filters.type
      );
    }

    // Rating filter
    if (filters.minRating > 0) {
      filteredCaregivers = filteredCaregivers.filter(
        (caregiver) => caregiver.rating >= filters.minRating
      );
    }

    // Experience filter
    if (filters.minExperience > 0) {
      filteredCaregivers = filteredCaregivers.filter(
        (caregiver) => caregiver.experience >= filters.minExperience
      );
    }

    // Price filter
    if (filters.maxPrice < 1000) {
      filteredCaregivers = filteredCaregivers.filter(
        (caregiver) => caregiver.hourlyRate <= filters.maxPrice
      );
    }

    setCaregivers(filteredCaregivers);
  }, [searchTerm, filters]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      type: '',
      minRating: 0,
      minExperience: 0,
      maxPrice: 1000,
    });
  };

  return (
    <Layout>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            {/* Sidebar with filters */}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4">
                    <FaFilter className="me-2" /> Filtreler
                  </h5>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">Bakıcı Tipi</label>
                    <select 
                      className="form-select" 
                      name="type" 
                      value={filters.type}
                      onChange={handleFilterChange}
                    >
                      <option value="">Tümü</option>
                      <option value="Bebek Bakıcısı">Bebek Bakıcısı</option>
                      <option value="Yaşlı Bakıcısı">Yaşlı Bakıcısı</option>
                      <option value="Hasta Bakıcısı">Hasta Bakıcısı</option>
                      <option value="Engelli Bakıcısı">Engelli Bakıcısı</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">Minimum Puan</label>
                    <select 
                      className="form-select" 
                      name="minRating" 
                      value={filters.minRating}
                      onChange={handleFilterChange}
                    >
                      <option value="0">Tümü</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="4.5">4.5+</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">Minimum Deneyim (Yıl)</label>
                    <select 
                      className="form-select" 
                      name="minExperience" 
                      value={filters.minExperience}
                      onChange={handleFilterChange}
                    >
                      <option value="0">Tümü</option>
                      <option value="1">1+</option>
                      <option value="3">3+</option>
                      <option value="5">5+</option>
                      <option value="10">10+</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold">Maksimum Saat Ücreti (₺)</label>
                    <input 
                      type="range" 
                      className="form-range" 
                      min="50" 
                      max="300" 
                      step="10"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                    />
                    <div className="d-flex justify-content-between">
                      <span>50₺</span>
                      <span className="fw-bold">{filters.maxPrice}₺</span>
                      <span>300₺</span>
                    </div>
                  </div>
                  
                  <button 
                    className="btn btn-outline-primary w-100"
                    onClick={resetFilters}
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main content with search and list */}
            <div className="col-lg-9">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FaSearch />
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="İsim, konum veya anahtar kelime ile ara..." 
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <button className="btn btn-primary px-4">Ara</button>
                  </div>
                </div>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0 fw-bold">{caregivers.length} Bakıcı Bulundu</h4>
                <select className="form-select" style={{ width: 'auto' }}>
                  <option>Önerilen</option>
                  <option>Puanı Yüksek</option>
                  <option>Fiyat: Düşükten Yükseğe</option>
                  <option>Fiyat: Yüksekten Düşüğe</option>
                </select>
              </div>
              
              {caregivers.length > 0 ? (
                <div className="row g-4">
                  {caregivers.map((caregiver) => (
                    <div key={caregiver.id} className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="row g-0">
                          <div className="col-4">
                            <div className="position-relative h-100">
                              {/* Replace with actual image */}
                              <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                                <p className="m-0">Resim</p>
                              </div>
                              <div className="position-absolute top-0 end-0 m-2">
                                <span className="badge bg-primary d-flex align-items-center p-2">
                                  <FaStar className="me-1" /> {caregiver.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-8">
                            <div className="card-body d-flex flex-column h-100">
                              <h5 className="card-title fw-bold mb-1">{caregiver.name}</h5>
                              <p className="text-muted small">{caregiver.type} · {caregiver.experience} yıl deneyim</p>
                              
                              <div className="d-flex align-items-center mb-2">
                                <FaMapMarkerAlt className="text-primary me-2" size={14} />
                                <span className="small">{caregiver.location}</span>
                              </div>
                              
                              <p className="card-text small mb-3">
                                {caregiver.description.length > 80
                                  ? `${caregiver.description.slice(0, 80)}...`
                                  : caregiver.description}
                              </p>
                              
                              <div className="mt-auto d-flex justify-content-between align-items-center">
                                <span className="fw-bold text-primary">{caregiver.hourlyRate} ₺/saat</span>
                                <Link href={`/bakicilar/${caregiver.id}`} className="btn btn-sm btn-outline-primary">
                                  Profili Gör
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <h5>Aranan kriterlere uygun bakıcı bulunamadı.</h5>
                  <p className="text-muted">Lütfen farklı filtrelerle tekrar deneyin.</p>
                  <button 
                    className="btn btn-primary mt-3"
                    onClick={resetFilters}
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              )}
              
              {caregivers.length > 0 && (
                <div className="d-flex justify-content-center mt-5">
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BakicilarPage;