import "./ListaSuspensa.css"

export const ListaSuspensa = (props) =>{
    return (
        <div>
            <label className="label-texto">{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value} className="input-texto">
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}