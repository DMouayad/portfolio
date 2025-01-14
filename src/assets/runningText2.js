class ScrollingText {
    constructor(leftSelector, rightSelector, containerSelector) {
        this.leftRow = document.querySelector(leftSelector + " .text-row");
        this.rightRow = document.querySelector(rightSelector + " .text-row");
        this.container = document.querySelector(containerSelector);
        this.animationFrameId = null; // Store the requestAnimationFrame ID
        this.lastScrollTop = window.scrollY; // Store the last scroll position
        this.scrollSpeed = 0; // variable to store scroll speed

        this.scrollTimeout = null; // Add a timeout variable
        this.baseSpeed = 1.3;

        if (!this.leftRow || !this.rightRow || !this.container) {
            console.error("Required elements not found.");
            return;
        }

        this.leftItemWidth = document.querySelector(leftSelector + " .single-services-list")?.offsetWidth || 0;
        this.rightItemWidth = document.querySelector(rightSelector + " .single-services-list")?.offsetWidth || 0;


        this.leftPos = -this.leftItemWidth;
        this.rightPos = 2 * -this.rightItemWidth + window.innerWidth;
        this.interval = null;

        this.cloneElements(leftSelector, this.leftRow);
        this.cloneElements(rightSelector, this.rightRow);
        this.setInitialPositions();

        window.addEventListener("scroll", this.handleScroll.bind(this));
        this.handleScroll();
    }

    cloneElements(selector, target) {
        const original = document.querySelector(selector + " .single-services-list");
        if (original) {
            target.append(original.cloneNode(true), original.cloneNode(true));
        } else {
            console.error("No element found for cloning: " + selector + " .single-services-list")
        }
    }

    setInitialPositions() {
        this.leftRow.style.transform = `translateX(${this.leftPos}px)`;
        this.rightRow.style.transform = `translateX(${this.rightPos}px)`;
    }


    startAnimation() {

        if (this.animationFrameId) return;

        this.leftRow.style.transition = "none";
        this.rightRow.style.transition = "none";

        let baseSpeed = 1.1; // Adjust this value to control the speed

        const animate = () => {
            let speedMultiplier = baseSpeed + Math.abs(this.scrollSpeed) * 0.3; // Adjust the 0.1 for sensitivity
            // Limit the speed multiplier to a maximum value
            speedMultiplier = Math.min(speedMultiplier, 3); // Example maximum speed multiplier of 3


            this.leftPos = (this.leftPos < -2 * this.leftItemWidth) ? -this.leftItemWidth : this.leftPos - speedMultiplier;
            this.rightPos = (this.rightPos > window.innerWidth + this.rightItemWidth) ? 2 * -this.rightItemWidth + window.innerWidth : this.rightPos + speedMultiplier;

            this.leftRow.style.transform = `translateX(${this.leftPos}px)`;
            this.rightRow.style.transform = `translateX(${this.rightPos}px)`;

            this.animationFrameId = requestAnimationFrame(animate);
        };

        this.animationFrameId = requestAnimationFrame(animate);
    }

    stopAnimation() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
            this.scrollSpeed = 0; // Reset scroll speed when animation stops
        }
    }

    handleScroll() {
        if (!this.container) return;

        const currentScrollTop = window.scrollY;
        this.scrollSpeed = currentScrollTop - this.lastScrollTop;
        this.lastScrollTop = currentScrollTop;

        // Clear the old timeout
        clearTimeout(this.scrollTimeout);

        // Set a new timeout
        this.scrollTimeout = setTimeout(() => {
            this.scrollSpeed = 0; // Reset scroll speed after timeout
        }, 100); // Adjust the timeout duration (milliseconds) as needed

        const rect = this.container.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            this.startAnimation();
        } else {
            this.stopAnimation();
        }
    }
}

// Initialize the scrolling text instances
new ScrollingText(".text-running-way-left", ".text-running-way-right", ".text-running-way-sec");