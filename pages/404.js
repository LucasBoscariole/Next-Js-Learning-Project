import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Fragment>
      <Head>
        <title>React Meetups | 404 ERROR</title>
      </Head>
      <main className='error'>
        <h1>The page that you are looking for doesn't exist</h1>
        <br />
        <Link hrfe='/'>Back Home</Link>
      </main>
    </Fragment>
  );
}
