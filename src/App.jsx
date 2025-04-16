import { Header } from './components/Header.jsx';
import { Post } from './Post.jsx';

import './global.css'; // escoped CSS

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, saepe! Quia, eaque deleniti obcaecati, sunt vero quibusdam delectus iure laborum sapiente totam doloribus autem reprehenderit suscipit temporibus corporis ullam nemo!"
      />
      <Post
        author="Mayk Brito"
        content="Novo Post"
      />
    </div>
  )
}

