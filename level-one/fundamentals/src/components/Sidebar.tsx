import { PencilSimpleLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
   return (
      <aside className={styles.sidebar}>
         <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         />

         <div className={styles.profile}>
            <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQGtc-BYjfRZZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731770748788?e=1740009600&v=beta&t=mVSSH_9oKrqddbLsnTKl4LHwSvpp4xd6CXG_Ir5p9BA" />

            <strong>Everton Prdo</strong>
            <span>Developer</span>
         </div>

         <footer>
            <a href="#">
               <PencilSimpleLine size={20} />
               Editar seu perfil
            </a>
         </footer>
      </aside>
   )
}
