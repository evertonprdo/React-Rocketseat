import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

type AvatarProps = {
   hasBorder?: boolean
   src: string
   alt?: string
} & ImgHTMLAttributes<HTMLImageElement>

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
   return (
      <img
         className={hasBorder ? styles.avatarWithBorder : styles.avatar}
         {...rest}
      />
   )
}
