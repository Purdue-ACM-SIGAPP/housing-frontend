import { useAuth0 } from "react-native-auth0";
import { Button } from "react-native";


const LoginButton = ({ setUser }) => {
  const {authorize, user, getCredentials} = useAuth0();

  const onPress = async () => {
      try {
          await authorize();
          const credentials = await getCredentials()
          setUser({ token: credentials?.accessToken, user });
      } catch (e) {
          console.log(e);
      }
  };

  return <Button onPress={onPress} title="Log in" />
}

export default LoginButton