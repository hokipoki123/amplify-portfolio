import React, { useState, useEffect } from "react";
import axios from "axios";


function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromClick, setIdFromClick] = useState(1)

    const handleClick = () => {
        setIdFromClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromClick])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Find Post</button>
            <p></p>
            <div>Result: {post.title}</div>
            <p></p>
        </div>
    )
}

export default DataFetching