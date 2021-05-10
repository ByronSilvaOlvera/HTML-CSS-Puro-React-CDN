# MENU CRUD

## En Que Consiste
menu lateral con iconos que consiste en list, add, edit, getOne, delete. agregando CDN react y react router. el objetivo poder hacer el crud y funcione los basico con react components y router.

## ROUTER REACT
    const Rutas = () => (
    <ReactRouterDOM.HashRouter>
      <ul>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/edit">Edit</Link></li>
        <li><Link to="/get">Get</Link></li>
      </ul>

        <Route path="/add" exact component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/get" component={Get} />
      </ReactRouterDOM.HashRouter>
    )


https://www.pluralsight.com/guides/using-react-router-with-cdn-links
