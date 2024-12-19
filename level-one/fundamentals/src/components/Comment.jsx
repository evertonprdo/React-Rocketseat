import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
   return (
      <div className={styles.comment}>
         <img
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=50&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         />
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Diego Fernandes</strong>
                     <time
                        title="11 de Maio ás 8:13h"
                        dateTime="2022-05-11 08:13:00"
                     >
                        Cerca de 1h atrás
                     </time>
                  </div>

                  <button title="Deletar comentário">
                     <Trash size={20} />
                  </button>
               </header>

               <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer>
               <button>
                  <ThumbsUp size={24} />
                  Aplaudir <span>20</span>
               </button>
            </footer>
         </div>
      </div>
   )
}
