class LadoDerecho extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           photo : {
            albumId : '',
            id: '',
            title: '',
            url: '',
            thumbnailUrl: ''
          },
          usuario : []
        }
    }

    componentDidMount() { 
        fetch('https://jsonplaceholder.typicode.com/photos?id=20')
        .then(
            response => response.json()
        )
        .then(
            json => {
                //console.log(json);
                this.setState(state => ({      
                    photo : json[0]
                }));
                //console.log(this.state.photo);
            }
        )

        fetch('https://reqres.in/api/users?page=2')
        .then(
            response => response.json()
        )
        .then(
            json => {
                //console.log(json);
                this.setState(state => ({      
                    usuario : json['data'][0]
                }));
                console.log(this.state.usuario);
                console.log(this.state.usuario[0]);
            }
        )
     }

    render(){
        return(
        
            <div className="lado-derecho">
                <p>Hola como estas</p>
                <ListaFotos listafoto={this.state.photo} />
                <ListaUsers users={this.state.usuario} />
            </div>
        
        )
    }
}

class ListaFotos extends React.Component{

    render(){
        return(
            <div>
                <h2>Album</h2>
                <p>{this.props.listafoto.albumId}</p>
                <p>{this.props.listafoto.title}</p>
                <img src={this.props.listafoto.url} 
                alt={this.props.listafoto.thumbnailUrl} width="100" height="100" />
            </div>
        );
    }



}

class ListaUsers extends React.Component{
    render(){
        return(
            <div>
                <h2>Usuarios</h2>
                <p>{this.props.users.email}</p>
                <p>{this.props.users.first_name}</p>
                <p>{this.props.users.last_name}</p>
                <img src={this.props.users.avatar} width='100px' height='100px' />
            </div>
        )
    }
}