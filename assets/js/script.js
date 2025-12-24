/* SCRIPT.JS
    Main logic for WebSchool application.
    Handles dynamic content loading and menu generation.
*/

// Run this function when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderSidebarMenu(); // Create the menu
    showWelcome();       // Show the welcome screen
});

/* FUNCTION: showWelcome
    Displays the landing page content (Logo, Icon, Intro text).
*/
function showWelcome() {
    const contentArea = document.getElementById('content-area');
    
    // Reset active state in menu
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
                        Bu platform, HTML, CSS, Bootstrap ve JavaScript konularını 
                        örneklerle öğrenmeniz için tasarlanmıştır. Başlamak için 
                        <strong>sol menüden</strong> bir konu seçiniz.
                    </p>
                </div>
            </div>
        </div>
    `;
}

/* FUNCTION: renderSidebarMenu
    Reads 'courseData' from data.js and builds the sidebar menu dynamically.
*/
function renderSidebarMenu() {
    const menuContainer = document.getElementById('accordionMenu');
    
    // Get unique categories (HTML, CSS, etc.)
    const categories = [...new Set(courseData.map(item => item.category))];

    categories.forEach((category, index) => {
        const headerId = `heading${index}`;
        const collapseId = `collapse${index}`;

        // Create Accordion Item
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

        // Add topics to this category
        const categoryTopics = courseData.filter(item => item.category === category);
        const listGroup = accordionItem.querySelector(`#list-${index}`);

        categoryTopics.forEach(topic => {
            const link = document.createElement('a');
            link.className = 'list-group-item list-group-item-action';
            link.innerText = topic.title;
            link.href = "#"; 
            
            // Handle Click
            link.onclick = (e) => {
                e.preventDefault(); 
                loadContent(topic.id); // Load the content
                
                // Active State Styling
                document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));
                link.classList.add('active');
            };

            listGroup.appendChild(link);
        });
    });
}

/* FUNCTION: loadContent
    Finds the topic by ID and updates the right-side content area.
*/
function loadContent(topicId) {
    const topic = courseData.find(item => item.id === topicId);
    if (!topic) return;

    const contentArea = document.getElementById('content-area');
    
    // Escape HTML for displaying code (so it doesn't run in the code block)
    const escapedCode = topic.code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Inject Content
    contentArea.innerHTML = `
        <div style="animation: fadeIn 0.5s ease;">
            <h2 class="topic-title">${topic.title}</h2>
            
            <div class="topic-text">
                ${topic.description}
            </div>

            <span class="preview-label">Önizleme / Çıktı:</span>
            <div class="preview-container">
                ${topic.code}
            </div>

            <span class="code-label">Kaynak Kod:</span>
            <div class="code-container">
                <pre><code>${escapedCode}</code></pre>
            </div>
        </div>
    `;
}