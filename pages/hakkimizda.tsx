import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { 
  FaUsers, 
  FaHandHoldingHeart, 
  FaLightbulb, 
  FaLock, 
  FaMedal, 
  FaShieldAlt 
} from 'react-icons/fa';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Ayşe Demir',
      position: 'Kurucu & CEO',
      image: '/team1.jpg',
      bio: 'Çocuk gelişimi uzmanı ve iki çocuk annesi. Aileler için güvenilir bakıcı bulmanın zorluğunu bizzat yaşadıktan sonra bu platformu kurdu.'
    },
    {
      name: 'Mehmet Yılmaz',
      position: 'CTO',
      image: '/team2.jpg',
      bio: 'Teknoloji dünyasında 15 yıllık deneyime sahip bir yazılım mühendisi. Güvenli ve kullanıcı dostu platformlar geliştirme konusunda uzman.'
    },
    {
      name: 'Zeynep Kaya',
      position: 'Operasyon Direktörü',
      image: '/team3.jpg',
      bio: 'İnsan kaynakları geçmişine sahip, bakıcı seçim ve değerlendirme süreçlerini yöneten ekip lideri.'
    },
    {
      name: 'Ali Özkan',
      position: 'Pazarlama Müdürü',
      image: '/team4.jpg',
      bio: 'Dijital pazarlama stratejisti ve iki yıldır BakıcıBul ekibinin bir parçası.'
    }
  ];

  // Values data
  const values = [
    {
      icon: <FaHandHoldingHeart size={40} className="text-primary" />,
      title: 'Aile Önceliği',
      description: 'Her kararımızda ailelerin refahını ve mutluluğunu ön planda tutuyoruz.'
    },
    {
      icon: <FaShieldAlt size={40} className="text-primary" />,
      title: 'Güvenlik',
      description: 'Platformumuzda yer alan her bakıcı titiz bir güvenlik kontrolünden geçer.'
    },
    {
      icon: <FaLightbulb size={40} className="text-primary" />,
      title: 'Yenilikçilik',
      description: 'Sürekli olarak hizmetlerimizi iyileştirmek için yenilikçi çözümler geliştiriyoruz.'
    },
    {
      icon: <FaUsers size={40} className="text-primary" />,
      title: 'Topluluk',
      description: 'Güçlü bir bakıcı ve aile topluluğu oluşturmayı hedefliyoruz.'
    },
    {
      icon: <FaMedal size={40} className="text-primary" />,
      title: 'Kalite',
      description: 'Her zaman en kaliteli bakım hizmetini sunmayı taahhüt ediyoruz.'
    },
    {
      icon: <FaLock size={40} className="text-primary" />,
      title: 'Gizlilik',
      description: 'Kullanıcılarımızın kişisel bilgilerinin gizliliğine ve güvenliğine önem veriyoruz.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="fw-bold display-4 mb-3">Hakkımızda</h1>
              <p className="lead mb-4">
                BakıcıBul, Türkiye'nin en güvenilir bakıcı bulma platformudur. 
                Misyonumuz, aileleri güvenilir bakıcılarla buluşturarak, 
                hem ailelerin hem de bakıcıların hayatını kolaylaştırmaktır.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
                {/* Replace with actual image */}
                <div className="bg-secondary bg-opacity-25 h-100 w-100 d-flex align-items-center justify-content-center">
                  <p className="text-center fs-3 text-white">Ofis Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <h2 className="fw-bold mb-3">Hikayemiz</h2>
              <p className="mb-3">
                BakıcıBul, 2020 yılında iki çocuk annesi ve çocuk gelişimi uzmanı Ayşe Demir tarafından kuruldu. 
                Ayşe, kendi çocukları için güvenilir bir bakıcı bulma sürecinde yaşadığı zorluklar sonrasında, 
                bu sorunu çözmek için harekete geçmeye karar verdi.
              </p>
              <p className="mb-3">
                Teknoloji ve insan kaynakları alanlarında uzman bir ekip kurarak, güvenli, şeffaf ve 
                kullanımı kolay bir platform geliştirmeye odaklandı. Amacı, hem ailelerin güvenilir 
                bakıcılara kolayca ulaşmasını sağlamak, hem de kaliteli bakıcıların değerini artırmaktı.
              </p>
              <p className="mb-3">
                Bugün BakıcıBul, Türkiye'nin dört bir yanında 10.000'den fazla bakıcı ve 15.000'den fazla 
                aileye hizmet veren, alanında lider bir platform haline geldi. Ekibimiz, her kullanıcının 
                deneyimini iyileştirmek için sürekli olarak çalışmaktadır.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
                {/* Replace with actual image */}
                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                  <p className="m-0 fs-3">Kurucu Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Değerlerimiz</h2>
            <p className="text-muted">Her kararımızda bizi yönlendiren temel prensiplerimiz</p>
          </div>
          
          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      {value.icon}
                    </div>
                    <h4 className="card-title fw-bold mb-3">{value.title}</h4>
                    <p className="card-text text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Ekibimizle Tanışın</h2>
            <p className="text-muted">BakıcıBul'u hayata geçiren tutkulu ekibimiz</p>
          </div>
          
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative" style={{ height: '280px' }}>
                    {/* Replace with actual image */}
                    <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                      <p className="m-0">Ekip Üyesi</p>
                    </div>
                  </div>
                  <div className="card-body text-center p-4">
                    <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary mb-3">{member.position}</p>
                    <p className="card-text text-muted small">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <h2 className="fw-bold display-4 mb-1">10,000+</h2>
              <p className="mb-0">Kayıtlı Bakıcı</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <h2 className="fw-bold display-4 mb-1">15,000+</h2>
              <p className="mb-0">Mutlu Aile</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <h2 className="fw-bold display-4 mb-1">50,000+</h2>
              <p className="mb-0">Tamamlanan Hizmet</p>
            </div>
            <div className="col-md-3">
              <h2 className="fw-bold display-4 mb-1">4.8/5</h2>
              <p className="mb-0">Ortalama Değerlendirme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Müşteri Yorumları</h2>
            <p className="text-muted">Kullanıcılarımızın deneyimleri hakkında ne söylüyor?</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "BakıcıBul sayesinde bebeğim için harika bir bakıcı buldum. Platform çok kullanışlı
                    ve bakıcının tüm referanslarını görebilmek bana büyük güven verdi."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Merve Yıldız</h6>
                      <p className="mb-0 small text-muted">İstanbul</p>
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
                      <i key={i} className="fas fa-star me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "Babam için güvenilir bir bakıcı arıyordum ve BakıcıBul'da hemşirelik geçmişi olan
                    harika bir bakıcı bulduk. Süreç çok kolay ve hızlıydı."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Kemal Öztürk</h6>
                      <p className="mb-0 small text-muted">Ankara</p>
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
                      <i key={i} className="fas fa-star me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-4">
                    "Bakıcı olarak platformda çalışmaya başladım ve harika ailelerle tanıştım. Ödeme sistemi
                    güvenli ve platformun ekibi her zaman yardımcı oluyor."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-secondary rounded-circle me-3" style={{ width: '50px', height: '50px' }}></div>
                    <div>
                      <h6 className="mb-0 fw-bold">Fatma Aksoy</h6>
                      <p className="mb-0 small text-muted">İzmir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Bize Katılın</h2>
              <p className="mb-4">
                BakıcıBul olarak sürekli büyüyen ekibimize yetenekli ve tutkulu profesyoneller arıyoruz. 
                Ailelere ve bakıcılara daha iyi hizmet vermek için teknoloji, müşteri hizmetleri ve 
                ürün geliştirme alanlarında fırsatlar sunuyoruz.
              </p>
              <Link href="/kariyer" className="btn btn-primary px-4 py-2">
                Kariyer Fırsatlarını Keşfet
              </Link>
            </div>
            
            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '350px' }}>
                {/* Replace with actual image */}
                <div className="bg-secondary h-100 w-100 d-flex align-items-center justify-content-center text-light">
                  <p className="m-0 fs-3">Ekip Çalışması Görseli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Hemen Başlayın</h2>
          <p className="lead mb-4">
            Aileniz için güvenilir bakıcıyı bulmak artık çok kolay. 
            BakıcıBul ile hemen bugün yolculuğunuza başlayın.
          </p>
          <div>
            <Link href="/bakicilar" className="btn btn-light btn-lg px-4 me-3">
              Bakıcıları Keşfet
            </Link>
            <Link href="/kayit" className="btn btn-outline-light btn-lg px-4">
              Ücretsiz Üye Ol
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;