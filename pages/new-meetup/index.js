import NewMeetUpForm from '../../components/meetups/NewMeetUpForm';

const index = () => {
  const addMeetUpHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />;
};

export default index;
