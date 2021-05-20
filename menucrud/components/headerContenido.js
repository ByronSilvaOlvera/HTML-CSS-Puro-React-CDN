

class TituloPage extends React.Component{ 

    render(){
        return(
            <div className="titulo-contenido" >
                <div className="titulo-name" >
                    <span class="material-icons">{ this.props.icon}</span>
                    <h4>{ this.props.titulo}</h4> 
                </div>
                <div className='titulo-ruta' s>
                    <span class="material-icons">check</span>
                    <h7>{ this.props.opcion }</h7>
                </div>
            </div>
        )
    }
}