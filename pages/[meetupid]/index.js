import MeetupDetails from '../../components/meetups/MeetupDetails';
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>MeetUp | {props.meetUpData.title}</title>
        <meta name='description' content={props.meetUpData.description} />
      </Head>
      <MeetupDetails
        image={props.meetUpData.image}
        title={props.meetUpData.title}
        address={props.meetUpData.address}
        description={props.meetUpData.description}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_DB);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context) => {
  const meetUpId = context.params.meetupid;

  const client = await MongoClient.connect(process.env.MONGO_DB);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetUpId),
  });

  client.close();

  return {
    props: {
      meetUpData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default index;
