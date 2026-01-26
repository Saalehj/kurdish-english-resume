const state = {
  lang: 'en',
  template: 'modern',
  photoBase64: null,
};

const labels = {
  en: { personal: "Personal Info", exp: "Experience", edu: "Education", skill: "Skills", summary: "Summary", contact: "Contact", export: "Export Resume", photo: "Photo" },
  ku: { personal: "زانیاری کەسی", exp: "ئەزموونی کار", edu: "خوێندن", skill: "تواناکان", summary: "پوختە", contact: "پەیوەندی", export: "داگرتنی سی‌وی", photo: "وێنە" }
};

function updateUI() {
  state.lang = document.getElementById('languageSelect').value;
  const t = labels[state.lang];
  document.body.className = state.lang === 'ku' ? 'rtl' : '';
  
  document.getElementById('lblPersonal').innerText = t.personal;
  document.getElementById('lblPhoto').innerText = t.photo;
  document.getElementById('btnAddExp').innerText = state.lang === 'en' ? 'Exp' : 'ئەزموون';
  document.getElementById('btnAddEdu').innerText = state.lang === 'en' ? 'Edu' : 'خوێندن';
  document.getElementById('btnAddSkill').innerText = state.lang === 'en' ? 'Skill' : 'توانا';
  document.getElementById('lblExport').innerText = t.export;

  renderPreview();
}

function setTemplate(name, el) {
  state.template = name;
  document.querySelectorAll('.t-opt').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
  renderPreview();
}

function toggleSection(id) {
  document.getElementById(id).classList.toggle('open');
}

function handlePhotoUpload(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => { state.photoBase64 = e.target.result; renderPreview(); };
    reader.readAsDataURL(input.files[0]);
  }
}

// Data Handling
function addItem(type) {
  const container = document.getElementById(`${type}Container`);
  const id = Date.now();
  let html = '';

  if (type === 'skill') {
    html = `
      <div class="item-card" id="item-${id}">
        <button class="btn-remove" onclick="removeItem(${id})">X</button>
        <div style="display:flex; gap:5px;">
          <input type="text" class="inp-skill" placeholder="Skill Name" oninput="renderPreview()" style="flex:2">
          <select class="inp-level" onchange="renderPreview()" style="flex:1">
            <option value="5">5/5</option>
            <option value="4">4/5</option>
            <option value="3">3/5</option>
            <option value="2">2/5</option>
            <option value="1">1/5</option>
          </select>
        </div>
      </div>`;
  } else {
    const ph = state.lang === 'en' ? 
      { t: "Title / Degree", o: "Company / Uni", d: "Date", x: "Description" } :
      { t: "ناونیشان / بڕوانامە", o: "کۆمپانیا / زانکۆ", d: "بەروار", x: "تێبینی" };
      
    html = `
      <div class="item-card" id="item-${id}">
        <button class="btn-remove" onclick="removeItem(${id})">X</button>
        <div class="form-group"><input type="text" class="inp-title" placeholder="${ph.t}" oninput="renderPreview()"></div>
        <div class="form-group"><input type="text" class="inp-org" placeholder="${ph.o}" oninput="renderPreview()"></div>
        <div class="form-group"><input type="text" class="inp-date" placeholder="${ph.d}" oninput="renderPreview()"></div>
        <div class="form-group"><textarea class="inp-desc" placeholder="${ph.x}" rows="2" oninput="renderPreview()"></textarea></div>
      </div>`;
  }
  container.insertAdjacentHTML('beforeend', html);
}

function removeItem(id) { document.getElementById(`item-${id}`).remove(); renderPreview(); }

function getData() {
  const getVal = (id) => document.getElementById(id).value;
  
  const skills = [];
  document.querySelectorAll('#skillContainer .item-card').forEach(div => {
    skills.push({
      name: div.querySelector('.inp-skill').value,
      level: parseInt(div.querySelector('.inp-level').value)
    });
  });

  const getItems = (containerId) => {
    const items = [];
    document.querySelectorAll(`#${containerId} .item-card`).forEach(div => {
      items.push({
        title: div.querySelector('.inp-title').value,
        org: div.querySelector('.inp-org').value,
        date: div.querySelector('.inp-date').value,
        desc: div.querySelector('.inp-desc').value
      });
    });
    return items;
  };

  return {
    fullName: getVal('fullName') || (state.lang === 'ku' ? "ناوی سی‌وی" : "Your Name"),
    jobTitle: getVal('jobTitle') || "Job Title",
    phone: getVal('phone'),
    email: getVal('email'),
    address: getVal('address'),
    summary: getVal('summary'),
    photo: state.photoBase64,
    skills: skills,
    exp: getItems('experienceContainer'),
    edu: getItems('educationContainer')
  };
}

