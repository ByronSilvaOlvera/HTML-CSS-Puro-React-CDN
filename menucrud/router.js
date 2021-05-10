
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;


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


const RutasMenu = () => (
    <ReactRouterDOM.HashRouter>
         <div class="nav-opciones">

            <div class="nav-header" >
                <h2>CRUD</h2>
                <span class="material-icons-sharp">
                    dashboard_customize
                </span>
            </div>

                <div class="nav-op-add" id="nav-op-add-id" >
            <Link to="/add">
                    <span class="material-icons-sharp">
                        view_list
                    </span>
            </Link>
                </div>

            <Link to="/edit">
                <div class="nav-op-add" >
                    <span class="material-icons">
                        add_circle_outline
                    </span>
                </div>
            </Link>

            <div class="nav-op-add" >
                <span class="material-icons-sharp">
                    drive_file_rename_outline
                    </span>
            </div>

            <div class="nav-op-add" >
                <span class="material-icons-sharp">
                    get_app
                    </span>
            </div>

            <div class="nav-op-add" >
                <span class="material-icons-sharp">
                    delete_outline
                    </span>
            </div>

        </div>

        <Route path="/add" exact component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/get" component={Get} />
       

    </ReactRouterDOM.HashRouter>
) 




// class Rutas extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             Link : ReactRouterDOM.Link,
//             Route : ReactRouterDOM.Route
//         }
       
//     }

//     render(){
//         return(            
           
//             <div>
//               <ul>
//                 <li><Link to="/add">Home</Link></li>
//                 <li><Link to="/edit">Login</Link></li>
//                 <li><Link to="/get">Register</Link></li>
//               </ul>
//               <hr />
//                 <Route path="/add" exact component={Add} />
//                 <Route path="/edit" component={Edit} />
//                 <Route path="/get" component={Get} />
//             </div>
//         )

//     }
// }