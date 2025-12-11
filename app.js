// ===== COMPLETE RESUME BUILDER APPLICATION - IMPROVED VERSION =====
// لیبل‌های دوزبانه
const labels = {
  en: {
    formTitle: "Resume Form",
    fullName: "Full Name",
    jobTitle: "Job Title",
    phone: "Phone",
    email: "Email",
    summary: "Professional Summary",
    educationTitle: "Education",
    experienceTitle: "Work Experience",
    addEducation: "Add Education",
    addExperience: "Add Experience",
    phoneLabelPreview: "Phone",
    emailLabelPreview: "Email",
    skillsTitle: "Skills",
    languagesTitle: "Languages",
    photoUrl: "Profile Photo URL",
    resetForm: "Reset Form",
    degree: "Degree",
    field: "Field of Study",
    institution: "Institution",
    location: "Location",
    startDate: "Start Date",
    endDate: "End Date",
    description: "Description",
    company: "Company",
    skill: "Skill",
    level: "Level (1-5)",
    language: "Language",
    proficiency: "Proficiency",
    native: "Native",
    fluent: "Fluent",
    advanced: "Advanced",
    expert: "Expert",
    proficient: "Proficient",
    intermediate: "Intermediate",
    basic: "Basic",
    saveCurrent: "Save Current",
    loadSaved: "Load Saved",
    newResume: "New Resume",
    savedResumes: "Saved Resumes",
    backToForm: "Back to Form",
    noResumes: "No saved resumes yet. Create your first resume!",
    resumeName: "Resume Name",
    lastModified: "Last Modified",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    exportResume: "Export",
    generatingPDF: "Generating PDF...",
    generatingWord: "Generating Word Document...",
    generatingPPT: "Generating PowerPoint...",
    uploadPhoto: "Upload Photo",
    dragDrop: "Drag & drop image here",
    orEnterURL: "Or enter image URL",
    removePhoto: "Remove Photo",
    photoHint: "JPG, PNG up to 2MB",
    printPreview: "Print Preview",
    fullscreenPreview: "Fullscreen Preview",
    exitFullscreen: "Exit Fullscreen (ESC)",
    saveDraft: "Save Draft",
    autoSaveEnabled: "Auto-save enabled",
    template: "Template",
    language: "Language",
    toggleAutoSave: "Toggle Auto-save",
    autoSaveOn: "Auto-save: ON",
    autoSaveOff: "Auto-save: OFF",
    pageBreakWarning: "Avoid page breaks in text",
    exportOptions: "Export Options",
    exportAs: "Export as",
    includePhoto: "Include photo",
    preserveFormatting: "Preserve formatting",
    advancedSettings: "Advanced Settings",
    pageMargins: "Page margins",
    fontSize: "Font size",
    lineSpacing: "Line spacing"
  },

  ku: {
    formTitle: "فۆڕمی سیڤی",
    fullName: "ناوی تەواو",
    jobTitle: "ناوی کار",
    phone: "ژمارەی مۆبایل",
    email: "ئیمەیل",
    summary: "پوختەی پیشەیی",
    educationTitle: "خوێندن",
    experienceTitle: "ئەزموونی کار",
    addEducation: "زیادکردنی خوێندن",
    addExperience: "زیادکردنی ئەزموون",
    phoneLabelPreview: "ژمارەی مۆبایل",
    emailLabelPreview: "ئیمەیل",
    skillsTitle: "تواناییەکان",
    languagesTitle: "زمانەکان",
    photoUrl: "لینکی وێنە",
    resetForm: "پاککردنەوەی فۆڕم",
    degree: "پلە",
    field: "بواری خوێندن",
    institution: "دامەزراوە",
    location: "شوێن",
    startDate: "بەرواری دەستپێک",
    endDate: "بەرواری کۆتایی",
    description: "پێناسە",
    company: "کۆمپانیا",
    skill: "توانا",
    level: "ئاست (١-٥)",
    language: "زمان",
    proficiency: "ئاستی شارەزایی",
    native: "سەرەتایی",
    expert: "زۆر پێشکەوتوو",
    proficient: "ئاستی زۆر بەرز",
    fluent: "شارەزا",
    advanced: "پێشکەوتوو",
    intermediate: "مامناوەند",
    basic: "بنەڕەتی",
    saveCurrent: "پاشەکەوتکردنی ئێستا",
    loadSaved: "کردنەوەی پاشەکەوتکراوەکان",
    newResume: "سیڤی نوێ",
    savedResumes: "سیڤی پاشەکەوتکراوەکان",
    backToForm: "گەڕانەوە بۆ فۆڕم",
    noResumes: "هیچ سیڤیەکی پاشەکەوتکراو نییە. یەکەم سیڤی دروست بکە!",
    resumeName: "ناوی سیڤی",
    lastModified: "دوایین دەستکاری",
    actions: "کردارەکان",
    edit: "دەستکاری",
    delete: "سڕینەوە",
    exportResume: "هەناردە",
    generatingPDF: "PDF دروست دەکرێت...",
    generatingWord: "بڕگەی Word دروست دەکرێت...",
    generatingPPT: "PowerPoint دروست دەکرێت...",
    uploadPhoto: "بارکردنی وێنە",
    dragDrop: "وێنە ڕاکێشە و فڕێ بدە ئێرە",
    orEnterURL: "یان لینکی وێنە بنووسە",
    removePhoto: "سڕینەوەی وێنە",
    photoHint: "JPG، PNG تا ٢ مێگابایت",
    printPreview: "پێشبینانی چاپ",
    fullscreenPreview: "پێشبینانی تەواوی شاشە",
    exitFullscreen: "دەرچوون لە تەواوی شاشە (ESC)",
    saveDraft: "پاشەکەوتکردنی ڕوفتار",
    autoSaveEnabled: "پاشەکەوتکردنی خۆکار چالاکە",
    template: "ڕووکاری",
    language: "زمان",
    toggleAutoSave: "گۆڕینی پاشەکەوتکردنی خۆکار",
    autoSaveOn: "پاشەکەوتکردنی خۆکار: چالاک",
    autoSaveOff: "پاشەکەوتکردنی خۆکار: ناچالاک",
    pageBreakWarning: "دوورکەوتنەوە لە بڕینی پەڕە لە دەق",
    exportOptions: "هەڵبژاردنەکانی هەناردە",
    exportAs: "هەناردە وەک",
    includePhoto: "وێنە لەخۆبگرە",
    preserveFormatting: "ڕازاندنەوە پارێزگاری بکە",
    advancedSettings: "ڕێکخستنە پێشکەوتووەکان",
    pageMargins: "لێواری پەڕە",
    fontSize: "قەبارەی فۆنت",
    lineSpacing: "بۆشایی هێڵ"
  }
};

// ===== تابع debounce =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// وضعیت برنامه
const state = {
  language: "en",
  template: "simple",
  data: {
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    photoUrl: "",
    photoBase64: "",
    summary: "",
    education: [],
    experience: [],
    skills: [],
    languages: []
  },
  savedResumes: [],
  currentResumeId: null,
  autoSaveEnabled: true,
  lastSaveTime: null,
  exportSettings: {
    includePhoto: true,
    preserveFormatting: true,
    pageMargins: 15,
    fontSize: 14,
    lineSpacing: 1.6
  }
};

// کلیدهای ذخیره‌سازی محلی
const STORAGE_KEYS = {
  RESUMES_LIST: "cv-builder-pro-resumes-list-v2",
  CURRENT_RESUME: "cv-builder-pro-current-resume-v2",
  APP_SETTINGS: "cv-builder-pro-settings-v2",
  EXPORT_SETTINGS: "cv-builder-pro-export-settings"
};

// بارگذاری داده‌های ذخیره شده
function loadFromLocalStorage() {
  try {
    // بارگذاری تنظیمات
    const settings = JSON.parse(localStorage.getItem(STORAGE_KEYS.APP_SETTINGS) || "{}");
    state.language = settings.language || "en";
    state.template = settings.template || "simple";
    state.autoSaveEnabled = settings.autoSaveEnabled !== false;
    
    // بارگذاری تنظیمات اکسپورت
    const exportSettings = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXPORT_SETTINGS) || "{}");
    Object.assign(state.exportSettings, exportSettings);
    
    // بارگذاری رزومه جاری
    const savedCurrent = localStorage.getItem(STORAGE_KEYS.CURRENT_RESUME);
    if (savedCurrent) {
      const parsed = JSON.parse(savedCurrent);
      state.currentResumeId = parsed.id;
      state.data = parsed.data || getEmptyData();
    }
    
    // بارگذاری لیست رزومه‌ها
    const savedResumes = localStorage.getItem(STORAGE_KEYS.RESUMES_LIST);
    if (savedResumes) {
      const resumes = JSON.parse(savedResumes);
      // فقط ۲۰ رزومه آخر را نگه دار
      state.savedResumes = resumes.slice(0, 20);
    }
    
    console.log("Data loaded from localStorage");
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    state.data = getEmptyData();
  }
}

// دریافت داده‌های خالی
function getEmptyData() {
  return {
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
    photoUrl: "",
    photoBase64: "",
    summary: "",
    education: [],
    experience: [],
    skills: [],
    languages: []
  };
}

