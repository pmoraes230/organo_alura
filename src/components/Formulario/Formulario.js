import "./Formulario.css"
import CampoTexto from "../campoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export const Formulario = () => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log(`submetido => ${nome}, ${cargo}, ${imagem}, ${time}`);
    }

    return (
        <section className="formulario">
            <form className="form_dados" onSubmit={aoSalvar}>
                <h2 className="title_main">Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" value={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" value={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" value={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} value={time}  aoAlterado={valor => setTime(valor)}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}