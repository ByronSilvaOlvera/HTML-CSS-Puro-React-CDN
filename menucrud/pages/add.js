

class Add extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {show: false};       
        this.mostrarModal = this.mostrarModal.bind(this); 
    }

    mostrarModal(){
        this.setState(state => ({      
            show: !state.show    
        })) 
    }

    render(){

        return(
            <div>
            <TituloPage titulo='Agregar una entidad' 
                    opcion='Entidad/agregar' icon='add_circle_outline' />     
            <FormEntidad />       
            </div>
        );
    }
}