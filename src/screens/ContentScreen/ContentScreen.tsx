import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getContent } from '../../infrastructure/requestService';
import { useAuthContext } from '../../infrastructure/context';
import './style.css';

function ContentScreen() {
  const [kittyImg, setKittyImg] = useState(undefined);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) getContent().then((res) => setKittyImg(res.data.src));
  }, [isAuth]);

  return (
    <>
      {!isAuth && <Navigate to="/login" replace={true} />}
      <div className="pageLayout wrapper flex_col">
        <h1 className="title">Ok, here's your cat!</h1>
        {kittyImg && <img src={kittyImg} alt="kitty" className="kitty" loading="lazy" />}
      </div>
    </>
  );
}

export default ContentScreen;
