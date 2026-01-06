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

#### 📝 Detaylı Açıklama:

##### 🏷️ `<nav>` Etiketi ve Sınıfları:
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `<nav>` | HTML5 semantik etiketi. Tarayıcıya "bu bir navigasyon menüsüdür" dediğimiz etiket. SEO için önemli. |
| `class="navbar"` | Bootstrap'in temel menü sınıfı. Bu sınıf olmadan diğer navbar özellikleri çalışmaz. |
| `navbar-expand-lg` | **Responsive tasarım:** `lg` (large) ekranlarda menü yatay açılır, küçük ekranlarda (mobil) hamburger menü olur. `lg` = 992px ve üzeri ekranlar. |
| `navbar-dark` | Menü yazılarının renk teması. `dark` = beyaz yazılar, `light` olsaydı siyah yazılar olurdu. |
| `fixed-top` | Menüyü **sayfanın en üstüne sabitle**. Kullanıcı aşağı scroll etse bile menü hep görünür kalır. CSS'de `position: fixed; top: 0;` anlamına gelir. |
| `custom-navbar` | **Bizim yazdığımız özel CSS sınıfı** (style.css'de tanımlı). Bootstrap varsayılan renklerini eziyoruz (siyah arka plan için). |

##### 🔗 Logo Bölümü (`<a>` etiketi):
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `<a>` | Anchor (bağlantı) etiketi. Normalde başka sayfaya gitmek için kullanılır. |
| `href="#"` | Link hedefi. `#` = "hiçbir yere gitme" demektir. Sayfayı yenilemeden JavaScript ile işlem yapacağımız için boş bıraktık. |
| `navbar-brand` | Bootstrap sınıfı. Logo/marka için özel stillendirilmiş sınıf (daha büyük font, margin vs.) |
| `brand-style` | Bizim özel CSS sınıfımız. Logo yazısını daha da özelleştiriyoruz (font boyutu, harf aralığı). |
| `onclick="showWelcome()"` | **JavaScript click olayı**. Kullanıcı logoya tıkladığında `showWelcome()` fonksiyonu çalışır ve karşılama ekranı gösterilir. |

##### 🎨 `&lt;/&gt;` HTML Entity Açıklaması:
| Kod | Anlamı | Neden Böyle Yazıyoruz? |
|-----|--------|------------------------|
| `&lt;` | **Less Than** (küçüktür) işareti: `<` | HTML'de `<` karakter özel anlam taşır (etiket başlangıcı). Eğer ekranda `<` karakteri göstermek istiyorsak `&lt;` yazmalıyız. |
| `&gt;` | **Greater Than** (büyüktür) işareti: `>` | HTML'de `>` karakter etiket kapanışı anlamına gelir. Ekranda göstermek için `&gt;` yazarız. |
| `&lt;/&gt;` | Ekranda görünen: `</>` | HTML'de **self-closing tag** (kendini kapatan etiket) simgesi. Programlama/kodlama temalı sitelerde logo olarak kullanılır. Web geliştirici kimliğimizi vurgular. |
| `<span class="brand-icon">` | Bu karakterleri saran etiket. `span` = satır içi (inline) kapsayıcı, stil vermek için kullanılır. `brand-icon` sınıfı ile turkuaz renk veriyoruz. |

##### 📱 Buton ve Modal Tetikleyici:
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `<div class="d-flex">` | Bootstrap yardımcı sınıfı. `d-flex` = `display: flex;` (Flexbox). İçindeki öğeleri yatay hizalar. |
| `<button>` | Tıklanabilir buton HTML etiketi. |
| `class="btn"` | Bootstrap'in temel buton sınıfı. Bu olmadan buton Bootstrap stilini almaz. |
| `btn-outline-info` | Bootstrap buton stili: `outline` = içi boş (transparan), sadece kenar çizgili. `info` = mavi/turkuaz renk. |
| `btn-sm` | **Small** (küçük) buton boyutu. `btn-lg` (büyük) veya varsayılan boyut da kullanılabilir. |
| `data-bs-toggle="modal"` | **Bootstrap'e özel HTML özelliği**. `data-bs-*` = Bootstrap JavaScript'ine komut verdiğimiz nitelikler. `toggle="modal"` = "bir modal aç/kapat" demek. JavaScript kodu yazmadan modal açılır! |
| `data-bs-target="#aboutModal"` | **Hangi modal açılacak?** `#aboutModal` = ID'si `aboutModal` olan modal'ı aç. `#` işareti CSS selector (ID seçici) anlamına gelir. |

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

#### 📝 Detaylı CSS Açıklaması:

##### 🎨 `.custom-navbar` Sınıfı:
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `background-color` | `#000000` | **Hexadecimal renk kodu**. `#000000` = saf siyah (R=0, G=0, B=0). Her iki rakam bir renk kanalını temsil eder: `#RRGGBB` formatı. |
| `!important` | CSS öncelik bayrağı | Normal CSS kuralları üzerine yazılabilir. `!important` kullanınca **bu kural kesinlikle uygulanır**, başka hiçbir stil ezemez. Bootstrap'in varsayılan rengini ezmek için kullandık. **Not:** Aşırı kullanımı kötü pratiktir ama burada gerekli. |
| `border-bottom` | `1px solid #333` | **Alt kenara çizgi ekle**. `1px` = çizgi kalınlığı (1 piksel), `solid` = kesintisiz düz çizgi (dashed=kesikli, dotted=noktalı olabilir), `#333` = koyu gri renk (`#333333`'ün kısa yazımı). |
| `box-shadow` | `0 2px 10px rgba(0,0,0,0.5)` | **Gölge efekti**. Parametreler sırasıyla: `0` = yatay kayma (sağa/sola), `2px` = dikey kayma (aşağı), `10px` = bulanıklık yarıçapı (blur), `rgba(0,0,0,0.5)` = gölge rengi. |

##### 🔍 RGBA Renk Sistemi Açıklaması:
```
rgba(0, 0, 0, 0.5)
     │  │  │   │
     │  │  │   └─ Alpha (Saydamlık): 0.0 (tamamen şeffaf) - 1.0 (tamamen opak) arası
     │  │  └───── Blue (Mavi): 0-255 arası
     │  └──────── Green (Yeşil): 0-255 arası
     └─────────── Red (Kırmızı): 0-255 arası
```
- `rgba(0,0,0,0.5)` = yarı saydam siyah gölge
- `rgba(255,0,0,1)` = tamamen opak kırmızı (= `#FF0000` ile aynı)

##### 📐 `.brand-style` Sınıfı:
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `font-size` | `1.5rem` | **Yazı boyutu**. `rem` birimi = root element'in font boyutuna göre. Tarayıcı varsayılanı `1rem = 16px`, yani `1.5rem = 24px`. Responsive tasarım için `px` yerine `rem` kullanmak daha iyidir. |
| `letter-spacing` | `1px` | **Harfler arası boşluk**. Pozitif değer = harfler açılır (daha ferah), negatif değer = harfler sıkışır. `1px` ile "WebSchool" yazısı daha okunaklı olur. |

##### 🎨 `.brand-icon` Sınıfı:
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `color` | `#3dd5f3` | **Metin rengi**. `#3dd5f3` = turkuaz/cyan mavi. Hex renk anatomisi: `#3d`(kırmızı)=61, `d5`(yeşil)=213, `f3`(mavi)=243. Mavi ve yeşil kanallar yüksek olduğu için turkuaz görünür. |
| `margin-right` | `5px` | **Sağ taraftan dış boşluk**. `</>` simgesi ile "WebSchool" yazısı arasında 5 piksel boşluk olur. `margin` = öğenin dışındaki boşluk, `padding` = öğenin içindeki boşluk. |

##### 📊 CSS Birim Karşılaştırması:
| Birim | Açıklama | Örnek |
|-------|----------|-------|
| `px` | Piksel (sabit) | `16px` = her zaman 16 piksel |
| `rem` | Root em (responsive) | `1rem` = varsayılan 16px, kullanıcı zoom yaparsa büyür |
| `em` | Parent element'e göre | Üst öğenin yazı boyutuna göre |
| `%` | Yüzdelik | `50%` = üst öğenin yarısı |
| `vh/vw` | Viewport (ekran) boyutu | `100vh` = ekran yüksekliğinin %100'ü |

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

#### 📝 Detaylı Açıklama:

##### 🏗️ HTML Yapısı:
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `<nav id="sidebar">` | **Navigasyon etiketi** + **ID özelliği**. `id="sidebar"` = bu öğeye CSS'den `#sidebar` ile, JavaScript'ten `getElementById('sidebar')` ile erişebiliriz. Sayfada her ID **tekil (unique)** olmalıdır. |
| `class="col-md-3"` | **Bootstrap Grid sınıfı**. `col` = column (sütun), `md` = medium (orta boy ekran: 768px-992px arası), `3` = 12'lik sistemde 3 birim (yani %25 genişlik). Mobilde tam genişlik, orta ekranda çeyrek genişlik olur. |
| `col-lg-2` | **Large ekranlarda** (992px+) 2/12 (yani %16.6) genişlik. Büyük ekranda sidebar daha dar olur, content'e daha çok yer kalır. |
| `d-md-block` | **Display yardımcı sınıfı**. `d` = display, `md` = orta ekran ve üzeri, `block` = blok eleman (görünür). Mobilde (`sm` ve altı) sidebar gizlenir (hamburger menü olur). |
| `sidebar` | Bootstrap'in sidebar bileşeni için özel sınıf. |
| `collapse` | Bootstrap'in katlanabilir (açılır/kapanır) öğesi. Mobilde menü kapalı başlar, buton ile açılır. |

##### 📏 Inline Style Açıklaması:
| Stil | Değer | Detaylı Açıklama |
|------|-------|------------------|
| `height: 100vh` | **Viewport Height**. `vh` = ekran yüksekliğinin yüzdesi. `100vh` = ekranın %100'ü kadar yükseklik. Kullanıcı 1920x1080 ekran kullanıyorsa 1080px, 1366x768 kullanıyorsa 768px olur (responsive!). |
| `overflow-y: auto` | **Dikey taşma kontrolü**. İçerik sidebar'ın yüksekliğini aşarsa dikey scroll çubuğu (`scrollbar`) otomatik belirir. `overflow-y: hidden` olsaydı içerik kesilirdi, `scroll` olsaydı her zaman scroll çubuğu görünürdü. |

##### 🔧 Bootstrap Yardımcı Sınıfları:
| Sınıf | Anlamı | Detaylı Açıklama |
|-------|--------|------------------|
| `position-sticky` | CSS `position: sticky;` | Scroll yaparken belli bir noktaya kadar sabit kalır. `fixed` gibi ama parent container içinde kalır. |
| `pt-3` | **Padding Top** = üstten iç boşluk. `3` = Bootstrap'in spacing ölçeği (0-5 arası). `3` ≈ 1rem ≈ 16px. `pt-1` (0.25rem), `pt-2` (0.5rem), `pt-3` (1rem), `pt-4` (1.5rem), `pt-5` (3rem). |
| `d-flex` | `display: flex;` - Flexbox aktif et. |
| `justify-content-between` | Flexbox özelliği: Öğeleri iki uca yasla, aralarında boşluk bırak. |
| `align-items-center` | Flexbox: Öğeleri dikey eksende ortala. |
| `px-3` | **Padding X (yatay)** = soldan ve sağdan `1rem` iç boşluk. |
| `mt-4` | **Margin Top** = üstten `1.5rem` dış boşluk. |
| `mb-1` | **Margin Bottom** = alttan `0.25rem` dış boşluk. |
| `text-uppercase` | CSS `text-transform: uppercase;` - Tüm harfleri büyük yap. |

##### 📦 Accordion (Katlanır Menü):
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `<div class="accordion">` | Bootstrap'in **accordion bileşeni**. Bir panel açıldığında diğerleri kapanır (akordeon müzik aleti gibi). |
| `id="accordionMenu"` | Benzersiz kimlik. JavaScript'te `getElementById('accordionMenu')` ile bu div'e dinamik menü ekliyoruz. |
| `<!-- ... -->` | HTML yorumu. Tarayıcı bu satırları görmezden gelir. Geliştiriciler için not bırakmak amacıyla kullanılır. |

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

#### 📝 Detaylı CSS Açıklaması:

##### 🎯 ID Seçici (`#sidebar`):
| Özellik | Açıklama |
|---------|----------|
| `#sidebar` | **ID seçici** (CSS Selector). `#` işareti = "ID'si sidebar olan öğeyi seç" demektir. Class seçicide `.` kullanılır (`.custom-navbar`), ID seçicide `#` kullanılır. **Fark:** ID sayfada tek, class birden fazla öğede kullanılabilir. |
| `background-color: #16181b` | **Arka plan rengi**. `#16181b` = çok koyu gri (neredeyse siyah). Hex anatomisi: `#16` (R=22), `#18` (G=24), `#1b` (B=27). Üç kanal da düşük değerde olduğu için koyu görünür. |
| `border-right` | **Sağ kenara çizgi**. `1px` = kalınlık, `solid` = düz çizgi, `#2c3034` = orta ton gri. Sidebar ile content arasında ayrım çizgisi oluşturur. |

##### ✨ `.sidebar-heading` Detayları:
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `font-size: 1.1rem` | Yazı boyutu. `1.1rem` ≈ 17.6px (normal boyutun %10 büyüğü). |
| `color: #3dd5f3` | Turkuaz metin rengi (projenin imza rengi). |
| `text-transform: uppercase` | **Yazı dönüşümü**. `uppercase` = TÜM HARFLER BÜYÜK, `lowercase` = küçük, `capitalize` = İlk Harf Büyük. "Ders İçerikleri" → "DERS İÇERİKLERİ" olur. |
| `letter-spacing: 2px` | Harfler arası 2 piksel boşluk. Büyük harfli yazılar için okunabilirliği artırır. |
| `font-weight: 800` | **Yazı kalınlığı**. `100-900` arası (100=en ince, 900=en kalın). `400`=normal, `700`=bold, `800`=extra-bold. Ağır başlık görünümü verir. |
| `border-bottom: 1px solid #333` | Alt kenara ince çizgi. Başlığı içerikten ayırır. |
| `text-shadow` | **Yazı gölgesi** (Neon efekt!). Parametreler: `0px` (yatay), `0px` (dikey), `10px` (bulanıklık), `rgba(61,213,243,0.3)` (turkuaz, %30 opaklık). Gölge yazının tam arkasında olduğu için parlama/halo efekti yaratır. |

##### 🌟 Text-Shadow Anatomisi:
```css
text-shadow: 0px 0px 10px rgba(61, 213, 243, 0.3);
             │   │   │    └─────────────────────────── Renk (turkuaz, %30 şeffaf)
             │   │   └────────────────────────────────── Blur (bulanıklık yarıçapı: 10px)
             │   └────────────────────────────────────── Vertical offset (dikey kayma: 0)
             └────────────────────────────────────────── Horizontal offset (yatay kayma: 0)
```
- `0px 0px` = gölge yazının tam arkasında (kayma yok)
- `10px blur` = gölge 10 piksel bulanık, bu da "ışıltı" efekti yaratır
- `rgba(..., 0.3)` = %30 opaklık, çok belirgin olmayan yumuşak ışık

##### 🎨 Font-Weight Değerleri:
| Değer | İsim | Görünüm |
|-------|------|---------|
| 100 | Thin | Çok ince |
| 300 | Light | İnce |
| 400 | Normal | Standart (varsayılan) |
| 700 | Bold | Kalın |
| 800 | Extra Bold | Çok kalın |
| 900 | Black | En kalın |

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

#### 📝 Detaylı JavaScript Açıklaması:

##### 🔧 Fonksiyon Tanımı:
```javascript
function createMenuLink(topic, container, isSub = false)
```
| Parametre | Tip | Açıklama |
|-----------|-----|----------|
| `topic` | Object (Nesne) | Ders konusu verisi. İçinde `id`, `title`, `category`, `description`, `code` gibi özellikler var (örn: `{id: "html-basliklar", title: "Başlıklar", ...}`). |
| `container` | HTMLElement | Bu linkin ekleneceği HTML öğesi (div, ul gibi). JavaScript ile DOM'dan seçilmiş bir öğe. |
| `isSub` | Boolean | **Varsayılan parametreli**. `= false` = eğer bu parametre verilmezse `false` kabul edilir. `true` ise alt kategori (subcategory) linki demektir, daha girintili görünür. |

##### 🏗️ DOM Manipülasyonu Adım Adım:

**1️⃣ Yeni Link Oluşturma:**
```javascript
const link = document.createElement('a');
```
| Kod | Açıklama |
|-----|----------|
| `const` | **Sabit değişken** (değiştirilemez). `let` değiştirilebilir, `var` eski yöntem. Modern JavaScript'te `const` tercih edilir. |
| `document` | **Tüm HTML belgesini temsil eden global nesne**. JavaScript'in pencere (window) objesi altındadır. |
| `.createElement('a')` | **Yeni bir HTML öğesi oluştur**. Parametre: etiket adı (`'a'` = anchor/link, `'div'`, `'p'`, `'button'` vs. olabilir). Henüz sayfada görünmez, bellekte oluşturulur. |

**2️⃣ CSS Sınıfları Ekleme:**
```javascript
link.className = 'list-group-item list-group-item-action';
```
| Kod | Açıklama |
|-----|----------|
| `.className` | Öğenin `class` özniteliğini değiştirir. HTML'deki `class="..."` kısmı. |
| `'list-group-item'` | **Bootstrap sınıfı**: Liste öğesi stili (padding, border vs.). |
| `'list-group-item-action'` | **Bootstrap sınıfı**: Tıklanabilir liste öğesi (hover efektleri, cursor: pointer). İki sınıf boşlukla ayrılır. |

**3️⃣ Link Metnini Ayarlama:**
```javascript
link.innerText = topic.title;
```
| Kod | Açıklama |
|-----|----------|
| `.innerText` | Öğenin **metin içeriği**. HTML etiketlerini yorumlamaz, düz metin olarak ekler. Alternatif: `.innerHTML` (HTML etiketlerini yorumlar). Güvenlik için `.innerText` daha iyi. |
| `topic.title` | `topic` nesnesinin `title` özelliğine eriş. Örnek: `"1. HTML Sayfa Yapısı"`. |

**4️⃣ Link Hedefini Belirleme:**
```javascript
link.href = "#";
```
| Kod | Açıklama |
|-----|----------|
| `.href` | Link'in `href` özniteliği (gidilecek adres). `#` = boş link, sayfayı yenileme. Normalde `"https://example.com"` gibi URL olur. |

**5️⃣ Alt Kategori Kontrolü:**
```javascript
if (isSub) {
    link.style.paddingLeft = "3.5rem";
    link.style.fontSize = "0.9rem";
}
```
| Kod | Açıklama |
|-----|----------|
| `if (isSub)` | **Koşul kontrolü**. Eğer `isSub` parametresi `true` ise süslü parantez içi çalışır. `false` veya `undefined` ise atlanır. |
| `.style.paddingLeft` | **Inline CSS ekleme**. JavaScript ile CSS özelliği değiştirme. `paddingLeft` (CSS'de `padding-left`) soldan iç boşluk. |
| `"3.5rem"` | Alt kategoriler daha içeride görünür (girintili). String olarak yazılmalı (tırnak içinde). |
| `fontSize` | JavaScript'te CSS özellikleri **camelCase** yazılır: `font-size` → `fontSize`, `background-color` → `backgroundColor`. |

**6️⃣ Click Olayı (Event Listener):**
```javascript
link.onclick = (e) => {
    e.preventDefault();
    loadContent(topic.id);
    
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
};
```

##### 🎯 Event Handler Anatomisi:
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `link.onclick` | **Olay işleyici**. Kullanıcı link'e tıkladığında çalışacak fonksiyon. Alternatif: `addEventListener('click', ...)` (daha modern ama onclick daha basit). |
| `(e) => { }` | **Arrow function** (ok fonksiyonu). ES6+ modern JavaScript sözdizimi. Klasik yazılış: `function(e) { }`. `e` = event (olay) parametresi. |
| `e` | **Event nesnesi**. Tıklama olayı hakkında bilgiler içerir: hangi tuş basıldı, mouse koordinatları, hedef öğe vs. |
| `e.preventDefault()` | **Varsayılan davranışı engelle**. Link'in normal işlevi (yeni sayfaya gitme) iptal edilir. Sayfayı yenilemeden JavaScript ile işlem yaparız. |
| `loadContent(topic.id)` | **Başka bir fonksiyonu çağır**. İçeriği yükleyen fonksiyon. `topic.id` parametresi gönderilir (örn: `"html-basliklar"`). |

##### 🔄 Aktif Link İşaretleme:
```javascript
document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
```
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `document.querySelectorAll()` | **Birden fazla öğe seç**. CSS seçici (selector) kullanır. `querySelector()` = ilk eşleşeni döner, `querySelectorAll()` = hepsini döner (NodeList olarak). |
| `'.list-group-item'` | CSS seçici. `.` = class seçici. Tüm `list-group-item` class'ına sahip öğeleri seç. |
| `.forEach()` | **Dizi döngüsü**. Her öğe için fonksiyon çalıştır. `el` = döngüdeki her bir öğe. |
| `el => el.classList.remove('active')` | **Her öğeden `active` sınıfını kaldır**. Böylece eski seçili link pasif olur. |

```javascript
link.classList.add('active');
```
| Kod | Açıklama |
|-----|----------|
| `.classList` | **Sınıf listesi yöneticisi**. `add()`, `remove()`, `toggle()`, `contains()` metodları var. |
| `.add('active')` | `active` sınıfını ekle. CSS'deki `.list-group-item.active` kuralı devreye girer (turkuaz renk, sol kenar çizgisi). |

**7️⃣ Link'i Sayfaya Ekleme:**
```javascript
container.appendChild(link);
```
| Kod | Açıklama |
|-----|----------|
| `.appendChild()` | **Alt öğe ekle**. `container` (parent) içine `link` (child) öğesini ekler. Artık link DOM'da görünür hale gelir. |

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

#### 📝 Detaylı CSS Açıklaması:

##### 🎨 Normal Durum (`.list-group-item`):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `background-color` | `#16181b` | Koyu gri arka plan (sidebar ile aynı renk, birleşik görünür). |
| `color` | `#adb5bd` | **Yazı rengi**. Açık gri, arka planla zıtlık oluşturarak okunabilir kılar. |
| `border: none` | Tüm kenarlardan çizgi kaldır. Bootstrap varsayılan border'ını iptal eder. |
| `border-left` | `4px solid transparent` | **Sol kenara 4 piksel çizgi**, ama `transparent` (şeffaf) olduğu için görünmez. Neden? Hover/active durumda renk vereceğiz, animasyon yumuşak olsun diye yer ayırıyoruz. |
| `padding-left` | `2rem` | **Sol iç boşluk** (≈32px). Metin çok kenarda değil, biraz içeride başlar. |
| `cursor: pointer` | **Mouse imleci şekli**. `pointer` = el işareti (tıklanabilir hissiyatı). Varsayılan: `default` (ok işareti). Diğer: `text` (metin seçimi), `wait` (yükleniyor), `not-allowed` (yasak). |
| `transition` | `all 0.2s ease` | **Animasyon geçişi**. `all` = tüm değişiklikler, `0.2s` = 0.2 saniye (200 milisaniye), `ease` = yavaş başla-hızlan-yavaş bitir. Hover'da renk değişimi ani değil yumuşak olur. |

##### 🎯 Transition Timing Functions:
| Değer | Açıklama | Görsel |
|-------|----------|--------|
| `ease` | Yavaş-hızlı-yavaş (varsayılan) | 〰️ |
| `linear` | Sabit hız | ➖ |
| `ease-in` | Yavaş başla, hızla bitir | 〰️ |
| `ease-out` | Hızlı başla, yavaş bitir | 〰️ |
| `ease-in-out` | İki uçta da yavaş | 〰️ |

##### 🖱️ Hover Durumu (`:hover` Pseudo-class):
```css
.list-group-item:hover
```
| Konsept | Açıklama |
|---------|----------|
| `:hover` | **CSS Pseudo-class** (sahte sınıf). Mouse imleç öğenin üzerindeyken aktif olur. Diğer pseudo-class'lar: `:active` (tıklama anı), `:focus` (klavye ile seçili), `:visited` (ziyaret edilmiş link). |

| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `background-color` | `#1f2225` | Biraz daha açık gri (hover vurgusu). |
| `color` | `#3dd5f3` | Yazı turkuaz olur (dikkat çekici). |
| `border-left-color` | `#3dd5f3` | Sol kenardaki şeffaf çizgi **turkuaz renge dönüşür**. `border-left: 4px solid #3dd5f3` yerine sadece rengi değiştiriyoruz (transition için). |
| `padding-left` | `2.2rem` | 2rem'den 2.2rem'e çıkıyor (0.2rem ≈ 3px sağa kayma). Link "içeri doğru" hafifçe kayıyor, dinamik hissiyat veriyor. |

##### ✅ Aktif Durum (`.active` Sınıfı):
```css
.list-group-item.active
```
| Konsept | Açıklama |
|---------|----------|
| `.list-group-item.active` | **Sınıf kombine edici**. Hem `list-group-item` hem de `active` sınıfına sahip öğeleri seç. JavaScript ile `.classList.add('active')` yapınca bu stil aktif olur. |
| `.class1.class2` | Aralarında boşluk yok = iki sınıf aynı öğede. `.class1 .class2` (boşluklu) = iç içe seçici olurdu. |

| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `background-color` | `#1f2225` | Hover ile aynı (seçili link vurgulanır). |
| `color` | `#3dd5f3` | Turkuaz yazı (aktif linki belli eder). |
| `border-left-color` | `#3dd5f3` | Sol kenar turkuaz (görsel işaretleyici). |
| `font-weight` | `normal` | Yazı kalınlığı normal (Bootstrap'in aktif link'i bold yapmasını engelliyoruz, tasarım tercihimiz). |

##### 🎭 CSS Seçici Öncelik Sırası (Specificity):
| Seçici | Öncelik Puanı | Örnek |
|--------|---------------|-------|
| Inline style | 1000 | `style="color: red;"` |
| ID | 100 | `#sidebar` |
| Class / Attribute / Pseudo-class | 10 | `.active`, `[href]`, `:hover` |
| Element | 1 | `div`, `a`, `p` |

`.list-group-item.active` = 10+10 = **20 puan** (iki class)  
`.list-group-item:hover` = 10+10 = **20 puan** (class + pseudo-class)  
Eşitlik durumunda CSS'de **en son tanımlanan** kazanır.

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

#### 📝 Detaylı JavaScript Açıklaması:

##### 🔍 Veri Bulma (`find()` Metodu):
```javascript
const topic = courseData.find(item => item.id === topicId);
```
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `courseData` | **Global dizi değişkeni**. Tüm ders konularını içeren array. `script.js` başında tanımlı: `const courseData = [...conceptsData, ...htmlData, ...]`. |
| `.find()` | **Dizi metodu**. Koşulu sağlayan **ilk öğeyi** döner. Bulamazsa `undefined` döner. Alternatif: `.filter()` (tüm eşleşenleri döner), `.some()` (var mı yok mu), `.every()` (hepsi mi). |
| `item => item.id === topicId` | **Arrow function** ile koşul. Her öğe (`item`) için kontrol: `item.id` (örn: `"html-basliklar"`) ile `topicId` parametresi eşleşiyor mu? |
| `===` | **Strict equality** (katı eşitlik). Tip ve değer eşit mi? `==` (loose equality) tip dönüşümü yapar. `5 === "5"` → `false`, `5 == "5"` → `true`. Best practice: her zaman `===` kullan. |

##### ⚠️ Hata Kontrolü:
```javascript
if (!topic) return;
```
| Kod | Açıklama |
|-----|----------|
| `!topic` | **NOT operatörü**. `topic` falsy değerse `true` olur. Falsy değerler: `false`, `0`, `""` (boş string), `null`, `undefined`, `NaN`. |
| `return;` | **Fonksiyonu sonlandır**. Eğer konu bulunamadıysa aşağıdaki kodlar çalışmasın, hata almayalım. Early return pattern (temiz kod prensibi). |

##### 🎯 DOM Elemanı Seçme:
```javascript
const contentArea = document.getElementById('content-area');
```
| Kod | Açıklama |
|-----|----------|
| `.getElementById()` | **ID ile öğe seç**. `document.querySelector('#content-area')` ile aynı ama daha hızlı. ID benzersiz olduğu için ilk eşleşmeyi döner. |
| `'content-area'` | ID değeri (HTML'de `id="content-area"`). `#` işareti **yazmıyoruz** (querySelector'da yazardık). |

##### 🧹 HTML Escape İşlemi (XSS Güvenliği):
```javascript
const escapedCode = topic.code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
```

##### 🔐 XSS (Cross-Site Scripting) Nedir?
Kötü niyetli kullanıcı, input alanına HTML/JavaScript kodu yazarsa o kod çalışır (güvenlik açığı!). Örnek saldırı:
```javascript
topic.code = "<script>alert('Hack!')</script>";
```
Eğer escape etmezsek bu kod **gerçekten çalışır**! Escape edersek:
```html
&lt;script&gt;alert('Hack!')&lt;/script&gt;
```
Ekranda metin olarak görünür, çalışmaz. ✅ Güvenli!

| Regex | Açıklama |
|-------|----------|
| `/&/g` | **Regular Expression** (düzenli ifade). `/` arasında pattern, `g` = global flag (tüm eşleşmeler). `&` karakterini bul. |
| `.replace()` | String metodu. İlk parametre: aranacak (string veya regex), ikinci parametre: yerine konacak. |
| `"&amp;"` | **HTML entity**. Ekranda `&` görünür. |

##### 📋 HTML Entity Tablosu:
| Karakter | Entity | Neden Escape Edilir? |
|----------|--------|----------------------|
| `<` | `&lt;` | Etiket başlangıcı olarak algılanır |
| `>` | `&gt;` | Etiket kapanışı olarak algılanır |
| `&` | `&amp;` | Entity başlangıcı (önce escape edilmeli!) |
| `"` | `&quot;` | Attribute değerinde sorun çıkarır |
| `'` | `&#39;` | JavaScript string'de kaçış karakteri |

##### 📝 Template Literal (Backtick String):
```javascript
codeHtml = `
    <span class="preview-label">Görsel / Çıktı (Output):</span>
    ...
`;
```
| Konsept | Açıklama |
|---------|----------|
| `` `...` `` | **Template literal** (ES6+). Backtick (ters tırnak) ile. Normal string: `"..."` veya `'...'`. Avantajları: 1) Çok satırlı yazabilme, 2) Değişken gömebilme `${...}`. |
| `${topic.code}` | **String interpolation** (değişken gömme). `topic.code` değişkeninin değeri buraya yerleşir. Eski yöntem: `"<div>" + topic.code + "</div>"` (karışık ve hatalı). |

##### 🔄 Çifte Render Stratejisi:
```javascript
${topic.code}        // 1. Preview: KOD ÇALIŞIR
${escapedCode}       // 2. Code Box: KOD METİN OLARAK GÖSTERİLİR
```
| Nerede | Ne Oluyor | Örnek |
|--------|-----------|-------|
| `preview-container` içinde | `topic.code` **direkt HTML olarak render edilir**. `<button>` varsa gerçek buton oluşur. | `<button class="btn">Tıkla</button>` → Tıklanabilir buton |
| `code-container` içinde | `escapedCode` **metin olarak gösterilir**. `<button>` karakterler olarak görünür. | `&lt;button&gt;Tıkla&lt;/button&gt;` → Metin |

##### 🎨 Inline CSS Animasyonu:
```javascript
<div style="animation: fadeIn 0.5s ease;">
```
| Kod | Açıklama |
|-----|----------|
| `style="..."` | **Inline CSS**. HTML etiketine direkt stil. Yüksek öncelik (specificity = 1000). |
| `animation:` | CSS animasyon özelliği. Format: `animation: isim süre timing-function;` |
| `fadeIn` | Animasyon adı (`@keyframes fadeIn` CSS'de tanımlı). |
| `0.5s` | Süre: 0.5 saniye (500 milisaniye). |
| `ease` | Timing function: yavaş-hızlı-yavaş geçiş. |

##### 🔄 innerHTML ile İçerik Değiştirme:
```javascript
contentArea.innerHTML = `...`;
```
| Kod | Açıklama |
|-----|----------|
| `.innerHTML` | **Öğenin HTML içeriğini değiştir**. Eski içerik **tamamen silinir**, yeni içerik yazılır. Alternatif: `.innerText` (metin), `.textContent` (metin, daha hızlı). |
| `=` | Atama operatörü. Sağdaki değeri soldaki değişkene ata. |

##### 🆚 innerHTML vs innerText vs textContent:
| Özellik | innerHTML | innerText | textContent |
|---------|-----------|-----------|-------------|
| HTML yorumlar mı? | ✅ Evet | ❌ Hayır | ❌ Hayır |
| CSS etkisi | ✅ Var | ✅ Görünen metin | ❌ Ham metin |
| Performans | Yavaş | Orta | Hızlı |
| XSS riski | ⚠️ Yüksek | ✅ Güvenli | ✅ Güvenli |

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

#### 📝 Detaylı CSS Açıklaması:

##### 💻 `.code-container` (Kod Kutusu):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `background-color` | `#1e1e1e` | **VS Code Dark+ teması rengi**. Profesyonel IDE görünümü. `#1e` (R=30), `#1e` (G=30), `#1e` (B=30) = çok koyu gri (neredeyse siyah). |
| `color` | `#dcdcaa` | **Sarı-altın kod rengi**. VS Code'da değişken/fonksiyon isimleri bu renkte. `#dc` (R=220), `#dc` (G=220), `#aa` (B=170) = açık sarı. |
| `padding` | `20px` | **İç boşluk** (dört yönden). Kod kenarlardan 20 piksel içeride başlar. `padding: 10px 20px;` = dikey 10px, yatay 20px olurdu. |
| `border-radius` | `8px` | **Köşe yuvarlama**. `0px` = keskin köşe, `50%` = tamamen yuvarlak (daire). `8px` = hafif yuvarlak (modern tasarım). |
| `border` | `1px solid #444` | **Çerçeve çizgisi**. `1px` = ince, `solid` = düz çizgi, `#444` = orta ton gri. Kutunun sınırını belirginleştirir. |
| `font-family` | `'Consolas', 'Courier New', monospace` | **Font yığını** (fallback system). Tarayıcı soldan sağa dener: 1) Consolas (Windows), 2) Courier New (Mac/Linux), 3) monospace (sistem varsayılanı). Virgülle ayrılır, tırnak içinde yazılır. |

