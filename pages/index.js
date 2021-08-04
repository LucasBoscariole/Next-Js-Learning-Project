import MeetupList from '../components/meetups/MeetUpList';

const DATA = [
  {
    id: '1',
    title: 'First',
    image:
      'https://images.unsplash.com/photo-1627840935425-3d333bb627f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    address: 'Strees some street',
    description: 'Hi there.',
  },
  {
    id: '1',
    title: 'First',
    image:
      'https://images.unsplash.com/photo-1627840935425-3d333bb627f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    address: 'Strees some street',
    description: 'Hi there.',
  },
  {
    id: '1',
    title: 'First',
    image:
      'https://images.unsplash.com/photo-1627840935425-3d333bb627f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    address: 'Strees some street',
    description: 'Hi there.',
  },
];

const index = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps() {
//   return {
//     props: {}
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DATA,
    },
    // revalidate: 10
  };
}

export default index;
