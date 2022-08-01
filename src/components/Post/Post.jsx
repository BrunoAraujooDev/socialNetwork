import Avatar from '../Avatar/Avatar';
import Comments from './Comments/Comments';
import Poststyle from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

const Post = ({author, publishedAt, content}) => {

    const [comments, setComments] = useState(['post daora'])
    const [newComment, setNewComment] = useState('');

    const dateTitle = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})

    const publishedDate = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const handleComment = () => {
        event.preventDefault();

        setComments([...comments, newComment]);
        setNewComment('');

    }

    const handleInvalidComemnt = () => {
        event.target.setCustomValidity("O campo é obrigatório!");
    }


    const handleNewComment = () => {

        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    const deleteComment = (comment) =>{

        const commentListWithoutDeletedone = comments.filter(item => item !== comment);

        setComments(commentListWithoutDeletedone)
    }

    return (
        <article className={Poststyle.post}>
            <header>
                <div className={Poststyle.author}>
                    <Avatar source={author.avatarUrl} />
                    <div className={Poststyle.infoAuthor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time tittle={dateTitle} dateTime={publishedAt.toISOString()}>Publicado {publishedDate}</time>
            </header>

            <div className={Poststyle.content}>
                {content.map((parag, i) => {
                    if(parag.type === "paragraph"){
                        return <p key={i}>{parag.content}</p>
                    } else if (parag.type === "link"){
                        return <p key={i}><a href="#">{parag.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleComment} className={Poststyle.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' name="texto" onChange={handleNewComment} value={newComment} onInvalid={handleInvalidComemnt} required> 

                </textarea>

                <footer>
                    <button type='submit' disabled={newComment.length === 0}>Comentar</button> 
                </footer>

            </form>

            <div className={Poststyle.commentList}>
                {comments.map(comment => {
                    return (
                        <Comments  key={comment} comment={comment} onDeleteComment={deleteComment}/>
                    )
                })}
            </div>
        </article>
    )
}

export default Post;