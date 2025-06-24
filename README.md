# SenKimSin?

React ile geliştirilmiş kişilik testleri uygulaması.

## Kurulum
1. Gerekli paketleri kurun:
   ```bash
   npm install
   ```
2. Geliştirme sunucusunu başlatın:
   ```bash
   npm start
   ```

## Testler
Uygulamadaki temel sayfaların doğru şekilde yüklenip yüklenmediğini kontrol eden testler bulunur.
Testleri çalıştırmak için:

```bash
npm test
```

## E-posta Gönderimi
`Contact` sayfası, EmailJS servisini kullanarak mesaj gönderir. Aşağıdaki çevre değişkenlerini tanımlamanız gerekir:

```
REACT_APP_EMAILJS_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID
REACT_APP_EMAILJS_USER_ID
```
