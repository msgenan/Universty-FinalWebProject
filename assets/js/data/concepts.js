/* CONCEPTS.JS - Temel Kavramlar (Görsel Ağırlıklı & Detaylı Anlatım) */

const conceptsData = [
    // 1. WEB NASIL ÇALIŞIR? (Hikayeleştirme)
    {
        id: "kavram-web-nasil",
        category: "0. Temel Kavramlar",
        title: "Web Nasıl Çalışır?",
        description: `
            <p class="lead">Bir web sitesine girdiğinizde arka planda saniyeler içinde gerçekleşen devasa bir trafik vardır. Bunu bir <strong>Restoran</strong> örneği ile anlayalım.</p>
            
            <div style="background: #2b3035; padding: 25px; border-radius: 15px; border: 1px solid #444; margin: 20px 0;">
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="font-size: 2rem;">🤵‍♂️</div>
                        <div style="flex:1;">
                            <strong style="color: #3dd5f3;">1. İstemci (Siz):</strong>
                            <p style="margin:0; font-size: 0.9rem; color: #adb5bd;">Restorana giden müşterisiniz. Menüden bir yemek (web sayfası) seçip garsona sipariş verirsiniz.</p>
                        </div>
                    </div>

                    <div style="text-align: center; color: #666;">⬇️ <em>Sipariş (Request)</em> ⬇️</div>

                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="font-size: 2rem;">👨‍🍳</div>
                        <div style="flex:1;">
                            <strong style="color: #e74c3c;">2. Sunucu (Mutfak):</strong>
                            <p style="margin:0; font-size: 0.9rem; color: #adb5bd;">Mutfaktaki şef siparişi alır, malzemeleri (veritabanı) kullanır, yemeği hazırlar ve tabağı düzenler.</p>
                        </div>
                    </div>

                    <div style="text-align: center; color: #666;">⬇️ <em>Servis (Response)</em> ⬇️</div>

                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="font-size: 2rem;">🍽️</div>
                        <div style="flex:1;">
                            <strong style="color: #2ecc71;">3. Tarayıcı (Masa):</strong>
                            <p style="margin:0; font-size: 0.9rem; color: #adb5bd;">Yemek masanıza gelir. Siz mutfakta ne olduğunu görmezsiniz, sadece önünüze gelen sunumu (Web Sitesini) görürsünüz.</p>
                        </div>
                    </div>

                </div>
            </div>
            <p>İşte web tabanlı programlama, bu mutfağı yönetme ve tabağı süsleme sanatıdır.</p>
        `,
        code: null // Kod kutusunu gizle
    },

    // 2. HTML - CSS - JS (Muhteşem Üçlü)
    {
        id: "kavram-uclu",
        category: "0. Temel Kavramlar",
        title: "Web'in 3 Yapı Taşı",
        description: `
            <p>Bir web sitesi tek bir dosyadan oluşmaz. Her biri farklı bir görevi üstlenen üç temel teknolojinin birleşimidir. Bunu bir <strong>İnsan Bedeni</strong> üzerinden düşünelim.</p>

            <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin-top: 30px;">
                
                <div style="background: linear-gradient(145deg, #e44d26, #f16529); color: white; padding: 20px; border-radius: 12px; width: 30%; min-width: 250px; text-align: center; box-shadow: 0 4px 15px rgba(228, 77, 38, 0.4);">
                    <div style="font-size: 3rem; margin-bottom: 10px;">🦴</div>
                    <h3>HTML</h3>
                    <p style="font-size: 0.9rem; opacity: 0.9;">İskelet Sistemi</p>
                    <hr style="border-color: rgba(255,255,255,0.3);">
                    <p style="font-size: 0.85rem;">Sitenin kemikleridir. Başlık nerede? Resim nerede? İçerik nedir? Sadece yapıyı belirler, görüntüsü çirkindir.</p>
                </div>

                <div style="background: linear-gradient(145deg, #264de4, #2965f1); color: white; padding: 20px; border-radius: 12px; width: 30%; min-width: 250px; text-align: center; box-shadow: 0 4px 15px rgba(38, 77, 228, 0.4);">
                    <div style="font-size: 3rem; margin-bottom: 10px;">👕</div>
                    <h3>CSS</h3>
                    <p style="font-size: 0.9rem; opacity: 0.9;">Kıyafet & Deri</p>
                    <hr style="border-color: rgba(255,255,255,0.3);">
                    <p style="font-size: 0.85rem;">Sitenin stilistidir. İskelete kıyafet giydirir, makyaj yapar. Renkler, boşluklar ve estetik buradan sorulur.</p>
                </div>

                <div style="background: linear-gradient(145deg, #f0db4f, #d4bf38); color: black; padding: 20px; border-radius: 12px; width: 30%; min-width: 250px; text-align: center; box-shadow: 0 4px 15px rgba(240, 219, 79, 0.4);">
                    <div style="font-size: 3rem; margin-bottom: 10px;">🧠</div>
                    <h3>JavaScript</h3>
                    <p style="font-size: 0.9rem; font-weight: bold;">Kas & Beyin</p>
                    <hr style="border-color: rgba(0,0,0,0.1);">
                    <p style="font-size: 0.85rem;">Sitenin hareket mekanizmasıdır. Kolunu kaldır, butona tıklayınca hesapla, veriyi getir gibi eylemleri yapar.</p>
                </div>
            </div>
        `,
        code: null
    },

    // 3. FRONTEND vs BACKEND
    {
        id: "kavram-front-back",
        category: "0. Temel Kavramlar",
        title: "Frontend ve Backend Farkı",
        description: `
            <p>Yazılım dünyasında projeler iki ana cepheye ayrılır. Bir buzdağı düşünün; suyun üstü ve altı.</p>

            <div style="position: relative; margin: 40px 0; border: 2px dashed #444; border-radius: 10px; overflow: hidden;">
                
                <div style="background-color: #212529; padding: 20px; text-align: center;">
                    <h4 style="color: #3dd5f3;">🖥️ Frontend (Ön Yüz)</h4>
                    <p style="color: #adb5bd; font-size: 0.9rem;">Kullanıcının gördüğü her şey.</p>
                    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
                        <span style="background: #333; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">HTML</span>
                        <span style="background: #333; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">CSS</span>
                        <span style="background: #333; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">React</span>
                    </div>
                </div>

                <div style="height: 4px; background: linear-gradient(90deg, #3dd5f3, #e74c3c);"></div>

                <div style="background-color: #1a1d20; padding: 20px; text-align: center;">
                    <h4 style="color: #e74c3c;">⚙️ Backend (Arka Yüz)</h4>
                    <p style="color: #adb5bd; font-size: 0.9rem;">Görünmeyen işlem merkezi ve veritabanı.</p>
                    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
                        <span style="background: #333; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">Node.js</span>
                        <span style="background: #333; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">Python</span>
                        <span style="background: #333; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">Java</span>
                        <span style="background: #333; padding: 5px 10px; border-radius: 5px; font-size: 0.8rem;">SQL</span>
                    </div>
                </div>

            </div>
            
            <ul>
                <li><strong>Frontend Geliştirici:</strong> Tasarımın birebir aynısını koda döker. Estetik ve kullanıcı deneyimiyle ilgilenir.</li>
                <li><strong>Backend Geliştirici:</strong> Sistemin güvenliği, hızı ve veri doğruluğu ile ilgilenir.</li>
                <li><strong>Full Stack Geliştirici:</strong> Her iki tarafa da hakim olan kişidir.</li>
            </ul>
        `,
        code: null
    },

    // 4. TARAYICILAR (BROWSER)
    {
        id: "kavram-browser",
        category: "0. Temel Kavramlar",
        title: "Web Tarayıcıları (Browsers)",
        description: `
            <p>Tarayıcılar (Chrome, Firefox, Safari), internetin tercümanlarıdır. Bizim yazdığımız kodları (HTML/CSS) okurlar ve insanların anlayabileceği görsel bir sayfaya dönüştürürler.</p>
            
            <div style="background: #191c1f; padding: 20px; border-radius: 10px; border-left: 5px solid #f1c40f;">
                <h5 style="color: #f1c40f;">🤔 Nasıl Çalışır?</h5>
                <p>Siz bir siteye girdiğinizde sunucu tarayıcıya sadece <strong>yazı (kod)</strong> gönderir.</p>
                <div style="background: #000; padding: 10px; font-family: monospace; color: lime; font-size: 0.8rem; margin-bottom: 10px;">
                    &lt;h1&gt;Merhaba&lt;/h1&gt;<br>
                    &lt;style&gt; h1 { color: red; } &lt;/style&gt;
                </div>
                <p>Tarayıcı bu kodu alır, "Yorumlar" (Render) ve ekrana kırmızı bir "Merhaba" yazısı basar.</p>
            </div>
            <br>
            <p>Bu yüzden yazdığımız kodun her tarayıcıda düzgün çalışıp çalışmadığını kontrol etmeliyiz.</p>
        `,
        code: null
    },

    // 5. DOMAIN & HOSTING
    {
        id: "kavram-domain-hosting",
        category: "0. Temel Kavramlar",
        title: "Domain ve Hosting Nedir?",
        description: `
            <p>Kendi web sitenizi yayınlamak istediğinizde emlak dünyasından bir benzetme yapabiliriz.</p>

            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                
                <div style="flex: 1; min-width: 280px; background: #2c3034; border-radius: 10px; overflow: hidden;">
                    <div style="background: #0d6efd; color: white; padding: 10px; text-align: center; font-weight: bold;">1. DOMAIN (Alan Adı)</div>
                    <div style="padding: 20px; text-align: center;">
                        <div style="font-size: 3rem;">🏷️</div>
                        <p style="margin-top: 10px; color: #ced4da;">Sitenizin adresidir. (Örn: google.com)</p>
                        <small style="color: #6c757d;">Tıpkı evinizin açık adresi gibi. İnsanlar sizi bu isimle bulur.</small>
                    </div>
                </div>

                <div style="flex: 1; min-width: 280px; background: #2c3034; border-radius: 10px; overflow: hidden;">
                    <div style="background: #198754; color: white; padding: 10px; text-align: center; font-weight: bold;">2. HOSTING (Barındırma)</div>
                    <div style="padding: 20px; text-align: center;">
                        <div style="font-size: 3rem;">🏠</div>
                        <p style="margin-top: 10px; color: #ced4da;">Dosyaların durduğu yer.</p>
                        <small style="color: #6c757d;">Tıpkı evinizin arazisi veya binası gibi. 7/24 açık olan bilgisayarlardır (Sunucu).</small>
                    </div>
                </div>

            </div>
            <br>
            <p class="text-info">Domain bir yön tabelasıdır, Hosting ise o tabelanın götürdüğü evdir.</p>
        `,
        code: null
    },

    // 6. HTTP ve HTTPS
    {
        id: "kavram-http",
        category: "0. Temel Kavramlar",
        title: "HTTP Protokolü ve Güvenlik",
        description: `
            <p>İnternette veriler bir yerden bir yere giderken belirli kurallara (Protokol) uyar.</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                
                <div style="border: 1px solid #e74c3c; border-radius: 8px; padding: 15px; opacity: 0.7;">
                    <h5 style="color: #e74c3c;">HTTP (Güvensiz)</h5>
                    <div style="font-size: 2rem; text-align: center;">✉️</div>
                    <p style="font-size: 0.8rem; margin-top: 10px;">
                        Bilgiler "Açık Kartpostal" gibi gönderilir. Yolda biri kartpostalı yakalarsa, üzerindeki şifrenizi veya mesajınızı okuyabilir.
                    </p>
                </div>

                <div style="border: 1px solid #2ecc71; border-radius: 8px; padding: 15px; background: rgba(46, 204, 113, 0.1);">
                    <h5 style="color: #2ecc71;">HTTPS (Güvenli)</h5>
                    <div style="font-size: 2rem; text-align: center;">🔐</div>
                    <p style="font-size: 0.8rem; margin-top: 10px;">
                        Bilgiler "Zırhlı Çelik Kasa" içinde gönderilir (SSL Sertifikası). Yolda biri yakalasa bile kasayı açamaz, veriyi okuyamaz.
                    </p>
                </div>

            </div>
            <p style="margin-top: 15px;">Google ve modern tarayıcılar, HTTPS kullanmayan siteleri "Güvenli Değil" olarak işaretler.</p>
        `,
        code: null
    },

    // 7. VERİTABANI
    {
        id: "kavram-db",
        category: "0. Temel Kavramlar",
        title: "Veritabanı (Database)",
        description: `
            <p>Web sitelerinde kullanıcı adları, şifreler, ürünler nerede saklanır?</p>
            
            <div style="display: flex; align-items: center; background: #1a1d20; padding: 20px; border-radius: 10px;">
                <div style="width: 80px; height: 100px; border: 3px solid #adb5bd; border-radius: 50%/20px; position: relative; display: flex; align-items: center; justify-content: center; color: #adb5bd; font-weight: bold;">
                    <div style="position: absolute; top: 15px; left: -3px; right: -3px; height: 1px; background: #adb5bd;"></div>
                    <div style="position: absolute; top: 45px; left: -3px; right: -3px; height: 1px; background: #adb5bd;"></div>
                    <div style="position: absolute; top: 75px; left: -3px; right: -3px; height: 1px; background: #adb5bd;"></div>
                    DATA
                </div>
                <div style="margin-left: 20px;">
                    <h5 style="color: #fff;">Dijital Arşiv Dolabı</h5>
                    <p style="color: #adb5bd;">Veritabanı, bilgilerin düzenli bir şekilde raflara dizildiği devasa bir excel tablosu gibidir.</p>
                    <p><strong>Örnekler:</strong> MySQL (Tablolu), MongoDB (Belge bazlı).</p>
                </div>
            </div>
        `,
        code: null
    },

    // 8. FRAMEWORKLER
    {
        id: "kavram-framework",
        category: "0. Temel Kavramlar",
        title: "Framework (Çatı) Nedir?",
        description: `
            <p>Kod yazarken Amerika'yı yeniden keşfetmeye gerek yoktur. </p>

            <div style="background: #2b3035; padding: 20px; border-radius: 10px;">
                <p><strong>Örnek:</strong> Bir ev yapacaksınız.</p>
                <ul>
                    <li style="margin-bottom: 10px;">
                        <span style="color: #e74c3c;">Saf Kod (Vanilla):</span> 
                        Tuğlaları tek tek kendiniz döküp, çimentoyu kendiniz karıştırıp duvarı örmektir. Çok esnektir ama çok zaman alır.
                    </li>
                    <li>
                        <span style="color: #3dd5f3;">Framework (Bootstrap/React):</span> 
                        Hazır prefabrik duvarları ve kolonları getirip birleştirmektir. Çok hızlıdır ve standartlara uygundur.
                    </li>
                </ul>
            </div>
            <p>Dersimizde kullandığımız <strong>Bootstrap</strong>, CSS için hazırlanmış hazır bir kalıp kütüphanesidir.</p>
        `,
        code: null
    }
];