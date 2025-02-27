import { title } from "process";
import { ButtonsChange } from "../../components/button";

interface PostProps{
    id: number;
    title: string;
    body: string;
    userId: number;
}


interface ResponseProps{
    posts: PostProps[]
}

export default async function PostsPage() {
    
    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()

    async function functTestConsoleServer() {
        'use server'
        
        console.log('CLICOUUUUUUU!!! BOTÃO SERVER SIDE')
        console.log(data);
    }

    async function handleSearchUsers(formData: FormData) {
        'use server'
        
        console.log('Clicou no Submitt!!')
        const userId = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
        const data: ResponseProps = await response.json()

        console.log(data)
    }

    return(
        <div>
            <h1 className="text-center mt-5 nb-2 font-bold text-3x1">Todos os posts</h1>

            <form
            className="flex gap-2 my-4"
            action={handleSearchUsers}>
                <input
                type="text"
                placeholder="ID do usuário"
                className="border border-gray-200 p-2"
                name="userId"
                />
                <button
                className="bg-blue-500 text-white p-2"
                type="submit">Buscar Usuário</button>
            </form>

            <ButtonsChange></ButtonsChange>

            <button onClick={functTestConsoleServer}>Log no Server Side</button>
            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                   <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                    <h2 className="font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                   </div>
                ))}
            </div>
        </div>
    )
}