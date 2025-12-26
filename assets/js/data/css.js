/* CSS.JS - Tasarım ve Stil Modülü (Saf CSS) */

const cssData = [
    // 1. TEMEL TASARIM
    {
        id: "css-temel",
        category: "2. CSS (Tasarım)",
        title: "Renkler ve Yazı Tipleri",
        description: `
            <p><strong>CSS (Cascading Style Sheets)</strong>, sitenin makyajıdır. HTML iskeletine estetik katar.</p>
            <ul>
                <li><code>color</code>: Yazı rengi.</li>
                <li><code>background-color</code>: Arkaplan rengi.</li>
                <li><code>font-family</code>: Yazı tipi.</li>
            </ul>
        `,
        code: `
<div style="background-color: #2c3e50; padding: 20px; text-align: center; border-radius: 10px;">
    <h3 style="color: #3dd5f3; font-family: 'Courier New', monospace;">
        CSS Tasarımı
    </h3>
    <p style="color: #bdc3c7;">
        Bu kutu CSS ile renklendirildi.
    </p>
</div>
        `
    },

    // 2. KUTU MODELİ
    {
        id: "css-boxmodel",
        category: "2. CSS (Tasarım)",
        title: "Kutu Modeli (Box Model)",
        description: `
            <p>Web tasarımında her element bir kutudur.</p>
            <ul>
                <li><strong>Padding:</strong> İç Boşluk.</li>
                <li><strong>Margin:</strong> Dış Boşluk.</li>
                <li><strong>Border:</strong> Çerçeve.</li>
            </ul>
        `,
        code: `
<div style="border: 2px dashed gray; padding: 10px; display: inline-block;">
    <span class="text-muted">Margin Alanı</span>
    <div style="border: 4px solid #e74c3c; background-color: #222; padding: 20px;">
        <span style="color: #e74c3c;">Border</span>
        <div style="background-color: #2ecc71; padding: 10px; color: black;">
            <strong>İÇERİK</strong>
        </div>
    </div>
</div>
        `
    },

    // 3. FLEXBOX
    {
        id: "css-flexbox",
        category: "2. CSS (Tasarım)",
        title: "Flexbox (Hizalama)",
        description: `
            <p>Elemanları yan yana dizmek ve ortalamak için <code>display: flex</code> kullanılır.</p>
        `,
        code: `
<div style="display: flex; justify-content: center; gap: 10px; background-color: #333; padding: 15px;">
    <div style="background-color: #3498db; padding: 10px; color: white;">1</div>
    <div style="background-color: #e67e22; padding: 10px; color: white;">2</div>
    <div style="background-color: #9b59b6; padding: 10px; color: white;">3</div>
</div>
        `
    }
];