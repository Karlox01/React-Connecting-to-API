import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: null
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/00000')
            .then(response => {
                this.setState({
                    posts: Array.isArray(response.data)
                    ? response.data
                    : [response.data]
                    // This essentially says if the data comes as array, posts will equal response.data, If response.data is not an array (i.e., it's not an array but a single data object), it wraps response.data in an array by using square brackets. This ensures that posts is always an array, even if there's only one data item.
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }
    render() {
        const posts = this.state.posts
        return (
            <div>
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
                    ): (
                            this.state.error
                            ? <p>{this.state.error}</p>
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
}

export default HTTPRequests