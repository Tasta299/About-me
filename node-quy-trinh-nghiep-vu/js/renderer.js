const Renderer = {
    renderNode: function(nodeData, projectName) {
        document.title = `Case Study: ${projectName}`;
        
        const heroContainer = document.getElementById('node-hero-container');
        if (heroContainer) {
            heroContainer.innerHTML = `
                <h1>${projectName}</h1>
                <p>${nodeData.context}</p>
            `;
        }

        const contentContainer = document.getElementById('node-content-container');
        if (contentContainer) {
            let html = '';
            
            html += `
                <div class="card section-block">
                    <h2 class="section-title">1. Nghiên cứu người dùng (User Research)</h2>
                    <div class="grid-2">
                        <div>
                            <h3 style="color: var(--secondary-color); margin-bottom: 12px; font-size: 1.25rem;">Problems</h3>
                            <p>${nodeData.problem}</p>
                        </div>
                        <div>
                            <h3 style="color: var(--secondary-color); margin-bottom: 12px; font-size: 1.25rem;">Challenges</h3>
                            <ul class="challenges-list" style="padding-left: 20px;">
                                ${nodeData.challenges && nodeData.challenges.length ? nodeData.challenges.map(c => `<li style="margin-bottom: 8px; line-height: 1.6;">${c}</li>`).join('') : ''}
                            </ul>
                        </div>
                    </div>
                </div>
            `;

            const renderContent = (data) => {
                if (Array.isArray(data)) {
                    return `<ul class="node-list" style="margin-top: 8px; margin-bottom: 16px; padding-left: 20px;">
                        ${data.map(item => `<li style="margin-bottom: 8px; line-height: 1.6;">${item}</li>`).join('')}
                    </ul>`;
                }
                return `<p>${data}</p>`;
            };

            html += `
                <div class="card section-block">
                    <h2 class="section-title">2. Phân tích (Analysis)</h2>
                    <div>
                        ${renderContent(nodeData.analysis)}
                    </div>
                </div>
            `;

            html += `
                <div class="card section-block">
                    <h2 class="section-title">3. Giải pháp (Solution)</h2>
                    <div>
                        ${renderContent(nodeData.solution)}
                    </div>
                </div>
            `;

            html += `
                <div class="card section-block">
                    <h2 class="section-title">4. Kết quả & Tác động (Business Impact)</h2>
                    <div>
                        ${renderContent(nodeData.impact)}
                    </div>
                </div>
            `;
            
            if (nodeData.skills_demonstrated && nodeData.skills_demonstrated.length) {
                html += `
                    <div class="section-block">
                        <h2>Kỹ năng thể hiện</h2>
                        <ul class="skills-list">
                            ${nodeData.skills_demonstrated.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            contentContainer.innerHTML = html;
        }
    }
};
