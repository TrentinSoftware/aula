'use client'

import { useEffect, useState } from "react"
import { ButtonsChange } from "../../components/button";


export default function PostsClientSide() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data.posts));
    }, []);
    

    return (
        <div>
            <div>
                <h1 className="text-center mt-5 nb-2 font-bold text-3x1"> Posts in Client Side</h1>
            </div>

            <ButtonsChange></ButtonsChange>

            <div className="flex flex-col gap-4 mx-2">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}

            </div>
        </div>
    )
     
}