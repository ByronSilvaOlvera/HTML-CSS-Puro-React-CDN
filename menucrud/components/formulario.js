

class FormEntidad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titulo : '',
            descripcion : '',
            estado : '',
            fechaoff : '',
            highlighted :'',
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleChange(event) {
        
        //let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
        let value = event.target.value;   
        //this.setState({ [event.target.name]: value });  
        this.setState(state => ({      
            [event.target.name] : value
         }));
    }

    handleSubmit(event) {

        event.preventDefault();
    }

    render(){
        return(
            <div className="form-contenido" >
            <form onSubmit={this.handleSubmit} >
                <div class="input-field col s4">
                    <i class="material-icons prefix">title</i>
                    <input id="titulo" type="text" class="validate" 
                      onChange={this.handleChange} 
                      value={this.state.titulo} name='titulo'/>
                    <label for="titulo">Titulo</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons-two-tone prefix">description</i>
                    <input id="descripcion" type="text" class="validate" 
                      onChange={this.handleChange} 
                      value={this.state.descripcion} name='descripcion'/>
                    <label for="descripcion">Descripcion</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons prefix">filter_alt</i>
                    <input id="estado" type="text" class="validate" 
                      onChange={this.handleChange} 
                      value={this.state.estado} name='estado'/>
                    <label for="estado">Estado</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons prefix">calendar_today</i>
                    <input id="fechaoff" type="date" class="" 
                      onChange={this.handleChange} 
                      value={this.state.fechaoff} name='fechaoff'/>
                    <label for="fechaoff">Fecha Culmina</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons prefix">comment</i>
                    <input id="comentario" type="text" class="" 
                      onChange={this.handleChange} 
                      value={this.state.highlighted} name='highlighted'/>
                    <label for="comentario">Comentario</label>
                </div>

                <div>
                    <button class="btn waves-effect waves-light btn-large" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>

            </form>                    
            </div>
        )
    }
}