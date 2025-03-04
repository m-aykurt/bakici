import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FaLock, FaUser, FaFacebook, FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
      setErrorMessage('Lütfen e-posta ve şifrenizi girin.');
      return;
    }
    
    // Simulate login process
    setIsLoading(true);
    setErrorMessage('');
    
    // In a real app, you would make an API call to authenticate the user
    setTimeout(() => {
      // For demo purposes, just redirect to the home page
      setIsLoading(false);
      window.location.href = '/';
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h1 className="fw-bold mb-1">Giriş Yap</h1>
                    <p className="text-muted">
                      Hesabınıza giriş yaparak platformumuzu kullanmaya devam edin.
                    </p>
                  </div>
                  
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">E-posta Adresi</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaUser />
                        </span>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          placeholder="E-posta adresinizi girin"
                          value={loginData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="password" className="form-label">Şifre</label>
                        <Link href="/sifremi-unuttum" className="small text-decoration-none">
                          Şifremi Unuttum
                        </Link>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="password" 
                          name="password"
                          placeholder="Şifrenizi girin"
                          value={loginData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="rememberMe" 
                          name="rememberMe"
                          checked={loginData.rememberMe}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Beni Hatırla
                        </label>
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100 py-2 mb-4" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Giriş Yapılıyor...
                        </>
                      ) : 'Giriş Yap'}
                    </button>
                    
                    <div className="text-center mb-4">
                      <p className="text-muted mb-0">
                        Hesabınız yok mu? <Link href="/kayit" className="text-decoration-none">Üye Olun</Link>
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
                              window.location.href = '/';
                            }, 1500);
                          }}
                          disabled={isLoading}
                        >
                          <FaGoogle className="me-2" /> Google ile Giriş
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
                              window.location.href = '/';
                            }, 1500);
                          }}
                          disabled={isLoading}
                        >
                          <FaFacebook className="me-2" /> Facebook ile Giriş
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-muted small mb-0">
                  Giriş yaparak <Link href="/kullanim-sartlari" className="text-decoration-none">Kullanım Şartları</Link> ve 
                  <Link href="/gizlilik-politikasi" className="text-decoration-none"> Gizlilik Politikası</Link>'nı kabul etmiş olursunuz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;