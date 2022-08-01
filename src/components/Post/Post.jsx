import Avatar from '../Avatar/Avatar';
import Comments from './Comments/Comments';
import Poststyle from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

const Post = ({author, publishedAt, content}) => {

    const dateTitle = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})

    const publishedDate = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const dateTime = format(publishedAt, "yyyy", {locale: ptBr})

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
                {content.map(parag => {
                    if(parag.type === "paragraph"){
                        return <p>{parag.content}</p>
                    } else if (parag.type === "link"){
                        return <p><a href="#">{parag.content}</a></p>
                    }
                })}
                {/* <p>Fala pessoal 👋</p>   
                <p>Finalmente finalizei meu novo site/portfólio. 
                    Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻
                </p>
                <p> <a href=""> 👉 devonlane.design</a></p>
                <p><a href="">#uiux #userexperience</a></p>          */}
            </div>

            <form className={Poststyle.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'>

                </textarea>

                <footer>
                    <button type='submit'>Comentar</button> 
                </footer>

            </form>

            <div className={Poststyle.commentList}>
                <Comments></Comments>
                <Comments></Comments>
                <Comments></Comments>
            </div>
        </article>
    )
}

export default Post;