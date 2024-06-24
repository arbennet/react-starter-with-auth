import '../App.css'

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect({
    appState: {
      returnTo: "/home"
    }
  })}>Log In</button>;
};

function Login() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <LoginButton/>
  );

}

export default Login
