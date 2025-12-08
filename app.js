// Configuration
const CONFIG = {
    GOOGLE_SHEET_ID: '17dd4BsxaWNC91CctpnJAn1H5dRFkrfRxCB5ejSZN_c4',
    GOOGLE_API_KEY: 'AIzaSyBJZILs4QPDbTAVPLeI9V_x-bLhEsjjD9c'
};

// Translations
const TRANSLATIONS = {
    en: {
        // Language Selection
        'lang-title': '🌍 Select Your Language',
        'lang-subtitle': 'Choose your preferred language to continue',
        
        // Form
        'form-title': '📝 Create Your Resume',
        'name-label': 'Full Name',
        'job-label': 'Job Title',
        'email-label': 'Email Address',
        'phone-label': 'Phone Number',
        'photo-label': 'Profile Photo',
        'template-label': '🎨 Choose a Template',
        
        // Buttons
        'preview-btn': 'Preview Resume',
        'save-btn': 'Save to Cloud',
        'pdf-btn': 'Export as PDF',
        'edit-btn': 'Edit Again',
        
        // Preview
        'preview-title': 'Resume Preview',
        'contact-title': 'Contact Information',
        'education-title': 'Education',
        'experience-title': 'Work Experience',
        'skills-title': 'Skills',
        
        // Footer
        'footer-text': 'Free Resume Builder - English & Kurdish | No Installation Required',
        
        // Templates
        'template-modern': 'Modern',
        'template-professional': 'Professional',
        'template-creative': 'Creative',
        'template-simple': 'Simple',
        
        // Messages
        'save-success': '✅ Resume saved successfully to Google Sheets!',
        'save-error': '⚠️ Saved locally. Enable Google Sheets API for cloud save.',
        'pdf-success': '✅ PDF downloaded successfully!',
        'fill-fields': 'Please fill in all required fields'
    },
    
    ku: {
        // Language Selection
        'lang-title': '🌍 زمانەکەت هەڵبژێرە',
        'lang-subtitle': 'زمانی ئارەزوومەندت هەڵبژێرە بۆ دروستکردنی رەزومە',
        
        // Form
        'form-title': '📝 رەزومە دروست بکە',
        'name-label': 'ناوی تەواو',
        'job-label': 'ناونیشانی کار',
        'email-label': 'ئیمەیڵ',
        'phone-label': 'ژمارەی مۆبایل',
        'photo-label': 'وێنەی پڕۆفایل',
        'template-label': '🎨 داڕشە هەڵبژێرە',
        
        // Buttons
        'preview-btn': 'بینینی رەزومە',
        'save-btn': 'پاشەکەوت لە هەور',
        'pdf-btn': 'هەناردە بە PDF',
        'edit-btn': 'دووبارە دەستکاری بکە',
        
        // Preview
        'preview-title': 'بینینی رەزومە',
        'contact-title': 'زانیاری پەیوەندی',
        'education-title': 'خوێندن',
        'experience-title': 'ئەزموونی کار',
        'skills-title': 'تواناکان',
        
        // Footer
        'footer-text': 'دروستکەری رەزومەی بێبەرامبەر - ئینگلیزی و کوردی | پێویستی بە دامەزراندن نییە',
        
        // Templates
        'template-modern': 'مۆدێرن',
        'template-professional': 'پرۆفێشناڵ',
        'template-creative': 'داهێنەرانە',
        'template-simple': 'سادە',
        
        // Messages
        'save-success': '✅ رەزومە بە سەرکەوتوویی پاشەکەوت کرا لە گووگڵ شییت!',
        'save-error': '⚠️ لەسەر کۆمپیوتەر پاشەکەوت کرا. API گووگڵ شییت چالاک بکە بۆ پاشەکەوت لە هەور.',
        'pdf-success': '✅ PDF بە سەرکەوتوویی دابگرا!',
        'fill-fields': 'تکایە هەموو خانە پێویستەکان پڕ بکە'
    }
};

// Global Variables
let currentLanguage = 'en';
let selectedTemplate = 'modern';
let resumeData = {
    personal: {},
    education: [],
    experience: [],
    skills: []
};

// Initialize the app
function initApp() {
    loadTemplates();
    setupEventListeners();
    
    // Check for saved language
    const savedLang = localStorage.getItem('resume-language') || 'en';
    setLanguage(savedLang);
}

// Language Functions
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ku' ? 'rtl' : 'ltr';
    localStorage.setItem('resume-language', lang);
    
    // Update all text elements
    updateTranslations();
}

