import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';

import './global.css'; // escoped CSS

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
          />
          <Post
            author="Pedro"
            content="Teste"
          />
        </main>
      </div>
    </div>
  )
}

