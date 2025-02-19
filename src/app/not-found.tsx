export default function NotFoundPage(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">404</h1>
            <h2 className="text-center font-bold mt-9">Não foi possível encontrar a rota que você escolheu</h2>
            <a href="/">Volte a tela inicial</a>
        </div>
    )
}