function renderSkillVisuals(level, type) {
  if (type === 'bar') {
    return `<div class="skill-bar-container"><div class="skill-bar-fill" style="width:${level*20}%"></div></div>`;
  } else if (type === 'dots') {
    let dots = '';
    for(let i=0; i<5; i++) dots += `<div class="dot ${i<level?'filled':''}"></div>`;
    return `<div class="dots">${dots}</div>`;
  } else {
    let stars = '';
    for(let i=0; i<level; i++) stars += '★';
    return `<span class="stars">${stars}</span>`;
  }
}

function renderItems(items, title) {
  if (!items.length) return '';
  return `
    <div class="section-title">${title}</div>
    ${items.map(i => `
      <div class="item">
        <div class="item-head"><span>${i.title}</span> <span>${i.date}</span></div>
        <div class="item-sub">${i.org}</div>
        <div class="item-desc">${i.desc}</div>
      </div>
    `).join('')}`;
}

// MAIN RENDER ENGINE
function renderPreview() {
  const data = getData();
  const t = labels[state.lang];
  const container = document.getElementById('resumePreview');
  let html = '';

  const sectionEdu = renderItems(data.edu, state.lang === 'en' ? "Education" : "خوێندن");
  const sectionExp = renderItems(data.exp, state.lang === 'en' ? "Experience" : "ئەزموونی کار");

  let skillType = 'stars';
  if (state.template === 'modern') skillType = 'bar';
  if (state.template === 'creative') skillType = 'dots';
  if (state.template === 'bold') skillType = 'dots';

  const skillsListHTML = data.skills.length ? `
    <div class="section-title">${t.skill}</div>
    <div class="skills-list">
      ${data.skills.map(s => `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
          <span>${s.name}</span>
          ${renderSkillVisuals(s.level, skillType)}
        </div>
      `).join('')}
    </div>` : '';

  // --- TEMPLATES ---

  if (state.template === 'modern') {
    html = `
      <div class="template-modern">
        <div class="sidebar">
          ${data.photo ? `<img src="${data.photo}" class="photo">` : ''}
          <div class="section-title">${t.contact}</div>
          <p style="font-size:13px; line-height:1.6;">${data.phone}<br>${data.email}<br>${data.address}</p>
        </div>
        <div class="main">
          <h1>${data.fullName}</h1>
          <h2>${data.jobTitle}</h2>
          ${data.summary ? `<div class="section-title">${t.summary}</div><p>${data.summary}</p>` : ''}
          ${sectionEdu}
          ${sectionExp}
          ${skillsListHTML}
        </div>
      </div>`;
  } 
  else if (state.template === 'elegant') {
    html = `
      <div class="template-elegant">
        <header>
          ${data.photo ? `<img src="${data.photo}" class="photo">` : ''}
          <h1>${data.fullName}</h1>
          <h2>${data.jobTitle}</h2>
          <div style="font-size:13px; margin-top:10px;">${data.phone} | ${data.email} | ${data.address}</div>
        </header>
        ${data.summary ? `<div class="section-title">${t.summary}</div><p>${data.summary}</p>` : ''}
        ${sectionEdu}
        ${sectionExp}
        ${skillsListHTML}
      </div>`;
  }
  else if (state.template === 'creative') {
    html = `
      <div class="template-creative">
        <header>
          ${data.photo ? `<img src="${data.photo}" class="photo">` : ''}
          <div>
            <h1>${data.fullName}</h1>
            <h2>${data.jobTitle}</h2>
            <div style="font-size:12px; color:#666; margin-top:5px;">${data.phone} | ${data.email}</div>
          </div>
        </header>
        ${data.summary ? `<div class="section-title">${t.summary}</div><p>${data.summary}</p>` : ''}
        ${sectionEdu}
        ${sectionExp}
        ${skillsListHTML}
      </div>`;
  }
  else if (state.template === 'minimal') {
    html = `
      <div class="template-minimal">
        <header>
            <h1>${data.fullName}</h1>
            <h2>${data.jobTitle}</h2>
            <div style="font-size:12px; margin-top:10px; border-top:1px solid #eee; padding-top:5px;">
                ${data.phone} &bull; ${data.email} &bull; ${data.address}
            </div>
        </header>
        ${data.summary ? `<div class="section-title">${t.summary}</div><p>${data.summary}</p>` : ''}
        ${sectionEdu}
        ${sectionExp}
        ${skillsListHTML}
      </div>
    `;
  }
  else if (state.template === 'bold') {
    html = `
      <div class="template-bold">
        <header>
            ${data.photo ? `<img src="${data.photo}" class="photo">` : ''}
            <div>
                <h1>${data.fullName}</h1>
                <div style="color:#ddd;">${data.jobTitle}</div>
            </div>
        </header>
        <div class="content">
            <div class="left-col">
                <div class="section-title">${t.contact}</div>
                <div style="margin-bottom:20px; font-size:13px;">${data.phone}<br>${data.email}<br>${data.address}</div>
                ${skillsListHTML}
            </div>
            <div class="right-col">
                ${data.summary ? `<div class="section-title">${t.summary}</div><p>${data.summary}</p>` : ''}
                ${sectionEdu}
                ${sectionExp}
            </div>
        </div>
      </div>
    `;
  }
  else if (state.template === 'compact') {
    html = `
      <div class="template-compact">
        <header>
            <div>
                <h1>${data.fullName}</h1>
                <div style="color:#666;">${data.jobTitle}</div>
            </div>
            <div style="text-align:right; font-size:12px;">
                ${data.phone}<br>${data.email}<br>${data.address}
            </div>
        </header>
        <div class="cols">
            <div>
                ${data.summary ? `<div class="section-title">${t.summary}</div><p>${data.summary}</p>` : ''}
                ${sectionEdu}
                ${sectionExp}
            </div>
            <div style="background:#f9f9f9; padding:10px; border-radius:5px; height:fit-content;">
                ${skillsListHTML}
            </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// EXPORT PDF
function exportPDF() {
  const element = document.getElementById('resumePreview');
  const opt = {
    margin: 0,
    filename: 'CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

// EXPORT WORD
function exportWord() {
  const data = getData();
  const t = labels[state.lang];
  const isRTL = state.lang === 'ku';

  const styles = `
    body { font-family: 'Segoe UI', Tahoma, sans-serif; font-size: 11pt; }
    h1 { font-size: 20pt; color: #2c3e50; }
    .sec { font-weight: bold; border-bottom: 1px solid #ccc; margin-top: 20px; font-size: 14pt; }
  `;

  let content = `
    <html ${isRTL ? 'dir="rtl"' : ''}><head><meta charset="utf-8"><style>${styles}</style></head><body>
      <h1 style="text-align:center">${data.fullName}</h1>
      <p style="text-align:center">${data.jobTitle}<br>${data.phone} | ${data.email}</p>
      
      ${data.summary ? `<div class="sec">${t.summary}</div><p>${data.summary}</p>` : ''}
      
      ${data.edu.length ? `<div class="sec">${t.edu}</div>` : ''}
      ${data.edu.map(i => `<p><b>${i.title}</b>, ${i.org}<br><i>${i.date}</i><br>${i.desc}</p>`).join('')}

      ${data.exp.length ? `<div class="sec">${t.exp}</div>` : ''}
      ${data.exp.map(i => `<p><b>${i.title}</b>, ${i.org}<br><i>${i.date}</i><br>${i.desc}</p>`).join('')}

      ${data.skills.length ? `<div class="sec">${t.skill}</div>` : ''}
      <ul>${data.skills.map(s => `<li>${s.name} (${s.level}/5)</li>`).join('')}</ul>
    </body></html>`;

  const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `CV-${data.fullName}.doc`;
  link.click();
}

updateUI();
