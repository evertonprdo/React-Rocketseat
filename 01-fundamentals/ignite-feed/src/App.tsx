import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

const posts: PostType[] = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/diego3g.png',
         name: 'Diego Fernandes',
         role: 'CTO @Rocketseat',
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋' },
         {
            type: 'paragraph',
            content:
               'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento Rocketseat. O nome do projeto é DoctorCare 🚀',
         },
         { type: 'link', content: '👉 jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-12-20 20:00:00'),
   },
   {
      id: 2,
      author: {
         avatarUrl: 'https://github.com/maykbrito.png',
         name: 'Mayk Brito',
         role: 'Educador @Rocketseat',
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋' },
         {
            type: 'paragraph',
            content:
               'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento Rocketseat. O nome do projeto é DoctorCare 🚀',
         },
         { type: 'link', content: '👉 jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-12-15 20:00:00'),
   },
]

export function App() {
   return (
      <div>
         <Header />

         <div className={styles.wrapper}>
            <Sidebar />
            <main>
               {posts.map((post) => (
                  <Post
                     key={post.id}
                     post={post}
                  />
               ))}
            </main>
         </div>
      </div>
   )
}