// تولید ID برای رزومه
function generateResumeId() {
  return 'resume_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// به‌روزرسانی لیست رزومه‌ها
function updateResumesList(currentResume) {
  const index = state.savedResumes.findIndex(r => r.id === currentResume.id);
  
  if (index >= 0) {
    state.savedResumes[index] = currentResume;
  } else {
    state.savedResumes.unshift(currentResume);
  }
  
  // فقط ۲۰ رزومه آخر را نگه دار
  if (state.savedResumes.length > 20) {
    state.savedResumes = state.savedResumes.slice(0, 20);
  }
  
  localStorage.setItem(STORAGE_KEYS.RESUMES_LIST, JSON.stringify(state.savedResumes));
}

// ذخیره‌سازی داده‌ها
function saveToLocalStorage() {
  try {
    // ذخیره تنظیمات
    const settings = {
      language: state.language,
      template: state.template,
      autoSaveEnabled: state.autoSaveEnabled,
      lastSave: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.APP_SETTINGS, JSON.stringify(settings));
    
    // ذخیره تنظیمات اکسپورت
    localStorage.setItem(STORAGE_KEYS.EXPORT_SETTINGS, JSON.stringify(state.exportSettings));
    
    // ذخیره رزومه جاری
    const currentResume = {
      id: state.currentResumeId || generateResumeId(),
      name: state.data.fullName || "Untitled Resume",
      template: state.template,
      language: state.language,
      data: JSON.parse(JSON.stringify(state.data)), // Deep copy کامل
      lastModified: new Date().toISOString(),
      sectionsCount: {
        education: state.data.education.length,
        experience: state.data.experience.length,
        skills: state.data.skills.length,
        languages: state.data.languages.length
      }
    };
    
    localStorage.setItem(STORAGE_KEYS.CURRENT_RESUME, JSON.stringify(currentResume));
    
    // به‌روزرسانی لیست رزومه‌ها (فقط اگر auto-save فعال باشد)
    if (state.autoSaveEnabled) {
      updateResumesList(currentResume);
    }
    
    state.lastSaveTime = new Date();
    updateAutoSaveStatus();
    
    console.log("Saved resume with data:", {
      education: state.data.education.length,
      experience: state.data.experience.length,
      skills: state.data.skills.length,
      languages: state.data.languages.length
    });
    
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// ===== مدیریت Auto-save =====
function toggleAutoSave() {
  state.autoSaveEnabled = !state.autoSaveEnabled;
  updateAutoSaveUI();
  saveToLocalStorage();
  
  const t = labels[state.language];
  alert(`Auto-save ${state.autoSaveEnabled ? 'enabled' : 'disabled'}`);
}

function updateAutoSaveUI() {
  const t = labels[state.language];
  const autoSaveBtn = document.getElementById('toggleAutoSaveBtn');
  const autoSaveStatus = document.querySelector('.autosave-status');
  
  if (autoSaveBtn) {
    autoSaveBtn.innerHTML = state.autoSaveEnabled ? 
      `<i class="fas fa-toggle-on"></i> ${t.autoSaveOn}` :
      `<i class="fas fa-toggle-off"></i> ${t.autoSaveOff}`;
  }
  
  if (autoSaveStatus) {
    autoSaveStatus.innerHTML = state.autoSaveEnabled ? 
      `<i class="fas fa-sync-alt"></i> ${t.autoSaveOn}` :
      `<i class="fas fa-ban"></i> ${t.autoSaveOff}`;
    autoSaveStatus.className = state.autoSaveEnabled ? 'autosave-status' : 'autosave-status off';
  }
}

function updateAutoSaveStatus() {
  if (!state.autoSaveEnabled || !state.lastSaveTime) return;
  
  const statusElement = document.querySelector('.autosave-status');
  if (statusElement) {
    const timeAgo = Math.floor((new Date() - state.lastSaveTime) / 1000);
    const t = labels[state.language];
    
    if (timeAgo < 10) {
      statusElement.innerHTML = `<i class="fas fa-sync-alt"></i> ${t.autoSaveOn}`;
    } else if (timeAgo < 60) {
      statusElement.innerHTML = `<i class="fas fa-sync-alt"></i> Saved ${timeAgo}s ago`;
    } else if (timeAgo < 3600) {
      const minutes = Math.floor(timeAgo / 60);
      statusElement.innerHTML = `<i class="fas fa-sync-alt"></i> Saved ${minutes}m ago`;
    }
  }
}

// ===== اعمال لیبل‌ها =====
function applyLabels() {
  const t = labels[state.language];
  
  // عنوان فرم
  const formTitle = document.getElementById("formTitle");
  if (formTitle) formTitle.innerHTML = `<i class="fas fa-edit"></i> ${t.formTitle}`;
  
  // فیلدهای اصلی
  const labelIds = ["labelFullName", "labelJobTitle", "labelPhone", "labelEmail", "labelSummary", 
                   "educationTitle", "experienceTitle", "skillsTitle", "languagesTitle",
                   "addEducationLabel", "addExperienceLabel", "addSkillLabel", "addLanguageLabel"];
  
  labelIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const key = id.replace('label', '').replace('Label', '');
      const translation = t[key] || t[id] || id;
      el.textContent = translation;
    }
  });
  
  // دکمه‌های سایدبار
  document.querySelectorAll(".sidebar-btn").forEach(btn => {
    const text = btn.textContent || btn.innerText;
    if (text.includes("Education")) btn.innerHTML = `<i class="fas fa-graduation-cap"></i> ${t.educationTitle}`;
    if (text.includes("Experience")) btn.innerHTML = `<i class="fas fa-briefcase"></i> ${t.experienceTitle}`;
    if (text.includes("Skill")) btn.innerHTML = `<i class="fas fa-star"></i> ${t.skillsTitle}`;
    if (text.includes("Language")) btn.innerHTML = `<i class="fas fa-language"></i> ${t.languagesTitle}`;
    if (text.includes("Save Current")) btn.innerHTML = `<i class="fas fa-save"></i> ${t.saveCurrent}`;
    if (text.includes("Load Saved")) btn.innerHTML = `<i class="fas fa-folder-open"></i> ${t.loadSaved}`;
    if (text.includes("New Resume")) btn.innerHTML = `<i class="fas fa-file"></i> ${t.newResume}`;
  });
  
  // دکمه‌های topbar
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) resetBtn.innerHTML = `<i class="fas fa-redo"></i> ${t.resetForm}`;
  
  const printBtn = document.getElementById("printPreviewBtn");
  if (printBtn) printBtn.innerHTML = `<i class="fas fa-print"></i> ${t.printPreview}`;
  
  const backBtn = document.getElementById("backToFormBtn");
  if (backBtn) backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.backToForm}`;
  
  const fullscreenBtn = document.getElementById("previewFullscreenBtn");
  if (fullscreenBtn) fullscreenBtn.innerHTML = `<i class="fas fa-expand"></i> ${t.fullscreenPreview}`;
  
  const saveDraftBtn = document.getElementById("saveDraftBtn");
  if (saveDraftBtn) saveDraftBtn.innerHTML = `<i class="fas fa-save"></i> ${t.saveDraft}`;
  
  // برچسب‌های فرم آیتم‌ها
  updateFormItemLabels();
}

// به‌روزرسانی برچسب‌های آیتم‌های فرم
function updateFormItemLabels() {
  const t = labels[state.language];
  
  // برچسب‌های تحصیلات
  document.querySelectorAll('.edu-item label span').forEach((span, index) => {
    const labels = [t.degree, t.field, t.institution, t.location, t.startDate, t.endDate, t.description];
    if (index < labels.length) {
      span.textContent = labels[index];
    }
  });
  
  // برچسب‌های تجربه
  document.querySelectorAll('.exp-item label span').forEach((span, index) => {
    const labels = [t.jobTitle, t.company, t.location, t.startDate, t.endDate, t.description];
    if (index < labels.length) {
      span.textContent = labels[index];
    }
  });
  
  // برچسب‌های مهارت‌ها
  document.querySelectorAll('.skill-item label span').forEach((span, index) => {
    const labels = [t.skill, t.level];
    if (index < labels.length) {
      span.textContent = labels[index];
    }
  });
  
  // برچسب‌های زبان‌ها
  document.querySelectorAll('.lang-item label span').forEach((span, index) => {
    const labels = [t.language, t.proficiency];
    if (index < labels.length) {
      span.textContent = labels[index];
    }
  });
}

// ===== ساخت HTML برای هر تم =====
function buildPreviewHTMLByTemplate(template, d, t) {
  // استفاده از عکس base64 اگر وجود دارد، در غیر این صورت از URL
  const photoSrc = d.photoBase64 || d.photoUrl;
  
  switch (template) {
    case "professional":
      return `
        <div class="professional-header">
          ${photoSrc ? `<img src="${photoSrc}" alt="Profile Photo" class="resume-photo" onerror="this.style.display='none'">` : ""}
          <div class="header-content">
            <h1>${d.fullName || t.fullName}</h1>
            <h2>${d.jobTitle || t.jobTitle}</h2>
            <div class="contact-info">
              ${d.phone ? `<p><strong>${t.phoneLabelPreview}:</strong> ${d.phone}</p>` : ""}
              ${d.email ? `<p><strong>${t.emailLabelPreview}:</strong> ${d.email}</p>` : ""}
            </div>
          </div>
        </div>
        
        ${d.summary ? `<div class="summary-section"><h3>${t.summary}</h3><p>${d.summary}</p></div>` : ""}
        
        <div class="two-columns">
          <div class="col">
            ${d.experience.length > 0 ? `<h3>${t.experienceTitle}</h3><div id="previewExperience"></div>` : ""}
            ${d.education.length > 0 ? `<h3>${t.educationTitle}</h3><div id="previewEducation"></div>` : ""}
          </div>
          <div class="col">
            ${d.skills.length > 0 ? `<h3>${t.skillsTitle}</h3><div id="previewSkills"></div>` : ""}
            ${d.languages.length > 0 ? `<h3>${t.languagesTitle}</h3><div id="previewLanguages"></div>` : ""}
          </div>
        </div>
      `;
      
    case "colorful":
      return `
        <div class="colorful-header">
          ${photoSrc ? `<img src="${photoSrc}" alt="Profile Photo" class="resume-photo big" onerror="this.style.display='none'">` : ""}
          <div class="header-content">
            <h1>${d.fullName || t.fullName}</h1>
            <h2>${d.jobTitle || t.jobTitle}</h2>
            <div class="contact-info">
              ${d.phone ? `<p><strong>${t.phoneLabelPreview}:</strong> ${d.phone}</p>` : ""}
              ${d.email ? `<p><strong>${t.emailLabelPreview}:</strong> ${d.email}</p>` : ""}
            </div>
          </div>
        </div>
        
        ${d.summary ? `<div class="section"><h3>${t.summary}</h3><p>${d.summary}</p></div>` : ""}
        
        <div class="content-sections">
          ${d.skills.length > 0 ? `<div class="section"><h3>${t.skillsTitle}</h3><div id="previewSkills"></div></div>` : ""}
          ${d.experience.length > 0 ? `<div class="section"><h3>${t.experienceTitle}</h3><div id="previewExperience"></div></div>` : ""}
          ${d.education.length > 0 ? `<div class="section"><h3>${t.educationTitle}</h3><div id="previewEducation"></div></div>` : ""}
          ${d.languages.length > 0 ? `<div class="section"><h3>${t.languagesTitle}</h3><div id="previewLanguages"></div></div>` : ""}
        </div>
      `;
      
    case "modern":
      return `
        ${photoSrc ? `<img src="${photoSrc}" alt="Profile Photo" class="resume-photo" onerror="this.style.display='none'">` : ""}
        <h1>${d.fullName || t.fullName}</h1>
        <h2>${d.jobTitle || t.jobTitle}</h2>
        
        <div class="contact-section">
          ${d.phone ? `<p><strong>${t.phoneLabelPreview}:</strong> ${d.phone}</p>` : ""}
          ${d.email ? `<p><strong>${t.emailLabelPreview}:</strong> ${d.email}</p>` : ""}
        </div>
        
        ${d.summary ? `<div class="section"><h3>${t.summary}</h3><p>${d.summary}</p></div>` : ""}
        
        ${d.education.length > 0 ? `<div class="section"><h3>${t.educationTitle}</h3><div id="previewEducation"></div></div>` : ""}
        ${d.experience.length > 0 ? `<div class="section"><h3>${t.experienceTitle}</h3><div id="previewExperience"></div></div>` : ""}
        ${d.skills.length > 0 ? `<div class="section"><h3>${t.skillsTitle}</h3><div id="previewSkills"></div></div>` : ""}
        ${d.languages.length > 0 ? `<div class="section"><h3>${t.languagesTitle}</h3><div id="previewLanguages"></div></div>` : ""}
      `;
      
    default: // simple
      return `
        ${photoSrc ? `<img src="${photoSrc}" alt="Profile Photo" class="resume-photo" onerror="this.style.display='none'">` : ""}
        <h1>${d.fullName || t.fullName}</h1>
        <h2>${d.jobTitle || t.jobTitle}</h2>
        
        <div class="contact-section">
          ${d.phone ? `<p><strong>${t.phoneLabelPreview}:</strong> ${d.phone}</p>` : ""}
          ${d.email ? `<p><strong>${t.emailLabelPreview}:</strong> ${d.email}</p>` : ""}
        </div>
        
        ${d.summary ? `<div class="section"><p>${d.summary}</p></div>` : ""}
        
        ${d.education.length > 0 ? `<div class="section"><h3>${t.educationTitle}</h3><div id="previewEducation"></div></div>` : ""}
        ${d.experience.length > 0 ? `<div class="section"><h3>${t.experienceTitle}</h3><div id="previewExperience"></div></div>` : ""}
        ${d.skills.length > 0 ? `<div class="section"><h3>${t.skillsTitle}</h3><div id="previewSkills"></div></div>` : ""}
        ${d.languages.length > 0 ? `<div class="section"><h3>${t.languagesTitle}</h3><div id="previewLanguages"></div></div>` : ""}
      `;
  }
}

// تبدیل عدد (1-5) به ستاره
function renderStars(level) {
  const levelNum = parseInt(level) || 0;
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= levelNum ? '<span class="star">★</span>' : '<span class="star">☆</span>';
  }
  return `<span class="stars-container">${stars}</span>`;
}

// آپدیت پیش‌نمایش
function updatePreview() {
  const d = state.data;
  const t = labels[state.language];
  const container = document.getElementById("resumePreview");
  
  if (!container) return;
  
  container.className = "";
  container.classList.add(`template-${state.template}`);
  
  container.innerHTML = buildPreviewHTMLByTemplate(state.template, d, t);
  
  // رندر آیتم‌ها در کانتینرهای مربوطه
  renderPreviewItems("previewEducation", d.education, (item) => `
    <div class="preview-edu-item">
      <strong>${item.degree || ""} ${item.field ? `in ${item.field}` : ""}</strong><br>
      ${item.institution || ""} | ${item.location || ""}<br>
      ${item.startDate || ""} - ${item.endDate || ""}<br>
      <span>${item.description || ""}</span>
    </div>
  `);
  
  renderPreviewItems("previewExperience", d.experience, (item) => `
    <div class="preview-exp-item">
      <strong>${item.jobTitle || ""}</strong> at ${item.company || ""}<br>
      ${item.location || ""} | ${item.startDate || ""} - ${item.endDate || ""}<br>
      <span>${item.description || ""}</span>
    </div>
  `);
  
  renderPreviewItems("previewSkills", d.skills, (item) => `
    <div class="preview-skill-item">
      <strong>${item.name || ""}:</strong> ${renderStars(item.level)}
    </div>
  `);
  
  renderPreviewItems("previewLanguages", d.languages, (item) => `
    <div class="preview-lang-item">
      ${item.name || ""} - ${item.level || ""}
    </div>
  `);
  
  // auto-save برنامه‌ریزی شده
  scheduleAutoSave();
}

function renderPreviewItems(containerId, items, templateFn) {
  const container = document.getElementById(containerId);
  if (container && items && items.length > 0) {
    container.innerHTML = "";
    items.forEach(item => {
      if (item && (Object.keys(item).length > 0 || item.name || item.degree || item.jobTitle)) {
        const div = document.createElement("div");
        div.innerHTML = templateFn(item);
        if (div.firstElementChild) {
          container.appendChild(div.firstElementChild);
        }
      }
    });
  } else if (container) {
    container.innerHTML = "";
  }
}

// ===== مدیریت آپلود عکس =====
function initPhotoUpload() {
  const photoUploadArea = document.getElementById('photoUploadArea');
  const photoFileInput = document.getElementById('photoFileInput');
  const photoUrlInput = document.getElementById('photoUrl');
  
  if (!photoUploadArea || !photoFileInput) return;
  
  // Drag & Drop
  ['dragover', 'dragenter'].forEach(eventName => {
    photoUploadArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      photoUploadArea.classList.add('dragover');
    });
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    photoUploadArea.addEventListener(eventName, (e) => {
      e.preventDefault();
      photoUploadArea.classList.remove('dragover');
    });
  });
  
  photoUploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageFile(file);
    }
  });
  
  // Click to upload
  photoUploadArea.addEventListener('click', () => {
    photoFileInput.click();
  });
  
  // File input change
  photoFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageFile(file);
    }
  });
  
  // URL input change
  if (photoUrlInput) {
    photoUrlInput.addEventListener('input', debounce(() => {
      const url = photoUrlInput.value.trim();
      if (url && isValidUrl(url)) {
        state.data.photoUrl = url;
        state.data.photoBase64 = '';
        updatePreview();
        showPhotoPreview(url);
      }
    }, 500));
  }
  
  // نمایش عکس موجود
  if (state.data.photoBase64) {
    showPhotoPreview(state.data.photoBase64);
  } else if (state.data.photoUrl) {
    showPhotoPreview(state.data.photoUrl);
  }
}

function handleImageFile(file) {
  // بررسی سایز فایل (حداکثر 2MB)
  if (file.size > 2 * 1024 * 1024) {
    alert("File size should be less than 2MB");
    return;
  }
  
  const reader = new FileReader();
  
  reader.onload = (e) => {
    const base64 = e.target.result;
    state.data.photoBase64 = base64;
    state.data.photoUrl = '';
    
    const photoUrlInput = document.getElementById('photoUrl');
    if (photoUrlInput) {
      photoUrlInput.value = '';
    }
    
    showPhotoPreview(base64);
    updatePreview();
  };
  
  reader.onerror = () => {
    alert("Error reading image file");
  };
  
  reader.readAsDataURL(file);
}

function showPhotoPreview(src) {
  const photoPreview = document.getElementById('photoPreview');
  if (!photoPreview) return;
  
  const t = labels[state.language];
  
  photoPreview.innerHTML = `
    <img src="${src}" alt="Profile Photo Preview" onerror="this.style.display='none'">
    <button type="button" class="remove-photo">
      <i class="fas fa-trash"></i> ${t.removePhoto}
    </button>
  `;
  
  photoPreview.querySelector('.remove-photo').addEventListener('click', () => {
    state.data.photoBase64 = '';
    state.data.photoUrl = '';
    photoPreview.innerHTML = '';
    
    const photoUrlInput = document.getElementById('photoUrl');
    if (photoUrlInput) {
      photoUrlInput.value = '';
    }
    
    updatePreview();
  });
}

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// ===== ساخت آیتم‌های فرم =====
function createEducationItem(index, item = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "edu-item";
  wrapper.dataset.index = index;
  
  const t = labels[state.language];
  
  wrapper.innerHTML = `
    <div class="form-grid">
      <label>
        <span>${t.degree}</span>
        <input type="text" class="edu-degree" value="${item.degree || ""}" placeholder="Bachelor of Science">
      </label>
      <label>
        <span>${t.field}</span>
        <input type="text" class="edu-field" value="${item.field || ""}" placeholder="Computer Science">
      </label>
      <label>
        <span>${t.institution}</span>
        <input type="text" class="edu-inst" value="${item.institution || ""}" placeholder="University Name">
      </label>
      <label>
        <span>${t.location}</span>
        <input type="text" class="edu-loc" value="${item.location || ""}" placeholder="City, Country">
      </label>
      <label>
        <span>${t.startDate}</span>
        <input type="text" class="edu-start" value="${item.startDate || ""}" placeholder="Sep 2018">
      </label>
      <label>
        <span>${t.endDate}</span>
        <input type="text" class="edu-end" value="${item.endDate || ""}" placeholder="Jun 2022">
      </label>
    </div>
    <label>
      <span>${t.description}</span>
      <textarea class="edu-desc" placeholder="Achievements, courses, GPA...">${item.description || ""}</textarea>
    </label>
    <button type="button" class="edu-remove">
      <i class="fas fa-trash"></i> ${t.delete}
    </button>
  `;
  
  wrapper.addEventListener("input", debounce(() => {
    const inputs = wrapper.querySelectorAll("input, textarea");
    const obj = {
      degree: inputs[0].value,
      field: inputs[1].value,
      institution: inputs[2].value,
      location: inputs[3].value,
      startDate: inputs[4].value,
      endDate: inputs[5].value,
      description: inputs[6].value
    };
    state.data.education[index] = obj;
    updatePreview();
  }, 300));
  
  wrapper.querySelector(".edu-remove").addEventListener("click", () => {
    state.data.education.splice(index, 1);
    renderEducationForm();
    updatePreview();
  });
  
  return wrapper;
}

function renderEducationForm() {
  const container = document.getElementById("educationList");
  if (!container) return;
  container.innerHTML = "";
  state.data.education.forEach((item, idx) => {
    container.appendChild(createEducationItem(idx, item));
  });
}

function createExperienceItem(index, item = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "exp-item";
  wrapper.dataset.index = index;
  
  const t = labels[state.language];
  
  wrapper.innerHTML = `
    <div class="form-grid">
      <label>
        <span>${t.jobTitle}</span>
        <input type="text" class="exp-jobTitle" value="${item.jobTitle || ""}" placeholder="Software Engineer">
      </label>
      <label>
        <span>${t.company}</span>
        <input type="text" class="exp-company" value="${item.company || ""}" placeholder="Company Name">
      </label>
      <label>
        <span>${t.location}</span>
        <input type="text" class="exp-location" value="${item.location || ""}" placeholder="City, Country">
      </label>
      <label>
        <span>${t.startDate}</span>
        <input type="text" class="exp-start" value="${item.startDate || ""}" placeholder="Jan 2020">
      </label>
      <label>
        <span>${t.endDate}</span>
        <input type="text" class="exp-end" value="${item.endDate || ""}" placeholder="Present">
      </label>
    </div>
    <label>
      <span>${t.description}</span>
      <textarea class="exp-desc" placeholder="Responsibilities, achievements...">${item.description || ""}</textarea>
    </label>
    <button type="button" class="exp-remove">
      <i class="fas fa-trash"></i> ${t.delete}
    </button>
  `;
  
  wrapper.addEventListener("input", debounce(() => {
    const inputs = wrapper.querySelectorAll("input, textarea");
    const obj = {
      jobTitle: inputs[0].value,
      company: inputs[1].value,
      location: inputs[2].value,
      startDate: inputs[3].value,
      endDate: inputs[4].value,
      description: inputs[5].value
    };
    state.data.experience[index] = obj;
    updatePreview();
  }, 300));
  
  wrapper.querySelector(".exp-remove").addEventListener("click", () => {
    state.data.experience.splice(index, 1);
    renderExperienceForm();
    updatePreview();
  });
  
  return wrapper;
}

function renderExperienceForm() {
  const container = document.getElementById("experienceList");
  if (!container) return;
  container.innerHTML = "";
  state.data.experience.forEach((item, idx) => {
    container.appendChild(createExperienceItem(idx, item));
  });
}

function createSkillItem(index, item = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "skill-item";
  wrapper.dataset.index = index;
  
  const t = labels[state.language];
  
  wrapper.innerHTML = `
    <div class="form-grid">
      <label>
        <span>${t.skill}</span>
        <input type="text" class="skill-name" value="${item.name || ""}" placeholder="JavaScript">
      </label>
      <label>
        <span>${t.level}</span>
        <select class="skill-level">
          <option value="1" ${item.level == 1 ? "selected" : ""}>1 - ${t.basic}</option>
          <option value="2" ${item.level == 2 ? "selected" : ""}>2 - ${t.intermediate}</option>
          <option value="3" ${item.level == 3 ? "selected" : ""}>3 - ${t.advanced}</option>
          <option value="4" ${item.level == 4 ? "selected" : ""}>4 - ${t.expert}</option>
          <option value="5" ${item.level == 5 ? "selected" : ""}>5 - ${t.proficient}</option>
        </select>
      </label>
    </div>
    <button type="button" class="skill-remove">
      <i class="fas fa-trash"></i> ${t.delete}
    </button>
  `;
  
  wrapper.addEventListener("input", debounce(() => {
    const name = wrapper.querySelector(".skill-name").value;
    const level = Number(wrapper.querySelector(".skill-level").value || 3);
    state.data.skills[index] = { name, level };
    updatePreview();
  }, 300));
  
  wrapper.querySelector(".skill-remove").addEventListener("click", () => {
    state.data.skills.splice(index, 1);
    renderSkillsForm();
    updatePreview();
  });
  
  return wrapper;
}

function renderSkillsForm() {
  const container = document.getElementById("skillsList");
  if (!container) return;
  container.innerHTML = "";
  state.data.skills.forEach((item, idx) => {
    container.appendChild(createSkillItem(idx, item));
  });
}

function createLanguageItem(index, item = {}) {
  const wrapper = document.createElement("div");
  wrapper.className = "lang-item";
  wrapper.dataset.index = index;
  
  const t = labels[state.language];
  
  wrapper.innerHTML = `
    <div class="form-grid">
      <label>
        <span>${t.language}</span>
        <input type="text" class="lang-name" value="${item.name || ""}" placeholder="English">
      </label>
      <label>
        <span>${t.proficiency}</span>
        <select class="lang-level">
          <option value="${t.native}" ${item.level === t.native ? "selected" : ""}>${t.native}</option>
          <option value="${t.fluent}" ${item.level === t.fluent ? "selected" : ""}>${t.fluent}</option>
          <option value="${t.advanced}" ${item.level === t.advanced ? "selected" : ""}>${t.advanced}</option>
          <option value="${t.intermediate}" ${item.level === t.intermediate ? "selected" : ""}>${t.intermediate}</option>
          <option value="${t.basic}" ${item.level === t.basic ? "selected" : ""}>${t.basic}</option>
        </select>
      </label>
    </div>
    <button type="button" class="lang-remove">
      <i class="fas fa-trash"></i> ${t.delete}
    </button>
  `;
  
  wrapper.addEventListener("change", debounce(() => {
    const name = wrapper.querySelector(".lang-name").value;
    const level = wrapper.querySelector(".lang-level").value;
    state.data.languages[index] = { name, level };
    updatePreview();
  }, 300));
  
  wrapper.querySelector(".lang-remove").addEventListener("click", () => {
    state.data.languages.splice(index, 1);
    renderLanguagesForm();
    updatePreview();
  });
  
  return wrapper;
}

function renderLanguagesForm() {
  const container = document.getElementById("languagesList");
  if (!container) return;
  container.innerHTML = "";
  state.data.languages.forEach((item, idx) => {
    container.appendChild(createLanguageItem(idx, item));
  });
}

// ===== بهبود شده: اکسپورت PDF با مدیریت page breaks =====
async function downloadPDF() {
  const element = document.getElementById("resumePreview");
  if (!element) {
    alert("Preview not found!");
    return;
  }
  
  const t = labels[state.language];
  const downloadBtn = document.getElementById("downloadPdfBtn");
  const originalText = downloadBtn ? downloadBtn.innerHTML : '';
  
  if (downloadBtn) {
    downloadBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.generatingPDF}`;
    downloadBtn.disabled = true;
  }
  
  try {
    // کپی از المنت با استایل‌های بهبود یافته
    const clone = element.cloneNode(true);
    
    // اضافه کردن استایل‌های CSS برای جلوگیری از شکستن متن و بهبود layout
    const style = document.createElement('style');
    style.textContent = `
      /* CSS برای PDF */
      * {
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
      }
      
      body {
        margin: ${state.exportSettings.pageMargins}mm;
        padding: 0;
        font-size: ${state.exportSettings.fontSize}pt;
        line-height: ${state.exportSettings.lineSpacing};
        color: #000000;
        background: #ffffff;
      }
      
      /* جلوگیری کامل از شکستن آیتم‌ها */
      .preview-edu-item, 
      .preview-exp-item, 
      .preview-skill-item, 
      .preview-lang-item,
      .section,
      .col,
      .template-professional .two-columns > div,
      .template-colorful .content-sections > div {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        -webkit-column-break-inside: avoid !important;
      }
      
      /* مدیریت شکستن پاراگراف‌ها */
      p, h1, h2, h3, h4, strong, em {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      
      /* جلوگیری از شکستن عناوین */
      h1, h2, h3 {
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
      
      /* مدیریت عکس */
      .resume-photo {
        max-width: 100px !important;
        max-height: 100px !important;
        page-break-inside: avoid !important;
        float: right;
        margin: 0 0 10px 15px;
      }
      
      /* بهبود نمایش ستاره‌ها */
      .stars-container {
        white-space: nowrap !important;
        display: inline-block;
      }
      
      .star {
        font-size: ${state.exportSettings.fontSize}pt;
      }
      
      /* بهبود spacing آیتم‌ها */
      .preview-edu-item,
      .preview-exp-item {
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
      }
      
      .preview-edu-item:last-child,
      .preview-exp-item:last-child {
        border-bottom: none;
      }
      
      /* مدیریت columns در PDF */
      .template-professional .two-columns {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      
      .template-professional .col {
        flex: 1;
        min-width: 250px;
      }
      
      /* بهبود headerها */
      .professional-header,
      .colorful-header {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid #333;
      }
      
      /* حذف backgroundهای رنگی برای چاپ */
      .template-colorful .colorful-header {
        background: #f8f9fa !important;
        border: 1px solid #ddd;
        padding: 20px;
      }
      
      .template-colorful h1,
      .template-colorful h2,
      .template-colorful h3 {
        color: #000000 !important;
      }
      
      /* اضافه کردن padding برای خوانایی بهتر */
      .preview-skill-item,
      .preview-lang-item {
        padding: 5px 0;
      }
      
      /* مدیریت طولانی شدن متن‌ها */
      p, span, div {
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      
      /* اضافه کردن کلاس برای آیتم‌های بلند */
      .long-content {
        page-break-inside: auto !important;
      }
    `;
    
    clone.insertBefore(style, clone.firstChild);
    
    // اضافه کردن کلاس long-content به آیتم‌های با متن طولانی
    const longTextElements = clone.querySelectorAll('.preview-edu-item span, .preview-exp-item span');
    longTextElements.forEach(el => {
      if (el.textContent.length > 200) {
        el.classList.add('long-content');
      }
    });
    
    // مدیریت عکس
    if (state.exportSettings.includePhoto) {
      const photoSrc = state.data.photoBase64 || state.data.photoUrl;
      if (photoSrc) {
        const imgs = clone.querySelectorAll('img');
        imgs.forEach(img => {
          img.src = photoSrc;
          img.style.display = 'block';
          img.style.maxWidth = '100px';
          img.style.maxHeight = '100px';
          img.onerror = function() {
            this.style.display = 'none';
          };
        });
      }
    } else {
      const imgs = clone.querySelectorAll('img');
      imgs.forEach(img => img.remove());
    }
    
    // تنظیمات PDF بهبود یافته
    const opt = {
      margin: [state.exportSettings.pageMargins, state.exportSettings.pageMargins, 
               state.exportSettings.pageMargins, state.exportSettings.pageMargins],
      filename: `${state.data.fullName || 'resume'}_${new Date().toISOString().slice(0, 10)}.pdf`,
      image: { 
        type: 'jpeg', 
        quality: 0.96 
      },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: true,
        backgroundColor: '#ffffff',
        windowWidth: 794, // عرض A4 به پیکسل (794px برای 210mm)
        windowHeight: clone.scrollHeight,
        onclone: function(clonedDoc) {
          // اضافه کردن استایل‌های چاپ نهایی
          const printStyle = document.createElement('style');
          printStyle.textContent = `
            @media print {
              /* حذف رنگ‌های پس‌زمینه برای چاپ */
              .template-colorful .colorful-header {
                background: #ffffff !important;
                border: 1px solid #000 !important;
              }
              
              /* سیاه کردن همه متن‌ها */
              * {
                color: #000000 !important;
                border-color: #000000 !important;
              }
              
              /* بهبود ستاره‌ها */
              .star {
                color: #000000 !important;
              }
              
              /* اضافه کردن شماره صفحه */
              @page {
                margin: ${state.exportSettings.pageMargins}mm;
                @bottom-center {
                  content: counter(page);
                  font-size: 10pt;
                }
              }
              
              /* جلوگیری از شکستن مهم‌ترین بخش‌ها */
              .no-break {
                page-break-inside: avoid !important;
              }
            }
            
            /* کلاس‌های کمکی */
            .page-break {
              page-break-before: always;
            }
            
            .keep-together {
              page-break-inside: avoid;
            }
          `;
          clonedDoc.head.appendChild(printStyle);
          
          // اضافه کردن کلاس keep-together به بخش‌های مهم
          const importantSections = clonedDoc.querySelectorAll('h1, h2, h3, .professional-header, .colorful-header');
          importantSections.forEach(section => {
            section.classList.add('keep-together');
          });
        }
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
        hotfixes: ["px_scaling"]
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.page-break',
        after: '.page-break-after',
        avoid: '.keep-together'
      }
    };
    
    // ایجاد PDF
    await html2pdf().set(opt).from(clone).save();
    
  } catch (error) {
    console.error("PDF generation error:", error);
    alert("Failed to generate PDF. Please try again or check console for details.");
  } finally {
    if (downloadBtn) {
      downloadBtn.innerHTML = originalText;
      downloadBtn.disabled = false;
    }
  }
}

