/* CSS.JS - CSS Ders İçerikleri (Genişletilmiş ve Görselleştirilmiş) */

const cssData = [
    // 1. CSS GİRİŞ
    {
        id: "css-nedir",
        category: "2. CSS (Tasarım)",
        title: "1. CSS Nedir ve Nasıl Eklenir?",
        description: `
            <p><strong>CSS (Cascading Style Sheets)</strong>, HTML elementlerini renklendirmek, boyutlandırmak ve hizalamak için kullanılır.</p>
            <p>3 farklı şekilde kullanılabilir (Ders Notu CSS-1):</p>
            <ul>
                <li><strong>Inline (Satır İçi):</strong> Etiketin içine <code>style="..."</code> yazılarak.</li>
                <li><strong>Internal (Dahili):</strong> <code>&lt;head&gt;</code> kısmına <code>&lt;style&gt;</code> açılarak.</li>
                <li><strong>External (Harici):</strong> Ayrı bir <code>.css</code> dosyası bağlanarak (En profesyonel yöntem).</li>
            </ul>
        `,
        code: `
<h4 style="color: red;">Bu yazı Inline CSS ile kırmızı oldu.</h4>

<style>
    .mavi-yazi { color: blue; font-weight: bold; }
</style>

<p class="mavi-yazi">Bu yazı Internal CSS ile mavi oldu.</p>
        `
    },

    // 2. RENKLER (COLORS)
    {
        id: "css-renkler",
        category: "2. CSS (Tasarım)",
        title: "2. Renkler (Color & Background)",
        description: `
            <p>Web sitelerinde renkler 3 şekilde belirtilebilir:</p>
            <ul>
                <li><strong>İsimle:</strong> <code>red</code>, <code>blue</code>, <code>orange</code>.</li>
                <li><strong>RGB Kodu:</strong> <code>rgb(255, 0, 0)</code> (Kırmızı, Yeşil, Mavi karışımı).</li>
                <li><strong>HEX Kodu:</strong> <code>#ff0000</code> (En sık kullanılan yöntem).</li>
            </ul>
        `,
        code: `
<div style="background-color: orange; color: black; padding: 10px; margin-bottom: 5px;">
    İsim ile (Orange)
</div>

<div style="background-color: rgb(0, 128, 0); color: white; padding: 10px; margin-bottom: 5px;">
    RGB ile (Yeşil - rgb(0, 128, 0))
</div>

<div style="background-color: #3498db; color: white; padding: 10px;">
    Hex Kod ile (Mavi - #3498db)
</div>
        `
    },

    // 3. KENARLIKLAR (BORDERS)
    {
        id: "css-border",
        category: "2. CSS (Tasarım)",
        title: "3. Kenarlıklar (Border & Radius)",
        description: `
            <p>Kutuların etrafına çizgi çekmek (border) ve köşelerini yuvarlatmak (border-radius) tasarıma modern bir hava katar.</p>
            <p>Ders notlarımızdaki (CSS-2) "Türkiye Cumhuriyeti" örneğindeki gibi kenarları şekillendirebiliriz.</p>
        `,
        code: `
<div style="border: 3px solid red; padding: 10px; margin-bottom: 10px;">
    Keskin Köşeler (border: 3px solid red)
</div>

<div style="border: 3px dashed #3dd5f3; padding: 10px; border-radius: 20px;">
    Yuvarlak Köşeler (border-radius: 20px)
</div>

<div style="width: 50px; height: 50px; background: yellow; border-radius: 50%; text-align: center; line-height: 50px; color: black; margin-top: 10px;">
    50%
</div>
        `
    },

    // 4. METİN BİÇİMLENDİRME
    {
        id: "css-text",
        category: "2. CSS (Tasarım)",
        title: "4. Metin Özellikleri (Typography)",
        description: `
            <p>Yazıların tipini, kalınlığını ve hizalamasını ayarladığımız kısımdır.</p>
            <ul>
                <li><strong>font-family:</strong> Yazı tipi (Arial, Times vb.).</li>
                <li><strong>font-weight:</strong> Kalınlık (bold).</li>
                <li><strong>text-align:</strong> Hizalama (center, right).</li>
                <li><strong>text-decoration:</strong> Alt çizgi ekleme/kaldırma.</li>
            </ul>
        `,
        code: `
<div style="border: 1px solid #555; padding: 10px;">
    
    <p style="text-align: center; font-weight: bold; font-family: 'Courier New';">
        Ortalanmış ve Kalın (Courier Fontu)
    </p>
    
    <p style="text-align: right; color: #adb5bd;">
        Sağa yaslı gri yazı.
    </p>
    
    <a href="#" style="text-decoration: none; color: #3dd5f3;">
        Alt çizgisi kaldırılmış Link
    </a>
</div>
        `
    },

    // 5. KUTU MODELİ (BOX MODEL) - ÖNEMLİ
    {
        id: "css-boxmodel",
        category: "2. CSS (Tasarım)",
        title: "5. Kutu Modeli (Box Model)",
        description: `
            <p>Her HTML elementi bir kutudur. Bu kutunun 3 önemli katmanı vardır:</p>
            <ul>
                <li><strong>Padding (İç Boşluk):</strong> İçerik ile çerçeve arasındaki mesafe.</li>
                <li><strong>Border (Çerçeve):</strong> Kutunun sınırı.</li>
                <li><strong>Margin (Dış Boşluk):</strong> Kutu ile diğer kutular arasındaki mesafe.</li>
            </ul>
        `,
        code: `
<div style="background-color: #f1c40f; padding: 20px; display: inline-block; color: black;">
    MARGIN (Dış)
    <div style="background-color: #e74c3c; padding: 20px; color: white;">
        BORDER (Çerçeve)
        <div style="background-color: #2ecc71; padding: 20px; color: black;">
            PADDING (İç)
            <div style="background-color: white; padding: 10px; font-weight: bold;">
                İÇERİK
            </div>
        </div>
    </div>
</div>
        `
    },

    // 6. WIDTH ve HEIGHT
    {
        id: "css-boyut",
        category: "2. CSS (Tasarım)",
        title: "6. Genişlik ve Yükseklik",
        description: `
            <p>Elementlerin ne kadar yer kaplayacağını <code>width</code> (genişlik) ve <code>height</code> (yükseklik) ile belirleriz.</p>
            <p>Piksel (px) sabit değerdir, Yüzde (%) ise ekran boyutuna göre değişir.</p>
        `,
        code: `
<div style="width: 200px; background: purple; color: white; padding: 5px; margin-bottom: 5px;">
    Width: 200px (Sabit)
</div>

<div style="width: 80%; background: rebeccapurple; color: white; padding: 5px;">
    Width: 80% (Sayfaya göre uzar)
</div>
        `
    },

    // 7. HOVER EFEKTİ (Etkileşim)
    {
        id: "css-hover",
        category: "2. CSS (Tasarım)",
        title: "7. Hover Efekti (Üzerine Gelince)",
        description: `
            <p>Kullanıcı fare ile bir elementin üzerine geldiğinde stilin değişmesini sağlar. İnteraktif sitelerin olmazsa olmazıdır.</p>
            <p>Ders notumuzdaki (CSS-3) buton örneğinin aynısını yapalım.</p>
        `,
        code: `
<style>
    .ozel-buton {
        background-color: #444;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        transition: 0.3s; /* Geçiş yumuşaklığı */
    }
    .ozel-buton:hover {
        background-color: #3dd5f3; /* Yeni renk */
        color: black;
        transform: scale(1.1); /* Hafif büyüme */
    }
</style>

<button class="ozel-buton">Üzerime Gel!</button>
        `
    },

    // 8. FLEXBOX (HİZALAMA)
    {
        id: "css-flex",
        category: "2. CSS (Tasarım)",
        title: "8. Flexbox ile Hizalama",
        description: `
            <p>Kutuları yan yana dizmek ve ortalamak için en modern yöntemdir. Navbar (Menü) yapımında sıkça kullanılır.</p>
            <p><code>display: flex;</code> komutu ile kapsayıcı kutu esnek hale gelir.</p>
        `,
        code: `
<div style="display: flex; justify-content: space-around; background: #222; padding: 10px;">
    <div style="background: #e67e22; padding: 10px;">Menü 1</div>
    <div style="background: #e67e22; padding: 10px;">Menü 2</div>
    <div style="background: #e67e22; padding: 10px;">Menü 3</div>
</div>
<p class="small text-muted mt-2">justify-content: space-around; (Eşit boşluk bırakır)</p>
        `
    },

    // 9. SÖZDE ELEMENTLER (Pseudo-Elements)
    {
        id: "css-pseudo-elements",
        category: "2. CSS (Tasarım)",
        title: "9. Sözde Elementler (::first-letter)",
        description: `
            <p>HTML'e ekstra etiket eklemeden, CSS ile bir metnin ilk harfini veya ilk satırını seçebiliriz (CSS-4 Notu).</p>
        `,
        code: `
<style>
    .paragraf::first-letter {
        font-size: 3rem;
        color: #e74c3c;
        float: left;
        margin-right: 10px;
        line-height: 1;
    }
</style>

<p class="paragraf">
    Lorem ipsum, web tasarımında kullanılan mıgır metindir. 
    Bakın bu paragrafın sadece CSS kullanılarak ilk harfi büyütüldü.
    Gazete/Dergi tarzı yazılarda çok kullanılır.
</p>
        `
    },

    // 10. GÖLGELENDİRME (Shadows)
    {
        id: "css-shadow",
        category: "2. CSS (Tasarım)",
        title: "10. Gölgelendirme (Box Shadow)",
        description: `
            <p>Nesnelere derinlik katmak için gölge efektleri kullanılır.</p>
            <p>Kullanımı: <code>box-shadow: x y bulanıklık renk;</code></p>
        `,
        code: `
<div style="
    background-color: #fff; 
    color: #333; 
    padding: 20px; 
    width: 150px; 
    text-align: center;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
">
    Gölgeli Kutu
</div>
        `
    }
];