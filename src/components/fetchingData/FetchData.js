import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1);

    const handleClick = () => {
        setIdFromButton(id);
    };

    // useEffect(() => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then((res) => {
    //             console.log(res);
    //             setPost(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // }, [id]);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch((err) => console.log(err));
    }, [idFromButton]);

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button type="button" onClick={handleClick}>
                Fetch
            </button>
            <div>{post.title}</div>
        </div>
    );
}

export default FetchData;
