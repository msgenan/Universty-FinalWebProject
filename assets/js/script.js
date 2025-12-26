/* SCRIPT.JS - Ana Uygulama Mantığı */

// Tüm modüler verileri tek bir havuzda birleştiriyoruz
/* SCRIPT.JS */

const courseData = [
    ...conceptsData,   // 0. Kavramlar
    ...htmlData,       // 1. HTML
    ...cssData,        // 2. CSS
    ...bootstrapData,  // 3. BOOTSTRAP (YENİ EKLENDİ)
    ...jsData          // 4. JavaScript
];

document.addEventListener('DOMContentLoaded', () => {
    renderSidebarMenu();
    showWelcome();
});

// Hoşgeldin Ekranı
function showWelcome() {
    const contentArea = document.getElementById('content-area');
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));

    contentArea.innerHTML = `
        <div class="welcome-container">
            <h1 class="welcome-title">
                <span class="brand-highlight">&lt;/&gt;</span> WebSchool
            </h1>
            <p class="lead" style="color: #adb5bd;">İnteraktif Web Programlama Ders Notları</p>
            <div style="margin-top: 50px; margin-bottom: 50px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#3dd5f3" class="bi bi-code-slash" viewBox="0 0 16 16" style="opacity: 0.8;">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <p style="color: #ccc;">
                        Sol menüden <strong>Temel Kavramlar, HTML, CSS</strong> veya <strong>JavaScript</strong> 
                        konularını seçerek derste işlenen tüm içeriklere ulaşabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Sol Menüyü Oluştur
function renderSidebarMenu() {
    const menuContainer = document.getElementById('accordionMenu');
    const categories = [...new Set(courseData.map(item => item.category))];

    categories.forEach((category, index) => {
        const headerId = `heading${index}`;
        const collapseId = `collapse${index}`;

        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="${headerId}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                    ${category}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#accordionMenu">
                <div class="accordion-body p-0">
                    <div class="list-group list-group-flush" id="list-${index}"></div>
                </div>
            </div>
        `;
        menuContainer.appendChild(accordionItem);

        const categoryTopics = courseData.filter(item => item.category === category);
        const listGroup = accordionItem.querySelector(`#list-${index}`);

        categoryTopics.forEach(topic => {
            const link = document.createElement('a');
            link.className = 'list-group-item list-group-item-action';
            link.innerText = topic.title;
            link.href = "#"; 
            link.onclick = (e) => {
                e.preventDefault(); 
                loadContent(topic.id);
                document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
                link.classList.add('active');
            };
            listGroup.appendChild(link);
        });
    });
}

// İçeriği Yükle (Kod yoksa hata vermez)
function loadContent(topicId) {
    const topic = courseData.find(item => item.id === topicId);
    if (!topic) return;

    const contentArea = document.getElementById('content-area');
    let codeHtml = ''; 

    // Kod varsa göster
    if (topic.code) {
        const escapedCode = topic.code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        codeHtml = `
            <span class="preview-label">Görsel / Çıktı:</span>
            <div class="preview-container">${topic.code}</div>
            <span class="code-label">Kaynak Kod:</span>
            <div class="code-container"><pre><code>${escapedCode}</code></pre></div>
        `;
    }

    contentArea.innerHTML = `
        <div style="animation: fadeIn 0.5s ease;">
            <h2 class="topic-title">${topic.title}</h2>
            <div class="topic-text">${topic.description}</div>
            ${codeHtml}
        </div>
    `;
}