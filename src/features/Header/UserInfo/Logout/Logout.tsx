import { getLogoutServer } from '../../../../infrastructure/requestService';
import { useAuthContext } from '../../../../infrastructure/context';

function Logout() {
  const { setIsAuth } = useAuthContext();

  const handleLogout = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const res = await getLogoutServer();

    if (res.status === 'OK!') {
      setIsAuth(false);
    }
  };

  return (
    <span className="link" onClick={handleLogout}>
      Logout
    </span>
  );
}

export default Logout;
