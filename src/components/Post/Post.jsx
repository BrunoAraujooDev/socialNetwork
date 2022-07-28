import Poststyle from './Post.module.css';

const Post = () => {
    return (
        <article className={Poststyle.post}>
            <header>
                <div className={Poststyle.author}>
                    <img className={Poststyle.avatar} src="https://github.com/Raiannecaroline.png" alt="Imagem de perfil do autor" />
                    <div className={Poststyle.infoAuthor}>
                        <strong>Raianne Caroline</strong>
                        <span>Info</span>
                    </div>
                </div>
                <time tittle='28 de julho às 15:06' dateTime='2022-07-28 15:06:30'>Publicado há 1h</time>
            </header>

            <div className={Poststyle.content}>
                <p>Fala pessoal 👋</p>   
                <p>Finalmente finalizei meu novo site/portfólio. 
                    Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻
                </p>
                <p> <a href="">  Acesse e deixe seu feedback 👉 devonlane.design</a></p>
                <p><a href="">#uiux #userexperience</a></p>         
            </div>
        </article>
    )
}

export default Post;