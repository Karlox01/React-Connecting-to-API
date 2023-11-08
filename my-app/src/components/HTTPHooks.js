import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null);
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello World!',
                body: 'It works!',
                userId: 123,
            }
        ).then(response => {
            setPostMessage(response.status === 201
                ? `Success! Title: ${response.data.title}`
                : 'Failed'
                )
        })
}

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/82')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data)
                ? response.data
                : [response.data]
            setPosts(data);
            // This essentially says if the data comes as array, posts will equal response.data, If response.data is not an array (i.e., it's not an array but a single data object), it wraps response.data in an array by using square brackets. This ensures that posts is always an array, even if there's only one data item.
        })
        .catch(error => {
            setError(error.message);
        })
}, [])
return (
    <div>
        <button onClick={postToApi}>
            Create Post
        </button>
        <p>
            {postMessage}
        </p>
        <h2>
            Posts:
        </h2>
        {
            posts.length ? (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.id}. {post.title}</h2>
                        <h4>By user ID {post.userId}</h4>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            ) : (
                error
                    ? <p>{error}</p>
                    : <h4>Loading Posts ... </h4>
            )
        }
        {/* <ul>
                {this.state.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
    </div >
)
}

export default HTTPHooks