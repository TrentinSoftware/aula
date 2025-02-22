import { title } from "process";

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
    
    console.log(data);

    return(
        <div>
            <h1>Todos os posts</h1>

            <div>
                {data.posts.map(post => (
                   <div key={post.id}>
                    <h2>{post.title}</h2>
                   </div>
                ))}
            </div>
        </div>
    )
}