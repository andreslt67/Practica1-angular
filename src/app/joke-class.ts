export class Joke {
    public setup: String;
    public punchline: String;
    public hide: boolean;

    constructor(setup: String, punchline: String) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}
