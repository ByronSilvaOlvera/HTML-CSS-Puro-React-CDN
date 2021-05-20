

class FormEntidad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titulo : '',
            descripcion : '',
            estado : '',
            fechaoff : '',
            highlighted :'',
            owner_id :2,
            tipo: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.state.tipo = true;
    }

    handleChange(event) {
        
        //let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;   
        let value = event.target.value;   
        //this.setState({ [event.target.name]: value });  
        this.setState(state => ({      
            [event.target.name] : value
         }));
    }

    async handleSubmit(event) {
        const Redirect = ReactRouterDOM.Redirect;
        console.log(this.state);
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Basic admin by123456");
        //const data = { this.state.tipo , ...this.state }
        const response = await fetch('http://127.0.0.1:7000/tarea/', 
         { 
            method : 'POST' ,
            body : JSON.stringify(this.state),
            headers : myHeaders
        });


        if(response.status == 401 ){
            this.msg('Error',response.statusText + " no esta identificado.",'error')
            return <Redirect to="/get" />
        }else if(response.status == 500 ){
            this.msg('Error Conexion',response.statusText + " server.",'error')
        
        }else{
            this.msg('Success','Existoso','success')
            return <Redirect to='/edit/' />
        }

        console.log(response);

        // Swal.fire({
        //     title: 'Almacenda',
        //     text: 'Exitosa...!',
        //     icon: 'success',            
        //     allowOutsideClick : false,
        //     timer: 2000,
        //     showConfirmButton :  false,
        // })
    }

    msg(title , text, icon, ){
        Swal.fire({
            title            : title,
            text             : text,
            icon             : icon,            
            allowOutsideClick: false,
            timer            : 3000,
            showConfirmButton :  false,
        })
    }

    render(){
        return(
            <div className="form-contenido"  >
            <form onSubmit={this.handleSubmit}  method="POST"  >
                <div class="input-field col s4">
                    <i class="material-icons prefix">title</i>
                    <input id="titulo" type="text" class="validate" 
                      onChange={this.handleChange} 
                      value={this.state.titulo} name='titulo' required />
                    <label for="titulo">Titulo</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons-two-tone prefix">description</i>
                    <input id="descripcion" type="text" class="validate" 
                      onChange={this.handleChange} 
                      value={this.state.descripcion} name='descripcion' required />
                    <label for="descripcion">Descripcion</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons prefix">filter_alt</i>
                    <input id="estado" type="text" class="validate" 
                      onChange={this.handleChange} 
                      value={this.state.estado} name='estado' required />
                    <label for="estado">Estado</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons prefix">calendar_today</i>
                    <input id="fechaoff" type="date" class="" 
                      onChange={this.handleChange} 
                      value={this.state.fechaoff} name='fechaoff' required />
                    <label for="fechaoff">Fecha Culmina</label>
                </div>
                <div class="input-field col s4">
                    <i class="material-icons prefix">comment</i>
                    <input id="comentario" type="text" class="" 
                      onChange={this.handleChange} 
                      value={this.state.highlighted} name='highlighted' required />
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