##### 🔤 Monospace Font Nedir?
| Font Tipi | Açıklama | Örnek |
|-----------|----------|-------|
| **Proportional** (orantılı) | Her harf farklı genişlikte. `i` dar, `m` geniş. | Times New Roman, Arial |
| **Monospace** (sabit genişlik) | Her harf aynı genişlikte. Karakterler hizalı. | Consolas, Courier |

```
Proportional: "iii" "mmm"  (farklı genişlik)
Monospace:    "iii" "mmm"  (aynı genişlik)
```
Monospace **kod için ideal**: girintiler bozulmaz, karakterler düzgün hizalanır.

| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `margin-bottom` | `30px` | **Alt dış boşluk**. Bir sonraki öğeyle 30 piksel boşluk. Margin collapse: iki öğenin margin'leri birleşirse büyük olan geçerli olur. |
| `overflow-x` | `auto` | **Yatay taşma kontrolü**. İçerik kutudan genişse yatay scroll çubuğu göster. `hidden` = kes, `scroll` = her zaman scroll, `auto` = gerekirse göster (en iyi!). |

##### 📱 Overflow Değerleri:
| Değer | Davranış | Kullanım |
|-------|----------|----------|
| `visible` | Taşan içerik görünür (varsayılan) | Dropdown menüler |
| `hidden` | Taşan içerik kesilir | Görsel crop |
| `scroll` | Her zaman scrollbar | Sabit yükseklikli listeler |
| `auto` | Gerekirse scrollbar | Dinamik içerik (bizim) |

