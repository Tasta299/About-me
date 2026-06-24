document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    if (data) {
        const hubData = Parser.getHubData(data);
        if (hubData) {
            Renderer.renderHero(hubData.profile);
            Renderer.renderAbout(hubData.profile.introducing);
            Renderer.renderGoals(hubData.goals);
            Renderer.renderSkills(hubData.skills);
            Renderer.renderExperience(hubData.experience);
            Renderer.renderEducation(hubData.education, hubData.certifications);
            Renderer.renderProjects(hubData.featured_projects);
        }
    } else {
        console.error("Failed to load data for Hub.");
    }

    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.card, .goal-block, .goal-item-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.hub-header nav a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
