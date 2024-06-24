import axios from "axios";
import TemporaryDrawer from "../component/Drawer"
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { LogoutButton } from "../component/button/LogoutButton";



const Home = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getApiData = async () => {
        const token = await getAccessTokenSilently();
        console.log("Got the token: ", token)
        const data = await axios.get('http://localhost:3000', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        return data
    };

    useEffect(() => {
      getApiData()
    }, [])
  
    return (
        <>
            <TemporaryDrawer/>
            <LogoutButton/>
        </>
    )
}

export {
    Home
}