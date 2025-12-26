/* CONCEPTS.JS
   Web Programlama Temel Kavramlar Modülü
   Not: Bu bölümde 'code' özelliği yoktur, sadece açıklama ve görsel şemalar vardır.
*/

const conceptsData = [
    // 1. GENEL GİRİŞ
    {
        id: "kavram-web",
        category: "0. Temel Kavramlar",
        title: "Web Programlama Nedir?",
        description: `
            <p><strong>Web Tabanlı Programlama</strong>, internet tarayıcıları (Chrome, Firefox vb.) üzerinde çalışan uygulamaların geliştirilmesidir.</p>
            <p>Bu süreç iki ana dünyaya ayrılır:</p>
            <ul>
                <li><strong>Frontend (Ön Uç):</strong> Kullanıcının gördüğü, tıkladığı kısımdır. Tasarım ve estetik buradadır.</li>
                <li><strong>Backend (Arka Uç):</strong> Görünmeyen, verilerin işlendiği ve kaydedildiği mutfak kısmıdır.</li>
            </ul>
            
            <hr class="my-4" style="border-color: #444;">
            
            <h6 class="text-muted mb-3">Çalışma Mantığı:</h6>
            <div class="row text-center text-white align-items-center p-3 border border-dark rounded bg-dark">
                <div class="col-5 bg-primary p-3 rounded shadow">
                    <h5>Frontend</h5>
                    <small>Tarayıcı (Browser)</small>
                    <hr>
                    HTML / CSS / JS
                </div>
                
                <div class="col-2">
                    <h2 style="color: #6c757d;">↔</h2>
                </div>

                <div class="col-5 bg-secondary p-3 rounded shadow">
                    <h5>Backend</h5>
                    <small>Sunucu (Server)</small>
                    <hr>
                    PHP / Python / SQL
                </div>
            </div>
        `
    },

    // 2. İSTEMCİ VE SUNUCU
    {
        id: "kavram-istemci-sunucu",
        category: "0. Temel Kavramlar",
        title: "İstemci (Client) ve Sunucu (Server)",
        description: `
            <p>İnternet, milyarlarca cihazın birbiriyle konuşmasıdır. Bu konuşmada iki rol vardır:</p>
            <ul>
                <li><strong>İstemci (Client):</strong> Hizmet isteyen taraftır. Sizin bilgisayarınız veya telefonunuzdaki tarayıcıdır. (Örn: "Bana bu sayfayı göster" der.)</li>
                <li><strong>Sunucu (Server):</strong> İstemcinin isteğini yerine getiren, 7/24 açık güçlü bilgisayarlardır. (Örn: Sayfa dosyalarını gönderir.)</li>
            </ul>

            <hr class="my-4" style="border-color: #444;">

            <h6 class="text-muted mb-3">Gerçek Hayat Örneği (Restoran):</h6>
            <div class="p-3 border border-dark rounded bg-dark">
                <div class="d-flex justify-content-between align-items-center mt-3 text-center">
                    
                    <div style="width: 30%;">
                        <span style="font-size:2rem;">👤</span><br>
                        <strong>Müşteri</strong><br>
                        <span class="badge bg-secondary">İstemci</span>
                    </div>

                    <div style="width: 40%; font-size: 0.8rem; color: #adb5bd;">
                        Sipariş Verir (Request) ➡ <br>
                        ⬅ Yemeği Getirir (Response)
                    </div>

                    <div style="width: 30%;">
                        <span style="font-size:2rem;">👨‍🍳</span><br>
                        <strong>Mutfak</strong><br>
                        <span class="badge bg-warning text-dark">Sunucu</span>
                    </div>

                </div>
            </div>
        `
    },

    // 3. HTTP PROTOKOLÜ
    {
        id: "kavram-http",
        category: "0. Temel Kavramlar",
        title: "HTTP Protokolü",
        description: `
            <p><strong>HTTP (HyperText Transfer Protocol)</strong>, istemci ve sunucunun anlaştığı dildir. Tarayıcı sunucuya bir "İstek" (Request) gönderir, sunucu da bir "Cevap" (Response) döner.</p>
            <p>Sık karşılaşılan HTTP Durum Kodları:</p>
            <ul>
                <li><span class="text-success">200 OK:</span> Başarılı, sayfa bulundu.</li>
                <li><span class="text-danger">404 Not Found:</span> Sayfa bulunamadı.</li>
                <li><span class="text-warning">500 Server Error:</span> Sunucu hatası.</li>
            </ul>

            <hr class="my-4" style="border-color: #444;">

            <div class="list-group">
              <div class="list-group-item bg-dark text-white border-secondary">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1 text-primary">1. Request (İstek)</h6>
                </div>
                <small class="text-muted">Tarayıcı: "google.com anasayfasını getir." (GET)</small>
              </div>
              
              <div class="list-group-item bg-dark text-white border-secondary">
                <div class="d-flex w-100 justify-content-between">
                  <h6 class="mb-1 text-success">2. Response (Cevap)</h6>
                </div>
                <small class="text-muted">Sunucu: "Tamam, işte dosyalar (Status: 200)."</small>
              </div>
            </div>
        `
    },

    // 4. TEMEL TEKNOLOJİLER
    {
        id: "kavram-teknolojiler",
        category: "0. Temel Kavramlar",
        title: "Temel Teknolojiler",
        description: `
            <p>Bir web sitesini oluşturmak için farklı teknolojiler bir arada kullanılır. Bir bina inşaatı gibi düşünebiliriz:</p>
            <ul>
                <li><strong>HTML:</strong> Binanın kolonları ve tuğlalarıdır (İskelet).</li>
                <li><strong>CSS:</strong> Boya, dekorasyon ve dış cephedir (Tasarım).</li>
                <li><strong>JavaScript:</strong> Elektrik tesisatı, asansörler ve kapı zilleridir (Hareket & İşlev).</li>
            </ul>

            <hr class="my-4" style="border-color: #444;">

            <div class="row text-center g-2">
                <div class="col-md-4">
                    <div class="p-3 border border-danger rounded bg-dark">
                        <h5 class="text-danger">HTML</h5>
                        <small>İçerik & Yapı</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 border border-primary rounded bg-dark">
                        <h5 class="text-primary">CSS</h5>
                        <small>Görünüm & Stil</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 border border-warning rounded bg-dark">
                        <h5 class="text-warning">JS</h5>
                        <small>Etkileşim</small>
                    </div>
                </div>
            </div>
        `
    },

    // 5. DOMAIN VE HOSTING
    {
        id: "kavram-domain-hosting",
        category: "0. Temel Kavramlar",
        title: "Domain ve Hosting",
        description: `
            <p>Web sitenizi yayınlamak için iki hizmete abone olmanız gerekir:</p>
            <p><strong>1. Domain (Alan Adı):</strong> Sitenin adresidir (webschool.com gibi). İnsanların sitenizi bulmasını sağlar.</p>
            <p><strong>2. Hosting (Barındırma):</strong> Sitenin dosyalarının (HTML, Resimler) saklandığı ve dünyaya sunulduğu 7/24 açık bilgisayardır.</p>

            <hr class="my-4" style="border-color: #444;">

            <div class="d-flex align-items-center justify-content-center p-3 border border-secondary rounded bg-dark">
                <div class="text-center me-4">
                    <span style="font-size:2rem;">🌍</span><br>
                    <span class="text-info">Domain</span><br>
                    <small>Tabela (Adres)</small>
                </div>
                
                <div class="h2 text-muted">+</div>

                <div class="text-center ms-4">
                    <span style="font-size:2rem;">🖥️</span><br>
                    <span class="text-warning">Hosting</span><br>
                    <small>Depo (Sunucu)</small>
                </div>
            </div>
        `
    },

    // 6. ALAN ADI UZANTILARI
    {
        id: "kavram-uzantilar",
        category: "0. Temel Kavramlar",
        title: "Alan Adı Uzantıları (TLD)",
        description: `
            <p>Domainlerin sonundaki uzantılar, sitenin amacını veya ait olduğu ülkeyi belirtir. Bunlara TLD (Top Level Domain) denir.</p>
            <p>En sık kullanılanlar şunlardır:</p>

            <table class="table table-dark table-striped table-bordered text-center mt-3">
                <thead>
                    <tr>
                        <th>Uzantı</th>
                        <th>Anlamı</th>
                        <th>Kullanım Alanı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-info">.com</td>
                        <td>Commercial</td>
                        <td>Ticari (Genel)</td>
                    </tr>
                    <tr>
                        <td class="text-info">.org</td>
                        <td>Organization</td>
                        <td>Vakıf / Örgüt</td>
                    </tr>
                    <tr>
                        <td class="text-info">.edu</td>
                        <td>Education</td>
                        <td>Üniversiteler</td>
                    </tr>
                    <tr>
                        <td class="text-info">.gov</td>
                        <td>Government</td>
                        <td>Devlet Kurumları</td>
                    </tr>
                    <tr>
                        <td class="text-info">.tr</td>
                        <td>Country Code</td>
                        <td>Türkiye</td>
                    </tr>
                </tbody>
            </table>
        `
    },

    // 7. MVC MİMARİSİ
    {
        id: "kavram-mvc",
        category: "0. Temel Kavramlar",
        title: "MVC Mimarisi",
        description: `
            <p><strong>MVC (Model-View-Controller)</strong>, büyük projelerde kod karmaşasını önlemek için kullanılan bir düzendir.</p>
            <ul>
                <li><strong>Model (Veri):</strong> Veritabanı işlemleri (Şef).</li>
                <li><strong>View (Görünüm):</strong> Kullanıcının gördüğü ekran (Tabak).</li>
                <li><strong>Controller (Kontrolcü):</strong> İkisi arasındaki köprü (Garson).</li>
            </ul>

            <hr class="my-4" style="border-color: #444;">

            <div class="d-flex justify-content-between text-center text-white p-2 border border-secondary rounded bg-dark">
                <div class="bg-primary p-2 rounded" style="width:30%">
                    <strong>View</strong><br>
                    <small>Kullanıcı Ekranı</small>
                </div>
                <div class="align-self-center">⬅➡</div>
                <div class="bg-warning p-2 rounded text-dark" style="width:30%">
                    <strong>Controller</strong><br>
                    <small>Yönetici</small>
                </div>
                <div class="align-self-center">⬅➡</div>
                <div class="bg-secondary p-2 rounded" style="width:30%">
                    <strong>Model</strong><br>
                    <small>Veritabanı</small>
                </div>
            </div>
        `
    }
];