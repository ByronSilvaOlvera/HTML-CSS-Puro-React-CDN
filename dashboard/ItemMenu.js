

class ItemMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu : 'Compra',
            
        }
    }

   

    render(){
        return(
            <div className="menu-box xyz-in">  
                <div className="menu-box-2">
                    <div  >
                        <span class="material-icons">{this.props.icon}</span>                  
                    </div>
                </div> 
                <div className="menu-box-1 " >
                    <h2> { this.props.menu }</h2>                 
                </div>              
            </div>
        )
    }
}

class ItemMenuIcon extends React.Component{
    render(){
        return(
            <div className="menu-box xyz-in">  
                <div className="menu-box-2">
                    <div  >
                        <span class="material-icons">shopping_cart</span>                  
                    </div>
                </div>                          
            </div>
        )
    }
}

