import Head from 'next/head';
import { Fragment } from 'react';
import NewMeetUpForm from '../../components/meetups/NewMeetUpForm';

const index = () => {
  const addMeetUpHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    router.push('/');
  };
  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta name='description' content='Add a new React MeetUp' />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};

export default index;
