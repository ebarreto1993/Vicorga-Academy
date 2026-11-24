const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = __dirname;
const template = fs.readFileSync(path.join(root, 'curso.html'), 'utf8');
const carreras = vm.runInNewContext(fs.readFileSync(path.join(root, 'js/datos-carreras.js'), 'utf8') + '; carreras');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const [key, carrera] of Object.entries(carreras)) {
    const title = escape(`${carrera.nombre} | Vicorga Academy`);
    const description = escape(carrera.descripcion);
    let html = template.replace('<html lang="es">', `<html lang="es" data-carrera="${key}">`);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    for (const name of ['description', 'og:description', 'twitter:description']) {
        const attribute = name.startsWith('og:') ? 'property' : 'name';
        html = html.replace(new RegExp(`<meta ${attribute}="${name}" content="[^"]*">`), `<meta ${attribute}="${name}" content="${description}">`);
    }
    for (const name of ['og:title', 'twitter:title']) {
        const attribute = name.startsWith('og:') ? 'property' : 'name';
        html = html.replace(new RegExp(`<meta ${attribute}="${name}" content="[^"]*">`), `<meta ${attribute}="${name}" content="${title}">`);
    }
    fs.writeFileSync(path.join(root, `carrera-${key}.html`), html);
}