##### 🏷️ `.code-label` (Etiket):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `font-size` | `0.8rem` | Küçük yazı (≈13px). `1rem = 16px` varsayılan, `0.8rem = 12.8px`. Etiket, içerikten daha küçük olmalı. |
| `color` | `#6c757d` | **Bootstrap'in gri tonu**. Nötr, dikkat çekmeyen ama okunabilir. |
| `margin-bottom` | `8px` | Etiket ile kod kutusu arasında 8 piksel boşluk. |
| `display` | `block` | **Blok eleman**. Yeni satırda başlar, tam genişlik kaplar. `inline` = satır içi, `inline-block` = satır içi ama boyutlandırılabilir. |
| `font-weight` | `bold` | Kalın yazı (`700` ile aynı). Etiketi vurgular. |
| `text-transform` | `uppercase` | Tüm harfleri büyük yap. "Kaynak Kod" → "KAYNAK KOD". |

##### 📊 Display Değerleri Karşılaştırması:
| Değer | Yeni Satır | Genişlik | Yükseklik | Örnek |
|-------|------------|----------|-----------|-------|
| `block` | ✅ Evet | Ayarlanabilir | Ayarlanabilir | `<div>`, `<p>` |
| `inline` | ❌ Hayır | İçeriğe göre | İçeriğe göre | `<span>`, `<a>` |
| `inline-block` | ❌ Hayır | Ayarlanabilir | Ayarlanabilir | `<button>` |
| `flex` | ✅ Evet | Ayarlanabilir | Ayarlanabilir | Modern layout |
| `none` | Gizli | - | - | JavaScript ile toggle |

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

