
class List extends React.Component{ 

    constructor() {
        super();
        this.state = { data: [] };
      }
    
    async componentDidMount() { 
        try {

            const response = await fetch('http://127.0.0.1:7000/tarea/');
            const json = await response.json();
        
            this.setState(state => ({      
                data : json.results
            }));
        
        } catch (error) {
            console.error(error);
        }

    }


    render(){
        return(
            <div>
                <TituloPage titulo='Listado de la entidad' opcion='Entidad/listado' />
                <div className="lista-box">
                    <ul>
                    {
                        this.state.data.map( el => 
                            <li>
                                Titulo: {el.titulo}. Descripcion: {el.descripcion}. Estado: {el.estado}
                            </li>    
                        )
                    }
                    </ul>
                </div>
            </div>



        )
    }
}