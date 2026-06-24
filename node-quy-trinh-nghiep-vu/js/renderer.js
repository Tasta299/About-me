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
                <div class="section-block">
                    <h2>1. Bài toán (Problem & Challenges)</h2>
                    <p>${nodeData.problem}</p>
                    ${nodeData.challenges && nodeData.challenges.length ? `
                        <h3>Thách thức</h3>
                        <ul class="challenges-list">
                            ${nodeData.challenges.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    ` : ''}
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
                <div class="section-block">
                    <h2>2. Phân tích (Analysis)</h2>
                    ${renderContent(nodeData.analysis)}
                </div>
            `;

            html += `
                <div class="section-block">
                    <h2>3. Giải pháp (Solution)</h2>
                    ${renderContent(nodeData.solution)}
                </div>
            `;

            html += `
                <div class="section-block">
                    <h2>4. Kết quả & Tác động (Business Impact)</h2>
                    ${renderContent(nodeData.impact)}
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
