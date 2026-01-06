/* ========================================
   SCRIPT.JS - Main Logic File
   ======================================== */

// Combine all data modules into one array
const courseData = [
    ...conceptsData,
    ...htmlData,
    ...cssData,
    ...bootstrapData,
    ...jsData
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderSidebarMenu();
    showWelcome();
});

// Show welcome screen
function showWelcome() {
    const contentArea = document.getElementById('content-area');
    
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

// Render sidebar menu
function renderSidebarMenu() {
    const menuContainer = document.getElementById('accordionMenu');
    menuContainer.innerHTML = '';
    
    const categories = [...new Set(courseData.map(item => item.category))];

    categories.forEach((category, index) => {
        const headerId = `heading${index}`;
        const collapseId = `collapse${index}`;

        // Clean category name: remove numbers and parentheses
        const cleanCategoryName = category
            .replace(/^\d+\.\s*/, '')    
            .replace(/\s*\(.*?\)/, '');

        // Create accordion item
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
                    <div class="list-group list-group-flush" id="list-${index}"></div>
                </div>
            </div>
        `;
        menuContainer.appendChild(accordionItem);

        const listGroup = accordionItem.querySelector(`#list-${index}`);
        const allTopics = courseData.filter(item => item.category === category);

        // Add normal topics (without subcategory)
        const normalTopics = allTopics.filter(item => !item.subcategory);
        normalTopics.forEach(topic => {
            createMenuLink(topic, listGroup);
        });

        // Add subcategory folders
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
                            <div class="list-group list-group-flush" id="subList-${subId}"></div>
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

// Create menu link element
function createMenuLink(topic, container, isSub = false) {
    const link = document.createElement('a');
    link.className = 'list-group-item list-group-item-action';
    link.innerText = topic.title;
    link.href = "#";
    
    if (isSub) {
        link.style.paddingLeft = "3.5rem"; 
        link.style.fontSize = "0.9rem";
    }

    link.onclick = (e) => {
        e.preventDefault(); 
        loadContent(topic.id);
        
        document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    };
    
    container.appendChild(link);
}

// Load content into main area
function loadContent(topicId) {
    const topic = courseData.find(item => item.id === topicId);
    if (!topic) return;

    const contentArea = document.getElementById('content-area');
    let codeHtml = '';

    if (topic.code) {
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