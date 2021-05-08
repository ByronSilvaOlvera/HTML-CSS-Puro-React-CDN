

class Titulo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu : 'Compra',
            
        }
    }

    render(){
        return(
            <div className="titulo-box xyz-in">  
                <div className="titulo-box-1" id="titulo-nombre" >
                    <h2> { this.props.titulo }</h2>                 
                </div>              
                <div className="titulo-box-2">
                    <div id="titulo-icono" >
                        <span class="material-icons">dashboard</span>                    
                    </div>
                </div> 
            </div>
        )
    }
}

class TituloIcon extends React.Component{

    render(){
        return(
            <div className="titulo-box xyz-in">  
                          
                <div className="titulo-box-2">
                    <div id="titulo-icono" >
                        <span class="material-icons">dashboard</span>                    
                    </div>
                </div> 
            </div>
        )
    }
}


