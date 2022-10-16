import './agent-list.js';
class AgentContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="agents">
            <div class="title">
                <h2 class="title-text">Valo Agents</h2>
                <p>Valorant has 5 roles agent</p>
            </div>
            <div class="btn-agent-role">
                <ul>
                    <li data-li="all" class="btn btn-secondary filter active">All</li>
                    <li data-li="duelist" class="btn btn-secondary filter">Duelist</li>
                    <li data-li="initiator" class="btn btn-secondary filter">Initiator</li>
                    <li data-li="sentinel" class="btn btn-secondary filter">Sentinel</li>
                    <li data-li="controller" class="btn btn-secondary filter">Controller</li>
                </ul>
            </div>
            <div id="agent-list">
                <agent-list></agent-list>
            </div>
        </section>`;
    }
}

customElements.define('agent-content', AgentContent);