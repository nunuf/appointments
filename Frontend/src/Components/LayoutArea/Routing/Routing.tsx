import { Navigate, Route, Routes } from 'react-router-dom';
import Add from '../../DataArea/Add/Add';
import List from '../../DataArea/List/List';
import Home from '../../HomeArea/Home/Home';
import PageNotFound from '../PageNotFound/PageNotFound';

import './Routing.css';

const Routing: React.FC = (): JSX.Element => {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
