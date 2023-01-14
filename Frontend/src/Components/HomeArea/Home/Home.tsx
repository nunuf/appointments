import MeetingRoom from '../../../Assets/Images/meeting-room.jpg';

import './Home.css';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="Home">
      <h2>Manage development appointments by a click of a button</h2>
      <img src={MeetingRoom} alt='' />
    </div>
  );
};

export default Home;
