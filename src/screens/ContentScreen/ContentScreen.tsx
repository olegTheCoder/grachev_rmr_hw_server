import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContent } from "../../infrastructure/requestService";
import { useAuthContext } from "../../infrastructure/context";
import "./style.css";

function ContentScreen() {
  const [kittyImg, setKittyImg] = useState(undefined);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    getContent().then((res) => setKittyImg(res.data.src));
  }, []);

  return (
    <>
      {!isAuth && <Navigate to="/login" replace={true} />}
      <div className="wrapper flex_col">
        <div>Ok, here's your cat!</div>
        {kittyImg && <img src={kittyImg} alt="kitty" className="kitty" />}
      </div>
    </>
  );
}

export default ContentScreen;
