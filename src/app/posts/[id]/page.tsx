export default async function DetailPost({
    params
}: {
    params: { id: string }
}) {
    const { id } = params; // ❌ Removemos o `await` aqui

    const response = await fetch(`https://dummyjson.com/posts/user/${id}`);
    const data: ResponseProps = await response.json();

    return (
        <div>
            <h1>Detalhes do post {id}</h1>
        </div>
    );
}
