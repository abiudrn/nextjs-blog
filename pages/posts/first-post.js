import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link className={styles.title} href="/">
          Back to Home!
        </Link>
      </h2>

      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
}
