/* HTML.JS - Yapısal İçerik Modülü */

const htmlData = [
    // 1. TEMELLER
    {
        id: "html-giris",
        category: "1. HTML (İskelet)",
        title: "Temel Etiketler ve Başlıklar",
        description: `
            <p><strong>HTML (HyperText Markup Language)</strong>, bir web sayfasının omurgasıdır. İnsan iskeleti gibidir; nerenin baş, nerenin gövde olduğunu belirtir.</p>
            <p>En sık kullanılan yapı taşları şunlardır:</p>
            <ul>
                <li><strong>h1 - h6:</strong> Başlıklar (Google h1'e çok önem verir).</li>
                <li><strong>p:</strong> Paragraf (Düz yazı).</li>
                <li><strong>br / hr:</strong> Alt satıra geçme ve çizgi çekme.</li>
            </ul>
        `,
        code: `
<h1 style="border-bottom: 2px solid #3dd5f3;">Ana Başlık (h1)</h1>
<p>Bu sitenin en önemli konusudur.</p>

<h3>Alt Başlık (h3)</h3>
<p>Bu bir detay açıklamasıdır.<br>Alt satıra geçtik.</p>
<hr>
<small>Bu ise dipnottur (small etiketi).</small>
        `
    },

    // 2. LİNKLER VE MEDYA
    {
        id: "html-medya",
        category: "1. HTML (İskelet)",
        title: "Linkler ve Görseller",
        description: `
            <p>İnterneti "ağ" yapan şey linklerdir. Görseller ise sayfayı zenginleştirir.</p>
            <ul>
                <li><code>&lt;a href="..."&gt;</code>: Başka sayfaya köprü kurar. <code>target="_blank"</code> yeni sekmede açar.</li>
                <li><code>&lt;img src="..."&gt;</code>: Resim gösterir. Kapanış etiketi yoktur.</li>
            </ul>
        `,
        code: `
<div class="text-center">
    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=300&q=80" 
         class="rounded-circle mb-3 border border-3 border-info" width="150">
    
    <br>
    
    <a href="https://google.com" target="_blank" class="btn btn-outline-light btn-sm">
        Google'a Git ↗
    </a>
</div>
        `
    },

    // 3. TABLOLAR (YENİ)
    {
        id: "html-tablo",
        category: "1. HTML (İskelet)",
        title: "Tablolar (Tables)",
        description: `
            <p>Verileri düzenli göstermek (Excel gibi) için tablolar kullanılır. Yapısı biraz karışıktır, sırayla yazılır:</p>
            <ol>
                <li><code>table</code>: Tabloyu başlatır.</li>
                <li><code>tr (Table Row)</code>: Satır oluşturur.</li>
                <li><code>th (Table Head)</code>: Başlık hücresi (Kalın yazar).</li>
                <li><code>td (Table Data)</code>: Normal veri hücresi.</li>
            </ol>
        `,
        code: `
<table class="table table-dark table-hover table-bordered border-secondary">
    <thead>
        <tr class="table-active">
            <th>#</th>
            <th>Ad Soyad</th>
            <th>Bölüm</th>
            <th>Not</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Ahmet Yılmaz</td>
            <td>Bilgisayar</td>
            <td class="text-success">90</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Ayşe Demir</td>
            <td>Yazılım</td>
            <td class="text-warning">75</td>
        </tr>
    </tbody>
</table>
        `
    },

    // 4. FORMLAR (YENİ)
    {
        id: "html-form",
        category: "1. HTML (İskelet)",
        title: "Formlar ve Girişler",
        description: `
            <p>Kullanıcıdan bilgi almak için (Giriş yap, Kayıt ol, Arama yap) form elemanları kullanılır.</p>
            <ul>
                <li><code>input</code>: Veri giriş kutusu. <code>type="text"</code>, <code>type="password"</code>, <code>type="date"</code> gibi türleri vardır.</li>
                <li><code>placeholder</code>: Kutunun içindeki ipucu yazısı.</li>
            </ul>
        `,
        code: `
<div class="p-3 border rounded bg-dark" style="max-width: 300px;">
    <label class="form-label text-info">Kullanıcı Girişi</label>
    
    <input type="email" class="form-control mb-2" placeholder="E-posta adresiniz">
    <input type="password" class="form-control mb-2" placeholder="Şifreniz">
    
    <div class="d-grid">
        <button class="btn btn-primary">Giriş Yap</button>
    </div>
</div>
        `
    }
];