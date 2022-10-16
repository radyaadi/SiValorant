class HomePage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="home-page">
            <nav class="nav navbar-dark justify-content-center">
                <a class="nav-link" href="#agents">Agent</a>
                <a class="nav-link" href="#weapons">Weapons</a>
                <a class="nav-link" href="#maps">Maps</a>
            </nav>
            <div class="brand">
                <div class="logo">
                    <h1 id="name">Si<span>VALORANT</span></h1>
                    <p id="description">Are you new on Valorant ? If you don't know anything about Valorant, lets check out our page!</p>
                </div>
            </div>
        </div>`;
    }
}

customElements.define('home-page', HomePage);