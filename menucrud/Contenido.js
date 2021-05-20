const Route = ReactRouterDOM.Route;

const Contenido = () =>(
    <div className="nav-lateral-der">
        <div className="header-contenido" >
            <div className="item-name">
                <span>
                    Desarollo Web React CDN 
                </span>
            </div>
            <div className="grid-item item-log-in-out">
                <div>
                    <span>Log-In</span>
                    <span class="material-icons">login</span>
                </div>
                <div>
                    <span>Log-out</span>
                    <span class="material-icons">logout</span>
                </div>
            </div>
        </div>

        <Route path="/add" exact component={Add} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/get" exact component={Get} />    
        <Route path="/delete" component={Delete} />    
        <Route path="/list" component={List} />    
    
    </div>
)