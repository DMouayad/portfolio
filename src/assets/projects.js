// function changeBg(scrollPortfolio, end) {
//     const scrollTop = window.scrollY || document.documentElement.scrollTop; // Cross-browser scroll position
//     const windowHeight = window.innerHeight;
//     console.log(scrollPortfolio)
//     if (scrollTop - 100 >= scrollPortfolio.offsetTop && scrollTop + windowHeight / 3 <= end.offsetTop) {
//         projects.classList.add("dark");
//     } else if (scrollTop + windowHeight / 3 >= end.offsetTop) {
//         projects.classList.remove("dark");
//     } else if (scrollTop - 500 <= scrollPortfolio.offsetTop) {
//         projects.classList.remove("dark");
//     }
// }

// const projects = document.getElementById('projects');
// const projectsEnd = document.getElementById('projects-end');

// if (projects && projectsEnd) { // Check if elements exist
//     window.addEventListener('scroll', function () {
//         changeBg(projects, projectsEnd);
//     });

// } else {
//     console.error("Portfolio or Pricing section not found. Ensure elements with IDs 'portfolio' and 'pricing' exist.");
// }

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