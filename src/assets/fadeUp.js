class FadeUpAnimator {
    constructor() {
        this.fadeBoxes = document.querySelectorAll(".fade-up-box");

        this.setInitialDelays();
        this.initScrollHandler();
        this.handleScroll();
    }

    setInitialDelays() {

        this.fadeBoxes.forEach((box) => {
            const items = box.querySelectorAll(".fade-up-item");

            items.forEach((item, index) => {
                if (item.classList.contains("fade-up-delay-none")) {
                    return
                }
                item.style.transitionDelay =
                    (index / 3.5).toFixed(2) + "s";
            });
        });
    }

    initScrollHandler() {
        window.addEventListener(
            "scroll",
            this.handleScroll.bind(this),
            { passive: true },
        );
    }

    handleScroll() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const triggerPoint = 3 * (windowHeight / 4);

        this.handleElements(
            this.fadeBoxes,
            scrollTop,
            triggerPoint,
            windowHeight,
        );
    }

    handleElements(
        elements,
        scrollTop,
        triggerPoint,
        windowHeight,
        specificSelector,
    ) {
        elements.forEach((element) => {
            const elementTop = element.offsetTop;
            console.log(element)
            if (
                !element.classList.contains("show") &&
                scrollTop + triggerPoint >= elementTop
            ) {
                element.classList.remove("no-duration");
                element.classList.add("show");

                if (specificSelector) {
                    const items = element.querySelectorAll(
                        specificSelector + " .fade-up-item",
                    );
                    items.forEach(
                        (item) => (item.style.transition = ""),
                    );
                }
            } else if (
                element.classList.contains("show") &&
                scrollTop + windowHeight <= elementTop
            ) {
                element.classList.add("no-duration");
                element.classList.remove("show");
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new FadeUpAnimator();
});