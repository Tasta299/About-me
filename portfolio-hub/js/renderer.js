const Renderer = {
    renderHero: function (profile) {
        const container = document.getElementById('hero-container');
        if (!container || !profile) return;

        const contactsHtml = profile.contacts ? profile.contacts.map(c => `
            <a href="${c.link}" class="contact-link" target="_blank">
                <i class="${c.icon}"></i> ${c.value}
            </a>
        `).join('') : '';

        const avatarHtml = profile.avatar ? `<img src="${profile.avatar}" alt="${profile.name}" class="hero-avatar">` : '';

        container.innerHTML = `
            ${avatarHtml}
            <div class="hero-text">
                <h1>${profile.name}</h1>
                <p style="font-size: 1.5rem; color: var(--secondary-color); font-weight: 500; margin-bottom: 16px;">${profile.target_position}</p>
                <p style="font-size: 1.2rem; margin-bottom: 32px; max-width: 600px;">${profile.tagline}</p>
                <div class="contact-links">
                    ${contactsHtml}
                </div>
            </div>
        `;
    },

    renderAbout: function (introducing) {
        const container = document.getElementById('about-container');
        if (!container || !introducing) return;

        // Convert newlines to <br> for HTML rendering
        const formattedText = introducing.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
        container.innerHTML = `<p>${formattedText}</p>`;
    },

    renderGoals: function (goals) {
        const container = document.getElementById('goals-container');
        if (!container || !goals) return;

        const renderGoalBlock = (goal, modifierClass) => {
            const itemsHtml = goal.items.map((item, idx) => `
                <div class="goal-item-card">
                    <div class="goal-item-badge">${idx + 1}</div>
                    <div class="goal-item-period">${item.period}</div>
                    <p class="goal-item-content">${item.content}</p>
                </div>
            `).join('');

            return `
                <div class="goal-block ${modifierClass}">
                    <h3 class="goal-block-title">
                        <i class="${goal.icon}"></i> ${goal.label}
                    </h3>
                    <div class="grid-3">
                        ${itemsHtml}
                    </div>
                </div>
            `;
        };

        container.innerHTML = renderGoalBlock(goals.short_term, 'goal-block--short') + renderGoalBlock(goals.long_term, 'goal-block--long');
    },

    renderSkills: function (skills) {
        const container = document.getElementById('skills-container');
        if (!container || !skills) return;

        // ── Card 1: Kỹ năng chuyên môn ──────────────────────────────
        const hardHtml = skills.hard ? skills.hard.map(group => `
            <div class="skill-group">
                <div class="skill-group-header">
                    <i class="${group.icon}"></i>
                    <span>${group.group}</span>
                </div>
                <div class="skill-group-items">
                    ${group.items.map(item => `
                        <div class="skill-detail-card">
                            <div class="skill-detail-header">
                                <i class="fa-solid fa-check-circle"></i>
                                <span class="skill-detail-name">${item.name}</span>
                            </div>
                            <p class="skill-detail-desc">${item.desc_full || item.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('') : '';

        // ── Card 2: Kỹ năng mềm + Progress Chart ───────────────────
        const softHtml = skills.soft ? skills.soft.map(s => `
            <div class="skill-detail-card soft-skill-item">
                <div class="soft-skill-header" style="margin-bottom: 8px;">
                    <span class="skill-detail-name">${s.name}</span>
                    <span class="soft-skill-level">${s.level}%</span>
                </div>
                <p class="skill-detail-desc" style="margin-bottom: 12px;">${s.desc}</p>
                <div class="skill-bar-track">
                    <div class="skill-bar-fill" data-width="${s.level}%"></div>
                </div>
            </div>
        `).join('') : '';

        container.innerHTML = `
            <div class="skills-card card">
                <h3 class="skills-card-title">
                    <i class="fa-solid fa-briefcase"></i> Kỹ Năng Chuyên Môn
                </h3>
                <div class="skill-groups">
                    ${hardHtml}
                </div>
            </div>
            <div class="skills-card card">
                <h3 class="skills-card-title">
                    <i class="fa-solid fa-users"></i> Kỹ Năng Mềm
                </h3>
                <div class="skill-group-items">
                    ${softHtml}
                </div>
            </div>
        `;

        // Trigger progress bar animation after DOM update
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    if (targetWidth) bar.style.width = targetWidth;
                });
            });
        });
    },

    renderExperience: function (experienceList) {
        const container = document.getElementById('experience-container');
        if (!container || !experienceList) return;

        container.innerHTML = experienceList.map(exp => `
            <div class="timeline-item card">
                <h3>${exp.role} @ ${exp.company}</h3>
                <div class="timeline-meta">${exp.period} | ${exp.industry}</div>
                <div style="margin-top: 16px;">
                    <strong style="color: var(--primary-color);">Nhiệm vụ (Tasks):</strong>
                    <ul class="timeline-tasks">
                        ${exp.tasks.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin-top: 16px;">
                    <strong style="color: var(--primary-color);">Kết quả (Results):</strong>
                    <ul class="timeline-results">
                        ${exp.results.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    },

    renderEducation: function (education, certifications) {
        const container = document.getElementById('education-container');
        if (!container) return;

        const eduHtml = education ? `
            <div class="card edu-card">
                <h3>${education.school}</h3>
                <div class="edu-meta" style="margin-top: 16px;">
                    <span>Chuyên ngành: <strong>${education.major}</strong></span>
                </div>
                <div style="margin-top: 16px;">
                    <p><strong>GPA:</strong> <span style="color: var(--secondary-color); font-weight: 600;">${education.gpa}</span></p>
                    <p><strong>Xếp loại:</strong> ${education.classification}</p>
                </div>
            </div>
        ` : '';

        const certsHtml = certifications ? `
            <div class="card">
                <h3>Chứng Chỉ (Certifications)</h3>
                <div class="cert-list" style="margin-top: 16px;">
                    ${certifications.map(c => `
                        <div class="cert-item">
                            <span><i class="fa-solid fa-certificate" style="color: var(--accent-color); margin-right: 8px;"></i>${c.name}</span>
                            <span style="color: var(--secondary-color);">${c.score}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        container.innerHTML = eduHtml + certsHtml;
    },

    renderProjects: function (projects) {
        const container = document.getElementById('projects-container');
        if (!container || !projects) return;

        const renderList = (data) => {
            if (Array.isArray(data)) {
                return `<ul class="timeline-tasks" style="margin-top: 8px;">${data.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            return ` ${data}`;
        };

        container.innerHTML = projects.map(proj => `
            <div class="card project-card">
                <h3>${proj.name}</h3>
                <p style="color: var(--secondary-color); font-weight: 500; margin-bottom: 16px;">Vai trò: ${proj.role}</p>
                <div style="margin-bottom: 12px;"><strong>Vấn đề:</strong>${renderList(proj.business_problem)}</div>
                <div style="margin-bottom: 12px;"><strong>Giải pháp:</strong>${renderList(proj.solution)}</div>
                <p><strong>Tác động:</strong> ${proj.impact}</p>
                <div class="project-actions" style="margin-top: 24px;">
                    <a href="${proj.node_url}" class="btn btn-primary">
                        Xem Case Study <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }
};