// ===== بهبود شده: اکسپورت Word با قالب‌بندی حرفه‌ای =====
function downloadWord() {
  const d = state.data;
  const t = labels[state.language];
  
  const downloadBtn = document.getElementById("downloadWordBtn");
  const originalText = downloadBtn ? downloadBtn.innerHTML : '';
  
  if (downloadBtn) {
    downloadBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.generatingWord}`;
    downloadBtn.disabled = true;
  }
  
  try {
    // ساختار HTML برای Word با قالب‌بندی حرفه‌ای
    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${d.fullName || "Professional Resume"}</title>
        <style>
          /* استایل‌های حرفه‌ای برای Word */
          body { 
            font-family: 'Calibri', 'Arial', 'Segoe UI', sans-serif; 
            line-height: ${state.exportSettings.lineSpacing}; 
            margin: ${state.exportSettings.pageMargins * 0.5}cm;
            color: #2c3e50;
            font-size: ${state.exportSettings.fontSize}pt;
          }
          
          /* هدر اصلی */
          .resume-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: ${state.template === 'professional' ? '3px double #2c579a' : 
                          state.template === 'colorful' ? '4px solid #764ba2' : 
                          '2px solid #2c579a'};
          }
          
          .resume-header h1 {
            color: #2c579a;
            font-size: 28pt;
            font-weight: bold;
            margin-bottom: 10px;
            ${state.template === 'colorful' ? 'color: #764ba2;' : ''}
          }
          
          .resume-header h2 {
            color: #555;
            font-size: 18pt;
            font-weight: normal;
            margin-bottom: 20px;
            ${state.template === 'colorful' ? 'color: #667eea; font-style: italic;' : ''}
          }
          
          /* بخش تم‌ها */
          ${state.template === 'professional' ? `
            .section-title {
              color: #2c579a;
              border-bottom: 2px solid #2c579a;
              padding-bottom: 8px;
              margin-top: 25px;
              font-size: 16pt;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            
            .item {
              margin-bottom: 20px;
              padding-left: 15px;
              border-left: 3px solid #2c579a;
            }
          ` : ''}
          
          ${state.template === 'colorful' ? `
            .section-title {
              color: #764ba2;
              background: linear-gradient(to right, #667eea, #764ba2);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-size: 18pt;
              font-weight: bold;
              margin-top: 25px;
              padding-bottom: 8px;
              border-bottom: 2px dashed #764ba2;
            }
            
            .item {
              margin-bottom: 18px;
              padding: 15px;
              background: #f8f9fa;
              border-radius: 8px;
              border-left: 4px solid #764ba2;
            }
          ` : ''}
          
          ${state.template === 'modern' ? `
            .section-title {
              color: #2c579a;
              font-size: 17pt;
              font-weight: bold;
              margin-top: 25px;
              padding-bottom: 6px;
              position: relative;
            }
            
            .section-title:before {
              content: "▸";
              color: #2c579a;
              margin-right: 10px;
            }
            
            .item {
              margin-bottom: 18px;
              padding-left: 20px;
            }
          ` : ''}
          
          ${state.template === 'simple' ? `
            .section-title {
              color: #333;
              font-size: 16pt;
              font-weight: bold;
              margin-top: 25px;
              padding-bottom: 5px;
              border-bottom: 1px solid #ddd;
            }
            
            .item {
              margin-bottom: 16px;
            }
          ` : ''}
          
          /* اطلاعات تماس */
          .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 25px;
            flex-wrap: wrap;
          }
          
          .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #555;
          }
          
          /* ستاره‌های مهارت‌ها */
          .stars {
            color: #f39c12;
            font-size: 14pt;
            letter-spacing: 2px;
          }
          
          /* عکس پروفایل */
          .profile-photo {
            ${state.exportSettings.includePhoto && (d.photoBase64 || d.photoUrl) ? `
              width: 120px;
              height: 120px;
              border-radius: 50%;
              object-fit: cover;
              margin: 0 auto 20px;
              display: block;
              border: 3px solid #2c579a;
              ${state.template === 'colorful' ? 'border-color: #764ba2;' : ''}
            ` : 'display: none;'}
          }
          
          /* مهارت‌ها */
          .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }
          
          .skill-item {
            background: #f1f8ff;
            padding: 8px 15px;
            border-radius: 20px;
            border: 1px solid #d1e7ff;
            ${state.template === 'colorful' ? 'background: linear-gradient(135deg, #667eea20, #764ba220);' : ''}
          }
          
          /* فوتر */
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #888;
            font-size: 10pt;
          }
          
          /* چاپ */
          @media print {
            body { margin: 1.5cm; }
            .page-break { page-break-before: always; }
          }
        </style>
      </head>
      <body>
        ${state.exportSettings.includePhoto && (d.photoBase64 || d.photoUrl) ? 
          `<img src="${d.photoBase64 || d.photoUrl}" alt="Profile Photo" class="profile-photo" onerror="this.style.display='none'">` : ''}
        
        <div class="resume-header">
          <h1>${d.fullName || "Professional Resume"}</h1>
          <h2>${d.jobTitle || ""}</h2>
          
          <div class="contact-info">
            ${d.phone ? `<div class="contact-item"><strong>${t.phone}:</strong> ${d.phone}</div>` : ''}
            ${d.email ? `<div class="contact-item"><strong>${t.email}:</strong> ${d.email}</div>` : ''}
          </div>
        </div>
        
        ${d.summary ? `
          <div class="section">
            <div class="section-title">${t.summary}</div>
            <p style="text-align: justify; line-height: 1.8;">${d.summary}</p>
          </div>
        ` : ''}
        
        ${d.experience.length > 0 ? `
          <div class="section">
            <div class="section-title">${t.experienceTitle}</div>
            ${d.experience.map(item => `
              <div class="item">
                <div style="font-weight: bold; color: #2c579a; font-size: 14pt;">
                  ${item.jobTitle || ""}
                </div>
                <div style="color: #666; margin: 5px 0;">
                  <strong>${item.company || ""}</strong> | ${item.location || ""}
                </div>
                <div style="color: #888; font-style: italic; margin-bottom: 8px;">
                  ${item.startDate || ""} - ${item.endDate || ""}
                </div>
                <div style="color: #555; line-height: 1.6;">
                  ${item.description ? item.description.replace(/\n/g, '<br>') : ""}
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
        
        ${d.education.length > 0 ? `
          <div class="section">
            <div class="section-title">${t.educationTitle}</div>
            ${d.education.map(item => `
              <div class="item">
                <div style="font-weight: bold; color: #2c579a; font-size: 14pt;">
                  ${item.degree || ""} ${item.field ? `in ${item.field}` : ""}
                </div>
                <div style="color: #666; margin: 5px 0;">
                  <strong>${item.institution || ""}</strong> | ${item.location || ""}
                </div>
                <div style="color: #888; font-style: italic; margin-bottom: 8px;">
                  ${item.startDate || ""} - ${item.endDate || ""}
                </div>
                <div style="color: #555; line-height: 1.6;">
                  ${item.description ? item.description.replace(/\n/g, '<br>') : ""}
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
        
        ${d.skills.length > 0 ? `
          <div class="section">
            <div class="section-title">${t.skillsTitle}</div>
            <div class="skills-container">
              ${d.skills.map(item => `
                <div class="skill-item">
                  <strong>${item.name || ""}:</strong> 
                  <span class="stars">${'★'.repeat(item.level || 0)}${'☆'.repeat(5 - (item.level || 0))}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        ${d.languages.length > 0 ? `
          <div class="section">
            <div class="section-title">${t.languagesTitle}</div>
            <div class="skills-container">
              ${d.languages.map(item => `
                <div class="skill-item">
                  <strong>${item.name || ""}:</strong> ${item.level || ""}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        <div class="footer">
          <p><em>Generated with CV Builder Pro • ${new Date().toLocaleDateString()} • Template: ${state.template}</em></p>
        </div>
      </body>
      </html>
    `;
    
    // ایجاد فایل Word
    const blob = new Blob([htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${d.fullName || 'resume'}_${state.template}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
  } catch (error) {
    console.error("Word export error:", error);
    alert("Failed to generate Word document.");
  } finally {
    if (downloadBtn) {
      downloadBtn.innerHTML = originalText;
      downloadBtn.disabled = false;
    }
  }
}

// ===== جدید: اکسپورت PowerPoint واقعی =====
async function downloadPowerPoint() {
  const d = state.data;
  const t = labels[state.language];
  
  const downloadBtn = document.getElementById("downloadPptxBtn");
  const originalText = downloadBtn ? downloadBtn.innerHTML : '';
  
  if (downloadBtn) {
    downloadBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.generatingPPT}`;
    downloadBtn.disabled = true;
  }
  
  try {
    // استفاده از کتابخانه pptxgenjs برای ایجاد PowerPoint واقعی
    if (typeof PptxGenJS === 'undefined') {
      // لود کتابخانه اگر وجود ندارد
      await loadPptxGenJSLibrary();
    }
    
    const pptx = new PptxGenJS();
    
    // تنظیمات ارائه
    pptx.layout = 'LAYOUT_WIDE';
    pptx.author = 'CV Builder Pro';
    pptx.company = '';
    pptx.revision = '1';
    pptx.subject = 'Professional Resume';
    pptx.title = d.fullName || 'Resume';
    
    // اسلاید ۱: عنوان
    const slide1 = pptx.addSlide();
    slide1.background = { fill: 'F1F8FF' };
    
    slide1.addText(d.fullName || 'PROFESSIONAL RESUME', {
      x: 1, y: 1, w: '90%', h: 1.5,
      fontSize: 44,
      bold: true,
      color: '2C579A',
      align: 'center'
    });
    
    slide1.addText(d.jobTitle || '', {
      x: 1, y: 2.5, w: '90%', h: 0.8,
      fontSize: 28,
      color: '666666',
      align: 'center',
      italic: true
    });
    
    // اطلاعات تماس
    let contactY = 3.5;
    if (d.phone) {
      slide1.addText(`📱 ${d.phone}`, {
        x: 3, y: contactY, w: '40%', h: 0.5,
        fontSize: 14,
        color: '444444',
        align: 'center'
      });
      contactY += 0.6;
    }
    
    if (d.email) {
      slide1.addText(`✉️ ${d.email}`, {
        x: 3, y: contactY, w: '40%', h: 0.5,
        fontSize: 14,
        color: '444444',
        align: 'center'
      });
    }
    
    // عکس پروفایل
    if (state.exportSettings.includePhoto && (d.photoBase64 || d.photoUrl)) {
      try {
        slide1.addImage({
          path: d.photoBase64 || d.photoUrl,
          x: 7, y: 3.5, w: 2, h: 2,
          rounding: true
        });
      } catch (e) {
        console.warn("Could not add profile image to PPT:", e);
      }
    }
    
    // اسلاید ۲: خلاصه و تجربه
    const slide2 = pptx.addSlide();
    
    if (d.summary) {
      slide2.addText(t.summary, {
        x: 0.5, y: 0.5, w: '45%', h: 0.7,
        fontSize: 24,
        bold: true,
        color: '2C579A'
      });
      
      slide2.addText(d.summary, {
        x: 0.5, y: 1.3, w: '45%', h: 3,
        fontSize: 14,
        color: '333333',
        align: 'left',
        valign: 'top',
        lineSpacing: 28
      });
    }
    
    if (d.experience.length > 0) {
      slide2.addText(t.experienceTitle, {
        x: 5, y: 0.5, w: '45%', h: 0.7,
        fontSize: 24,
        bold: true,
        color: '2C579A'
      });
      
      let expY = 1.3;
      d.experience.slice(0, 3).forEach((item, idx) => {
        slide2.addText(`• ${item.jobTitle || ''}`, {
          x: 5, y: expY, w: '45%', h: 0.4,
          fontSize: 16,
          bold: true,
          color: '444444'
        });
        expY += 0.5;
        
        slide2.addText(`${item.company || ''} | ${item.startDate || ''} - ${item.endDate || ''}`, {
          x: 5, y: expY, w: '45%', h: 0.3,
          fontSize: 12,
          color: '666666',
          italic: true
        });
        expY += 0.4;
        
        if (item.description) {
          const desc = item.description.length > 150 ? item.description.substring(0, 150) + '...' : item.description;
          slide2.addText(desc, {
            x: 5, y: expY, w: '45%', h: 0.6,
            fontSize: 11,
            color: '555555',
            lineSpacing: 20
          });
          expY += 0.7;
        }
        
        expY += 0.2;
      });
    }
    
    // اسلاید ۳: تحصیلات و مهارت‌ها
    const slide3 = pptx.addSlide();
    
    if (d.education.length > 0) {
      slide3.addText(t.educationTitle, {
        x: 0.5, y: 0.5, w: '45%', h: 0.7,
        fontSize: 24,
        bold: true,
        color: '2C579A'
      });
      
      let eduY = 1.3;
      d.education.slice(0, 3).forEach((item, idx) => {
        slide3.addText(`🎓 ${item.degree || ''}`, {
          x: 0.5, y: eduY, w: '45%', h: 0.4,
          fontSize: 16,
          bold: true,
          color: '444444'
        });
        eduY += 0.5;
        
        slide3.addText(`${item.institution || ''}`, {
          x: 0.5, y: eduY, w: '45%', h: 0.3,
          fontSize: 14,
          color: '666666'
        });
        eduY += 0.4;
        
        slide3.addText(`${item.startDate || ''} - ${item.endDate || ''}`, {
          x: 0.5, y: eduY, w: '45%', h: 0.3,
          fontSize: 12,
          color: '888888',
          italic: true
        });
        eduY += 0.5;
      });
    }
    
    if (d.skills.length > 0) {
      slide3.addText(t.skillsTitle, {
        x: 5, y: 0.5, w: '45%', h: 0.7,
        fontSize: 24,
        bold: true,
        color: '2C579A'
      });
      
      let skillY = 1.3;
      const skillsPerColumn = Math.ceil(d.skills.length / 2);
      
      d.skills.slice(0, skillsPerColumn).forEach((item, idx) => {
        const stars = '★'.repeat(item.level || 0) + '☆'.repeat(5 - (item.level || 0));
        slide3.addText(`${item.name || ''}: ${stars}`, {
          x: 5, y: skillY, w: '20%', h: 0.4,
          fontSize: 14,
          color: '444444'
        });
        skillY += 0.5;
      });
      
      skillY = 1.3;
      d.skills.slice(skillsPerColumn).forEach((item, idx) => {
        const stars = '★'.repeat(item.level || 0) + '☆'.repeat(5 - (item.level || 0));
        slide3.addText(`${item.name || ''}: ${stars}`, {
          x: 7, y: skillY, w: '20%', h: 0.4,
          fontSize: 14,
          color: '444444'
        });
        skillY += 0.5;
      });
    }
    
    // اسلاید ۴: زبان‌ها و اطلاعات اضافی
    const slide4 = pptx.addSlide();
    
    if (d.languages.length > 0) {
      slide4.addText(t.languagesTitle, {
        x: 0.5, y: 0.5, w: '45%', h: 0.7,
        fontSize: 24,
        bold: true,
        color: '2C579A'
      });
      
      let langY = 1.3;
      d.languages.forEach((item, idx) => {
        slide4.addText(`🌐 ${item.name || ''}: ${item.level || ''}`, {
          x: 0.5, y: langY, w: '40%', h: 0.5,
          fontSize: 16,
          color: '444444'
        });
        langY += 0.6;
      });
    }
    
    // اطلاعات اضافی
    slide4.addText('Additional Information', {
      x: 5, y: 0.5, w: '45%', h: 0.7,
      fontSize: 24,
      bold: true,
      color: '2C579A'
    });
    
    slide4.addText(`Template: ${state.template}`, {
      x: 5, y: 1.5, w: '45%', h: 0.4,
      fontSize: 14,
      color: '666666'
    });
    
    slide4.addText(`Generated: ${new Date().toLocaleDateString()}`, {
      x: 5, y: 2.0, w: '45%', h: 0.4,
      fontSize: 14,
      color: '666666'
    });
    
    slide4.addText('Created with CV Builder Pro', {
      x: 5, y: 2.5, w: '45%', h: 0.4,
      fontSize: 12,
      color: '888888',
      italic: true
    });
    
    // دانلود فایل PowerPoint
    await pptx.writeFile({ fileName: `${d.fullName || 'resume'}_presentation.pptx` });
    
  } catch (error) {
    console.error("PowerPoint export error:", error);
    
    // Fallback: اگر کتابخانه pptxgenjs در دسترس نیست، از روش قبلی استفاده کن
    alert("Generating PowerPoint presentation... Using alternative method.");
    downloadPowerPointFallback();
  } finally {
    if (downloadBtn) {
      downloadBtn.innerHTML = originalText;
      downloadBtn.disabled = false;
    }
  }
}

// تابع fallback برای PowerPoint
function downloadPowerPointFallback() {
  const d = state.data;
  const t = labels[state.language];
  
  // ایجاد محتوای HTML که می‌تواند در PowerPoint import شود
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Resume Presentation</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; }
        .slide { 
          margin-bottom: 60px; 
          padding: 40px; 
          border: 2px solid #ddd; 
          border-radius: 10px;
          page-break-after: always;
        }
        .slide-title { 
          color: #2c579a; 
          font-size: 32px; 
          margin-bottom: 30px;
          text-align: center;
        }
        .content { font-size: 18px; line-height: 1.8; }
        .item { margin-bottom: 20px; }
        .contact-info { text-align: center; margin: 20px 0; }
        .stars { color: #f39c12; font-size: 20px; }
      </style>
    </head>
    <body>
    
    <div class="slide">
      <div class="slide-title">${d.fullName || "PROFESSIONAL RESUME"}</div>
      <div style="text-align: center; font-size: 24px; color: #666; margin-bottom: 30px;">
        ${d.jobTitle || ""}
      </div>
      <div class="contact-info">
        ${d.phone ? `<div>📱 ${d.phone}</div>` : ''}
        ${d.email ? `<div>✉️ ${d.email}</div>` : ''}
      </div>
      ${state.exportSettings.includePhoto && (d.photoBase64 || d.photoUrl) ? 
        `<div style="text-align: center; margin: 20px 0;">
          <img src="${d.photoBase64 || d.photoUrl}" alt="Profile" style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid #2c579a;">
        </div>` : ''}
    </div>
    
    ${d.summary ? `
    <div class="slide">
      <div class="slide-title">${t.summary}</div>
      <div class="content">${d.summary}</div>
    </div>
    ` : ''}
    
    ${d.experience.length > 0 ? `
    <div class="slide">
      <div class="slide-title">${t.experienceTitle}</div>
      <div class="content">
        ${d.experience.map(item => `
          <div class="item">
            <strong>${item.jobTitle || ""}</strong><br>
            <em>${item.company || ""} | ${item.location || ""}</em><br>
            ${item.startDate || ""} - ${item.endDate || ""}<br>
            <p>${item.description || ""}</p>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
    
    ${d.education.length > 0 ? `
    <div class="slide">
      <div class="slide-title">${t.educationTitle}</div>
      <div class="content">
        ${d.education.map(item => `
          <div class="item">
            <strong>${item.degree || ""} ${item.field ? `in ${item.field}` : ""}</strong><br>
            <em>${item.institution || ""} | ${item.location || ""}</em><br>
            ${item.startDate || ""} - ${item.endDate || ""}<br>
            <p>${item.description || ""}</p>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
    
    ${d.skills.length > 0 ? `
    <div class="slide">
      <div class="slide-title">${t.skillsTitle}</div>
      <div class="content">
        ${d.skills.map(item => `
          <div class="item">
            <strong>${item.name || ""}:</strong> 
            <span class="stars">${'★'.repeat(item.level || 0)}${'☆'.repeat(5 - (item.level || 0))}</span>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
    
    ${d.languages.length > 0 ? `
    <div class="slide">
      <div class="slide-title">${t.languagesTitle}</div>
      <div class="content">
        ${d.languages.map(item => `
          <div class="item">${item.name || ""} - ${item.level || ""}</div>
        `).join('')}
      </div>
    </div>
    ` : ''}
    
    <div class="slide">
      <div class="slide-title">CV Builder Pro</div>
      <div class="content" style="text-align: center;">
        <p>Template: ${state.template}</p>
        <p>Generated: ${new Date().toLocaleDateString()}</p>
        <p><em>Professional Resume Created with CV Builder Pro</em></p>
      </div>
    </div>
    
    <script>
      // پرینت همه اسلایدها
      window.onload = function() {
        window.print();
      }
    </script>
    
    </body>
    </html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${d.fullName || 'resume'}_presentation.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// لود کتابخانه pptxgenjs
async function loadPptxGenJSLibrary() {
  return new Promise((resolve, reject) => {
    if (typeof PptxGenJS !== 'undefined') {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// ===== بهبود شده: پرینت پیش‌نمایش با حفظ قالب =====
function printPreview() {
  const previewContent = document.getElementById("resumePreview");
  if (!previewContent) return;
  
  // کپی عمیق از محتوا با حفظ قالب
  const printContent = previewContent.cloneNode(true);
  
  // اضافه کردن استایل‌های چاپی برای حفظ قالب و چند صفحه‌ای
  const style = document.createElement('style');
  style.textContent = `
    /* استایل‌های چاپ */
    @media print {
      /* ریست استایل‌ها */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11pt;
        line-height: 1.4;
        color: #000000;
        background: #ffffff;
        margin: 15mm;
        width: 100%;
      }
      
      /* حفظ رنگ‌ها برای چاپ */
      .template-colorful .colorful-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color: white !important;
        padding: 20px !important;
        margin-bottom: 20px !important;
      }
      
      .template-colorful .colorful-header h1,
      .template-colorful .colorful-header h2 {
        color: white !important;
      }
      
      .template-professional .professional-header {
        border-bottom: 3px double #000000 !important;
      }
      
      .template-modern {
        border-left: 8px solid #000000 !important;
      }
      
      /* مدیریت صفحات */
      .page-break {
        page-break-before: always;
        margin-top: 20mm;
      }
      
      /* جلوگیری از شکستن بخش‌های مهم */
      .preview-edu-item,
      .preview-exp-item,
      .section,
      .col {
        page-break-inside: avoid;
        break-inside: avoid;
      }
      
      /* بهبود نمایش هدرها */
      h1 {
        font-size: 22pt;
        margin-bottom: 10pt;
        page-break-after: avoid;
      }
      
      h2 {
        font-size: 16pt;
        margin-bottom: 8pt;
        page-break-after: avoid;
      }
      
      h3 {
        font-size: 14pt;
        margin: 15pt 0 5pt 0;
        border-bottom: 1px solid #000000;
        padding-bottom: 3pt;
        page-break-after: avoid;
      }
      
      /* مدیریت عکس */
      .resume-photo {
        max-width: 80px !important;
        max-height: 80px !important;
        border: 1px solid #000000;
      }
      
      .resume-photo.big {
        max-width: 100px !important;
        max-height: 100px !important;
      }
      
      /* بهبود آیتم‌ها */
      .preview-edu-item,
      .preview-exp-item {
        margin-bottom: 12pt;
        padding-bottom: 8pt;
        border-bottom: 1px dashed #cccccc;
      }
      
      .preview-edu-item:last-child,
      .preview-exp-item:last-child {
        border-bottom: none;
      }
      
      /* بهبود ستاره‌ها */
      .star {
        font-size: 12pt;
        color: #000000 !important;
      }
      
      /* مدیریت columns */
      .template-professional .two-columns {
        display: flex;
        flex-wrap: wrap;
        gap: 15pt;
      }
      
      .template-professional .col {
        flex: 1;
        min-width: 45%;
      }
      
      /* فوتر و هدر صفحات */
      @page {
        margin: 15mm;
        size: A4;
        
        @top-left {
          content: "${state.data.fullName || 'Resume'}";
          font-size: 9pt;
          color: #666666;
        }
        
        @bottom-center {
          content: "Page " counter(page) " of " counter(pages);
          font-size: 9pt;
          color: #666666;
        }
      }
      
      /* صفحه اول margin متفاوت */
      @page :first {
        margin-top: 25mm;
        
        @top-left {
          content: none;
        }
      }
      
      /* اضافه کردن کلاس برای بخش‌های بلند */
      .long-text {
        page-break-inside: auto;
      }
    }
    
    /* استایل‌های روی صفحه نمایش */
    @media screen {
      .print-only {
        display: none;
      }
    }
    
    /* استایل‌های عمومی */
    .print-container {
      width: 210mm;
      min-height: 297mm;
      padding: 20mm;
      background: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      margin: 0 auto;
    }
    
    .print-footer {
      text-align: center;
      margin-top: 20mm;
      padding-top: 5mm;
      border-top: 1px solid #cccccc;
      font-size: 9pt;
      color: #666666;
    }
    
    /* اضافه کردن تقسیم‌کننده صفحات */
    .page-divider {
      display: none;
    }
    
    @media print {
      .page-divider {
        display: block;
        height: 0;
        margin: 10mm 0;
        border-top: 1px dashed #cccccc;
      }
    }
  `;
  
  // ایجاد container چاپ
  const printContainer = document.createElement('div');
  printContainer.className = 'print-container';
  printContainer.appendChild(printContent);
  printContainer.appendChild(style);
  
  // اضافه کردن فوتر
  const footer = document.createElement('div');
  footer.className = 'print-footer';
  footer.innerHTML = `
    <p>Generated with CV Builder Pro • ${new Date().toLocaleDateString()} • Template: ${state.template}</p>
    <p class="print-only">Page 1 of <span class="total-pages">1</span></p>
  `;
  printContainer.appendChild(footer);
  
  // اضافه کردن page dividerها برای بخش‌های اصلی
  const sections = printContainer.querySelectorAll('h3');
  sections.forEach((section, index) => {
    if (index > 0 && index % 2 === 0) { // بعد از هر دو بخش
      const divider = document.createElement('div');
      divider.className = 'page-divider';
      divider.setAttribute('data-page-break', 'true');
      section.parentNode.insertBefore(divider, section);
    }
  });
  
  // ایجاد پنجره چاپ
  const printWindow = window.open('', '_blank', 'width=800,height=600');
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Print Resume - ${state.data.fullName || 'Resume'}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 20px;
          background: #f5f5f5;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
        }
        
        .print-controls {
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        
        .print-btn {
          display: block;
          width: 100%;
          padding: 10px 20px;
          margin: 5px 0;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .print-btn:hover {
          background: #0056b3;
        }
        
        .print-btn.secondary {
          background: #6c757d;
        }
        
        .print-btn.secondary:hover {
          background: #545b62;
        }
        
        .page-count {
          margin: 10px 0;
          font-size: 12px;
          color: #666;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="print-controls">
        <button class="print-btn" onclick="window.print()">
          <i class="fas fa-print"></i> Print Now
        </button>
        <button class="print-btn secondary" onclick="window.close()">
          <i class="fas fa-times"></i> Close
        </button>
        <div class="page-count" id="pageCount">Estimating pages...</div>
      </div>
      <div id="printContent"></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
      <script>
        // قرار دادن محتوای چاپ
        document.getElementById('printContent').innerHTML = \`${printContainer.outerHTML}\`;
        
        // محاسبه تخمینی تعداد صفحات
        function estimatePages() {
          const contentHeight = document.querySelector('.print-container').scrollHeight;
          const pageHeight = 1122; // ارتفاع A4 به نقطه (297mm)
          const estimatedPages = Math.ceil(contentHeight / pageHeight);
          document.getElementById('pageCount').textContent = 'Estimated pages: ' + estimatedPages;
          
          // آپدیت فوتر
          const totalPagesSpan = document.querySelector('.total-pages');
          if (totalPagesSpan) {
            totalPagesSpan.textContent = estimatedPages;
          }
          
          return estimatedPages;
        }
        
        // تنظیم event listeners برای چاپ
        window.onload = function() {
          estimatePages();
          
          // اضافه کردن استایل‌های چاپ بعد از لود
          const style = document.createElement('style');
          style.textContent = \`
            @media print {
              .print-controls { display: none !important; }
              body { padding: 0 !important; background: white !important; }
            }
          \`;
          document.head.appendChild(style);
        };
        
        window.onafterprint = function() {
          setTimeout(() => {
            window.close();
          }, 500);
        };
        
        // کلید ESC برای بستن
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            window.close();
          }
        });
      </script>
    </body>
    </html>
  `);
  
  printWindow.document.close();
}

// ===== تنظیمات اکسپورت =====
function showExportSettings() {
  const t = labels[state.language];
  
  const settingsHtml = `
    <div class="export-settings-modal">
      <h3><i class="fas fa-cog"></i> ${t.exportOptions} & Auto-save</h3>
      
      <div class="setting-group">
        <h4><i class="fas fa-save"></i> Auto-save Settings</h4>
        <label>
          <input type="checkbox" id="autoSaveSetting" ${state.autoSaveEnabled ? 'checked' : ''}>
          ${t.autoSaveEnabled}
        </label>
        
        <label>
          Auto-save delay (seconds):
          <input type="range" id="autoSaveDelay" min="1" max="10" value="${AUTO_SAVE_DELAY / 1000}">
          <span id="delayValue">${AUTO_SAVE_DELAY / 1000}s</span>
        </label>
      </div>
      
      <div class="setting-group">
        <h4><i class="fas fa-file-export"></i> Export Settings</h4>
        <label>
          <input type="checkbox" id="includePhotoSetting" ${state.exportSettings.includePhoto ? 'checked' : ''}>
          ${t.includePhoto}
        </label>
        
        <label>
          <input type="checkbox" id="preserveFormattingSetting" ${state.exportSettings.preserveFormatting ? 'checked' : ''}>
          ${t.preserveFormatting}
        </label>
      </div>
      
      <div class="setting-group">
        <h4><i class="fas fa-file-pdf"></i> PDF Settings</h4>
        <label>
          ${t.pageMargins} (mm):
          <input type="range" id="pageMarginsSetting" min="5" max="30" value="${state.exportSettings.pageMargins}">
          <span id="marginsValue">${state.exportSettings.pageMargins}mm</span>
        </label>
        
        <label>
          ${t.fontSize} (pt):
          <input type="range" id="fontSizeSetting" min="10" max="18" value="${state.exportSettings.fontSize}">
          <span id="fontSizeValue">${state.exportSettings.fontSize}pt</span>
        </label>
        
        <label>
          ${t.lineSpacing}:
          <input type="range" id="lineSpacingSetting" min="1.2" max="2.0" step="0.1" value="${state.exportSettings.lineSpacing}">
          <span id="lineSpacingValue">${state.exportSettings.lineSpacing}</span>
        </label>
      </div>
      
      <div class="setting-actions">
        <button class="save-settings-btn"><i class="fas fa-save"></i> Save All Settings</button>
        <button class="cancel-settings-btn"><i class="fas fa-times"></i> Cancel</button>
      </div>
    </div>
  `;
  
  // ایجاد مودال
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      ${settingsHtml}
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // رویدادها
  const marginsInput = modal.querySelector('#pageMarginsSetting');
  const fontSizeInput = modal.querySelector('#fontSizeSetting');
  const lineSpacingInput = modal.querySelector('#lineSpacingSetting');
  
  marginsInput.addEventListener('input', (e) => {
    modal.querySelector('#marginsValue').textContent = e.target.value + 'mm';
  });
  
  fontSizeInput.addEventListener('input', (e) => {
    modal.querySelector('#fontSizeValue').textContent = e.target.value + 'pt';
  });
  
  lineSpacingInput.addEventListener('input', (e) => {
    modal.querySelector('#lineSpacingValue').textContent = e.target.value;
  });
  
  // ذخیره تنظیمات
  modal.querySelector('.save-settings-btn').addEventListener('click', () => {
    state.exportSettings.includePhoto = modal.querySelector('#includePhotoSetting').checked;
    state.exportSettings.preserveFormatting = modal.querySelector('#preserveFormattingSetting').checked;
    state.exportSettings.pageMargins = parseInt(marginsInput.value);
    state.exportSettings.fontSize = parseInt(fontSizeInput.value);
    state.exportSettings.lineSpacing = parseFloat(lineSpacingInput.value);
    
    localStorage.setItem(STORAGE_KEYS.EXPORT_SETTINGS, JSON.stringify(state.exportSettings));
    modal.remove();
  });
  
  // بستن مودال
  modal.querySelector('.cancel-settings-btn').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// ===== مدیریت رزومه‌های ذخیره شده =====
function showSavedResumes() {
  const mainFormContainer = document.getElementById('mainFormContainer');
  const savedResumesContainer = document.getElementById('savedResumesContainer');
  const savedResumesContent = document.getElementById('savedResumesContent');
  const t = labels[state.language];
  
  if (!mainFormContainer || !savedResumesContainer || !savedResumesContent) return;
  
  // نمایش بخش رزومه‌های ذخیره شده
  mainFormContainer.classList.add('hidden');
  savedResumesContainer.classList.add('active');
  
  if (state.savedResumes.length === 0) {
    savedResumesContent.innerHTML = `
      <div class="no-resumes">
        <i class="fas fa-file-alt"></i>
        <p>${t.noResumes}</p>
        <button class="topbar-btn" onclick="backToForm()">
          <i class="fas fa-arrow-left"></i> ${t.backToForm}
        </button>
      </div>
    `;
    return;
  }
  
  savedResumesContent.innerHTML = `
    <div class="saved-resumes-grid">
      ${state.savedResumes.map(resume => `
        <div class="saved-resume-card">
          <div class="saved-resume-header">
            <div class="saved-resume-name">${resume.name || "Untitled Resume"}</div>
            <div class="saved-resume-date">${formatDate(resume.lastModified)}</div>
          </div>
          <div class="saved-resume-meta">
            <span><i class="fas fa-palette"></i> ${resume.template}</span>
            <span><i class="fas fa-language"></i> ${resume.language}</span>
          </div>
          <div class="saved-resume-preview">
            ${resume.data.summary ? resume.data.summary.substring(0, 120) + "..." : "No summary available"}
          </div>
          <div class="saved-resume-actions">
            <button class="saved-resume-btn primary" onclick="loadResume('${resume.id}')">
              <i class="fas fa-edit"></i> ${t.edit}
            </button>
            <button class="saved-resume-btn" onclick="exportResume('${resume.id}')">
              <i class="fas fa-download"></i> ${t.exportResume}
            </button>
            <button class="saved-resume-btn danger" onclick="deleteResume('${resume.id}')">
              <i class="fas fa-trash"></i> ${t.delete}
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function backToForm() {
  const mainFormContainer = document.getElementById('mainFormContainer');
  const savedResumesContainer = document.getElementById('savedResumesContainer');
  
  if (mainFormContainer && savedResumesContainer) {
    mainFormContainer.classList.remove('hidden');
    savedResumesContainer.classList.remove('active');
  }
}

function loadResume(resumeId) {
  const resume = state.savedResumes.find(r => r.id === resumeId);
  if (!resume) {
    alert("Resume not found!");
    return;
  }
  
  state.currentResumeId = resume.id;
  state.language = resume.language || "en";
  state.template = resume.template || "simple";
  state.data = resume.data || getEmptyData();
  
  // آپدیت فرم
  const languageSelect = document.getElementById("languageSelect");
  const templateSelect = document.getElementById("templateSelect");
  
  if (languageSelect) languageSelect.value = state.language;
  if (templateSelect) templateSelect.value = state.template;
  
  // پر کردن فیلدها
  ["fullName", "jobTitle", "phone", "email", "photoUrl", "summary"].forEach(id => {
    const el = document.getElementById(id);
    if (el && state.data[id]) {
      el.value = state.data[id];
    }
  });
  
  // نمایش عکس
  if (state.data.photoBase64) {
    showPhotoPreview(state.data.photoBase64);
  } else if (state.data.photoUrl) {
    showPhotoPreview(state.data.photoUrl);
  }
  
  // رندر مجدد فرم‌ها
  renderEducationForm();
  renderExperienceForm();
  renderSkillsForm();
  renderLanguagesForm();
  
  // آپدیت پیش‌نمایش و لیبل‌ها
  updatePreview();
  applyLabels();
  
  // برگشت به فرم
  backToForm();
  
  alert(`Resume "${resume.name}" loaded successfully!`);
}

function deleteResume(resumeId) {
  const t = labels[state.language];
  if (!confirm("Are you sure you want to delete this resume? This action cannot be undone.")) {
    return;
  }
  
  state.savedResumes = state.savedResumes.filter(r => r.id !== resumeId);
  localStorage.setItem(STORAGE_KEYS.RESUMES_LIST, JSON.stringify(state.savedResumes));
  
  if (state.currentResumeId === resumeId) {
    state.currentResumeId = null;
    resetForm();
  }
  
  showSavedResumes();
}

function exportResume(resumeId) {
  const resume = state.savedResumes.find(r => r.id === resumeId);
  if (!resume) return;
  
  // ذخیره‌سازی موقت
  const currentState = { ...state };
  
  // بارگذاری رزومه
  state.currentResumeId = resume.id;
  state.language = resume.language;
  state.template = resume.template;
  state.data = resume.data;
  
  // اکسپورت به PDF
  downloadPDF();
  
  // برگشت به حالت قبلی
  Object.assign(state, currentState);
}

function saveCurrentResume() {
  const t = labels[state.language];
  
  // اگر نام نداریم، بپرس
  if (!state.data.fullName.trim()) {
    const name = prompt(`${t.resumeName}:`, state.data.fullName || "My Resume");
    if (!name) return;
    state.data.fullName = name;
  }
  
  // ایجاد ID جدید اگر وجود ندارد
  if (!state.currentResumeId) {
    state.currentResumeId = generateResumeId();
  }
  
  // ذخیره‌سازی
  saveToLocalStorage();
  
  // حتماً به لیست رزومه‌ها اضافه کن (حتی اگر auto-save خاموش باشد)
  const currentResume = {
    id: state.currentResumeId,
    name: state.data.fullName || "Untitled Resume",
    template: state.template,
    language: state.language,
    data: JSON.parse(JSON.stringify(state.data)),
    lastModified: new Date().toISOString()
  };
  
  updateResumesList(currentResume);
  
  alert(`${t.saveCurrent} successful! Resume has been saved.`);
}

// ===== تابع auto-save با تاخیر =====
let autoSaveTimeout = null;
const AUTO_SAVE_DELAY = 3000; // 3 ثانیه تاخیر

function scheduleAutoSave() {
  if (!state.autoSaveEnabled) return;
  
  // پاک کردن timeout قبلی
  if (autoSaveTimeout) {
    clearTimeout(autoSaveTimeout);
  }
  
  // تنظیم timeout جدید
  autoSaveTimeout = setTimeout(() => {
    saveToLocalStorage();
    console.log("Auto-save triggered after delay");
  }, AUTO_SAVE_DELAY);
}

function resetForm() {
  const t = labels[state.language];
  if (!confirm("Are you sure you want to reset the form? All unsaved changes will be lost.")) {
    return;
  }
  
  state.data = getEmptyData();
  state.currentResumeId = null;
  
  // پاک کردن فیلدهای فرم
  ["fullName", "jobTitle", "phone", "email", "photoUrl", "summary"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  
  // پاک کردن پیش‌نمایش عکس
  const photoPreview = document.getElementById('photoPreview');
  if (photoPreview) photoPreview.innerHTML = '';
  
  // رندر مجدد فرم‌ها
  renderEducationForm();
  renderExperienceForm();
  renderSkillsForm();
  renderLanguagesForm();
  
  updatePreview();
  
  // حذف از localStorage
  localStorage.removeItem(STORAGE_KEYS.CURRENT_RESUME);
}

// ===== فول‌اسکرین پیش‌نمایش =====
function showFullscreenPreview() {
  const modal = document.getElementById('fullscreenModal');
  const fullscreenPreview = document.getElementById('fullscreenPreview');
  
  if (!modal || !fullscreenPreview) return;
  
  // کپی از پیش‌نمایش
  const previewContent = document.getElementById('resumePreview').cloneNode(true);
  fullscreenPreview.innerHTML = '';
  fullscreenPreview.appendChild(previewContent);
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // اضافه کردن event برای ESC
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      closeFullscreenPreview();
    }
  };
  
  document.addEventListener('keydown', handleEsc);
  modal._escHandler = handleEsc;
}

function closeFullscreenPreview() {
  const modal = document.getElementById('fullscreenModal');
  if (!modal) return;
  
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  // حذف event listener
  if (modal._escHandler) {
    document.removeEventListener('keydown', modal._escHandler);
  }
}

// ===== تنظیم مقیاس پیش‌نمایش =====
function initPreviewScale() {
  const scaleBtns = document.querySelectorAll('.scale-btn');
  const previewWrapper = document.querySelector('.preview-wrapper');
  
  scaleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const scale = parseFloat(btn.dataset.scale);
      
      // حذف کلاس active از همه دکمه‌ها
      scaleBtns.forEach(b => b.classList.remove('active'));
      // اضافه کردن کلاس active به دکمه انتخاب شده
      btn.classList.add('active');
      
      // اعمال مقیاس
      if (previewWrapper) {
        previewWrapper.style.transform = `scale(${scale})`;
        previewWrapper.style.transformOrigin = 'top center';
      }
    });
  });
}

// ===== تابع‌های کمکی =====
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ===== توابع افزودن آیتم =====
function addEducationItem() {
  state.data.education.push({
    degree: "",
    field: "",
    institution: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
  });
  renderEducationForm();
  updatePreview();
}

function addExperienceItem() {
  state.data.experience.push({
    jobTitle: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
  });
  renderExperienceForm();
  updatePreview();
}

function addSkillItem() {
  state.data.skills.push({ name: "", level: 3 });
  renderSkillsForm();
  updatePreview();
}

function addLanguageItem() {
  state.data.languages.push({ name: "", level: labels[state.language].intermediate });
  renderLanguagesForm();
  updatePreview();
}

  function addFormItemListeners() {
    // تحصیلات
    document.querySelectorAll('.edu-degree, .edu-field, .edu-inst, .edu-loc, .edu-start, .edu-end, .edu-desc').forEach(input => {
      input.addEventListener('input', debounce(() => {
        scheduleAutoSave();
      }, 1000));
    });
    
    // تجربه
    document.querySelectorAll('.exp-jobTitle, .exp-company, .exp-location, .exp-start, .exp-end, .exp-desc').forEach(input => {
      input.addEventListener('input', debounce(() => {
        scheduleAutoSave();
      }, 1000));
    });
    
    // مهارت‌ها
    document.querySelectorAll('.skill-name, .skill-level').forEach(input => {
      input.addEventListener('input', debounce(() => {
        scheduleAutoSave();
      }, 1000));
    });
    
    // زبان‌ها
    document.querySelectorAll('.lang-name, .lang-level').forEach(input => {
      input.addEventListener('input', debounce(() => {
        scheduleAutoSave();
      }, 1000));
    });
  }
  
  // فراخوانی بعد از رندر فرم‌ها
  setTimeout(addFormItemListeners, 500);

// ===== مقداردهی اولیه برنامه =====
document.addEventListener("DOMContentLoaded", () => {
  // بارگذاری داده‌ها
  loadFromLocalStorage();
  
  // المان‌های اصلی
  const languageSelect = document.getElementById("languageSelect");
  const templateSelect = document.getElementById("templateSelect");
  
  if (languageSelect) languageSelect.value = state.language;
  if (templateSelect) templateSelect.value = state.template;
  
  // رویداد تغییر زبان
  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      state.language = languageSelect.value;
      applyLabels();
      updatePreview();
      updateAutoSaveUI();
      scheduleAutoSave(); // auto-save با تاخیر
    });
  }
  
  // رویداد تغییر تم
  if (templateSelect) {
    templateSelect.addEventListener("change", () => {
      state.template = templateSelect.value;
      updatePreview();
      scheduleAutoSave(); // auto-save با تاخیر
    });
  }
  
  // رویدادهای فیلدهای اصلی با auto-save
  ["fullName", "jobTitle", "phone", "email", "photoUrl", "summary"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", debounce(() => {
        state.data[id] = el.value;
        updatePreview();
        scheduleAutoSave(); // auto-save با تاخیر
      }, 800)); // تاخیر بیشتر برای auto-save
    }
  });
  
  // دکمه‌های افزودن
  const addButtons = {
    'addEducationBtn': () => addEducationItem(),
    'addExperienceBtn': () => addExperienceItem(),
    'addSkillBtn': () => addSkillItem(),
    'addLanguageBtn': () => addLanguageItem()
  };
  
  Object.keys(addButtons).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", addButtons[id]);
  });
  
  // دکمه‌های mini
  const miniButtons = {
    'addEducationBtnMini': () => addEducationItem(),
    'addExperienceBtnMini': () => addExperienceItem(),
    'addSkillBtnMini': () => addSkillItem(),
    'addLanguageBtnMini': () => addLanguageItem()
  };
  
  Object.keys(miniButtons).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", miniButtons[id]);
  });
  
  // دکمه‌های اکسپورت
  document.getElementById('downloadPdfBtn')?.addEventListener('click', downloadPDF);
  document.getElementById('downloadWordBtn')?.addEventListener('click', downloadWord);
  document.getElementById('downloadPptxBtn')?.addEventListener('click', downloadPowerPoint);
  
  // دکمه مدیریت Auto-save
  const toggleAutoSaveBtn = document.createElement('button');
  toggleAutoSaveBtn.id = 'toggleAutoSaveBtn';
  toggleAutoSaveBtn.className = 'sidebar-btn';
  toggleAutoSaveBtn.addEventListener('click', toggleAutoSave);
  
  // اضافه کردن دکمه به سایدبار
  const sidebarSection = document.querySelector('.sidebar-section:nth-child(3)');
  if (sidebarSection) {
    sidebarSection.appendChild(toggleAutoSaveBtn);
  }
  
  // دکمه تنظیمات اکسپورت
  const exportSettingsBtn = document.createElement('button');
  exportSettingsBtn.className = 'sidebar-btn';
  exportSettingsBtn.innerHTML = `<i class="fas fa-sliders-h"></i> Export Settings`;
  exportSettingsBtn.addEventListener('click', showExportSettings);
  
  if (sidebarSection) {
    sidebarSection.appendChild(exportSettingsBtn);
  }
  
  // دکمه پاک کردن داده‌های قدیمی
  const clearStorageBtn = document.createElement('button');
  clearStorageBtn.className = 'sidebar-btn';
  clearStorageBtn.innerHTML = `<i class="fas fa-trash"></i> Clear Old Data`;
  clearStorageBtn.addEventListener('click', () => {
    if (confirm("Delete all saved resumes except the current one?")) {
      state.savedResumes = state.currentResumeId ? 
        state.savedResumes.filter(r => r.id === state.currentResumeId) : [];
      localStorage.setItem(STORAGE_KEYS.RESUMES_LIST, JSON.stringify(state.savedResumes));
      alert("Old data cleared!");
    }
  });
  
  if (sidebarSection) {
    sidebarSection.appendChild(clearStorageBtn);
  }
  
  // سایر دکمه‌های مدیریت
  document.getElementById('saveResumeBtn')?.addEventListener('click', saveCurrentResume);
  document.getElementById('showSavedBtn')?.addEventListener('click', showSavedResumes);
  document.getElementById('newResumeBtn')?.addEventListener('click', resetForm);
  document.getElementById('resetBtn')?.addEventListener('click', resetForm);
  document.getElementById('backToFormBtn')?.addEventListener('click', backToForm);
  document.getElementById('previewFullscreenBtn')?.addEventListener('click', showFullscreenPreview);
  document.getElementById('printPreviewBtn')?.addEventListener('click', printPreview);
  document.getElementById('saveDraftBtn')?.addEventListener('click', saveCurrentResume);
  document.getElementById('closeFullscreenBtn')?.addEventListener('click', closeFullscreenPreview);
  
  // مقداردهی اولیه
  initPhotoUpload();
  initPreviewScale();
  applyLabels();
  updatePreview();
  updateAutoSaveUI();
  renderEducationForm();
  renderExperienceForm();
  renderSkillsForm();
  renderLanguagesForm();
  
  // به‌روزرسانی خودکار وضعیت ذخیره
  setInterval(updateAutoSaveStatus, 30000);
  
  console.log("CV Builder Pro v2.2 initialized successfully!");
});
