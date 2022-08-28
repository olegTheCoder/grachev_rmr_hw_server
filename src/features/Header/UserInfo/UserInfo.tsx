import { useEffect, useState } from 'react';
import { getUser } from '../../../infrastructure/requestService';
import Logout from './Logout/Logout';
import './style.css';

function UserInfo() {
  const [name, setName] = useState('');

  useEffect(() => {
    getUser().then((res) => setName(res.data.name));
  }, []);

  return (
    <>
      <div className="linksBlock">
        <span className="nameBlock">Hello, {name}!</span>
        <Logout />
      </div>
    </>
  );
}

export default UserInfo;
