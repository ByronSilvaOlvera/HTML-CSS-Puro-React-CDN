# MENU CRUD

## En Que Consiste
menu lateral con iconos que consiste en list, add, edit, getOne, delete. agregando CDN react y react router. el objetivo poder hacer el crud y funcione los basico con react components y router.

## ROUTER REACT
    const Rutas = () => (
    <ReactRouterDOM.HashRouter>
      <!-- NAV -->
      <ul>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/edit">Edit</Link></li>
        <li><Link to="/get">Get</Link></li>
      </ul>
      <!-- Contenido ruta o Router componente -->
        <Route path="/add" exact component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/get" component={Get} />
      </ReactRouterDOM.HashRouter>
    )

Separe los link con la ruta en componentes diferentes y la ReactRouterDOM la puse en la parte principal para que no genere error.

## Rutas
Se separe link con las <NavLateral/> con rutas <Contenido/> donde estan las rutas del contenido y muestra los componentes dependiendo del link que se elija

    <ReactRouterDOM.HashRouter>
        <NavLateral />
        <Contenido />
    </ReactRouterDOM.HashRouter>,

## SCSS
scss a css 

    sass --watch styles.scss styles.css


https://www.pluralsight.com/guides/using-react-router-with-cdn-links

## Implemente
Hover en react consiste una funcion y se cambia el estado cuando el mouse entra y sale de un componente desde css no deja acer hover tiene que ver mucho la libreria de react. 