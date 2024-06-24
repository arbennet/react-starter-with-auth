import { withAuthenticationRequired } from "@auth0/auth0-react";

interface AuthenticationGuardProps {
  component: React.ComponentType;
}

export const AuthenticationGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <p>I'm working on it dammit</p>
      </div>
    ),
  });

  return <Component />;
};