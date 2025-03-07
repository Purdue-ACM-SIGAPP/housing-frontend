import { Button } from "react-native";
import { useAuth0 } from "react-native-auth0";

const LogoutButton = ({ setUser }) => {
  const {clearSession} = useAuth0();

  const onPress = async () => {
      try {
          await clearSession();
          setUser(null)
      } catch (e) {
          console.log(e);
      }
  };

  return <Button onPress={onPress} title="Log out" />
}

export default LogoutButton