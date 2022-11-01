import styles from '../styles/dmCard.module.css'
import Image from 'next/image' 
import { useRouter } from 'next/router'
import React from 'react'

const DmCard = ({ name, status, avatar, id }) => {
  const router = useRouter()

  const changeUrl = () => {
    router.push(`?conversation=${id}&name=${name}`)
  }

  return (
    <div className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          src={avatar}
          alt={name}
          className={styles.dmAvatar}
          width={48}
          height={48}
        />
        <div className={styles.dmCardStatus} id={status} />
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </div>
  )
}

export default DmCard