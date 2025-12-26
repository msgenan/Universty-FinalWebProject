/* BOOTSTRAP.JS - Hazır Kütüphane Modülü */

const bootstrapData = [
    // 1. BOOTSTRAP NEDİR?
    {
        id: "bs-giris",
        category: "3. Bootstrap (Framework)",
        title: "Bootstrap Nedir?",
        description: `
            <p><strong>Bootstrap</strong>, Twitter tarafından geliştirilen, dünyanın en popüler CSS kütüphanesidir.</p>
            <p><strong>Amacı:</strong> Uzun uzun CSS kodları yazmak yerine, hazır sınıf isimlerini (class) kullanarak hızlıca responsive (mobil uyumlu) siteler yapmaktır.</p>
            <ul>
                <li>CSS: Tasarım ve düzen sağlar.</li>
                <li>JS: Açılır menü ve modal gibi bileşenleri çalıştırır.</li>
            </ul>
        `,
        code: `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Hazır Kart</div>
  <div class="card-body">
    <h5 class="card-title">CSS Yazmadık!</h5>
    <p class="card-text">Sadece class isimleri vererek bu kartı oluşturduk.</p>
  </div>
</div>
        `
    },

    // 2. GRID SİSTEMİ
    {
        id: "bs-grid",
        category: "3. Bootstrap (Framework)",
        title: "Grid Sistemi (Izgara)",
        description: `
            <p>Bootstrap ekranı <strong>12 eşit parçaya</strong> böler. Buna Grid Sistemi denir.</p>
            <p>Formül basittir: Satır (Row) oluştur, Sütun (Col) sayısını belirle.</p>
            <ul>
                <li><code>col-12</code>: Tam ekran.</li>
                <li><code>col-6</code>: Yarım ekran.</li>
                <li><code>col-4</code>: Üçte bir ekran.</li>
            </ul>
        `,
        code: `
<div class="row text-center text-white g-2">
    <div class="col-4">
        <div class="p-3 bg-danger rounded">Sol (col-4)</div>
    </div>
    <div class="col-4">
        <div class="p-3 bg-warning text-dark rounded">Orta (col-4)</div>
    </div>
    <div class="col-4">
        <div class="p-3 bg-success rounded">Sağ (col-4)</div>
    </div>
</div>
        `
    },

    // 3. BİLEŞENLER (COMPONENTS)
    {
        id: "bs-bilesen",
        category: "3. Bootstrap (Framework)",
        title: "Butonlar ve Alertler",
        description: `
            <p>Bootstrap içinde yüzlerce hazır bileşen vardır. Renk kodları standarttır:</p>
            <ul>
                <li><span class="text-primary">Primary:</span> Ana mavi.</li>
                <li><span class="text-success">Success:</span> Onay yeşili.</li>
                <li><span class="text-danger">Danger:</span> Hata kırmızısı.</li>
                <li><span class="text-warning">Warning:</span> Uyarı turuncusu.</li>
            </ul>
        `,
        code: `
<div class="alert alert-info">
    <strong>Bilgi:</strong> Bu bir uyarı kutusudur.
</div>

<div class="d-grid gap-2 d-md-block">
    <button class="btn btn-primary">Kaydet</button>
    <button class="btn btn-outline-danger">Sil</button>
    <button class="btn btn-dark">İptal</button>
</div>
        `
    }
];