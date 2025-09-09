import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/posts`)
            .then(res => res.json())
            .then(data => {
                setPost(data.posts);
            })
    }, []);
    return (
        <>
            <ul>
                {posts.map(item => (
                    <li key={item.id}>
                        <Link to={"/blog/" + item.id}>
                            {item.title}
                        </Link>
                    </li>

                ))}
            </ul>
        </>
    )
}
export default BlogAll;