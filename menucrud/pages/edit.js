

class Edit extends React.Component{ 
    render(){
        return(
            <div>
                <TituloPage titulo='Editar una entidad' 
                opcion='Entidad/editar' icon="drive_file_rename_outline" /> 
                <FormEntidad />    
            </div>
        )
    }
}