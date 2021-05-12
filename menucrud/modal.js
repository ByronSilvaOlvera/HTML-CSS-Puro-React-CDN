

const Modal = props => { 
    
    if(!props.show){
        return null;
    }
    return(
        <div className="modal" >
            <div className="modal-body">
                Body
            </div>
        </div>
    )
}