#### 📝 Detaylı CSS Açıklaması:

##### 🖼️ `.preview-container` (Önizleme Kutusu):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `background-color` | `#212529` | **Bootstrap dark theme arka planı**. `#21` (R=33), `#25` (G=37), `#29` (B=41) = koyu gri. Body ile aynı renk, tutarlı görünüm. |
| `color` | `#e9ecef` | **Çok açık gri** (neredeyse beyaz). `#e9` (R=233), `#ec` (G=236), `#ef` (B=239). Koyu arka planda mükemmel okunabilirlik (WCAG AA+ kontrast). |
| `border` | `1px dashed #495057` | **Kesikli çerçeve**. `dashed` = tire-tire çizgi (- - - -). `solid` ile farkı: görsel olarak "çalışan kod alanı" olduğunu vurgular. |
| `padding` | `30px` | **Geniş iç boşluk**. Çalışan kod örnekleri havadar görünsün diye 30px (code container'dan 10px daha fazla). |
| `border-radius` | `8px` | Yumuşak köşeler (modern UI). |
| `min-height` | `150px` | **Minimum yükseklik garantisi**. İçerik çok az bile olsa kutu 150px yüksekliğinde olur. Boş görünümü engeller. `max-height` ile karıştırma! |
| `margin-bottom` | `40px` | Sonraki öğeyle 40px boşluk (code container 30px, bu 40px - önizleme daha belirgin). |

##### 🎨 Border Style Çeşitleri:
| Değer | Görünüm | Kullanım |
|-------|---------|----------|
| `solid` | ▬▬▬▬▬ | Standart çerçeve |
| `dashed` | ▬ ▬ ▬ ▬ | Kesikli (bizim, preview için) |
| `dotted` | ・・・・・ | Noktalı |
| `double` | ▬▬ ▬▬ | Çift çizgi |
| `groove` | 3D oyuk | Eski stil |
| `ridge` | 3D çıkık | Eski stil |
| `inset` | Gömülü | Buton efekti |
| `outset` | Kabartmalı | Buton efekti |
| `none` | Çizgi yok | Border kaldır |

##### 🎯 Min/Max Yükseklik/Genişlik:
| Özellik | Açıklama | Örnek Senaryo |
|---------|----------|---------------|
| `min-height` | En az bu kadar yüksek ol | İçerik az olsa da boş kalmasın |
| `max-height` | En fazla bu kadar yüksek ol | Scroll oluştursun |
| `min-width` | En az bu kadar geniş ol | Buton çok küçük olmasın |
| `max-width` | En fazla bu kadar geniş ol | Metin çok uzun satır olmasın |

##### 🏷️ `.preview-label` (Önizleme Etiketi):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `color` | `#20c997` | **Turkuaz-yeşil** (success rengi). `#20` (R=32), `#c9` (G=201), `#97` (B=151) = yeşil ağırlıklı. Mavi ve yeşil karışımı = cyan-green. |
| Diğer özellikler | | `code-label` ile aynı (font-size, display, font-weight, text-transform). Tek fark: renk (kod etiketi gri, önizleme yeşil). |

##### 🌈 Renk Psikolojisi:
| Renk | Anlamı | Projede Kullanımı |
|------|--------|-------------------|
| 🔴 Kırmızı | Hata, tehlike | - |
| 🟢 Yeşil | Başarı, çıktı | Preview label |
| 🔵 Mavi | Bilgi, güven | Brand icon, aktif link |
| 🟡 Sarı | Uyarı, dikkat | Kod rengi (VS Code) |
| ⚫ Siyah | Güç, zarafet | Navbar |
| ⚪ Beyaz | Temizlik, basitlik | Metin rengi |

##### 📐 Kutu Modeli (Box Model) Hatırlatma:
```
┌─────────────────────────────────────┐
│ Margin (Dış Boşluk - Şeffaf)        │  margin-bottom: 40px
│ ┌─────────────────────────────────┐ │
│ │ Border (Çerçeve)                 │ │  border: 1px dashed
│ │ ┌─────────────────────────────┐ │ │
│ │ │ Padding (İç Boşluk)          │ │ │  padding: 30px
│ │ │ ┌─────────────────────────┐ │ │ │
│ │ │ │   Content (İçerik)       │ │ │ │  min-height: 150px
│ │ │ │   "Çalışan kod burada"   │ │ │ │
│ │ │ └─────────────────────────┘ │ │ │
│ │ └─────────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Toplam genişlik** = content + padding + border + margin  
**CSS3 box-sizing**: `border-box` = padding ve border içeride sayılır (daha pratik)

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

#### 📝 Detaylı HTML Açıklaması:

##### 🔘 Modal Tetikleyici Buton:
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `<button>` | HTML buton etiketi. `type` belirtilmezse varsayılan `type="button"`. Form içindeyse `type="submit"` olur (form gönderir). |
| `class="btn btn-outline-info btn-sm"` | **Bootstrap buton sınıfları**. `btn` = temel, `outline-info` = turkuaz kenar çizgili, `sm` = small (küçük boy). |
| `data-bs-toggle="modal"` | **Bootstrap 5 data attribute**. `data-bs-*` = Bootstrap JavaScript'e komut. `toggle="modal"` = modal aç/kapat. Önceki Bootstrap sürümlerinde `data-toggle` idi. |
| `data-bs-target="#aboutModal"` | **Hedef modal ID**. `#aboutModal` = CSS seçici, `id="aboutModal"` olan elementi hedefle. Modal tek tık ile açılır, JavaScript yazmaya gerek yok! |

##### 🎭 Modal Pencere Yapısı:
```html
<div class="modal fade" id="aboutModal" tabindex="-1" aria-hidden="true">
```
| Attribute | Değer | Detaylı Açıklama |
|-----------|-------|------------------|
| `class="modal"` | Bootstrap'in modal container sınıfı. Temel modal davranışı. |
| `fade` | **Animasyon sınıfı**. Modal yumuşak açılır/kapanır (opacity ve transform değişir). `fade` olmazsa aniden belirir. |
| `id="aboutModal"` | **Benzersiz kimlik**. JavaScript ve CSS ile hedeflemek için. `data-bs-target` buraya referans verir. |
| `tabindex="-1"` | **Klavye navigasyonu**. `-1` = Tab tuşu ile erişilemesin (modal JavaScript ile açılır). `0` = Tab sırasına girer, `>0` = öncelik sırası. |
| `aria-hidden="true"` | **Erişilebilirlik**. Ekran okuyucular (screen reader) için. `true` = modal kapalıyken görünmez, açıldığında `false` olur (JavaScript otomatik yapar). |

##### ♿ ARIA (Accessible Rich Internet Applications):
| ARIA Özelliği | Anlamı | Kullanım |
|---------------|--------|----------|
| `aria-hidden` | Ekran okuyucudan gizle/göster | Modal, dropdown |
| `aria-label` | Öğe için metin etiketi | İkonlar, butonlar |
| `aria-labelledby` | Başka öğenin ID'sini etiket olarak kullan | Modal başlığı |
| `aria-describedby` | Açıklama referansı | Form alanları |
| `aria-live` | Dinamik içerik güncellemesi | Bildirimler |

##### 📦 Modal İçerik Yapısı:
```html
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">...</div>
        <div class="modal-body">...</div>
        <div class="modal-footer">...</div>
    </div>
</div>
```

| Sınıf | Görev | İçerik |
|-------|-------|--------|
| `modal-dialog` | **Modal konumu ve boyutu**. Ekranda ortalanır. `modal-dialog-centered` = dikey ortala. `modal-lg` = büyük, `modal-sm` = küçük. |
| `modal-content` | **Modal'ın arka planı ve border**. Gerçek kutu burası. |
| `modal-header` | **Üst kısım**: Başlık + kapatma butonu. `border-bottom` ile ayrılır. |
| `modal-body` | **Ana içerik**: Metin, liste, form vs. buraya. |
| `modal-footer` | **Alt kısım**: Butonlar (Kapat, Kaydet vs.). Sağa hizalı. |

##### 🔘 Kapatma Butonu:
```html
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
```
| Kod Parçası | Detaylı Açıklama |
|------------|------------------|
| `type="button"` | **Buton tipi**. `button` = normal buton (form göndermez), `submit` = form gönderir, `reset` = formu sıfırlar. |
| `class="btn-close"` | **Bootstrap 5 kapatma butonu**. Otomatik X ikonu (`×`). Önceki sürümlerde `&times;` manuel yazılırdı. |
| `data-bs-dismiss="modal"` | **Modal'ı kapat komutu**. Bootstrap JavaScript bu butona tıklayınca modal'ı kapatır. |
| `aria-label="Close"` | **Ekran okuyucu için etiket**. Görsel olarak X ikonu var ama görme engelliler için "Close" (Kapat) yazısı okunur. |

##### 📋 Modal Body İçeriği:
```html
<h6 class="text-info">Grup Üyeleri:</h6>
<ul>
    <li>KAAN ŞENCAN</li>
    <li>ARDA ÖZTÜRK</li>
    <li>MUHAMMED SABİT GENAN</li>
</ul>
<hr class="bg-secondary">
<p class="small text-muted">Web Tabanlı Programlama Final Ödevi.</p>
```

| Sınıf | Açıklama |
|-------|----------|
| `text-info` | **Bootstrap renk yardımcısı**. Turkuaz/mavi yazı. Diğerleri: `text-primary` (mavi), `text-success` (yeşil), `text-danger` (kırmızı), `text-warning` (sarı), `text-muted` (gri). |
| `<ul>` | **Unordered List** (sırasız liste). Madde işaretli (•). `<ol>` = sıralı (1, 2, 3). |
| `<li>` | **List Item** (liste öğesi). Her üye ayrı `<li>` içinde. |
| `<hr>` | **Horizontal Rule** (yatay çizgi). İçerik ayırıcı. Self-closing tag (kapanış etiketi yok). |
| `bg-secondary` | **Background color** (arka plan rengi). `<hr>` için. Varsayılan çizgi çok soluk, bunu koyulaştırır. |
| `small` | **Bootstrap küçük metin sınıfı**. `font-size: 80%`. Alternatif: `<small>` HTML etiketi. |
| `text-muted` | **Sönük gri yazı**. İkincil bilgiler için (yan not, açıklama). |

##### 🎨 Bootstrap Text Renk Sınıfları:
| Sınıf | Renk | Anlamı | Hex Yaklaşık |
|-------|------|--------|--------------|
| `text-primary` | Mavi | Ana renk | `#0d6efd` |
| `text-secondary` | Gri | İkincil | `#6c757d` |
| `text-success` | Yeşil | Başarı | `#198754` |
| `text-danger` | Kırmızı | Hata | `#dc3545` |
| `text-warning` | Sarı | Uyarı | `#ffc107` |
| `text-info` | Turkuaz | Bilgi | `#0dcaf0` |
| `text-light` | Açık gri | Koyu arka planda | `#f8f9fa` |
| `text-dark` | Koyu gri | Açık arka planda | `#212529` |
| `text-muted` | Sönük gri | Yan not | `#6c757d` |
| `text-white` | Beyaz | Koyu arka planda | `#ffffff` |

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

#### 📝 Detaylı CSS Açıklaması:

##### 🎨 `.modal-content` Özelleştirmesi:
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `background-color` | `#212529` | **Koyu tema uyumu**. Bootstrap varsayılan modal açık renkli (`#fff` beyaz). Projemiz koyu tema olduğu için modal da koyu yapıyoruz. Body ile aynı renk (`#212529`). |
| `color` | `white` | **Metin rengi beyaz**. `white` = `#ffffff` ile aynı. Koyu arka planda okunabilirlik için. |
| `border` | `1px solid #444` | **İnce kenarlık**. `#444` = orta ton gri. Modal'ı arka plandan ayırır. Bootstrap varsayılanı `#dee2e6` (açık gri) olduğu için eziyoruz. |

##### 🔍 Renk İsimleri vs Hex Kodları:
| Renk İsmi | Hex Kod | RGB | Kullanım |
|-----------|---------|-----|----------|
| `white` | `#ffffff` | `rgb(255,255,255)` | Tam beyaz |
| `black` | `#000000` | `rgb(0,0,0)` | Tam siyah |
| `red` | `#ff0000` | `rgb(255,0,0)` | Tam kırmızı |
| `blue` | `#0000ff` | `rgb(0,0,255)` | Tam mavi |
| `green` | `#008000` | `rgb(0,128,0)` | Yeşil (lime değil!) |

**Not:** 147 renk ismi var (HTML/CSS color names), ama profesyonel projelerde hex/rgb kullanılır (daha spesifik).

##### 🎛️ `.btn-close` (Kapatma Butonu):
```css
filter: invert(1);
```

| Özellik | Değer | Detaylı Açıklama |
|---------|-------|------------------|
| `filter` | **CSS filtre efekti**. Görsel efektler için (blur, contrast, grayscale vs.). Photoshop'taki filtreler gibi. |
| `invert(1)` | **Renkleri tersine çevir**. `0` = normal, `1` = tamamen ters. Siyah → beyaz, beyaz → siyah olur. |

##### 🎨 CSS Filter Fonksiyonları:
| Filter | Parametre | Açıklama | Örnek |
|--------|-----------|----------|-------|
| `blur()` | `0-∞px` | Bulanıklaştır | `blur(5px)` |
| `brightness()` | `0-∞` | Parlaklık (`1` = normal) | `brightness(1.5)` |
| `contrast()` | `0-∞` | Kontrast (`1` = normal) | `contrast(200%)` |
| `grayscale()` | `0-1` | Gri tonlama (`1` = tam gri) | `grayscale(1)` |
| `invert()` | `0-1` | Renk tersine (`1` = tam) | `invert(1)` |
| `opacity()` | `0-1` | Şeffaflık (`0` = görünmez) | `opacity(0.5)` |
| `saturate()` | `0-∞` | Renk doygunluğu | `saturate(2)` |
| `sepia()` | `0-1` | Sepya tonu (nostalji) | `sepia(0.8)` |

##### 🔄 Neden Invert Kullandık?
Bootstrap 5'in `.btn-close` butonu **koyu renkli X ikonu**. Koyu arka planda görünmez! İki çözüm:
1. ❌ Manuel beyaz ikon eklemek (fazla iş)
2. ✅ `filter: invert(1)` ile siyahı beyaza çevirmek (tek satır!)

**Öncesi:** ✖ (siyah X, görünmez)  
**Sonrası:** ✖ (beyaz X, görünür)

##### 🆚 Opacity vs Filter:Opacity:
| Özellik | Etkilediği | Kalıtım | Performans |
|---------|------------|---------|------------|
| `opacity: 0.5` | Tüm öğe (çocuklar dahil) | Evet | Hızlı |
| `filter: opacity(0.5)` | Sadece o öğe | Hayır | Yavaş |

Genelde `opacity` kullanılır, ama birden fazla filtre birleştirilecekse `filter` gerekli:
```css
filter: blur(2px) brightness(1.5) invert(0.8); /* Birden fazla efekt */
```

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

#### 📝 Detaylı JavaScript Açıklaması:

##### 🎬 Fonksiyon Amacı:
`showWelcome()` → Kullanıcı siteye ilk girdiğinde veya navbar'daki logoya tıkladığında karşılama ekranını gösterir.

##### 1️⃣ Content Area Seçimi:
```javascript
const contentArea = document.getElementById('content-area');
```
| Kod | Açıklama |
|-----|----------|
| Bu satır daha önce açıklandı | [Content Area bölümüne bakın](#4-content-area-i̇çerik-alanı) |

##### 2️⃣ Tüm Aktif Linkleri Temizleme:
```javascript
document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
```
| Kod | Açıklama |
|-----|----------|
| Bu satır daha önce açıklandı | [Menü Links bölümüne bakın](#3-menü-links-linkler) |

**Amaç:** Karşılama ekranında hiçbir link seçili görünmesin (sidebar'da turkuaz vurgu olmasın).

##### 3️⃣ SVG (Scalable Vector Graphics) İkonu:
```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#3dd5f3" 
     class="bi bi-code-slash" viewBox="0 0 16 16" style="opacity: 0.8;">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13z..."/>
</svg>
```

| Attribute | Değer | Detaylı Açıklama |
|-----------|-------|------------------|
| `<svg>` | **Scalable Vector Graphics**. Vektörel grafik (zoom yapınca bozulmaz). Alternatif: `<img>` (raster/piksel bazlı). |
| `xmlns` | `http://www.w3.org/2000/svg` | **XML namespace**. SVG standardının resmi URL'si. Tarayıcıya "bu bir SVG'dir" der. Zorunlu! |
| `width` | `100` | **Genişlik** (100 piksel). SVG birim belirtilmezse `px` kabul edilir. `100%`, `10em` vs. de yazılabilir. |
| `height` | `100` | **Yükseklik** (100 piksel). Kare ikon için genişlik = yükseklik. |
| `fill` | `#3dd5f3` | **Dolgu rengi** (SVG içindeki şekillerin rengi). Bizde turkuaz mavi. `stroke` = çizgi rengi. |
| `class` | `bi bi-code-slash` | **Bootstrap Icons sınıfı**. `bi` = Bootstrap Icon, `code-slash` = `</>` ikonu. Opsiyonel (stil için). |
| `viewBox` | `0 0 16 16` | **SVG koordinat sistemi**. Format: `min-x min-y width height`. `0 0 16 16` = sol üst köşe (0,0), 16 birim genişlik/yükseklik. Ölçeklendirme için kritik! |
| `style="opacity: 0.8"` | **Şeffaflık**. `0.8` = %80 opak (%20 şeffaf). İkon hafif soluk görünür (arka planla uyum). |

##### 🔍 ViewBox Nasıl Çalışır?
```
viewBox="0 0 16 16"
         │ │ │  └─ İç yükseklik
         │ │ └──── İç genişlik
         │ └────── Başlangıç Y koordinatı
         └──────── Başlangıç X koordinatı
```
`viewBox` SVG'nin "kamera açısı" gibidir. `width/height` = ekrandaki boyut, `viewBox` = iç koordinat sistemi.

**Örnek:**
- `width="100" height="100" viewBox="0 0 16 16"` → 16 birimlik ikon, 100 piksele sığdırılır (scale: 6.25x)
- `width="200" height="200" viewBox="0 0 16 16"` → Aynı ikon, 200 piksele sığdırılır (scale: 12.5x) - Daha büyük ama kalite kayıpsız!

##### 🎨 `<path>` Elementi:
```html
<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13..."/>
```
| Attribute | Açıklama |
|-----------|----------|
| `<path>` | **SVG çizim komutu**. Çizgi, eğri, şekil çizmek için. En esnek SVG elementi. |
| `d` | **Drawing commands** (çizim komutları). Bir dizi koordinat ve komut içeren string. Örnek: `M` = move (hareket et), `L` = line (çizgi çek), `A` = arc (yay), `Z` = close (kapat). |

##### 🖌️ Path Komutları (Kısa Liste):
| Komut | Anlamı | Örnek |
|-------|--------|-------|
| `M x y` | Move to (kalem kaldır, buraya git) | `M 10 20` |
| `L x y` | Line to (çizgi çek) | `L 30 40` |
| `H x` | Horizontal line (yatay çizgi) | `H 50` |
| `V y` | Vertical line (dikey çizgi) | `V 60` |
| `A rx ry ... x y` | Arc (yay çiz - karmaşık!) | `A 5 5 0 1 0 10 20` |
| `Z` | Close path (başlangıca dön, kapat) | `Z` |

**Bizim path:** `</>` ikonu çizer (slash, açılış/kapanış braketleri). Bootstrap Icons kütüphanesinden alınmış.

##### 🆚 SVG vs PNG/JPG:
| Özellik | SVG | PNG/JPG |
|---------|-----|---------|
| Tip | Vektör | Raster (piksel) |
| Zoom | ✅ Keskin kalır | ❌ Pikselleşir |
| Dosya boyutu | Küçük (basit şekiller için) | Büyük |
| Renk değiştirme | ✅ CSS/JS ile kolay | ❌ Yeni dosya gerekir |
| Animasyon | ✅ CSS/JS | ❌ GIF gerekir |
| Kompleks görsel | Zor | ✅ Kolay |
| Tarayıcı desteği | IE9+ | ✅ Her tarayıcı |

##### 🎭 Template Literal İçinde HTML:
```javascript
contentArea.innerHTML = `
    <div class="welcome-container">
        <h1 class="welcome-title">
            <span class="brand-highlight">&lt;/&gt;</span> WebSchool
        </h1>
        ...
    </div>
`;
```
| Konsept | Açıklama |
|---------|----------|
| Backtick string içinde HTML | Çok satırlı HTML kodu yazabiliyoruz (normal `"..."` veya `'...'` ile imkansız). |
| `${değişken}` yok | Bu örnekte değişken gömme yok, tamamen statik HTML. Dinamik içerik gerekmediği için. |
| `&lt;/&gt;` tekrar | Karşılama ekranında da `</>` simgesi var (navbar ile tutarlılık). |

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

#### 📝 Detaylı CSS Açıklaması:

##### 🎯 `.welcome-container` (Ana Kapsayıcı):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `text-align` | `center` | **Metin hizalama**. `left` (sol, varsayılan), `right` (sağ), `center` (ortala), `justify` (iki yana yasla). Tüm içerik (başlık, metin, SVG) ortada görünür. |
| `padding-top` | `60px` | **Üstten iç boşluk**. İçerik sayfanın en üstünde değil, biraz aşağıda başlar (navbar'dan sonra). |
| `animation` | `fadeIn 0.8s ease-out` | **CSS animasyonu**. Format: `isim süre timing-function`. `fadeIn` = animasyon adı (`@keyframes`'de tanımlı), `0.8s` = 0.8 saniye, `ease-out` = hızlı başla yavaş bitir. |

##### ⏱️ Animation Timing Functions (Easing):
| Değer | Grafik | Açıklama | Kullanım |
|-------|--------|----------|----------|
| `linear` | ━━━━━ | Sabit hız | Dönen loader |
| `ease` | 〰️ | Yavaş-hızlı-yavaş (varsayılan) | Genel amaçlı |
| `ease-in` | 〰️ | Yavaş başla, hızlan | Obje uzaklaşırken |
| `ease-out` | 〰️ | Hızlı başla, yavaşla | Obje yaklaşırken (bizim) |
| `ease-in-out` | 〰️ | İki uçta da yavaş | Uzun animasyonlar |
| `cubic-bezier(x1,y1,x2,y2)` | Özel | Tam kontrol | İleri seviye |

**Bizim seçimimiz:** `ease-out` → Karşılama ekranı hızlı belirip yumuşak duruyor (hoş görünüm).

##### 📏 `.welcome-title` (Ana Başlık):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `font-size` | `3.5rem` | **Çok büyük yazı**. `1rem = 16px` (varsayılan), `3.5rem = 56px`. Mobilde çok büyük olabilir, responsive tasarımda `@media` ile küçültülür. |
| `font-weight` | `800` | **Extra bold** (çok kalın). `400` = normal, `700` = bold, `800` = extra bold, `900` = black. |
| `color` | `#fff` | **Beyaz renk**. `#fff` = `#ffffff`'in kısa yazımı. Aynı üç rakam tekrar ediyorsa kısaltılabilir: `#ff00cc` → `#f0c`. |
| `margin-bottom` | `10px` | **Alt dış boşluk**. Başlık ile alt paragraf arasında 10 piksel boşluk. |

##### 🎨 Hex Renk Kısaltmaları:
| Tam Yazım | Kısa Yazım | Renk |
|-----------|------------|------|
| `#ffffff` | `#fff` | Beyaz |
| `#000000` | `#000` | Siyah |
| `#ff0000` | `#f00` | Kırmızı |
| `#00ff00` | `#0f0` | Yeşil |
| `#0000ff` | `#00f` | Mavi |
| `#3dd5f3` | ❌ Kısaltılamaz | Turkuaz (farklı rakamlar) |

##### 🎨 `.brand-highlight` (Vurgulu Metin):
| CSS Özelliği | Değer | Detaylı Açıklama |
|--------------|-------|------------------|
| `color` | `#3dd5f3` | **Turkuaz renk**. `</>` simgesini vurgular. Navbar'daki `brand-icon` ile aynı renk (tutarlılık). |

##### 🎬 `@keyframes fadeIn` (Animasyon Tanımı):
```css
@keyframes fadeIn {
    from { ... }
    to { ... }
}
```

| Konsept | Açıklama |
|---------|----------|
| `@keyframes` | **CSS animasyon tanımlama kuralı**. At-rule (@ ile başlayan özel kural). Diğerleri: `@media`, `@import`, `@font-face`. |
| `fadeIn` | **Animasyon ismi**. İstediğiniz ismi verebilirsiniz (`slideIn`, `bounce`, `rotate` vs.). CSS'de kullanırken bu ismi referans alırız. |
| `from { }` | **Başlangıç durumu** (0% ile aynı). Animasyon başlamadan önceki stil. |
| `to { }` | **Bitiş durumu** (100% ile aynı). Animasyon tamamlandıktan sonraki stil. |

##### 🔄 Alternatif Yazım (Yüzdelik):
```css
@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }      /* Başlangıç */
    50% { opacity: 0.5; transform: translateY(10px); }   /* Orta nokta */
    100% { opacity: 1; transform: translateY(0); }       /* Bitiş */
}
```
`from/to` yerine `%` kullanabilirsiniz. Daha fazla ara adım eklenebilir (örnek: 25%, 75%).

##### 🎭 Transform Özellikleri:
| Özellik | Değer | Açıklama | Örnek |
|---------|-------|----------|-------|
| `opacity` | `0-1` | **Şeffaflık**. `0` = görünmez, `1` = tamamen opak. `0.5` = yarı saydam. | `opacity: 0.8` |
| `transform` | Fonksiyon | **Şekil dönüştürme**. Konumu, ölçeği, rotasyonu değiştirir. Birden fazla fonksiyon birleştirilebilir. | `transform: rotate(45deg)` |

##### 📐 Transform Fonksiyonları:
| Fonksiyon | Parametreler | Açıklama | Örnek |
|-----------|--------------|----------|-------|
| `translate(x, y)` | Piksel/% | **Kaydırma** (move). `X` = yatay, `Y` = dikey. | `translate(10px, 20px)` |
| `translateX(x)` | Piksel/% | Sadece yatay kaydırma. | `translateX(50px)` |
| `translateY(y)` | Piksel/% | Sadece dikey kaydırma (bizim). | `translateY(-20px)` |
| `scale(x, y)` | Sayı | **Ölçeklendirme**. `1` = normal, `2` = iki kat büyük, `0.5` = yarı boyut. | `scale(1.5)` |
| `rotate(deg)` | Derece | **Döndürme**. `45deg` = 45 derece saat yönünde. | `rotate(-90deg)` |
| `skew(x, y)` | Derece | **Eğme** (çarpıtma). | `skew(10deg, 5deg)` |

##### 🎬 Animasyon Nasıl Çalışıyor?
```
Zaman:    0s ──────────────────────────────────────────────────> 0.8s
Opacity:  0 ─────────────────────────────────────────────────────> 1
          (görünmez)                                           (görünür)

TransY:   20px ──────────────────────────────────────────────────> 0px
          (aşağıda)                                            (normal)
```

**Adım adım:**
1. **0 saniye (from):** Öğe görünmez (`opacity: 0`) ve 20 piksel aşağıda (`translateY(20px)`)
2. **0-0.8 saniye arası:** `ease-out` eğrisi ile yumuşak geçiş
3. **0.8 saniye (to):** Öğe tamamen görünür (`opacity: 1`) ve normal konumda (`translateY(0)`)

**Sonuç:** Karşılama ekranı aşağıdan yukarı kayarak beliriyor! 🎉

##### 🎨 Popüler Animasyon Örnekleri:
| Animasyon | Kod | Kullanım |
|-----------|-----|----------|
| **Fade In** | `opacity: 0 → 1` | Belirme (bizim) |
| **Slide In** | `translateX(-100%) → 0` | Yandan kayarak gelme |
| **Bounce** | `translateY(0 → -30 → 0)` | Zıplama |
| **Rotate** | `rotate(0deg → 360deg)` | Döndürme |
| **Pulse** | `scale(1 → 1.1 → 1)` | Nabız (dikkat çekme) |
| **Shake** | `translateX(0 → 10 → -10 → 0)` | Titreme (hata) |

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
> **Detaylı Açıklama:** 
> - `row` = Satır konteyneri (negatif margin ile `col`'ları hizalar)
> - `col-md-3` = Medium ekranlarda (`≥768px`) 12'lik sistemde 3 birim (25%)
> - `col-md-9` = Medium ekranlarda 9 birim (75%)
> - **Toplam her zaman 12 olmalı:** 3 + 9 = 12 ✅

**Bootstrap Breakpoints:**
| Prefix | Ekran Boyutu | Piksel | Örnek Cihaz |
|--------|--------------|--------|-------------|
| `xs` | Extra Small | <576px | Mobil telefon (dikey) |
| `sm` | Small | ≥576px | Mobil telefon (yatay) |
| `md` | Medium | ≥768px | Tablet |
| `lg` | Large | ≥992px | Küçük laptop |
| `xl` | Extra Large | ≥1200px | Büyük ekran |
| `xxl` | XX Large | ≥1400px | Monitör |

### JavaScript Click Olayı
```javascript
element.onclick = (e) => {
    e.preventDefault();      // Varsayılan davranışı engelle
    // Kodunuz buraya...
};
```
> **Detaylı Açıklama:**
> - `element` = DOM öğesi (`document.getElementById()` ile alınmış)
> - `onclick` = Click event handler (alternatif: `addEventListener('click', ...)`)
> - `(e)` = Event parametresi (olay bilgileri içerir)
> - `e.preventDefault()` = Link tıklandığında sayfayı yenilemeyi engelle

**Event Object (e) Özellikleri:**
| Özellik | Açıklama | Örnek |
|---------|----------|-------|
| `e.target` | Tıklanan element | `<button>` |
| `e.currentTarget` | Event listener eklenen element | `<div>` |
| `e.type` | Olay tipi | `"click"` |
| `e.preventDefault()` | Varsayılan davranışı engelle | Form submit iptal |
| `e.stopPropagation()` | Event bubbling'i durdur | Parent'a yayılmasın |

### CSS Animasyon
```css
@keyframes animasyonAdi {
    from { 
        opacity: 0; 
        transform: scale(0.8); 
    }
    to { 
        opacity: 1; 
        transform: scale(1); 
    }
}

.element {
    animation: animasyonAdi 1s ease;
}
```
> **Detaylı Açıklama:**
> - `@keyframes` = Animasyon tanımlama kuralı
> - `from` = Başlangıç durumu (0%)
> - `to` = Bitiş durumu (100%)
> - `animation:` = Kısa yazım (longhand: `animation-name`, `animation-duration` vs.)

**Animation Özellik Sırası (Shorthand):**
```css
animation: name duration timing-function delay iteration-count direction fill-mode;
```
| Parametre | Açıklama | Örnek |
|-----------|----------|-------|
| `name` | Animasyon adı | `fadeIn` |
| `duration` | Süre | `1s`, `500ms` |
| `timing-function` | Easing | `ease`, `linear` |
| `delay` | Gecikme | `0.5s` (0.5 saniye sonra başla) |
| `iteration-count` | Tekrar sayısı | `infinite`, `3` |
| `direction` | Yön | `normal`, `reverse`, `alternate` |
| `fill-mode` | Başlangıç/bitiş stili | `forwards`, `backwards` |

---

## 📚 Terimler Sözlüğü (Glossary)

### HTML/Web Terimleri
| Terim | Açıklama |
|-------|----------|
| **DOM (Document Object Model)** | HTML belgesinin ağaç yapısı. JavaScript ile manipüle edilir. |
| **Semantic HTML** | Anlamlı etiketler (`<nav>`, `<article>`, `<section>`). SEO ve erişilebilirlik için önemli. |
| **Self-closing tag** | Kapanış etiketi olmayan elementler (`<img>`, `<br>`, `<hr>`). |
| **Attribute (Öznitelik)** | HTML etiketlerinin özellikleri (`href`, `src`, `class`, `id`). |
| **Inline vs Block** | `inline` = satır içi (`<span>`), `block` = tam satır (`<div>`). |

### CSS Terimleri
| Terim | Açıklama |
|-------|----------|
| **Selector (Seçici)** | Hangi öğeye stil uygulanacağını belirler (`.class`, `#id`, `element`). |
| **Specificity (Öncelik)** | CSS kurallarının önem sırası. `inline > id > class > element`. |
| **Pseudo-class** | Özel durum seçicileri (`:hover`, `:active`, `:focus`, `:nth-child`). |
| **Pseudo-element** | Sanal elementler (`::before`, `::after`, `::first-letter`). |
| **Responsive Design** | Ekran boyutuna göre uyarlanabilen tasarım (`@media` sorguları). |
| **Flexbox** | Tek boyutlu layout sistemi (`display: flex`). |
| **Grid** | İki boyutlu layout sistemi (`display: grid`). |

### JavaScript Terimleri
| Terim | Açıklama |
|-------|----------|
| **Variable (Değişken)** | Veri saklayan kutu (`const`, `let`, `var`). |
| **Function (Fonksiyon)** | Tekrar kullanılabilir kod bloğu. |
| **Arrow Function** | Kısa fonksiyon sözdizimi (`(x) => x * 2`). |
| **Callback** | Başka bir fonksiyona parametre olarak verilen fonksiyon. |
| **Event Listener** | Olayları dinleyen kod (`addEventListener`, `onclick`). |
| **Template Literal** | Backtick string (`` `...` ``), değişken gömebilir. |
| **Destructuring** | Diziden/objeden değer çıkarma (`const {name} = user`). |
| **Spread Operator** | Dizi/obje yayma (`...array`). |

### Bootstrap Terimleri
| Terim | Açıklama |
|-------|----------|
| **Container** | İçerik sarmalayıcı (`container`, `container-fluid`). |
| **Grid System** | 12 sütunlu responsive düzen sistemi. |
| **Utility Classes** | Hızlı stillendirme sınıfları (`m-3`, `p-2`, `text-center`). |
| **Component** | Hazır UI bileşenleri (navbar, modal, card, button). |
| **Breakpoint** | Ekran boyutu kırılma noktası (`sm`, `md`, `lg`, `xl`). |

### Git/Geliştirme Terimleri
| Terim | Açıklama |
|-------|----------|
| **Repository (Repo)** | Proje dosyalarının bulunduğu depo. |
| **Commit** | Değişiklikleri kaydetme. |
| **Push** | Yerel değişiklikleri uzak sunucuya gönderme. |
| **Pull** | Uzak sunucudan değişiklikleri çekme. |
| **Branch** | Kod dalı (paralel geliştirme için). |
| **Merge** | Dalları birleştirme. |

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

---

**Başarılar dilerim! 🎓✨**

*Sunumda her bileşeni canlı gösterip, kodları açıklayabilirsiniz. Sorular gelirse bu rehber size yardımcı olacak.*

---

## 🎤 Sunum Sırasında Dikkat Edilecekler

### ✅ Yapılması Gerekenler:
1. **Canlı Demo Yap:** Kodu açıklamadan önce çalışır halini göster
2. **Kod-Sonuç İlişkisi Kur:** "Bu kod satırı şu etkiyi yaratıyor" diye göster
3. **Responsive Testi:** Tarayıcıyı küçült, mobil görünümü göster
4. **Tarayıcı Geliştirici Araçları:** F12 ile Elements/Console sekmelerini göster
5. **Animasyonları Vurgula:** Hover efektlerini, modal açılışını göster

### ❌ Yapılmaması Gerekenler:
1. **Kod Okunmasın:** Her satırı okumak yerine özetini anlat
2. **Çok Hızlı Geçme:** Önemli noktalarda dur, soru al
3. **Jargon Bombardımanı:** "Flexbox, z-index, pseudo-class" gibi terimleri açıkla
4. **Dosyalar Arasında Kaybolma:** Hangi dosyada olduğunu sürekli belirt

### 💡 Ekstra Puan Kazandıracak Özellikler:
- **Performans:** "Tek bir JavaScript dosyasıyla tüm içerik dinamik yükleniyor"
- **Güvenlik:** "XSS saldırılarına karşı HTML karakterleri escape ediliyor"
- **Erişilebilirlik:** "ARIA etiketleri ile ekran okuyucu desteği var"
- **Modülerlik:** "Yeni ders içeriği eklemek için sadece data dosyasına ekleme yapılıyor"
- **Best Practices:** "CSS BEM metodolojisi, semantic HTML, const/let kullanımı"

---

## 🛠️ Geliştirme Önerileri (Bonus)

### 🚀 İleriye Dönük İyileştirmeler:
1. **Arama Özelliği:** Konular arasında arama yapabilme
2. **Karanlık/Aydınlık Mod:** Kullanıcı tercihi ile tema değiştirme
3. **İlerleme Takibi:** Hangi konuların okunduğunu işaretleme (localStorage)
4. **Quiz Sistemi:** Her konudan sonra mini test
5. **Kod Düzenleme:** CodeMirror/Monaco Editor ile canlı kod düzenleme
6. **Notlar:** Kullanıcının not alabilmesi
7. **PDF Export:** Ders notlarını PDF'e aktarma
8. **Çoklu Dil Desteği:** i18n ile İngilizce/Türkçe

### 🔧 Teknik İyileştirmeler:
- **Lazy Loading:** Kod örnekleri sayfa açılırken değil, tıklanınca yüklensin
- **Service Worker:** Offline çalışma desteği (PWA)
- **IndexedDB:** Büyük veri setleri için tarayıcı veritabanı
- **TypeScript:** Tip güvenliği için
- **Unit Tests:** Jest ile fonksiyon testleri
- **Build System:** Webpack/Vite ile minification, bundling

---

## 📖 Kaynaklar ve Referanslar

### 📚 Öğrenme Kaynakları:
- **MDN Web Docs:** https://developer.mozilla.org (HTML/CSS/JS referansı)
- **Bootstrap Dökümanı:** https://getbootstrap.com/docs/5.3
- **CSS-Tricks:** https://css-tricks.com (CSS ipuçları)
- **JavaScript.info:** https://javascript.info (JS rehberi)
- **Can I Use:** https://caniuse.com (Tarayıcı uyumluluğu)

### 🎨 Tasarım Araçları:
- **Color Picker:** https://htmlcolorcodes.com
- **Google Fonts:** https://fonts.google.com
- **Font Awesome:** https://fontawesome.com (İkonlar)
- **Bootstrap Icons:** https://icons.getbootstrap.com

### 🛠️ Geliştirme Araçları:
- **VS Code Extensions:** 
  - Live Server (canlı önizleme)
  - Prettier (kod formatı)
  - ESLint (JavaScript hata kontrolü)
  - Auto Rename Tag (HTML)
- **Chrome DevTools:** Tarayıcı geliştirici araçları
- **Git:** Versiyon kontrol sistemi

---

## 🏆 Projenin Teknik Özeti

### 📊 İstatistikler:
| Metrik | Değer |
|--------|-------|
| **Toplam Satır Sayısı** | ~1500+ |
| **Dosya Sayısı** | 8 (1 HTML, 1 CSS, 6 JS) |
| **Ders Konusu** | 50+ |
| **Kategori** | 5 (Kavramlar, HTML, CSS, Bootstrap, JavaScript) |
| **Renk Paleti** | 7 ana renk |
| **CSS Sınıfı** | 30+ |
| **JavaScript Fonksiyonu** | 5 ana fonksiyon |

### 🎯 Öğrenilen Konular:
✅ **HTML5:** Semantic etiketler, form elemanları, SVG  
✅ **CSS3:** Flexbox, Grid, Animations, Transitions, Pseudo-classes  
✅ **JavaScript ES6+:** Arrow functions, Template literals, Destructuring, Array methods  
✅ **Bootstrap 5:** Grid sistemi, Components, Utilities, Data attributes  
✅ **DOM Manipulation:** getElementById, querySelector, innerHTML  
✅ **Event Handling:** onclick, addEventListener, preventDefault  
✅ **Responsive Design:** Media queries, Mobile-first approach  
✅ **Best Practices:** Semantic HTML, CSS metodoloji, XSS güvenliği

---

## 🎓 Sıkça Sorulan Sorular (FAQ)

**S: Neden Bootstrap kullandınız, saf CSS ile yapılamaz mıydı?**  
C: Bootstrap ile çok daha hızlı geliştirme yapıldı. Grid sistemi, modal, accordion gibi bileşenler hazır geldi. Saf CSS ile aynı özellikleri yazmak 3-4 kat daha uzun sürerdi.

**S: JavaScript yerine React/Vue kullanılabilir miydi?**  
C: Evet ama bu proje için "overkill" olurdu. Vanilla JavaScript yeterli ve daha anlaşılır. Framework öğrenmek isteyenler için bu proje güzel bir temel oluşturur.

**S: Veri neden ayrı dosyalarda (html.js, css.js)?**  
C: **Modülerlik** için. Yeni konu eklemek için sadece ilgili dosyayı düzenlemek yeterli. Kodlar birbirine karışmıyor, bakımı kolay.

**S: SEO optimize midir?**  
C: Kısmen. Semantic HTML ve meta taglar var ama **SPA (Single Page Application)** olduğu için içerik dinamik yükleniyor. Arama motorları JavaScript çalıştırsa bile bu yapı SEO için ideal değil. Server-side rendering (SSR) gerekir.

**S: Mobil uyumlu mu?**  
C: Evet, Bootstrap Grid ile responsive. Tablet ve mobilde sidebar daraltılır, içerik tam genişlik kaplar. Ancak çok küçük ekranlar için extra test gerekir.

**S: Tarayıcı desteği nasıl?**  
C: **Modern tarayıcılar** destekler (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+). IE11 desteklemez (ES6 arrow functions, template literals, const/let kullanıldı).

---

**📌 Not:** Bu README dosyası projenin tam dokümantasyonudur. Sunum sırasında tüm soruları cevaplayabilecek bilgiye sahipsiniz!

**🚀 Son Kontrol Listesi:**
- [ ] Tüm dosyalar yerli yerinde mi?
- [ ] Tarayıcıda hatasız çalışıyor mu?
- [ ] Git'e commit/push yapıldı mı?
- [ ] README okundu ve anlaşıldı mı?
- [ ] Demo senaryosu hazırlandı mı?
- [ ] Sorulara hazırlıklı mısınız?

**İyi şanslar! 🍀✨**
