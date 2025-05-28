import "./Formulario.css"
import CampoTexto from "../campoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao";

export const Formulario = () => {
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
        console.log('submetido');
    }

    return (
        <section className="formulario">
            <form className="form_dados" onSubmit={aoSalvar}>
                <h2 className="title_main">Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}