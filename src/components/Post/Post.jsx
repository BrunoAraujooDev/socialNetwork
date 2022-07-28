import Comments from './Comments/Comments';
import Poststyle from './Post.module.css';

const Post = () => {
    return (
        <article className={Poststyle.post}>
            <header>
                <div className={Poststyle.author}>
                    <img className={Poststyle.avatar} src="https://github.com/omariosouto.png" alt="Imagem de perfil do autor" />
                    <div className={Poststyle.infoAuthor}>
                        <strong>Mario Souto</strong>
                        <span>Dev Front-end Sênior</span>
                    </div>
                </div>
                <time tittle='28 de julho às 15:06' dateTime='2022-07-28 15:06:30'>Publicado há 1h</time>
            </header>

            <div className={Poststyle.content}>
                <p>Fala pessoal 👋</p>   
                <p>Finalmente finalizei meu novo site/portfólio. 
                    Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻
                </p>
                <p> <a href=""> 👉 devonlane.design</a></p>
                <p><a href="">#uiux #userexperience</a></p>         
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