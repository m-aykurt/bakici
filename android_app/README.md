# Bakıcı Platform - Android Uygulaması

Bu proje, [Bakıcı Platform](https://github.com/path/Desktop/bakici/bakici-platform) web sitesinin Android uygulamasıdır. Uygulama, ailelerin bebek, yaşlı, hasta ve engelli bakıcılarına hızlı ve güvenilir bir şekilde erişmesini sağlar.

## Özellikler

- Bakıcı türü ve konuma göre arama yapma
- Öne çıkan bakıcıları görüntüleme
- Bakıcı profillerini inceleme
- Bakıcı değerlendirmelerini ve yorumlarını görüntüleme
- Bakıcı başvurusu yapma

## Ekran Görüntüleri

(Ekran görüntüleri buraya eklenecek)

## Gereksinimler

- Android Studio
- Android SDK 23 ve üzeri
- Java 8 ve üzeri

## Kurulum

1. Bu repository'yi klonlayın:
   ```
   git clone https://github.com/path/Desktop/bakici/bakici-platform.git
   ```

2. Android Studio'yu açın ve "Open an existing Android Studio project" seçeneğini seçin.

3. Klonladığınız repository içindeki `android_app` klasörünü seçin.

4. Gradle senkronizasyonunu bekleyin ve projeyi derleyin.

5. Uygulamayı çalıştırmak için bir emülatör veya fiziksel cihaz seçin ve "Run" butonuna tıklayın.

## Mimari

Uygulama, standart Android mimarisini kullanmaktadır:

- **Model**: Verileri temsil eden Java sınıfları (`Caregiver.java`)
- **View**: XML layout dosyaları ve bildirimler (`activity_main.xml`, `item_caregiver.xml`)
- **Controller**: Activity ve adapter sınıfları (`MainActivity.java`, `CaregiverAdapter.java`)

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inize push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

## İletişim

Proje hakkında sorularınız için: [email protected]