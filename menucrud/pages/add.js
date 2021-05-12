

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
                <form>
                    <div class="input-field col s4">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="titulo" type="text" class="validate" />
                        <label for="titulo">Titulo</label>
                    </div>
                    <div class="input-field col s4">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="descripcion" type="text" class="validate" />
                        <label for="descripcion">Descripcion</label>
                    </div>
                    <div class="input-field col s4">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="estado" type="text" class="validate" />
                        <label for="estado">Estado</label>
                    </div>
                    <div class="input-field col s4">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="fechaoff" type="text" class="datepicker" />
                        <label for="fechaoff">Fecha Culmina</label>
                    </div>

                    <button class="btn waves-effect waves-light btn-large" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>

                </form>
                    <button class="btn waves-effect waves-light btn-large" 
                    type="submit" name="action" 
                         onclick={this.mostrarModal} >
                        Modal
                        <i class="material-icons right">send</i>
                    </button>
                    <Modal show={this.state.show} />
            </div>
        );
    }
}