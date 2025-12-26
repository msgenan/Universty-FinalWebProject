/* JAVASCRIPT.JS - JavaScript Ders İçerikleri (İnteraktif & Görsel) */

const jsData = [
    // 1. JS NEDİR?
    {
        id: "js-giris",
        category: "4. JavaScript (Mantık)",
        title: "1. JavaScript Nedir?",
        description: `
            <p>HTML iskelet, CSS kıyafet ise; <strong>JavaScript (JS)</strong> kaslar ve beyindir. Siteye hareket ve zeka katar.</p>
            
            <div style="display: flex; gap: 20px; align-items: center; background: #2b3035; padding: 20px; border-radius: 10px;">
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 3rem; filter: grayscale(100%); transition: 0.5s;" id="staticIcon">🗿</div>
                    <p class="small text-muted">Statik (Sadece HTML/CSS)</p>
                </div>
                <div style="font-size: 2rem;">➡️</div>
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 3rem; cursor: pointer; animation: bounce 1s infinite;" id="dynamicIcon">🤹‍♂️</div>
                    <p class="small text-info">Dinamik (JavaScript)</p>
                </div>
            </div>
            <p class="mt-3">Aşağıdaki butona basarak ilk JS kodumuzu çalıştıralım.</p>
        `,
        code: `
<button class="btn btn-warning btn-lg" onclick="alert('Merhaba Dünya! Ben JavaScript.');">
    Bana Tıkla ve Mesajı Gör
</button>
        `
    },

    // 2. DEĞİŞKENLER (Variables)
    {
        id: "js-degiskenler",
        category: "4. JavaScript (Mantık)",
        title: "2. Değişkenler (Veri Kutuları)",
        description: `
            <p>Değişkenler, veri saklayan kutulardır. İçine sayı, yazı veya liste koyabiliriz.</p>
            <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                <div style="border: 2px dashed #e74c3c; padding: 15px; border-radius: 8px; text-align: center; flex: 1;">
                    <strong style="color: #e74c3c;">var / let</strong><br>
                    <span style="font-size: 0.8rem;">İçindeki veri değişebilir.</span><br>
                    📦 ➡️ 🍎
                </div>
                <div style="border: 2px solid #3dd5f3; padding: 15px; border-radius: 8px; text-align: center; flex: 1;">
                    <strong style="color: #3dd5f3;">const</strong><br>
                    <span style="font-size: 0.8rem;">Sabittir, değiştirilemez.</span><br>
                    🔒 ➡️ 💎
                </div>
            </div>
        `,
        code: `
<p id="degiskenDemo">Şu anki değer: <strong>0</strong></p>

<button class="btn btn-success" onclick="
    let sayi = Math.floor(Math.random() * 100); 
    document.getElementById('degiskenDemo').innerHTML = 'Şu anki değer: <strong>' + sayi + '</strong> (Rastgele atandı)';
">
    Değişkene Rastgele Sayı Ata
</button>
        `
    },

    // 3. DOM MANİPÜLASYONU (En Önemli Konu)
    {
        id: "js-dom",
        category: "4. JavaScript (Mantık)",
        title: "3. DOM (İçeriği Değiştirme)",
        description: `
            <p><strong>D</strong>ocument <strong>O</strong>bject <strong>M</strong>odel. JavaScript kullanarak HTML etiketlerine ulaşıp onları değiştirebiliriz.</p>
            <p>En sık kullanılan komut: <code>document.getElementById('id_ismi')</code></p>
            <p>Aşağıdaki lamba örneği, bir resmin kaynağını (src) değiştirerek yapılmıştır.</p>
        `,
        code: `
<div style="text-align: center; background: #222; padding: 20px; border-radius: 20px;">
    
    <img id="lamba" src="https://www.w3schools.com/js/pic_bulboff.gif" width="100" style="margin-bottom: 20px;">
    
    <br>

    <button class="btn btn-warning" onclick="document.getElementById('lamba').src='https://www.w3schools.com/js/pic_bulbon.gif'">
        Işığı Aç 💡
    </button>

    <button class="btn btn-secondary" onclick="document.getElementById('lamba').src='https://www.w3schools.com/js/pic_bulboff.gif'">
        Işığı Kapat 🌑
    </button>

</div>
        `
    },

    // 4. STİL DEĞİŞTİRME (CSS Manipülasyonu)
    {
        id: "js-style",
        category: "4. JavaScript (Mantık)",
        title: "4. CSS Stillerini Değiştirme",
        description: `
            <p>Sadece içeriği değil, renkleri ve boyutları da değiştirebiliriz.</p>
            <p>Komut: <code>element.style.ozellik = "değer"</code></p>
        `,
        code: `
<div id="renkliKutu" style="width: 100%; height: 100px; background-color: #34495e; color: white; display: flex; align-items: center; justify-content: center; transition: 0.5s; border-radius: 10px;">
    Bu kutunun stili değişecek
</div>

<div class="mt-3 d-flex gap-2">
    <button class="btn btn-danger" onclick="document.getElementById('renkliKutu').style.backgroundColor = 'red';">Kırmızı Yap</button>
    <button class="btn btn-primary" onclick="document.getElementById('renkliKutu').style.backgroundColor = 'blue';">Mavi Yap</button>
    <button class="btn btn-success" onclick="document.getElementById('renkliKutu').style.borderRadius = '50px';">Yuvarla</button>
    <button class="btn btn-light" onclick="document.getElementById('renkliKutu').style.display = 'none';">Gizle</button>
    <button class="btn btn-outline-light" onclick="document.getElementById('renkliKutu').style.display = 'flex';">Göster</button>
</div>
        `
    },

    // 5. KARAR YAPILARI (IF - ELSE) - TANTUNİ ÖRNEĞİ
    {
        id: "js-if-else",
        category: "4. JavaScript (Mantık)",
        title: "5. Karar Yapıları (If-Else): Şifre Oyunu",
        description: `
            <p>Bilgisayarın karar vermesini sağlar. PDF ders notlarımızdaki (JavaScript2.pdf) meşhur <strong>"Tantuni"</strong> örneğini yapalım.</p>
            <div class="alert alert-dark border-secondary">
                <small>Mantık: <code>if (girdi == "tantuni") { Tebrikler } else { Hata }</code></small>
            </div>
        `,
        code: `
<label class="form-label">Bugün ne yiyeceğiz? (İpucu: Mersin)</label>
<div class="input-group mb-3">
    <input type="text" id="yemekInput" class="form-control" placeholder="Tahminini yaz...">
    <button class="btn btn-info" type="button" onclick="
        let cevap = document.getElementById('yemekInput').value.toLowerCase();
        if(cevap == 'tantuni') {
            alert('TEBRİKLER! Doğru bildiniz 🌯');
            document.getElementById('yemekInput').style.borderColor = 'green';
        } else {
            alert('Bilemediniz! İpucu: t ile başlar i ile biter.');
            document.getElementById('yemekInput').style.borderColor = 'red';
        }
    ">Kontrol Et</button>
</div>
        `
    },

    // 6. MATEMATİKSEL İŞLEMLER
    {
        id: "js-math",
        category: "4. JavaScript (Mantık)",
        title: "6. Matematiksel İşlemler (Hesap Makinesi)",
        description: `
            <p>JavaScript çok iyi matematik bilir. Dört işlem, karekök ve üs alma işlemlerini yapabilir.</p>
            <p>Örnek: Girilen sayının karesini ve karekökünü bulalım.</p>
        `,
        code: `
<div class="row g-2 align-items-center">
    <div class="col-auto">
        <label class="col-form-label">Sayı Girin:</label>
    </div>
    <div class="col-auto">
        <input type="number" id="sayiInput" class="form-control" value="16">
    </div>
    <div class="col-auto">
        <button class="btn btn-primary" onclick="
            let s = document.getElementById('sayiInput').value;
            alert('Sayının Karesi: ' + (s * s));
        ">Karesini Al</button>
    </div>
    <div class="col-auto">
        <button class="btn btn-warning" onclick="
            let s = document.getElementById('sayiInput').value;
            alert('Sayının Karekökü: ' + Math.sqrt(s));
        ">Karekök (Math.sqrt)</button>
    </div>
</div>
        `
    },

    // 7. MANTIKSAL OPERATÖRLER (VE / VEYA)
    {
        id: "js-operator",
        category: "4. JavaScript (Mantık)",
        title: "7. Mantıksal Operatörler (&& - ||)",
        description: `
            <p>Birden fazla koşulu kontrol etmek için kullanılır (JavaScript.pptx notları).</p>
            <ul>
                <li><strong>&& (VE):</strong> İki şart da doğru olmalı. (Kullanıcı Adı VE Şifre)</li>
                <li><strong>|| (VEYA):</strong> Biri doğru olsa yeter. (Nakit VEYA Kredi Kartı)</li>
            </ul>
        `,
        code: `
<div class="p-3 border rounded border-secondary bg-dark">
    <h6>Giriş Simülasyonu (&& Operatörü)</h6>
    <small class="text-muted">Kullanıcı: admin, Şifre: 1234</small>
    
    <input type="text" id="kullanici" placeholder="Kullanıcı Adı" class="form-control mb-2 mt-2 form-control-sm">
    <input type="password" id="sifre" placeholder="Şifre" class="form-control mb-2 form-control-sm">
    
    <button class="btn btn-success btn-sm w-100" onclick="
        let k = document.getElementById('kullanici').value;
        let s = document.getElementById('sifre').value;
        
        if (k == 'admin' && s == '1234') {
            alert('Giriş Başarılı! Hoşgeldin Admin.');
        } else {
            alert('Hatalı Giriş! Bilgileri kontrol et.');
        }
    ">Giriş Yap</button>
</div>
        `
    },

    // 8. DİZİLER VE DÖNGÜLER
    {
        id: "js-arrays",
        category: "4. JavaScript (Mantık)",
        title: "8. Diziler ve Döngüler",
        description: `
            <p><strong>Dizi (Array):</strong> Birden fazla veriyi tek bir değişkende tutar. <code>["Elma", "Armut", "Muz"]</code></p>
            <p><strong>Döngü (Loop):</strong> Bu listenin içinde tek tek gezmemizi sağlar.</p>
        `,
        code: `
<p id="listeSonuc">Meyve Sepeti: (Boş)</p>

<button class="btn btn-outline-info" onclick="
    const meyveler = ['🍎 Elma', '🍐 Armut', '🍌 Muz', '🍇 Üzüm'];
    let yazi = '<strong>Sepettekiler:</strong><br>';
    
    // For Döngüsü
    for(let i = 0; i < meyveler.length; i++) {
        yazi += (i+1) + '. ' + meyveler[i] + '<br>';
    }
    
    document.getElementById('listeSonuc').innerHTML = yazi;
">Sepeti Doldur (Döngü Çalıştır)</button>
        `
    }
];