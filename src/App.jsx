import { Header } from "./components/Header/Header";
import Post from "./components/Post/Post";
import './global.css';
import styles from './App.module.css';
import {Sidebar} from "./components/Sidebar/Sidebar";


function App() {

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Bruno Araujo"
            content="lorem ipsum bla bla machau elter"
          />

        </main>
      </div>

    </div>
  )
}

export default App
