import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUser, FaSearch, FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          <span className="text-primary">Bakıcı</span>Bul
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/bakicilar" className={`nav-link ${router.pathname.startsWith('/bakicilar') ? 'active' : ''}`}>
                Bakıcılar
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/nasil-calisir" className={`nav-link ${router.pathname === '/nasil-calisir' ? 'active' : ''}`}>
                Nasıl Çalışır
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/hakkimizda" className={`nav-link ${router.pathname === '/hakkimizda' ? 'active' : ''}`}>
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/iletisim" className={`nav-link ${router.pathname === '/iletisim' ? 'active' : ''}`}>
                İletişim
              </Link>
            </li>
          </ul>
          
          <div className="d-flex">
            <Link href="/arama" className="btn btn-outline-primary me-2">
              <FaSearch className="me-1" /> Bakıcı Ara
            </Link>
            <Link href="/giris" className="btn btn-primary">
              <FaUser className="me-1" /> Giriş Yap
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;