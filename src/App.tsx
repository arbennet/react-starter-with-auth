import './App.css'

import { useAuth0 } from "@auth0/auth0-react";
import TemporaryDrawer from './component/Drawer';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated ? (
      <><TemporaryDrawer /><div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div></>
    ) : <LoginButton/>
  );

}

export default App
