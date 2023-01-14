import { NavLink } from 'react-router-dom';
import { Undo } from '@mui/icons-material';
import NotFound from '../../../Assets/Images/404.jpg';

import './PageNotFound.css';

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <div className="PageNotFound">
      <div>The page you are looking for does not exist</div>
      <div>404</div>
      <img src={NotFound} alt='' />
      <div>
        <NavLink to="/home" className="Back">Back Home<Undo /></NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
