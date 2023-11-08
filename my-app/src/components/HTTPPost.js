import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apiResponse: null
        }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello World!',
                body: 'It works!',
                userId: 123,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }
    // This function takes two parameters, url we want to post to , and object contaning data we are sending, Every server will have data structured in different ways
    render() {
        const { apiResponse } = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    apiResponse
                        ? (<div>
                            <h1>{apiResponse.title}</h1>
                            <p>post id: {apiResponse.id}</p>
                            <p>{apiResponse.body}</p>
                            <p>user id: {apiResponse.userId}</p>
                        </div>)
                        : (<p>Please click the button above</p>)
                }
            </div>
        )
    }
}

export default HTTPPost