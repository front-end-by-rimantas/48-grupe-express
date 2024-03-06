import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate {
    constructor() {
        super();
        this.title = 'About | Pomidoras';
    }

    main() {
        return `<main>ABOUT PAGE CONTENT</main>`;
    }
}

export { PageAbout };