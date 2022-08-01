import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import Avatar from "../../Avatar/Avatar";
import style from './Comments.module.css';


const Comments = ({comment, onDeleteComment}) => {

    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(comment)
    }

    const handleLikeComment = () => {
        setLikeCount((likes) => {
            return likes + 1
        })
    }


    return (
        <section className={style.comment}>
            <Avatar isBordered={false} source="https://github.com/maykbrito.png"/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.author}>
                            <strong>Bruno Araujo</strong>
                            <time tittle='28 de julho às 15:06' dateTime='2022-07-28 15:06:30'>Cerca de 1h</time>
                        </div>

                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default Comments;