import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

/**
 * This is a higher order component that allows auth-0 to access the
 * react browser router.  This allows it to redirect based on application
 * history
 * 
 * https://developer.auth0.com/resources/guides/spa/react/basic-authentication
 */
export const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderWithNavigateProps) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};