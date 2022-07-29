import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import Avatar from "../../Avatar/Avatar";
import style from './Comments.module.css';


const Comments = () => {
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

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Adorei seu novo portfólio Devon!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default Comments;