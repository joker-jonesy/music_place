const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (artists) => layout(html`
    <h3>Artists</h3>

    <ul>
        ${artists.map(art => html`
            <li>
                <a href="/artists/${art.id}">${art.name}</a>
            </li>`)}
    </ul>

`);
