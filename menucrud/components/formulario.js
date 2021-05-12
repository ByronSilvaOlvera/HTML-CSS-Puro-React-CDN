

class FormEntidad extends React.Component{

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