# Fairbnb

## Test Senaryosu
Airbnb benzeri gayrımenkul kiralama uygulaması önyüz geliştirmesi yapılmaktadır. Geliştirmenin bu fazında üç görev yapılacaktır. Detay sayfası arayüzü görsel olarak düzenlenmeli, kullanılan veriler mock katmanına taşınmalı ve RentalService için unit testler yazılmalıdır.

## Beklenilen Aktiviteler
- RentalService (`rental.service.ts`) içindeki verilerin bir mock katmanına taşınması. Express.js, json-server veya mock httpinterceptor kullanılabilir. Veriler json formatında `/src/assets/db/rental.json` dosyasında bulunmaktadır.
- Rental Detail sayfası arayüz düzenlemesinin yapılması. HTML ve CSS kullanarak arayüzün iyileştirilmesi.
- RentalDetailComponent ve RentalService unit test’lerinin yazılması

## Başarı Kondisyonları
- Linter hatası olmaması
- Projenin `--prod --aot` ile başarılı şekilde derlenmesi
- Tüm unit testlerin başarılı olması
- RentalDetailComponent ve RentalService testlerinin kod kapsama oranının en az %80 olması.
