import "./campoTexto.css"

export const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label className="label-texto">{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificada} className="input-texto"/>
        </div>
    )
}