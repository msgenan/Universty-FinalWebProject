/* BOOTSTRAP.JS - Bootstrap Ders İçerikleri (Görsel ve İnteraktif) */

const bootstrapData = [
// 1. BOOTSTRAP NEDİR?
    {
        id: "bs-nedir",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "1. Bootstrap Nedir?",
        description: `
            <p>Bootstrap, Twitter tarafından geliştirilen, dünyanın en popüler CSS kütüphanesidir. Mantığı çok basittir:</p>
            
            <div style="background: #2b3035; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 20px;">
                    <div style="text-align: center; flex: 1;">
                        <span style="font-size: 2rem;">🧱</span>
                        <h6 style="color: #adb5bd;">Saf CSS</h6>
                        <p style="font-size: 0.8rem;">Tuğlaları tek tek örüp duvar yapmaktır. Özgürsünüz ama çok zaman alır.</p>
                    </div>
                    <div style="font-size: 1.5rem; color: #666;">VS</div>
                    <div style="text-align: center; flex: 1;">
                        <span style="font-size: 2rem;">🏗️</span>
                        <h6 style="color: #3dd5f3;">Bootstrap</h6>
                        <p style="font-size: 0.8rem;">Hazır prefabrik duvarları (Class) getirip birleştirmektir. Çok hızlıdır.</p>
                    </div>
                </div>
            </div>
            
            <p><strong>Kurulum:</strong> Bootstrap'i kullanmak için şu kodu <code>&lt;head&gt;</code> etiketleri arasına ekleriz:</p>
            <div style="background:#000; color:#3dd5f3; padding:10px; border-radius:5px; font-family:monospace; font-size:0.8rem; margin-bottom:15px;">
                &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
            </div>

            <p>Bundan sonra tek yapmamız gereken HTML etiketine doğru <strong>class</strong> ismini (örn: <code>btn btn-danger</code>) vermektir.</p>
        `,
        code: `
<div class="alert alert-success">
  Bootstrap projemize başarıyla eklendi!
</div>
        `
    },

    // 2. RENKLER (Colors)
    {
        id: "bs-renkler",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "2. Renk Paleti (Colors)",
        description: `
            <p>Bootstrap'te renkler standart isimlerle gelir (Ders Notu s.44). Renk kodları (#FF0000) ezberlemeye gerek yoktur.</p>
            <p>İki temel kullanım vardır:</p>
            <ul>
                <li><strong>text-*:</strong> Yazı rengini değiştirir (Örn: <code>text-danger</code>).</li>
                <li><strong>bg-*:</strong> Arka plan rengini değiştirir (Örn: <code>bg-primary</code>).</li>
            </ul>
        `,
        code: `
<div class="p-3 mb-2 bg-primary text-white">.bg-primary (Ana Renk - Mavi)</div>
<div class="p-3 mb-2 bg-success text-white">.bg-success (Başarılı - Yeşil)</div>
<div class="p-3 mb-2 bg-danger text-white">.bg-danger (Hata - Kırmızı)</div>
<div class="p-3 mb-2 bg-warning text-dark">.bg-warning (Uyarı - Turuncu)</div>
<div class="p-3 mb-2 bg-info text-dark">.bg-info (Bilgi - Açık Mavi)</div>
<div class="p-3 mb-2 bg-dark text-white">.bg-dark (Koyu Tema)</div>
        `
    },

    // 3. BUTONLAR (Buttons)
    {
        id: "bs-butonlar",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "3. Butonlar (Buttons)",
        description: `
            <p>Normal HTML butonları çirkindir. Bootstrap'in <code>.btn</code> sınıfları ile anında şık butonlar yapabiliriz.</p>
            <p>Ek özellikler:</p>
            <ul>
                <li><strong>btn-lg:</strong> Büyük buton.</li>
                <li><strong>btn-outline-*:</strong> Sadece çerçeveli buton.</li>
            </ul>
        `,
        code: `
<button class="btn btn-primary">Giriş Yap</button>
<button class="btn btn-danger">Sil</button>

<hr style="border-color: #555;">

<button class="btn btn-outline-success">Kaydet</button>
<button class="btn btn-outline-warning">Düzenle</button>

<button class="btn btn-info btn-lg w-100 mt-2">Ödeme Yap (Büyük)</button>
        `
    },

    // 4. UYARI KUTULARI (Alerts)
    {
        id: "bs-alert",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "4. Uyarı Mesajları (Alerts)",
        description: `
            <p>Kullanıcıya geri bildirim vermek için (Örn: "Şifre Yanlış", "Kayıt Başarılı") kullanılan renkli kutulardır.</p>
        `,
        code: `
<div class="alert alert-success">
  <strong>Tebrikler!</strong> İşleminiz başarıyla tamamlandı.
</div>

<div class="alert alert-danger">
  <strong>Hata!</strong> Kullanıcı adı veya şifre yanlış.
</div>

<div class="alert alert-warning">
  <strong>Dikkat!</strong> Oturumunuz sonlanmak üzere.
</div>
        `
    },

    // 5. TABLOLAR (Tables) - PDF'te Vurgulanan Kısım
    {
        id: "bs-tablolar",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "5. Tablolar (Tables)",
        description: `
            <p>Ders notlarımızda (Sayfa 5) detaylıca işlediğimiz gibi, <code>.table</code> sınıfı ile sıradan tabloları modern hale getirebiliriz.</p>
            <p>Sık kullanılan yan sınıflar:</p>
            <ul>
                <li><code>.table-striped</code>: Satırları zebra gibi renklendirir.</li>
                <li><code>.table-hover</code>: Üzerine gelince satırın rengini değiştirir.</li>
                <li><code>.table-dark</code>: Koyu tema uygular.</li>
            </ul>
        `,
        code: `
<table class="table table-dark table-hover table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Ad</th>
      <th>Soyad</th>
      <th>Puan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ahmet</td>
      <td>Yılmaz</td>
      <td><span class="badge bg-success">90</span></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ayşe</td>
      <td>Demir</td>
      <td><span class="badge bg-warning text-dark">75</span></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Mehmet</td>
      <td>Öz</td>
      <td><span class="badge bg-danger">45</span></td>
    </tr>
  </tbody>
</table>
        `
    },

    // 6. GRID SİSTEMİ (Izgara) - EN ÖNEMLİ KONU
    {
        id: "bs-grid",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "6. Grid Sistemi (Sayfa Düzeni)",
        description: `
            <p>Bootstrap sayfayı hayali olarak <strong>12 eşit parçaya</strong> böler. Biz bu parçaları birleştirerek düzeni kurarız.</p>
            <div style="display:flex; gap:2px; margin-bottom:10px; opacity:0.7;">
                ${Array(12).fill('<div style="background:#3dd5f3; height:10px; flex:1;"></div>').join('')}
            </div>
            <ul>
                <li><strong>.row:</strong> Satır oluşturur.</li>
                <li><strong>.col-*:</strong> Sütun oluşturur. (Örn: <code>col-6</code> ekranın yarısıdır).</li>
            </ul>
        `,
        code: `
<div class="container text-center text-white">
  
  <div class="row mb-3">
    <div class="col-6 bg-primary p-3">Sol Taraf (col-6)</div>
    <div class="col-6 bg-danger p-3">Sağ Taraf (col-6)</div>
  </div>

  <div class="row mb-3">
    <div class="col-4 bg-warning text-dark p-3">Sol (col-4)</div>
    <div class="col-4 bg-info text-dark p-3">Orta (col-4)</div>
    <div class="col-4 bg-success p-3">Sağ (col-4)</div>
  </div>

  <div class="row">
    <div class="col-4 bg-secondary p-3">Menü (col-4)</div>
    <div class="col-8 bg-dark p-3">İçerik Alanı (col-8)</div>
  </div>

</div>
        `
    },

    // 7. KARTLAR (Cards)
    {
        id: "bs-cards",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "7. Kart Yapısı (Cards)",
        description: `
            <p>Ürün göstermek, blog yazısı listelemek veya profil kartı yapmak için kullanılan en yaygın bileşendir.</p>
        `,
        code: `
<div class="card" style="width: 18rem; background-color: #222; border: 1px solid #444; color: white;">
  <img src="https://via.placeholder.com/300x150/333/fff?text=Kodlama+Resmi" class="card-img-top" alt="...">
  
  <div class="card-body">
    <h5 class="card-title text-info">Web Eğitimi</h5>
    <p class="card-text text-muted">Bootstrap ile modern web siteleri tasarlamayı öğreniyoruz.</p>
    <a href="#" class="btn btn-primary btn-sm">Derse Git</a>
  </div>
</div>
        `
    },

    // 8. BOŞLUKLAR (Spacing)
    {
        id: "bs-spacing",
        category: "2. CSS (Tasarım)",
        subcategory: "Bootstrap Framework",
        title: "8. Boşluklar (Margin & Padding)",
        description: `
            <p>CSS yazmadan boşluk bırakmak için <code>m</code> (margin) ve <code>p</code> (padding) harfleri kullanılır.</p>
            <ul>
                <li><strong>mt-5:</strong> Margin Top (Üstten) 5 birim boşluk.</li>
                <li><strong>p-3:</strong> Padding (İçten) 3 birim boşluk.</li>
                <li><strong>mx-auto:</strong> Yatayda ortalar.</li>
            </ul>
        `,
        code: `
<div class="bg-light text-dark p-4 border rounded">
    <h5 class="mb-3">Boşluk Örneği</h5>
    <button class="btn btn-dark">Normal</button>
    <button class="btn btn-dark ms-3">Soldan Boşluklu (ms-3)</button>
</div>
        `
    }
];