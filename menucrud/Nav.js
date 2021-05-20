
// const dataMenu = ()=>  (
//     [
//         {icono : 'view_list'},
//         {icono : 'add_circle_outline'},
//         {icono : 'drive_file_rename_outline'}, 
//         {icono : 'get_app'},
//         {icono : 'delete_outline'},
//     ]
//)



class NavLateral extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Link : ReactRouterDOM.Link,
            estado : true,
            divStyle : {
                color: 'write',
            },
            dataMenu : [
                {icono : 'view_list',to:'/list'},
                {icono : 'add_circle_outline',to:'/add'},
                {icono : 'drive_file_rename_outline',to:'/edit'}, 
                {icono : 'get_app',to:'/get'},
                {icono : 'delete_outline',to:'/delete'},
            ]
        }
        this.handleHover = this.handleHover.bind(this);
    }
    
    handleHover() {    
        this.setState(state => ({      
            estado : !state.estado
         }));
         this.state.divStyle =  !this.state.estado 
             ? {} 
             : { color : 'rgb(255, 255, 255)' } ;
        console.log('estado');
    }

    render(){
        return (
            <div className="nav-lateral-izq">
                <div className="nav-menu" >
                    <div className="nav-header" >
                        <h2>CRUD</h2>
                        <span className="material-icons-sharp">
                            dashboard_customize
                        </span>
                    </div>
                    <div className="nav-opciones">
                        {

                        this.state.dataMenu.map(
                            el => <NavOpcion icono={el.icono} to={el.to} />
                        )

                        }
                    
                    </div> 
                
                </div>
            </div>
        )
    }
}

class NavOpcion extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Link : ReactRouterDOM.Link,
            estado : true,
            divStyle : {
                color: 'write',
            }
        }
        this.handleHover = this.handleHover.bind(this);
    }
    
    handleHover() {    
        this.setState(state => ({      
            estado : !state.estado
         }));
         this.state.divStyle =  !this.state.estado 
             ? {} 
             : { color : 'rgb(255, 255, 255)' } ;
        
    }

    render(){
        return (
            <div className="nav-op-add" 
                onMouseEnter={ this.handleHover } 
                onMouseLeave={ this.handleHover } >
                <Link to={this.props.to}>
                    <span className="material-icons-sharp" style={ this.state.divStyle} >
                        {this.props.icono}
                    </span>
                </Link>
            </div>        
        )
    }
    
}