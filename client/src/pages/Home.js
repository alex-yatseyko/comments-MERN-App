import React, { useEffect, useState } from 'react'
import { Comment } from '../components/Comment'
import avatars from '../components/avatars';
import { CommentInput } from '../components/CommentInput';



export const Home = () => {    
    const [comments, setComments] = useState([])

    // const url = 'http://localhost:5000/api/comments/read';
    const shortUrl = '/api/comments/read';


    const callApi = async () => {
        const response = await fetch(shortUrl);
        const body = await response.json();
        console.log(body)
        setComments(body)
        if (response.status !== 200) throw Error(body.message);
        
        return body;
      };

    const onRemove = id => {
        setComments(
            comments.map(
                c => id === c._id ? {} : c
            )
        )
    }

    const onLike = (id) => {
        setComments(
            comments.map(
                c => {
                    if(id === c._id) {
                        c.likes = c.likes + 1
                        return {...c}
                    } 
                    return {...c}
                }
            )
        )
    }

    const onDislike = (id) => {
        setComments(
            comments.map(
                c => {
                    if(id === c._id) {
                        c.dislikes = c.dislikes + 1
                        return {...c}
                    } 
                    return {...c}
                }
            )
        )
    }

    const onEdit = (id) => {
        
    }

    useEffect(() => {
        callApi()
    }, [])

    return (
        <div className="container">
            <h1 className="text-center">Comments App</h1>
            {comments ? comments.map(c => <Comment 
                key={Math.floor(Math.random() * 9999)} 
                id={c._id} 
                ava={avatars[Math.floor(Math.random() * 8)]}
                text={c.text}
                name={c.name}
                likes={c.likes}
                dislikes={c.dislikes}
                date={c.date}
                onRemove={onRemove}
                onLike={onLike}
                onDislike={onDislike}
                // onEdit={onEdit}
            />) : ''}
            {/* {avatars.map(m => <img alt="avatar" key={uuid.v4()} src={m} />)} */}
            {/* <Comment ava={avatars[0]}/>
            <Comment ava={avatars[4]}/>
            <Comment ava={avatars[3]}/> */}
            
            {/* <CommentInput /> */}

            {/* <a className="waves-effect waves-light btn-large"><i className="material-icons left">comment</i>Add comment</a> */}
        </div>
    )
}
