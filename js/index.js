const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
}

function route(event){
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href) // vai pegar o histórico do evento que foi removido com a função preventDefault();

    handle();
}

function handle(){
    const {pathname} = window.location; // a função handle tem a finalidade de registrar (ou "manipular" de forma muito básica) o caminho da URL atual no console do navegador.
    const route = routes[pathname] || routes[404];
    
    fetch(route)
    .then(data => data.text()
    .then(html=> {document.querySelector('#app').innerHTML = html}
    ))

}

handle();

window.onpopstate = () => handle();
window.route = () => route();