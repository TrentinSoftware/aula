import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Aula Next JS do zero!",
  description: "Aprendendo Next JS",
  openGraph:{
    title: "Aprendendo do ZERO NextJS",
    description: "Serve para mostrar uma pré visualização para o usuário antes de acessar o Link"
  }
}


export default function Home(){
  return (
    <div>
      <h1>HOME PAGE GUILHERME</h1>
    </div>
  )
}