class AgentItem extends HTMLElement {
    set agent(agent) {
        this._agent = agent;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col role ${this._agent.role.displayName}">
            <div class="card bg-dark text-white text-center" id="agent-card">
                <img src="${this._agent.fullPortrait}" class="card-img-top ms-auto me-auto" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${this._agent.displayName}</h3>
                    <p class="card-text">${this._agent.description}</p>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("agent-item", AgentItem);