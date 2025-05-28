import "./campoTexto.css"

export const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
    const allDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }
    return(
        <div className="campo-texto">
            <label className="label-texto">{props.label}</label>
            <input value={props.valor} onChange={allDigitado} required={props.obrigatorio} placeholder={placeholderModificada} className="input-texto"/>
        </div>
    )
}