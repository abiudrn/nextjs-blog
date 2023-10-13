import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>First Post</title>
        </Head>
        <main>
          <h2 className={styles.title}>
            First Post <Link href="/">Back to home</Link>
          </h2>
        </main>
      </div>
    </Layout>
  );
}
