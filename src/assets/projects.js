const projects = document.getElementById('projects');
const projectsList = document.getElementById('projects-list');

if (projects) {

    const endObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            projects.classList.toggle("dark", entry.isIntersecting)
            document.getElementById('nav').classList.toggle('md:bg-transparent', !entry.isIntersecting)
        })
    }, {
        rootMargin: "-550px"
    });

    endObserver.observe(projectsList);
} else {
    console.error("`projectsList` element not found.");
}