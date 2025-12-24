/* DATA.JS
    Bu dosya projenin veritabanıdır.
    Ders içerikleri, açıklamalar ve örnek kodlar burada tutulur.
*/

const courseData = [
    // ===========================
    // 1. BÖLÜM: HTML (İSKELET)
    // ===========================
    {
        id: "html-giris",
        category: "1. HTML Temelleri",
        title: "HTML Nedir & Başlıklar",
        description: `
            <p><strong>HTML</strong> bir web sitesinin iskeletidir. Sitedeki her yazı, resim veya buton bir HTML etiketidir.</p>
            <p>Başlıklar <code>&lt;h1&gt;</code> (En Büyük) ile <code>&lt;h6&gt;</code> (En Küçük) arasında sıralanır. Google sitenizi bu başlıklara göre tanır.</p>
        `,
        code: `
<h1>Bu bir H1 Başlığıdır (En Önemli)</h1>
<h2>Bu bir H2 Başlığıdır</h2>
<h3>Bu bir H3 Başlığıdır</h3>

<p>Bu ise normal bir paragraf yazısıdır.</p>
        `
    },
    {
        id: "html-metin",
        category: "1. HTML Temelleri",
        title: "Metin Biçimlendirme",
        description: `
            <p>Yazıları şekillendirmek için özel etiketler kullanırız:</p>
            <ul>
                <li><code>&lt;b&gt;</code>: Yazıyı <b>kalın (bold)</b> yapar.</li>
                <li><code>&lt;i&gt;</code>: Yazıyı <i>eğik (italic)</i> yapar.</li>
                <li><code>&lt;br&gt;</code>: Bir alt satıra geçer.</li>
                <li><code>&lt;hr&gt;</code>: Sayfaya yatay bir çizgi çeker.</li>
            </ul>
        `,
        code: `
<p>
    Bu cümlede <b>kalın</b> ve <i>eğik</i> kelimeler var.
</p>

<hr> <p>
    Bu cümle birinci satırdır.<br>
    Bu cümle ise br etiketi sayesinde alt satıra geçmiştir.
</p>
        `
    },
    {
        id: "html-link-resim",
        category: "1. HTML Temelleri",
        title: "Linkler ve Resimler",
        description: `
            <p>Web'in temeli bağlantılardır. Başka bir sayfaya gitmek için <code>&lt;a&gt;</code> (Link), resim göstermek için <code>&lt;img&gt;</code> etiketi kullanılır.</p>
            <p>Resim etiketinde <code>src</code> (kaynak) kısmına resmin adresi yazılır.</p>
        `,
        code: `
<p>
    Google'a gitmek için <a href="https://google.com" target="_blank" style="color:#3dd5f3;">buraya tıklayın</a>.
</p>

<p>Aşağıdaki resim internetten çekilmiştir:</p>
<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" 
     width="250" 
     style="border-radius: 10px; border: 2px solid white;">
        `
    },

    // ===========================
    // 2. BÖLÜM: CSS (TASARIM)
    // ===========================
    {
        id: "css-renkler",
        category: "2. CSS ve Tasarım",
        title: "Renkler ve Arkaplan",
        description: `
            <p><strong>CSS</strong>, HTML iskeletine giydirdiğimiz kıyafettir. Sitenin renklerini ve boyutlarını ayarlar.</p>
            <ul>
                <li><code>color</code>: Yazının rengini değiştirir.</li>
                <li><code>background-color</code>: Kutunun veya sayfanın arka planını boyar.</li>
            </ul>
        `,
        code: `
<div style="background-color: #2c3e50; padding: 20px; color: white; border-radius: 8px;">
    <h3 style="color: #f1c40f;">Özel Renkli Başlık</h3>
    <p>
        Bu kutunun arka planı koyu renk (#2c3e50), 
        yazı rengi ise beyazdır.
    </p>
</div>
        `
    },
    {
        id: "css-kutu",
        category: "2. CSS ve Tasarım",
        title: "Kutu Modeli (Box Model)",
        description: `
            <p>Web tasarımında her şey bir kutudur. Bu kutunun 3 önemli ayarı vardır:</p>
            <ol>
                <li><strong>Padding:</strong> İç boşluk (Yazı ile çerçeve arası).</li>
                <li><strong>Border:</strong> Çerçeve (Kenarlık).</li>
                <li><strong>Margin:</strong> Dış boşluk (Kutular arası mesafe).</li>
            </ol>
        `,
        code: `
<div style="border: 5px solid #3dd5f3; padding: 20px; margin: 10px; background-color: #222; color: #fff;">
    <strong>Bu bir kutudur (Div)</strong><br>
    Border: 5px (Mavi Çerçeve)<br>
    Padding: 20px (İçeriği kenardan uzaklaştırdı)<br>
</div>
        `
    },

    // ===========================
    // 3. BÖLÜM: BOOTSTRAP (HAZIR KÜTÜPHANE)
    // ===========================
    {
        id: "bs-grid",
        category: "3. Bootstrap",
        title: "Grid Sistemi (Izgara)",
        description: `
            <p><strong>Bootstrap</strong>, kod yazmayı hızlandıran hazır bir kütüphanedir. Sayfayı yan yana bölmek için Grid sistemini kullanır.</p>
            <p>Ekranı 12 parça kabul eder. <code>col-4</code> derseniz ekranın 3'te 1'ini kaplar (4/12).</p>
        `,
        code: `
<div class="row text-center text-white">
    <div class="col-md-4 bg-primary p-3">
        Sol Kutu (col-4)
    </div>
    <div class="col-md-4 bg-success p-3">
        Orta Kutu (col-4)
    </div>
    <div class="col-md-4 bg-danger p-3">
        Sağ Kutu (col-4)
    </div>
</div>
        `
    },
    {
        id: "bs-buton",
        category: "3. Bootstrap",
        title: "Hazır Butonlar",
        description: `
            <p>Bootstrap ile uzun CSS kodları yazmadan, sadece sınıf (class) isimleri vererek şık butonlar yapabiliriz.</p>
            <p>Örneğin: <code>btn btn-primary</code> mavi buton, <code>btn btn-danger</code> kırmızı buton yapar.</p>
        `,
        code: `
<button class="btn btn-primary">Giriş Yap</button>
<button class="btn btn-success">Kaydet</button>
<button class="btn btn-danger">Sil</button>
<button class="btn btn-warning">Düzenle</button>
<button class="btn btn-outline-light">Detaylar</button>
        `
    },

    // ===========================
    // 4. BÖLÜM: JAVASCRIPT (ETKİLEŞİM)
    // ===========================
    {
        id: "js-etkilesim",
        category: "4. JavaScript",
        title: "Tıklama ve Etkileşim",
        description: `
            <p><strong>JavaScript</strong> siteye "beyin" ekler. Tıklamaları algılar ve işlem yapar.</p>
            <p>Aşağıdaki örnekte butona tıklandığında (<code>onclick</code>) bir uyarı mesajı (alert) çıkacaktır.</p>
        `,
        code: `
<button class="btn btn-lg btn-warning" onclick="alert('Tebrikler! JavaScript çalışıyor.')">
    Bana Tıkla
</button>
        `
    },
    {
        id: "js-dom",
        category: "4. JavaScript",
        title: "İçerik Değiştirme",
        description: `
            <p>JavaScript ile sayfadaki yazıları sayfa yenilenmeden değiştirebiliriz. Buna <strong>DOM Manipülasyonu</strong> denir.</p>
            <p>Aşağıdaki butona basınca başlığın değiştiğini göreceksiniz.</p>
        `,
        code: `
<h3 id="ozelBaslik" style="color: #ccc;">Bu yazı değişecek...</h3>

<button class="btn btn-sm btn-info" onclick="yaziyiDegistir()">
    Değiştir
</button>

<script>
    function yaziyiDegistir() {
        document.getElementById('ozelBaslik').innerText = "Yazı Başarıyla Değiştirildi!";
        document.getElementById('ozelBaslik').style.color = "#3dd5f3";
    }
</script>
        `
    },
    {
        id: "js-karar",
        category: "4. JavaScript",
        title: "Şifre Kontrolü (If-Else)",
        description: `
            <p>Programlamada karar vermek için <strong>If (Eğer) - Else (Değilse)</strong> yapısı kullanılır.</p>
            <p>Örnek: Şifre '1234' ise "Giriş Başarılı", değilse "Hatalı Şifre" yazar.</p>
        `,
        code: `
<input type="text" id="passInput" placeholder="Şifre (1234)" class="form-control mb-2" style="width: 200px;">
<button class="btn btn-success" onclick="sifreKontrol()">Giriş Yap</button>
<p id="mesajKutusu" class="mt-2"></p>

<script>
    function sifreKontrol() {
        var girilen = document.getElementById('passInput').value;
        var mesaj = document.getElementById('mesajKutusu');

        if (girilen == '1234') {
            mesaj.innerHTML = '<span style="color:#2ecc71">✅ Şifre Doğru!</span>';
        } else {
            mesaj.innerHTML = '<span style="color:#e74c3c">❌ Hatalı Şifre!</span>';
        }
    }
</script>
        `
    }
];