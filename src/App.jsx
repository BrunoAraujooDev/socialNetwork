import { Header } from "./components/Header/Header";
import Post from "./components/Post/Post";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar/Sidebar";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/omariosouto.png",
      name: 'Mario Souto',
      role: 'UX Designer Sênior'
    },
    publishetAt: new Date('2022-08-01 10:00:00'),
    content: [
      { type: 'paragraph', content: ' Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio.' },
      { type: 'paragraph', content: 'Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Dev Front-end Pleno.'
    },
    publishetAt: new Date('2022-07-31 10:00:00'),
    content: [
      { type: 'paragraph', content: ' Salve Galera 👋' },
      { type: 'paragraph', content: 'Da uma olhada nesse post maneiro que fiz.' },
      { type: 'paragraph', content: 'Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', }
    ]
  }
]

function App() {

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post, i) => {
              return <Post
                key={i}
                author={post.author}
                content={post.content}
                publishedAt={post.publishetAt}
              />
            })}
        </main>
      </div>

    </div>
  )
}

export default App
