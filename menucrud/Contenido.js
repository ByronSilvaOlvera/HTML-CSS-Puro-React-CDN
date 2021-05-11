const Route = ReactRouterDOM.Route;

const Contenido = () =>(
    <div className="nav-lateral-der">
        <Route path="/add" exact component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/get" component={Get} />    
        <Route path="/delete" component={Delete} />    
        <Route path="/list" component={List} />    
    </div>
)