import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to='/'>Home</Link>
      <p>Page not found <br/><br/>{JSON.stringify(props, null, 2)}</p>
    </div>
  );
};

export default NotFoundPage;