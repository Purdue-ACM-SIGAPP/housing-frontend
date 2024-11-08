import { Button } from 'react-native';

import { useAuth0 } from 'react-native-auth0';

const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
      try {
          const { accessToken, expiresAt, tokenType } = await authorize(parameters={audience:"http://localhost:5128"});
          console.log(accessToken, expiresAt, tokenType)
      } catch (e) {
          console.log(e);
      }
  };

  return <Button onPress={onPress} title="Log in" />
}

export default LoginButton