

class ItemMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu : 'Compra', 
            estado : true,
            idnum : 'material-icons icon-menu-'+this.props.idnum,
            divStyle :{
                color: 'write',
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {    
        this.setState(state => ({      
           estado : !state.estado
        }));

        //this.state.estado ? console.log('encima') : console.log('sali');  
        this.state.divStyle =  !this.state.estado 
            ? {} 
            : { color : 'rgb(255, 255, 255)' } ;
    }
    

    render(){
        return(
            <div className="menu-box xyz-in">  
                <div className="menu-box-2" >
                    <div  >
                        <span className='material-icons'  style={this.state.divStyle} >
                            {this.props.icon}</span>                  
                    </div>
                </div> 
                <div className="menu-box-1 " 
                    onMouseEnter={this.handleClick}
                    onMouseLeave={this.handleClick} >
                    <h2> { this.props.menu }</h2>                 
                    <div className='linea-menu-item' ></div>          
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

