/* SCRIPT.JS
   Main Logic File (Ana Mantık Dosyası)
   -------------------------------------------------
   This script combines all data modules and renders the sidebar menu.
   Bu script tüm veri modüllerini birleştirir ve sol menüyü oluşturur.
*/

// 1. COMBINE DATA (Verileri Birleştir)
// We merge all separate data files into one big list.
const courseData = [
    ...conceptsData,   // Temel Kavramlar
    ...htmlData,       // HTML
    ...cssData,        // CSS
    ...bootstrapData,  // Bootstrap (Artık CSS kategorisi altında işlenecek)
    ...jsData          // JavaScript
];

// 2. INITIALIZE (Başlatma)
// Run this when the page loads.
document.addEventListener('DOMContentLoaded', () => {
    renderSidebarMenu(); // Build the menu (Menüyü kur)
    showWelcome();       // Show welcome screen (Hoşgeldin ekranını göster)
});

// 3. SHOW WELCOME SCREEN (Hoşgeldin Ekranı)
function showWelcome() {
    const contentArea = document.getElementById('content-area');
    
    // Clear active selection (Seçimi temizle)
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));

    contentArea.innerHTML = `
        <div class="welcome-container">
            <h1 class="welcome-title">
                <span class="brand-highlight">&lt;/&gt;</span> WebSchool
            </h1>
            <p class="lead" style="color: #adb5bd;">İnteraktif Web Programlama Ders Notları</p>
            
            <div style="margin-top: 50px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#3dd5f3" class="bi bi-code-slash" viewBox="0 0 16 16" style="opacity: 0.8;">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
            </div>
        </div>
    `;
}

// 4. RENDER SIDEBAR (Sol Menüyü Oluşturma - TAMAMEN TEMİZLENMİŞ)
function renderSidebarMenu() {
    const menuContainer = document.getElementById('accordionMenu');
    menuContainer.innerHTML = ''; // Önce temizle
    
    // Benzersiz ana kategorileri bul
    const categories = [...new Set(courseData.map(item => item.category))];

    categories.forEach((category, index) => {
        const headerId = `heading${index}`;
        const collapseId = `collapse${index}`;

        // --- İSİM TEMİZLEME İŞLEMİ ---
        // 1. replace(/^\d+\.\s*/, '')   -> Baştaki "1. " gibi sayıları siler.
        // 2. replace(/\s*\(.*?\)/, '')   -> " (İskelet)" gibi parantezli kısımları siler.
        const cleanCategoryName = category
            .replace(/^\d+\.\s*/, '')    
            .replace(/\s*\(.*?\)/, '');  

        // Ana Kategori Kutusunu Yarat
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';

        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="${headerId}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                    ${cleanCategoryName}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#accordionMenu">
                <div class="accordion-body p-0">
                    <div class="list-group list-group-flush" id="list-${index}">
                    </div>
                </div>
            </div>
        `;
        menuContainer.appendChild(accordionItem);

        const listGroup = accordionItem.querySelector(`#list-${index}`);
        const allTopics = courseData.filter(item => item.category === category);

        // --- A: Normal Konular ---
        const normalTopics = allTopics.filter(item => !item.subcategory);
        normalTopics.forEach(topic => {
            createMenuLink(topic, listGroup);
        });

        // --- B: Alt Klasörler ---
        const subCategories = [...new Set(allTopics.map(item => item.subcategory).filter(Boolean))];
        
        subCategories.forEach((subCatName, subIndex) => {
            const subId = `subCollapse${index}-${subIndex}`;
            
            const subFolderHTML = `
                <div class="accordion accordion-flush" id="subAccordion${index}">
                    <div class="accordion-item" style="background: transparent;">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${subId}" 
                                style="background-color: #1a1d20; color: #adb5bd; font-size: 0.9rem; padding-left: 2rem; border-bottom: 1px solid #333;">
                                📂 ${subCatName}
                            </button>
                        </h2>
                        <div id="${subId}" class="accordion-collapse collapse">
                            <div class="list-group list-group-flush" id="subList-${subId}">
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = subFolderHTML;
            listGroup.appendChild(tempDiv);

            const subTopics = allTopics.filter(item => item.subcategory === subCatName);
            const subListGroup = document.getElementById(`subList-${subId}`);
            
            subTopics.forEach(topic => {
                createMenuLink(topic, subListGroup, true);
            });
        });
    });
}

// Helper Function: Create a Link (Link Oluşturucu)
function createMenuLink(topic, container, isSub = false) {
    const link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action';
    link.innerText = topic.title;
    link.href = "#";
    
    // Indent if it's a sub-item (Alt öğeyse girinti ver)
    if(isSub) {
        link.style.paddingLeft = "3.5rem"; 
        link.style.fontSize = "0.9rem";
    }

    // Click Event (Tıklama Olayı)
    link.onclick = (e) => {
        e.preventDefault(); 
        loadContent(topic.id);
        
        // Visual Feedback (Aktif sınıfı ekle)
        document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    };
    container.appendChild(link);
}

// 5. LOAD CONTENT (İçeriği Yükle)
function loadContent(topicId) {
    const topic = courseData.find(item => item.id === topicId);
    if (!topic) return;

    const contentArea = document.getElementById('content-area');
    let codeHtml = ''; 

    // If code exists, create the code block (Kod varsa kutuyu oluştur)
    if (topic.code) {
        // Escape HTML characters for display (HTML karakterlerini metne çevir)
        const escapedCode = topic.code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        codeHtml = `
            <span class="preview-label">Görsel / Çıktı (Output):</span>
            <div class="preview-container">
                ${topic.code}
            </div>

            <span class="code-label">Kaynak Kod (Source Code):</span>
            <div class="code-container">
                <pre><code>${escapedCode}</code></pre>
            </div>
        `;
    }

    // Inject final HTML (Son HTML'i ekrana bas)
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