function updateTranslations() {
    const trans = TRANSLATIONS[currentLanguage];
    
    // Update elements with data-translate attribute
    document.querySelectorAll('[id]').forEach(element => {
        const key = element.id;
        if (trans[key]) {
            element.textContent = trans[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (trans[key]) {
            element.placeholder = trans[key];
        }
    });
}

function startWithLanguage(lang) {
    setLanguage(lang);
    document.getElementById('language-card').classList.add('d-none');
    document.getElementById('resume-form').classList.remove('d-none');
    document.getElementById('resume-form').classList.add('fade-in');
}

// Template Functions
function loadTemplates() {
    const templates = [
        { id: 'modern', name: 'template-modern', icon: 'fas fa-briefcase', color: 'primary' },
        { id: 'professional', name: 'template-professional', icon: 'fas fa-user-tie', color: 'success' },
        { id: 'creative', name: 'template-creative', icon: 'fas fa-paint-brush', color: 'warning' },
        { id: 'simple', name: 'template-simple', icon: 'fas fa-file-alt', color: 'info' }
    ];
    
    const container = document.getElementById('templates-container');
    container.innerHTML = '';
    
    templates.forEach(template => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-6 mb-3';
        col.innerHTML = `
            <div class="template-card" onclick="selectTemplate('${template.id}')">
                <i class="${template.icon} text-${template.color}"></i>
                <p class="mb-0 fw-bold">${TRANSLATIONS[currentLanguage][template.name] || template.id}</p>
            </div>
        `;
        container.appendChild(col);
    });
    
    // Select first template by default
    selectTemplate('modern');
}

function selectTemplate(templateId) {
    selectedTemplate = templateId;
    
    // Remove selected class from all
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked template
    event.target.closest('.template-card').classList.add('selected');
    
    // Update preview if exists
    if (!document.getElementById('preview-section').classList.contains('d-none')) {
        previewResume();
    }
}

// Photo Upload
document.getElementById('photoUpload')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('photoPreview');
            preview.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
            resumeData.photo = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Resume Functions
function collectResumeData() {
    resumeData = {
        personal: {
            name: document.getElementById('fullName').value,
            jobTitle: document.getElementById('jobTitle').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            photo: resumeData.photo || ''
        },
        education: [
            {
                degree: "Bachelor's Degree in Computer Science",
                university: "University of Technology",
                year: "2020-2024",
                description: currentLanguage === 'en' 
                    ? "Graduated with honors, specialized in Web Development"
                    : "بە پلەی بەرز تەواو بوو، تایبەت بە گەشەپێدانی وێب"
            }
        ],
        experience: [
            {
                title: currentLanguage === 'en' ? "Frontend Developer" : "گەشەپێدەری فرۆنت-ئێند",
                company: "Tech Solutions Inc.",
                period: "2022-Present",
                description: currentLanguage === 'en'
                    ? "Developed responsive web applications using React.js"
                    : "ئەپلیکەیشنی وێبی وەڵامدەر دروستکرد بە بەکارهێنانی React.js"
            }
        ],
        skills: currentLanguage === 'en' 
            ? ["HTML/CSS", "JavaScript", "React.js", "Bootstrap", "Git"]
            : ["HTML/CSS", "JavaScript", "React.js", "Bootstrap", "Git"],
        template: selectedTemplate,
        language: currentLanguage,
        createdAt: new Date().toISOString()
    };
    
    return resumeData;
}

function previewResume() {
    const data = collectResumeData();
    
    const previewHTML = `
        <div class="resume-preview-content" dir="${currentLanguage === 'ku' ? 'rtl' : 'ltr'}">
            <div class="preview-header">
                <div class="row align-items-center">
                    ${data.personal.photo ? `
                        <div class="col-md-2">
                            <img src="${data.personal.photo}" alt="Photo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
                        </div>
                        <div class="col-md-10">
                    ` : '<div class="col-12">'}
                            <h1 class="display-5">${data.personal.name || 'Your Name'}</h1>
                            <h3 class="text-secondary">${data.personal.jobTitle || 'Job Title'}</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-4">
                    <div class="preview-section">
                        <h3><i class="fas fa-address-card"></i> ${TRANSLATIONS[currentLanguage]['contact-title']}</h3>
                        <p><strong>Email:</strong> ${data.personal.email || 'email@example.com'}</p>
                        <p><strong>Phone:</strong> ${data.personal.phone || '+1 234 567 8900'}</p>
                    </div>
                    
                    <div class="preview-section">
                        <h3><i class="fas fa-graduation-cap"></i> ${TRANSLATIONS[currentLanguage]['education-title']}</h3>
                        ${data.education.map(edu => `
                            <p><strong>${edu.degree}</strong><br>
                            ${edu.university} (${edu.year})<br>
                            <small>${edu.description}</small></p>
                        `).join('')}
                    </div>
                </div>
                
                <div class="col-md-8">
                    <div class="preview-section">
                        <h3><i class="fas fa-briefcase"></i> ${TRANSLATIONS[currentLanguage]['experience-title']}</h3>
                        ${data.experience.map(exp => `
                            <p><strong>${exp.title}</strong><br>
                            ${exp.company} | ${exp.period}<br>
                            <small>${exp.description}</small></p>
                        `).join('')}
                    </div>
                    
                    <div class="preview-section">
                        <h3><i class="fas fa-star"></i> ${TRANSLATIONS[currentLanguage]['skills-title']}</h3>
                        <div class="d-flex flex-wrap gap-2">
                            ${data.skills.map(skill => `
                                <span class="badge bg-primary">${skill}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 text-center text-muted">
                <small>${TRANSLATIONS[currentLanguage]['footer-text']}</small>
            </div>
        </div>
    `;
    
    document.getElementById('resume-preview').innerHTML = previewHTML;
    document.getElementById('resume-form').classList.add('d-none');
    document.getElementById('preview-section').classList.remove('d-none');
    document.getElementById('preview-section').classList.add('fade-in');
}

function goBackToForm() {
    document.getElementById('preview-section').classList.add('d-none');
    document.getElementById('resume-form').classList.remove('d-none');
    document.getElementById('resume-form').classList.add('fade-in');
}

// Save to Google Sheets
async function saveResume() {
    const data = collectResumeData();
    
    // Validate
    if (!data.personal.name || !data.personal.email) {
        alert('Please fill required fields');
        return;
    }
    
    console.log('Trying to save to Google Sheets...');
    console.log('Sheet ID:', CONFIG.GOOGLE_SHEET_ID);
    
    try {
        // Prepare data for Google Sheets
        const rowData = [
            new Date().toISOString(),
            data.personal.name,
            data.personal.email,
            data.personal.phone || '',
            data.personal.jobTitle || '',
            data.language,
            data.template,
            JSON.stringify(data)
        ];
        
        // Google Sheets API URL
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.GOOGLE_SHEET_ID}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED&key=${CONFIG.GOOGLE_API_KEY}`;
        
        console.log('Sending to:', url);
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                values: [rowData]
            })
        });
        
        const result = await response.json();
        console.log('Google Sheets response:', result);
        
        if (response.ok) {
            alert('✅ Resume saved to Google Sheets successfully!');
            // Also save locally as backup
            localStorage.setItem('last-saved-resume', JSON.stringify(data));
        } else {
            throw new Error(result.error?.message || 'Failed to save');
        }
        
    } catch (error) {
        console.error('Error saving to Google Sheets:', error);
        
        // Fallback: Save to localStorage
        const backups = JSON.parse(localStorage.getItem('resume-backups') || '[]');
        backups.push({
            ...data,
            savedAt: new Date().toISOString(),
            error: error.message
        });
        localStorage.setItem('resume-backups', JSON.stringify(backups));
        
        alert('⚠️ Saved locally. Google Sheets error: ' + error.message);
    }
}

