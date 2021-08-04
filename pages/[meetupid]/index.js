import MeetupDetails from '../../components/meetups/MeetupDetails';

const index = (props) => {
  return (
    <MeetupDetails
      image={props.meetUpData.image}
      title={props.meetUpData.title}
      address={props.meetUpData.address}
      description={props.meetUpData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: '1',
        },
      },
      {
        params: {
          meetupid: '2',
        },
      },
      {
        params: {
          meetupid: '3',
        },
      },
    ],
  };
}

export const getStaticProps = async (context) => {
  const meetUpId = context.params.meetupid;

  return {
    props: {
      meetUpData: {
        image:
          'https://images.unsplash.com/photo-1627840935425-3d333bb627f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        id: meetUpId,
        title: 'First meetup',
        address: 'Some Street 123',
        description: 'Lorem ipsum',
      },
    },
  };
};

export default index;
