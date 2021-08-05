import MeetupList from '../components/meetups/MeetUpList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='React Meetup List made by Lucas Boscariole'
        />
        ;
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {}
//   }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_DB);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetUps = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetUps.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default index;