// Export PDF
function exportPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const data = collectResumeData();
    
    // Add content to PDF
    doc.setFontSize(22);
    doc.text(data.personal.name || 'Your Name', 20, 20);
    
    doc.setFontSize(16);
    doc.text(data.personal.jobTitle || 'Job Title', 20, 30);
    
    doc.setFontSize(12);
    doc.text(`Email: ${data.personal.email || ''}`, 20, 45);
    doc.text(`Phone: ${data.personal.phone || ''}`, 20, 55);
    
    doc.text('Education:', 20, 70);
    data.education.forEach((edu, index) => {
        doc.text(`• ${edu.degree} - ${edu.university} (${edu.year})`, 25, 80 + (index * 10));
    });
    
    doc.text('Skills:', 20, 110);
    doc.text(data.skills.join(', '), 25, 120);
    
    // Footer
    doc.setFontSize(10);
    doc.text('Created with Free Resume Builder - English/Kurdish', 20, 280);
    
    // Save PDF
    doc.save('resume.pdf');
    alert(TRANSLATIONS[currentLanguage]['pdf-success']);
}

// تابع تست اتصال
async function testConnection() {
    try {
        alert('Testing connection to Google Sheets...');
        
        // Simple test: Try to read from sheet
        const testUrl = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.GOOGLE_SHEET_ID}/values/Sheet1!A1:A1?key=${CONFIG.GOOGLE_API_KEY}`;
        
        const response = await fetch(testUrl);
        
        if (response.ok) {
            alert('✅ Connection successful! Google Sheets is ready.');
            console.log('Connection test passed');
        } else {
            const error = await response.json();
            alert('❌ Connection failed: ' + (error.error?.message || 'Unknown error'));
        }
    } catch (error) {
        alert('❌ Network error: ' + error.message);
    }
}

// Event Listeners
function setupEventListeners() {
    // Auto-update preview on input change
    document.querySelectorAll('#resume-form input').forEach(input => {
        input.addEventListener('input', () => {
            if (!document.getElementById('preview-section').classList.contains('d-none')) {
                previewResume();
            }
        });
    });
}

// Initialize when page loads
window.onload = initApp;
