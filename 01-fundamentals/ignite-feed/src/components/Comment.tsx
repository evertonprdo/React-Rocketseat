import { useState } from 'react'
import { ThumbsUp, Trash } from '@phosphor-icons/react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'

type CommentProps = {
   content: string
   onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
   const [likeCount, setLikeCount] = useState(0)

   function handleDeleteComment() {
      onDeleteComment(content)
   }

   function handleLikeComment() {
      setLikeCount(likeCount + 1)
   }

   return (
      <div className={styles.comment}>
         <Avatar
            hasBorder={false}
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

                  <button
                     title="Deletar comentário"
                     onClick={handleDeleteComment}
                  >
                     <Trash size={20} />
                  </button>
               </header>

               <p>{content}</p>
            </div>
            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp size={24} />
                  Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   )
}
