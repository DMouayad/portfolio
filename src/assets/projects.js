
let projects = document.getElementById("projects");
let sectionObserver;
const changeBackgroundColorIfElementOnScreen = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            projects?.classList.add("dark");
        } else {
            projects?.classList.remove("dark");
        }
    });
};
function initSectionIntersectionObserver() {
    if (!projects) {
        return;
    }

    const options = {
        root: null,
        rootMargin: `-${window.innerHeight / 2}px 0px -${window.innerHeight / 2}px 0px`,

        threshold: 0,
    };

    sectionObserver = new IntersectionObserver(
        changeBackgroundColorIfElementOnScreen,
        options,
    );

    sectionObserver.observe(projects);
}
if (
    typeof document.readyState === "string" &&
    document.readyState === "complete"
) {
    initSectionIntersectionObserver();
} else {
    document.addEventListener(
        "DOMContentLoaded",
        initSectionIntersectionObserver,
        true,
    );
}
