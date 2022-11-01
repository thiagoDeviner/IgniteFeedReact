import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Thiago Vieira"
            content="lorem ipsum dolor sit amet consectetur adipisicing elit."
          /></main>
      </div>


    </div>
  )
}