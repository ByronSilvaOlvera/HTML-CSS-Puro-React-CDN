

class TituloPage extends React.Component{ 

    render(){
        return(
            <div className="titulo-contenido" >
                <div className="titulo-name" >
                    <h4>{ this.props.titulo}</h4> 
                </div>
                <div className='titulo-ruta' s>
                    <h7>{ this.props.opcion }</h7>
                </div>
            </div>
        )
    }
}