

class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tamanio : true,
            cierreopen : 'openMenu' 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {    
        this.setState(state => ({      
            tamanio: !state.tamanio,
            cierreopen : state.cierreopen == 'closeMenu' ? 'openMenu' : 'closeMenu'
        }));  
    }

    render(){      
        let m = this.state.cierreopen + ' lado-izquierdo ';
        if(this.state.tamanio){
            return(
                <div onClick={this.handleClick} xyz="fade-25% left-1" className={m}>
                    <MenuData />
                </div>
                
            )
        }else{
            return (
                <div onClick={this.handleClick} xyz="up-25%" className={m} >
                    <MenuIcono />
                </div> 
            )
        }
    }
}

class MenuData extends React.Component{
    render(){
        return(
        
            <div>
                <div>
                    <Titulo titulo={'Dashboard'} />
                </div>
                
                    <div xyz="fade-25% left-1" >
                        <ItemMenu menu='Compras' icon='shopping_cart'  />
                        <ItemMenu menu='Almacenes' icon='sd_storage' />
                        <ItemMenu menu='Favorito'  icon='favorite'/>
                        <ItemMenu menu='Tarjeta' icon='credit_card' />
                    </div>
                
            </div>
        
        )
    }
}


class MenuIcono extends React.Component{
    render(){
        return(
        
            <div>
                <div>
                    <TituloIcon  />
                </div>
                
                    <div xyz="up-25%" >
                        <ItemMenuIcon menu='Compras'  />
                        <ItemMenuIcon menu='Inicio' />
                        <ItemMenuIcon menu='Inicio' />
                        <ItemMenuIcon menu='Inicio' />
                    </div>
                
            </div>
        
        )
    }
}






