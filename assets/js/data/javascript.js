/* JAVASCRIPT.JS - Programlama Modülü */

const jsData = [
    // 1. DEĞİŞKENLER
    {
        id: "js-degisken",
        category: "4. JavaScript (Mantık)",
        title: "Değişkenler (Veri Kutuları)",
        description: `
            <p>Değişkenler (Variables), veri sakladığımız isimlendirilmiş kutulardır.</p>
            <ul>
                <li><code>var</code>: Eski yöntem (Artık pek kullanılmaz).</li>
                <li><code>let</code>: Değeri sonradan değişebilen kutu. (Puan, Sayaç gibi)</li>
                <li><code>const</code>: Sabit kutu. Değeri asla değişmez. (Pi sayısı, Site adı gibi)</li>
            </ul>
        `,
        code: `
<button class="btn btn-outline-warning" onclick="degiskenTest()">Değişkenleri Test Et</button>
<div id="degiskenSonuc" class="mt-2 text-info"></div>

<script>
    function degiskenTest() {
        let isim = "Ahmet";
        let yas = 25;
        // yas = 26; // let olduğu için değiştirebiliriz.
        
        document.getElementById('degiskenSonuc').innerText = 
            "İsim: " + isim + " | Yaş: " + yas;
    }
</script>
        `
    },

    // 2. DOM MANİPÜLASYONU
    {
        id: "js-dom",
        category: "4. JavaScript (Mantık)",
        title: "DOM (Sayfa Yönetimi)",
        description: `
            <p>JavaScript, HTML sayfasına hükmedebilir. Rengini, yazısını, görünürlüğünü değiştirebilir. Buna <strong>DOM (Document Object Model)</strong> denir.</p>
            <p>En sık kullanılan sihirli sözcük: <code>document.getElementById('id')</code></p>
        `,
        code: `
<div id="sihirliKutu" style="width: 100%; height: 50px; background-color: #444; text-align: center; line-height: 50px; color: white; transition: 0.5s;">
    Bu kutu değişecek
</div>

<div class="btn-group mt-3 w-100">
    <button class="btn btn-danger" onclick="document.getElementById('sihirliKutu').style.backgroundColor='red'">Kırmızı Yap</button>
    <button class="btn btn-success" onclick="document.getElementById('sihirliKutu').innerText='BAŞARDIN!'">Yazıyı Değiştir</button>
    <button class="btn btn-secondary" onclick="document.getElementById('sihirliKutu').style.display='none'">Yok Et</button>
</div>
        `
    },

    // 3. KARAR YAPILARI
    {
        id: "js-if",
        category: "4. JavaScript (Mantık)",
        title: "Karar Yapıları (If - Else)",
        description: `
            <p>Hayatta olduğu gibi kodlamada da kararlar veririz. "Eğer hava yağmurluysa şemsiye al, değilse tişört giy."</p>
            <p>Kodlamada bu: <code>if (kosul) { ... } else { ... }</code> şeklinde yazılır.</p>
        `,
        code: `
<input type="number" id="yasInput" placeholder="Yaşınızı girin" class="form-control mb-2" style="width: 200px;">
<button class="btn btn-primary" onclick="ehliyetKontrol()">Ehliyet Alabilir miyim?</button>
<p id="ehliyetSonuc" class="mt-2 fw-bold"></p>

<script>
    function ehliyetKontrol() {
        let yas = document.getElementById('yasInput').value;
        let sonuc = document.getElementById('ehliyetSonuc');

        if (yas >= 18) {
            sonuc.innerHTML = '<span class="text-success">✅ Evet, alabilirsin.</span>';
        } else {
            let kalan = 18 - yas;
            sonuc.innerHTML = '<span class="text-danger">❌ Hayır, ' + kalan + ' yıl daha beklemelisin.</span>';
        }
    }
</script>
        `
    },

    // 4. DİZİLER VE DÖNGÜLER (YENİ)
    {
        id: "js-dizi",
        category: "4. JavaScript (Mantık)",
        title: "Diziler ve Döngüler",
        description: `
            <p>Birden fazla veriyi tek bir değişkende tutmak için <strong>Diziler (Array)</strong> kullanılır.</p>
            <p>Bu verileri tek tek ekrana yazdırmak içinse <strong>Döngüler (For Loop)</strong> kullanılır.</p>
        `,
        code: `
<button class="btn btn-info text-white" onclick="listeyiGetir()">Listeyi Yazdır</button>
<ul id="meyveListesi" class="mt-3 list-group list-group-flush text-white" style="background: transparent;"></ul>

<script>
    function listeyiGetir() {
        // Bir dizi (liste) oluşturuyoruz
        const meyveler = ["Elma", "Armut", "Muz", "Çilek"];
        let htmlCiktisi = "";

        // Döngü ile her birini geziyoruz
        for (let i = 0; i < meyveler.length; i++) {
            htmlCiktisi += '<li class="list-group-item bg-transparent text-secondary">Fr • ' + meyveler[i] + '</li>';
        }

        document.getElementById('meyveListesi').innerHTML = htmlCiktisi;
    }
</script>
        `
    }
];