import "./ListaSuspensa.css"

export const ListaSuspensa = (props) =>{
    return(
        <div>
            <label className="label-texto">{props.label}</label>
            <select required={props.obrigatorio} className="input-texto">
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>   
    )
}