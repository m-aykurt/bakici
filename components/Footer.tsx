import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">
              <span className="text-primary">Bakıcı</span>Bul
            </h5>
            <p className="opacity-75">
              Türkiye'nin en güvenilir bebek ve yaşlı bakımı platformu. 
              Aileniz için en iyi bakıcıları bulmak artık çok kolay.
            </p>
            <div className="d-flex mt-3">
              <a href="#" className="text-light me-3">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-light me-3">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-light me-3">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-light">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Hızlı Linkler</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-light text-decoration-none opacity-75">
                  Ana Sayfa
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/bakicilar" className="text-light text-decoration-none opacity-75">
                  Bakıcılar
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/nasil-calisir" className="text-light text-decoration-none opacity-75">
                  Nasıl Çalışır
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/hakkimizda" className="text-light text-decoration-none opacity-75">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-light text-decoration-none opacity-75">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Hizmetler</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/bakicilar?tip=bebek" className="text-light text-decoration-none opacity-75">
                  Bebek Bakıcıları
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/bakicilar?tip=yasli" className="text-light text-decoration-none opacity-75">
                  Yaşlı Bakıcıları
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/bakicilar?tip=ozel" className="text-light text-decoration-none opacity-75">
                  Özel Bakım Hizmetleri
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/bakicilar?tip=hasta" className="text-light text-decoration-none opacity-75">
                  Hasta Bakıcıları
                </Link>
              </li>
              <li>
                <Link href="/bakicilar?tip=engelli" className="text-light text-decoration-none opacity-75">
                  Engelli Bakıcıları
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">İletişim</h6>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <FaMapMarkerAlt className="mt-1 me-2" />
                <span className="opacity-75">İstanbul, Türkiye</span>
              </li>
              <li className="d-flex mb-3">
                <FaPhone className="mt-1 me-2" />
                <span className="opacity-75">+90 555 123 4567</span>
              </li>
              <li className="d-flex">
                <FaEnvelope className="mt-1 me-2" />
                <span className="opacity-75">iletisim@bakicibul.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 opacity-75 small">
              &copy; {new Date().getFullYear()} BakıcıBul. Tüm hakları saklıdır.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link href="/gizlilik-politikasi" className="text-light text-decoration-none opacity-75 small">
                  Gizlilik Politikası
                </Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link href="/kullanim-sartlari" className="text-light text-decoration-none opacity-75 small">
                  Kullanım Şartları
                </Link>
              </li>
              <li className="list-inline-item ms-3">
                <Link href="/cerez-politikasi" className="text-light text-decoration-none opacity-75 small">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;