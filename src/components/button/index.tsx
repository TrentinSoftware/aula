'use client'

import { useState } from "react"

export function ButtonsChange() {
    const [nome, setNome] = useState("Desenvolvedor")
    const[idade, setIdade] = useState<number>(0)

    const handleChangeName = () => {
        setNome("Guilherme Trentin");
    };

    const handleChangeIdade = () => {
        setIdade(19)
    }

    return (
        <div>
            <button onClick={handleChangeName}>
                Alterar o nome
            </button>
            <br />
            <h3>Nome: {nome}</h3>
            <br />
            <button onClick={handleChangeIdade}>
                Apresentar Idade do programador
            </button><br />
            <h3>Idade Programador: {idade}</h3>
        </div>
    )
 }
