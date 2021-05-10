
const Link = ReactRouterDOM.Link;


const NavLateral = () =>(
    <div class="nav-lateral-izq">
        <div class="nav-menu" >
            <div class="nav-header" >
                <h2>CRUD</h2>
                <span class="material-icons-sharp">
                    dashboard_customize
                </span>
            </div>
            <div class="nav-opciones">

                <div class="nav-op-add" id="nav-op-add-id" >
                    <Link to="/list">
                        <span class="material-icons-sharp">
                            view_list
                        </span>
                    </Link>
                </div>

                <div class="nav-op-add" >
                    <Link to="/add">
                        <span class="material-icons">
                            add_circle_outline
                        </span>
                    </Link>
                </div>

                <div class="nav-op-add" >
                    <Link to="/edit">
                        <span class="material-icons-sharp">
                            drive_file_rename_outline
                        </span>
                    </Link>
                </div>

                <div class="nav-op-add" >
                    <Link to="/get">
                        <span class="material-icons-sharp">
                            get_app
                        </span>
                    </Link>
                </div>

                <div class="nav-op-add" >
                    <Link to="/delete">
                        <span class="material-icons-sharp">
                            delete_outline
                        </span>
                    </Link>
                </div>

            </div> 
        
        </div>
    </div>
)