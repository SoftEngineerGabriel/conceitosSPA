export class Router{

    routes = {};
    add(routName, page){
        this.routes[routName] = page;
    }

    route(event){
        event = event || window.event;
        event.preventDefault();
    
        window.history.pushState({}, "", event.target.href) // vai pegar o histórico do evento que foi removido com a função preventDefault();
    
        this.handle();
    }
    
    handle(){
        const {pathname} = window.location; // a função handle tem a finalidade de registrar (ou "manipular" de forma muito básica) o caminho da URL atual no console do navegador.
        const route = this.routes[pathname] || this.routes[404];
        
        fetch(route)
        .then(data => data.text()
        .then(html=> {document.querySelector('#app').innerHTML = html}))
    
    }

}