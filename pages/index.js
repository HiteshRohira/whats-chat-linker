import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [phoneNo, setPhoneNo] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Whats Chat Linker</title>
        <meta name="description" content="Open whatsapp chats with a no. without saving it as a contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Whatsapp Chat Linker
        </h1>

        <p className={styles.description}>
          Enter the phone number you want to chat with on Whatsapp
        </p>

        <p className={styles.sub_description}>
          {`Make sure to add country code without any symbols. For eg. the mobile number is 9621740111 and the country code is +91(for India) so you'll have to enter "919621740111"`}
        </p>

        <input className={styles.phone_input} type="text" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />

        <a className={styles.chat_btn} href={`https://api.whatsapp.com/send?phone=${phoneNo}`} target="_blank" rel="noopener noreferrer">Open Chat</a>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
