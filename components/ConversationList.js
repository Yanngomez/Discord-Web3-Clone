import Image from 'next/image'
import styles from '../styles/conversationList.module.css'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'
import React, { useEffect, useState } from 'react'
import DmCard from './DmCard'


const ConversationList = () => {
    const [dms, setDms] = useState([])

    useEffect(async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getdms`)
    
          setDms(await response.json())
        } catch (error) {
          console.error(error)
        }
    }, [])
  return (
    <div className={styles.conversations}>
        <div className={styles.conversationListTop}>
            <input type='search' placeholder='Find or start of conversation' />
        </div>
        <div className={styles.conversationsContainer}>
            <div className={styles.elementsContainer}>
                <div className={styles.svgContainer}>
                    <Image 
                        src={friends}
                        alt='friends'
                        className={styles.svg}
                        width={25}
                        height={25}
                    />
                </div>
                <p>Friends</p>
            </div>
            <div className={styles.elementsContainer}>
                <div className={styles.svgContainer}>
                    <Image 
                        src={nitro}
                        alt='nitro'
                        className={styles.svg}
                        width={25}
                        height={25}
                    />
                </div>
                <p>Nitro</p>
            </div>
            <div className={styles.dmTitle}>DIRECT MESSAGES</div>
            {dms.map((dm, index) => (
                <DmCard 
                    key={index}
                    id={dm.id}
                    name={dm.name}
                    avatar={
                        dm.avatar || 
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
                    }
                    status='online'
                />
            ))}
        </div>
    </div>
  )
}

export default ConversationList