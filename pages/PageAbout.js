import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'About';
        this.page = 'about';
    }

    main() {
        return `<main>ABOUT PAGE CONTENT</main>`;
    }
}

export { PageAbout };