/* HTML.JS - HTML Ders İçerikleri (Genişletilmiş) */

const htmlData = [
    // 1. TEMEL İSKELET
    {
        id: "html-iskelet",
        category: "1. HTML (İskelet)",
        title: "1. HTML Sayfa Yapısı",
        description: `
            <p>Her web sayfası standart bir iskelet üzerine kurulur. Bu yapıyı insan vücuduna benzetebiliriz.</p>
            <ul>
                <li><strong>&lt;html&gt;:</strong> Kök etiket (Vücudun tamamı).</li>
                <li><strong>&lt;head&gt;:</strong> Beyin (Meta etiketler, başlık, ayarlar - Ekranda görünmez).</li>
                <li><strong>&lt;body&gt;:</strong> Gövde (Ekranda görünen her şey buradadır).</li>
            </ul>
        `,
        code: `
<!DOCTYPE html>
<html>
  <head>
    <title>Sayfa Başlığı</title>
  </head>
  <body>
    <h1>Merhaba Dünya!</h1>
    <p>Bu yazı body etiketi içindedir ve ekranda görünür.</p>
  </body>
</html>
        `
    },

    // 2. BAŞLIKLAR (H1-H6)
    {
        id: "html-basliklar",
        category: "1. HTML (İskelet)",
        title: "2. Başlıklar (Headings)",
        description: `
            <p>HTML'de başlıklar önem sırasına göre <strong>h1</strong>'den <strong>h6</strong>'ya kadar sıralanır.</p>
            <div class="alert alert-info">
                <small>⚠️ İpucu: <code>h1</code> etiketi sayfanın en önemli başlığıdır ve genelde sayfada sadece 1 tane kullanılır (SEO için önemlidir).</small>
            </div>
        `,
        code: `
<h1>h1 - En Büyük Başlık</h1>
<h2>h2 - Alt Başlık</h2>
<h3>h3 - Biraz Daha Küçük</h3>
<h4>h4 - Normal Başlık</h4>
<h5>h5 - Küçük Başlık</h5>
<h6>h6 - En Küçük Başlık</h6>
        `
    },

    // 3. PARAGRAF VE BİÇİMLENDİRME
    {
        id: "html-metin",
        category: "1. HTML (İskelet)",
        title: "3. Metin Biçimlendirme",
        description: `
            <p>Yazıları vurgulamak veya şekillendirmek için özel etiketler kullanırız.</p>
            <ul>
                <li><strong>&lt;p&gt;:</strong> Paragraf oluşturur (Alt satıra geçer).</li>
                <li><strong>&lt;b&gt; / &lt;strong&gt;:</strong> Kalın yazar.</li>
                <li><strong>&lt;i&gt; / &lt;em&gt;:</strong> İtalik (eğik) yazar.</li>
                <li><strong>&lt;u&gt;:</strong> Altını çizer.</li>
            </ul>
        `,
        code: `
<p>Bu normal bir paragraf yazısıdır.</p>

<p>
  Bu kelime <b>Kalın (Bold)</b> yazıldı.<br>
  Bu kelime <i>İtalik (Eğik)</i> yazıldı.<br>
  Bu kelime <u>Altı Çizili</u> yazıldı.<br>
  Bu kelime <mark>Vurgulanmış (Mark)</mark> yazıldı.
</p>
        `
    },

    // 4. BLOCK VS INLINE (Çok Önemli!)
    {
        id: "html-block-inline",
        category: "1. HTML (İskelet)",
        title: "4. Block vs Inline Elementler",
        description: `
            <p>HTML elementleri yerleşimlerine göre ikiye ayrılır (Ders notlarımızda sıkça vurguladığımız konu):</p>
            <ul>
                <li><strong>Block (Blok):</strong> Tüm satırı kaplar. Yanına başka eleman gelmesine izin vermez. (Örn: <code>div</code>, <code>h1</code>, <code>p</code>)</li>
                <li><strong>Inline (Satır İçi):</strong> Sadece içeriği kadar yer kaplar. Yan yana dizilebilirler. (Örn: <code>span</code>, <code>b</code>, <code>a</code>)</li>
            </ul>
        `,
        code: `
<div style="background-color: #e74c3c; color: white; padding: 10px; margin-bottom: 5px;">
  Ben bir DIV (Block) elementiyim. Yanıma kimseyi almam!
</div>

<div style="background-color: #c0392b; color: white; padding: 10px; margin-bottom: 20px;">
  Ben de Block elementim, alt satıra geçtim.
</div>

<span style="background-color: #3498db; color: white; padding: 5px;">
  Ben SPAN (Inline) 1
</span>

<span style="background-color: #2980b9; color: white; padding: 5px;">
  Ben SPAN (Inline) 2 - Yan yana geldik!
</span>
        `
    },

    // 5. LİSTELER
    {
        id: "html-listeler",
        category: "1. HTML (İskelet)",
        title: "5. Listeler (UL - OL)",
        description: `
            <p>Maddeler halinde içerik sunmak için kullanılır.</p>
            <ul>
                <li><strong>&lt;ul&gt;:</strong> Sırasız Liste (Unordered List) - Noktalı.</li>
                <li><strong>&lt;ol&gt;:</strong> Sıralı Liste (Ordered List) - Numaralı.</li>
                <li><strong>&lt;li&gt;:</strong> Liste Elemanı (List Item) - Her madde için kullanılır.</li>
            </ul>
        `,
        code: `
<h4>Market Listesi (Sırasız - ul)</h4>
<ul>
  <li>Ekmek</li>
  <li>Süt</li>
  <li>Yumurta</li>
</ul>

<h4>Yapılacaklar (Sıralı - ol)</h4>
<ol>
  <li>Uyan</li>
  <li>Kahvaltı Yap</li>
  <li>Kod Yaz</li>
</ol>
        `
    },

    // 6. LİNKLER (A Tag)
    {
        id: "html-link",
        category: "1. HTML (İskelet)",
        title: "6. Linkler (Bağlantılar)",
        description: `
            <p>İnternetin "Web" (Ağ) olmasını sağlayan etikettir. Başka sayfalara gitmemizi sağlar.</p>
            <p><strong>href:</strong> Gidilecek adresi belirtir.</p>
            <p><strong>target="_blank":</strong> Linki yeni sekmede açar.</p>
        `,
        code: `
<p>
  Web sitemizi ziyaret etmek için 
  <a href="https://www.google.com" target="_blank" style="color: #3dd5f3; font-weight: bold;">
    Buraya Tıklayın
  </a>
</p>

<p>
  Tıklanabilir Buton Görünümlü Link: <br>
  <a href="#" class="btn btn-primary btn-sm mt-2">Giriş Yap</a>
</p>
        `
    },

    // 7. GÖRSELLER (IMG)
    {
        id: "html-resim",
        category: "1. HTML (İskelet)",
        title: "7. Görseller (Images)",
        description: `
            <p>Sayfaya resim eklemek için <code>&lt;img&gt;</code> etiketi kullanılır. Bu etiketin kapanış tagı yoktur.</p>
            <ul>
                <li><strong>src:</strong> Resim kaynağı (URL veya dosya yolu).</li>
                <li><strong>alt:</strong> Resim yüklenemezse görünecek yazı (Alternatif metin).</li>
                <li><strong>width:</strong> Genişlik ayarı.</li>
            </ul>
        `,
        code: `
<img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
     width="300" 
     alt="Kodlama Resmi" 
     style="border-radius: 10px; border: 2px solid #fff;">

<p class="text-muted mt-2">Not: src kısmına internet linki veya 'resim.jpg' yazılabilir.</p>
        `
    },

    // 8. TABLOLAR
    {
        id: "html-tablo",
        category: "1. HTML (İskelet)",
        title: "8. Tablolar (Table)",
        description: `
            <p>Verileri satır ve sütunlar halinde göstermek için kullanılır.</p>
            <ul>
                <li><strong>tr (Table Row):</strong> Satır.</li>
                <li><strong>th (Table Head):</strong> Başlık hücresi (Kalın ve ortalı).</li>
                <li><strong>td (Table Data):</strong> Normal veri hücresi.</li>
            </ul>
        `,
        code: `
<table border="1" cellpadding="10" style="width: 100%; border-collapse: collapse; border-color: #444;">
  <tr style="background-color: #333; color: white;">
    <th>Öğrenci No</th>
    <th>Ad Soyad</th>
    <th>Not</th>
  </tr>
  
  <tr>
    <td>101</td>
    <td>Ahmet Yılmaz</td>
    <td>85</td>
  </tr>
  
  <tr>
    <td>102</td>
    <td>Ayşe Demir</td>
    <td>90</td>
  </tr>
</table>
        `
    },

    // 9. FORMLAR
    {
        id: "html-form",
        category: "1. HTML (İskelet)",
        title: "9. Formlar ve Inputlar",
        description: `
            <p>Kullanıcıdan veri almak için (Kayıt ol, Giriş yap vb.) form elemanları kullanılır.</p>
            <ul>
                <li><strong>type="text":</strong> Normal yazı kutusu.</li>
                <li><strong>type="password":</strong> Şifre kutusu (Gizli yazar).</li>
                <li><strong>type="checkbox":</strong> Onay kutusu.</li>
                <li><strong>placeholder:</strong> Kutunun içindeki ipucu yazısı.</li>
            </ul>
        `,
        code: `
<form>
  <label>Kullanıcı Adı:</label><br>
  <input type="text" placeholder="Adınızı yazın" style="padding: 5px; margin-bottom: 10px; width: 80%;">
  <br>
  
  <label>Şifre:</label><br>
  <input type="password" placeholder="******" style="padding: 5px; margin-bottom: 10px; width: 80%;">
  <br>
  
  <input type="checkbox" id="onay">
  <label for="onay">Kuralları kabul ediyorum</label>
  <br><br>
  
  <button type="button" class="btn btn-success">Kayıt Ol</button>
</form>
        `
    },

    // 10. DIV ve SPAN (Gruplama)
    {
        id: "html-div",
        category: "1. HTML (İskelet)",
        title: "10. Gruplama (Div)",
        description: `
            <p><strong>&lt;div&gt;</strong> etiketi tek başına bir şey yapmaz ancak diğer elementleri gruplamak ve CSS ile tasarım vermek için bir "kutu" görevi görür. Modern web tasarımının en temel yapı taşıdır.</p>
        `,
        code: `
<div style="background-color: #1abc9c; padding: 20px; border-radius: 10px; color: black; text-align: center;">
    <h3>Özel Bir Kutu</h3>
    <p>Bu başlık ve paragraf bir DIV kutusunun içindedir.</p>
    <button style="background: black; color: white; border: none; padding: 5px 10px;">Tıkla</button>
</div>
        `
    }
];