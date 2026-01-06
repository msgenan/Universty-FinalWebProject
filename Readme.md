# 📚 WebSchool - Sunum Rehberi (Cheat Sheet)

> **Web Tabanlı Programlama Final Projesi**  
> Grup Üyeleri: KAAN ŞENCAN, ARDA ÖZTÜRK, MUHAMMED SABİT GENAN

---

## 📖 İçindekiler
1. [Proje Hakkında](#proje-hakkında)
2. [Navbar (Üst Menü)](#1-navbar-üst-menü)
3. [Sidebar (Sol Menü)](#2-sidebar-sol-menü)
4. [Menü Links (Linkler)](#3-menü-links-linkler)
5. [Content Area (İçerik Alanı)](#4-content-area-i̇çerik-alanı)
6. [Code Container (Kod Kutusu)](#5-code-container-kod-kutusu)
7. [Preview Container (Önizleme Kutusu)](#6-preview-container-önizleme-kutusu)
8. [Hakkında Penceresi (Modal)](#7-hakkında-penceresi-modal)
9. [Welcome Screen (Karşılama Ekranı)](#8-welcome-screen-karşılama-ekranı)

---

## Proje Hakkında

**WebSchool**, HTML, CSS, Bootstrap ve JavaScript konularını interaktif olarak öğreten bir web uygulamasıdır.

### 🏗️ Dosya Yapısı
```
root/
├── index.html              # Ana sayfa iskelet
├── assets/
│   ├── css/
│   │   └── style.css      # Tüm görsel tasarım
│   └── js/
│       ├── script.js      # Ana JavaScript mantığı
│       └── data/          # Ders içerikleri (JSON benzeri)
│           ├── concepts.js
│           ├── html.js
│           ├── css.js
│           ├── bootstrap.js
│           └── javascript.js
```

### 🎨 Kullanılan Teknolojiler
- **HTML5**: Sayfa yapısı
- **CSS3**: Tasarım ve animasyonlar
- **Bootstrap 5**: Hazır bileşenler (Modal, Accordion, Grid)
- **Vanilla JavaScript**: Dinamik içerik yönetimi

---

## 1. Navbar (Üst Menü)

### 📍 Ne İşe Yarar?
Üst kısımda sabit duran (fixed), siyah renkli bir menü çubuğudur. Logo ve "Proje Hakkında" butonu içerir.

### 🧩 HTML Kodu (index.html)
```html
<nav class="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
    <div class="container-fluid">
        <a class="navbar-brand brand-style" href="#" onclick="showWelcome()">
            <span class="brand-icon">&lt;/&gt;</span> <strong>WebSchool</strong>
        </a>
        <div class="d-flex">
            <button class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#aboutModal">
                Proje Hakkında
            </button>
        </div>
    </div>
</nav>
```

#### 📝 Açıklama:
| Kod Parçası | Anlamı |
|------------|--------|
| `navbar-dark fixed-top` | Bootstrap sınıfları: Koyu tema, en üstte sabitle |
| `custom-navbar` | Bizim özel CSS sınıfımız (style.css'de tanımlı) |
| `onclick="showWelcome()"` | Logoya tıklanınca ana ekrana dön |
| `data-bs-toggle="modal"` | Bootstrap modal (pop-up pencere) tetikle |
| `<span class="brand-icon">&lt;/&gt;</span>` | HTML tag simgesi: `</>` |

### 🎨 CSS Kodu (style.css)
```css
.custom-navbar {
    background-color: #000000 !important; /* Siyah arka plan */
    border-bottom: 1px solid #333;        /* Alt kenar çizgisi */
    box-shadow: 0 2px 10px rgba(0,0,0,0.5); /* Gölge efekti */
}

.brand-style {
    font-size: 1.5rem;         /* Yazı boyutu */
    letter-spacing: 1px;       /* Harfler arası boşluk */
}

.brand-icon {
    color: #3dd5f3;            /* Turkuaz renk */
    margin-right: 5px;
}
```

#### 📝 Açıklama:
- `!important`: CSS kuralının önceliğini artırır (Bootstrap'i ezer)
- `rgba(0,0,0,0.5)`: Yarı saydam siyah gölge
- `#3dd5f3`: Turkuaz mavi (projenin tema rengi)

---

## 2. Sidebar (Sol Menü)

### 📍 Ne İşe Yarar?
Ekranın sol tarafında bulunan dikey menü. İçinde kategoriler (Accordion) ve konular yer alır.

### 🧩 HTML Kodu (index.html)
```html
<nav id="sidebar" class="col-md-3 col-lg-2 d-md-block sidebar collapse" 
     style="height: 100vh; overflow-y: auto;">
    <div class="position-sticky pt-3">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase">
            <span>Ders İçerikleri</span>
        </h6>
        <div class="accordion" id="accordionMenu"></div>
        <!-- JavaScript buraya dinamik menü ekler -->
    </div>
</nav>
```

#### 📝 Açıklama:
| Kod Parçası | Anlamı |
|------------|--------|
| `col-md-3 col-lg-2` | Bootstrap Grid: Orta ekranda 3/12, büyük ekranda 2/12 genişlik |
| `height: 100vh` | Ekran yüksekliğinin %100'ü kadar |
| `overflow-y: auto` | İçerik taşarsa dikey scroll çubuğu göster |
| `position-sticky` | Scroll yaparken sabit kalması için |
| `accordion` | Bootstrap'in katlanabilir menü bileşeni |

### 🎨 CSS Kodu (style.css)
```css
#sidebar {
    background-color: #16181b;        /* Koyu gri */
    border-right: 1px solid #2c3034; /* Sağ kenar çizgisi */
}

.sidebar-heading {
    font-size: 1.1rem;
    color: #3dd5f3;                   /* Turkuaz başlık */
    text-transform: uppercase;        /* Büyük harfe çevir */
    letter-spacing: 2px;              /* Harf aralığı */
    font-weight: 800;                 /* Kalın yazı */
    border-bottom: 1px solid #333;    /* Alt çizgi */
    text-shadow: 0px 0px 10px rgba(61, 213, 243, 0.3); /* Parlama efekti */
}
```

#### 📝 Açıklama:
- `text-transform: uppercase`: Yazıyı büyük harfe çevirir (DERS İÇERİKLERİ)
- `text-shadow`: Yazının etrafında ışıltı efekti (neon görünüm)

---

## 3. Menü Links (Linkler)

### 📍 Ne İşe Yarar?
Sidebar içindeki tıklanabilir ders konuları. Tıklanınca sağ tarafta içerik gösterir.

### 💻 JavaScript Kodu (script.js)
```javascript
// Menü linki oluştur
function createMenuLink(topic, container, isSub = false) {
    const link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action';
    link.innerText = topic.title;
    link.href = "#";
    
    if (isSub) {
        link.style.paddingLeft = "3.5rem"; // Alt kategori daha girintili
        link.style.fontSize = "0.9rem";
    }

    link.onclick = (e) => {
        e.preventDefault(); // Sayfayı yenileme
        loadContent(topic.id); // İçeriği yükle
        
        // Aktif linki işaretle
        document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    };
    
    container.appendChild(link);
}
```

#### 📝 Açıklama:
| Kod Parçası | Anlamı |
|------------|--------|
| `document.createElement('a')` | Yeni bir `<a>` etiketi oluştur |
| `link.innerText = topic.title` | Linkin yazısını topic'in başlığına eşitle |
| `e.preventDefault()` | Sayfanın başa dönmesini engelle |
| `classList.add('active')` | CSS'deki `.active` sınıfını ekle (mavi vurgu) |
| `appendChild(link)` | Linki sidebar'a ekle |

### 🎨 CSS Kodu (style.css)
```css
.list-group-item {
    background-color: #16181b;
    color: #adb5bd;                    /* Gri yazı */
    border: none;
    border-left: 4px solid transparent; /* Görünmez sol kenar */
    padding-left: 2rem;
    cursor: pointer;                    /* Mouse imleci el şeklinde */
    transition: all 0.2s ease;         /* Animasyon geçişi */
}

.list-group-item:hover {
    background-color: #1f2225;
    color: #3dd5f3;                     /* Turkuaz yazı */
    border-left-color: #3dd5f3;        /* Sol kenar turkuaz olsun */
    padding-left: 2.2rem;              /* Sağa doğru hafif kayma */
}

.list-group-item.active {
    background-color: #1f2225;
    color: #3dd5f3;
    border-left-color: #3dd5f3;
    font-weight: normal;
}
```

#### 📝 Açıklama:
- `:hover`: Mouse üzerine gelince aktif ol
- `transition`: Değişiklikler 0.2 saniyede yumuşak geçsin
- `.active`: Seçili link (JavaScript tarafından eklenir)

---

## 4. Content Area (İçerik Alanı)

### 📍 Ne İşe Yarar?
Ekranın sağ tarafında, seçilen konunun başlık, açıklama, kod ve çıktısının gösterildiği alan.

### 🧩 HTML Kodu (index.html)
```html
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4">
    <div id="content-area"></div>
    <!-- JavaScript buraya dinamik içerik ekler -->
</main>
```

#### 📝 Açıklama:
| Kod Parçası | Anlamı |
|------------|--------|
| `col-md-9 col-lg-10` | Bootstrap Grid: Sidebar'ın kalan genişliği |
| `ms-sm-auto` | Soldan otomatik margin (mobilde ortalamak için) |
| `px-md-4 pt-4` | Padding (iç boşluk): yatay 4 birim, üst 4 birim |

### 💻 JavaScript Kodu (script.js)
```javascript
function loadContent(topicId) {
    const topic = courseData.find(item => item.id === topicId);
    if (!topic) return;

    const contentArea = document.getElementById('content-area');
    let codeHtml = '';

    if (topic.code) {
        const escapedCode = topic.code
            .replace(/&/g, "&amp;")   // & → &amp;
            .replace(/</g, "&lt;")    // < → &lt;
            .replace(/>/g, "&gt;");   // > → &gt;

        codeHtml = `
            <span class="preview-label">Görsel / Çıktı (Output):</span>
            <div class="preview-container">
                ${topic.code}  <!-- Kod çalıştırılır -->
            </div>

            <span class="code-label">Kaynak Kod (Source Code):</span>
            <div class="code-container">
                <pre><code>${escapedCode}</code></pre>  <!-- Kod metin olarak gösterilir -->
            </div>
        `;
    }

    contentArea.innerHTML = `
        <div style="animation: fadeIn 0.5s ease;">
            <h2 class="topic-title">${topic.title}</h2>
            <div class="topic-text">
                ${topic.description}
            </div>
            ${codeHtml}
        </div>
    `;
}
```

#### 📝 Açıklama:
| Kod Parçası | Anlamı |
|------------|--------|
| `courseData.find()` | Dizide ID'si eşleşen konuyu bul |
| `replace(/</g, "&lt;")` | HTML karakterlerini metin olarak göster (XSS güvenlik) |
| `innerHTML` | HTML içeriğini değiştir |
| `${topic.code}` | Kod **çalıştırılır** (preview için) |
| `${escapedCode}` | Kod **metin olarak** gösterilir (kod kutusu için) |

### 🎨 CSS Kodu (style.css)
```css
.topic-title {
    color: #3dd5f3;
    border-bottom: 1px solid #373b3e;
    padding-bottom: 15px;
    margin-bottom: 30px;
    font-weight: 300;        /* İnce yazı tipi */
    font-size: 2rem;         /* 32px */
}

.topic-text {
    line-height: 1.8;        /* Satır yüksekliği (okunabilirlik) */
    color: #ced4da;          /* Açık gri */
    font-size: 1.1rem;
    margin-bottom: 40px;
}
```

---

## 5. Code Container (Kod Kutusu)

### 📍 Ne İşe Yarar?
Kod örneklerinin **metin olarak** (çalıştırılmadan) gösterildiği siyah kutu.

### 🎨 CSS Kodu (style.css)
```css
.code-container {
    background-color: #1e1e1e;         /* VS Code koyu teması */
    color: #dcdcaa;                    /* Sarı-altın kod rengi */
    padding: 20px;
    border-radius: 8px;                /* Köşe yuvarlama */
    border: 1px solid #444;
    font-family: 'Consolas', 'Courier New', monospace; /* Kod yazı tipi */
    margin-bottom: 30px;
    overflow-x: auto;                  /* Yatay scroll (uzun kod için) */
}

.code-label {
    font-size: 0.8rem;
    color: #6c757d;                    /* Gri etiket */
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
    text-transform: uppercase;         /* KAYNAK KOD */
}
```

#### 📝 Açıklama:
- `monospace`: Her harf aynı genişlikte (kod için ideal)
- `overflow-x: auto`: Yatay kaydırma çubuğu (uzun satırlar için)
- `#1e1e1e`: VS Code'un koyu tema rengi

### 💡 Kullanım Örneği
```html
<span class="code-label">Kaynak Kod (Source Code):</span>
<div class="code-container">
    <pre><code>&lt;h1&gt;Merhaba Dünya&lt;/h1&gt;</code></pre>
</div>
```

---

## 6. Preview Container (Önizleme Kutusu)

### 📍 Ne İşe Yarar?
HTML/CSS kodunun **çalıştırılarak** görsel çıktısının gösterildiği alan. Kullanıcı sonucu gerçek zamanlı görür.

### 🎨 CSS Kodu (style.css)
```css
.preview-container {
    background-color: #212529;         /* Koyu gri arka plan */
    color: #e9ecef;                    /* Beyaz yazı */
    border: 1px dashed #495057;        /* Kesikli çerçeve */
    padding: 30px;
    border-radius: 8px;
    min-height: 150px;                 /* En az yükseklik */
    margin-bottom: 40px;
}

.preview-label {
    font-size: 0.8rem;
    color: #20c997;                    /* Yeşil etiket */
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
    text-transform: uppercase;         /* GÖRSEL / ÇIKTI */
}
```

#### 📝 Açıklama:
- `border: 1px dashed`: Kesikli çizgi (önizleme alanını vurgular)
- `min-height`: İçerik az olsa da minimum yükseklik
- `#20c997`: Turkuaz-yeşil (başarı rengi)

### 💡 Kullanım Örneği
```html
<span class="preview-label">Görsel / Çıktı (Output):</span>
<div class="preview-container">
    <h1 style="color: red;">Bu yazı kırmızı görünür</h1>
    <button class="btn btn-primary">Tıkla</button>
</div>
```

**Sonuç:** Kutu içinde gerçek bir buton ve kırmızı başlık görünür.

---

## 7. Hakkında Penceresi (Modal)

### 📍 Ne İşe Yarar?
Navbar'daki "Proje Hakkında" butonuna basınca açılan pop-up pencere. Grup üyeleri ve proje bilgisi gösterir.

### 🧩 HTML Kodu (index.html)
```html
<!-- Modal Tetikleyici Buton -->
<button class="btn btn-outline-info btn-sm" 
        data-bs-toggle="modal" 
        data-bs-target="#aboutModal">
    Proje Hakkında
</button>

<!-- Modal Pencere -->
<div class="modal fade" id="aboutModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">WebSchool Hakkında</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h6 class="text-info">Grup Üyeleri:</h6>
                <ul>
                    <li>KAAN ŞENCAN</li>
                    <li>ARDA ÖZTÜRK</li>
                    <li>MUHAMMED SABİT GENAN</li>
                </ul>
                <hr class="bg-secondary">
                <p class="small text-muted">Web Tabanlı Programlama Final Ödevi.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
            </div>
        </div>
    </div>
</div>
```

#### 📝 Açıklama:
| Kod Parçası | Anlamı |
|------------|--------|
| `data-bs-toggle="modal"` | Bootstrap'e modal aç diyoruz |
| `data-bs-target="#aboutModal"` | Hangi modal açılacak (ID ile) |
| `modal fade` | Modal yumuşak açılsın (animasyon) |
| `tabindex="-1"` | Klavye Tab tuşu ile erişilmesin |
| `aria-hidden="true"` | Ekran okuyucular için gizli (erişilebilirlik) |
| `data-bs-dismiss="modal"` | Modal'ı kapat |

### 🎨 CSS Kodu (style.css)
```css
.modal-content {
    background-color: #212529;   /* Koyu gri arka plan */
    color: white;
    border: 1px solid #444;
}

.btn-close {
    filter: invert(1);           /* X butonunu beyaza çevir */
}
```

#### 📝 Açıklama:
- `filter: invert(1)`: Renkleri tersine çevir (kapatma butonu için)
- Bootstrap varsayılan modal açık renklidir, biz koyu temaya uyarladık

---

## 8. Welcome Screen (Karşılama Ekranı)

### 📍 Ne İşe Yarar?
Kullanıcı siteye ilk girdiğinde veya logoya tıkladığında görünen ana ekran. Animasyonlu ve merkezi.

### 💻 JavaScript Kodu (script.js)
```javascript
function showWelcome() {
    const contentArea = document.getElementById('content-area');
    
    // Tüm aktif linkleri kaldır
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));

    contentArea.innerHTML = `
        <div class="welcome-container">
            <h1 class="welcome-title">
                <span class="brand-highlight">&lt;/&gt;</span> WebSchool
            </h1>
            <p class="lead" style="color: #adb5bd;">İnteraktif Web Programlama Ders Notları</p>
            
            <div style="margin-top: 50px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#3dd5f3" 
                     class="bi bi-code-slash" viewBox="0 0 16 16" style="opacity: 0.8;">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
            </div>
        </div>
    `;
}
```

#### 📝 Açıklama:
| Kod Parçası | Anlamı |
|------------|--------|
| `forEach(el => el.classList.remove('active'))` | Her linkteki `active` sınıfını kaldır |
| `<svg>` | Vektörel grafik (kod simgesi) |
| `viewBox="0 0 16 16"` | SVG'nin koordinat sistemi |
| `fill="#3dd5f3"` | SVG'yi turkuaz renkle doldur |

### 🎨 CSS Kodu (style.css)
```css
.welcome-container {
    text-align: center;           /* Ortala */
    padding-top: 60px;
    animation: fadeIn 0.8s ease-out; /* Belirme animasyonu */
}

.welcome-title {
    font-size: 3.5rem;            /* 56px büyük başlık */
    font-weight: 800;             /* Çok kalın */
    color: #fff;
    margin-bottom: 10px;
}

.brand-highlight {
    color: #3dd5f3;               /* </> simgesi turkuaz */
}

@keyframes fadeIn {
    from {
        opacity: 0;                /* Görünmez */
        transform: translateY(20px); /* 20px aşağıda */
    }
    to {
        opacity: 1;                /* Görünür */
        transform: translateY(0);   /* Normal pozisyon */
    }
}
```

#### 📝 Açıklama:
- `@keyframes fadeIn`: Animasyon tanımla
- `opacity: 0 → 1`: Şeffaftan opak hale geç
- `translateY(20px → 0)`: Yukarı kaydır
- Animasyon süresi: **0.8 saniye**

---

## 🎓 Sunum İçin İpuçları

### 1️⃣ **Navbar'ı Anlatırken**
- "Üst menümüz `fixed-top` ile her scroll'da sabit kalıyor"
- "Logo tıklanınca `onclick="showWelcome()"` fonksiyonu ana sayfaya dönüyor"
- "Modal butonu `data-bs-toggle` ile Bootstrap modal sistemini tetikliyor"

### 2️⃣ **Sidebar'ı Anlatırken**
- "Bootstrap Accordion ile kategoriler açılıp kapanabiliyor"
- "JavaScript ile dinamik olarak menü oluşturuldu, veri dosyalarından besleniyor"
- "`overflow-y: auto` ile içerik çoksa scroll oluşuyor"

### 3️⃣ **Content Area'yı Anlatırken**
- "Kod iki şekilde gösteriliyor: biri çalıştırılmış (preview), diğeri kaynak kod"
- "XSS saldırılarını önlemek için HTML karakterleri escape ediliyor"
- "`fadeIn` animasyonu ile içerik yumuşak geçiş yapıyor"

### 4️⃣ **CSS Açıklamaları**
- "Koyu tema için `#212529` renk paleti kullanıldı"
- "`:hover` ile kullanıcı mouse ile üzerine gelince linkler animasyonlu değişiyor"
- "`transition: all 0.2s ease` ile tüm değişiklikler yumuşak geçiş yapıyor"

### 5️⃣ **JavaScript Mantığı**
- "Tüm veri dosyaları `courseData` dizisinde birleştiriliyor"
- "`find()` ile ID'ye göre konu bulunuyor"
- "DOM manipülasyonu ile sayfa yenilenmeden içerik değişiyor"

---

## 🔥 Sık Kullanılan Kod Kalıpları

### Bootstrap Grid Sistemi
```html
<div class="row">
    <div class="col-md-3">Sol Bölge (Sidebar)</div>
    <div class="col-md-9">Sağ Bölge (Content)</div>
</div>
```
> **Açıklama:** Ekran 12 parçaya bölünür. `col-md-3` → 3 parça (25%), `col-md-9` → 9 parça (75%)

### JavaScript Click Olayı
```javascript
element.onclick = (e) => {
    e.preventDefault();      // Varsayılan davranışı engelle
    // Kod...
};
```

### CSS Animasyon
```css
@keyframes animasyonAdi {
    from { /* başlangıç */ }
    to { /* bitiş */ }
}
.element {
    animation: animasyonAdi 1s ease;
}
```

---

## 📊 Renk Paleti

| Renk Adı | HEX Kodu | Kullanım Yeri |
|----------|----------|---------------|
| **Turkuaz Mavi** | `#3dd5f3` | Logo, başlıklar, aktif linkler |
| **Koyu Gri Arka Plan** | `#212529` | Body, modal, preview kutusu |
| **Daha Koyu Gri** | `#16181b` | Sidebar arka planı |
| **Saf Siyah** | `#000000` | Navbar |
| **Açık Gri Yazı** | `#e9ecef` | Ana metin |
| **Kod Kutusu Siyah** | `#1e1e1e` | Code container (VS Code teması) |
| **Yeşil Vurgu** | `#20c997` | Preview label |

---

## 🚀 Projeyi Çalıştırma

1. **index.html** dosyasını tarayıcıda aç
2. Sol menüden bir konu seç
3. Sağ tarafta açıklama, kod ve çıktı görüntülenir

---

## 🎯 Özet Tablo

| Bileşen | Dosya | Önemli Kod |
|---------|-------|------------|
| **Navbar** | index.html + style.css | `fixed-top`, `custom-navbar` |
| **Sidebar** | index.html + script.js | `accordion`, `renderSidebarMenu()` |
| **Menü Links** | script.js | `createMenuLink()`, `.active` |
| **Content Area** | script.js | `loadContent()`, `innerHTML` |
| **Code Container** | style.css | `#1e1e1e`, `monospace` |
| **Preview Container** | style.css | `border: dashed`, `#212529` |
| **Modal** | index.html | `data-bs-toggle`, `modal fade` |
| **Welcome Screen** | script.js | `showWelcome()`, `fadeIn` |

---

## 🏆 Projenin Güçlü Yönleri

✅ **Temiz Kod:** HTML/CSS/JS ayrımı net  
✅ **Responsive:** Mobil ve masaüstü uyumlu (Bootstrap Grid)  
✅ **Dinamik:** İçerik JavaScript ile yönetiliyor  
✅ **Görsel:** Koyu tema, animasyonlar, ikonlar  
✅ **Modüler:** Veri dosyaları ayrı (kolay güncelleme)  
✅ **Erişilebilir:** Klavye navigasyonu, ARIA etiketleri  

---

**Başarılar dilerim! 🎓✨**

*Sunumda her bileşeni canlı gösterip, kodları açıklayabilirsiniz. Sorular gelirse bu rehber size yardımcı olacak.*