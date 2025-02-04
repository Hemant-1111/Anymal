import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';
import PropTypes from "prop-types";

const ProtectedRoute = ({ element }) => {
    const user = useSelector(selectUser);

    
  return user.id === null ? element : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
