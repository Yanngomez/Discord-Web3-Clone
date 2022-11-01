import React from 'react' 
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/roomAvatar.module.css'

const RoomAvatar = ({ id, avatar, name}) => {
    const router = useRouter()

    const changeUrl = () => {
        router.push(`?channel=${id}&name=${name}`)
    }

  return (
    <div className={styles.wrapper} onClick={changeUrl}>
        <div className={styles.roomAvatar}>
            <Image
                src={avatar}
                alt={name}
                className={styles.roomAvatarImage}
                width={48}
                height={48}
            />
        </div>
    </div>
  )
}

export default RoomAvatar