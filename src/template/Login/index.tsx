import * as S from './style';
import FirstStepModal from 'components/FirstStepModal';
import { useTheme } from 'styled-components';
import Input from 'components/Input';
import { Button } from 'web3-components';

const Login = () => {
  const theme = useTheme();
  const isFirstView = false;
  return isFirstView ? <FirstStepModal />
	: (
		<S.Container>
			<S.Title>Login</S.Title>
			<S.Image src="assets/login.png" />
			<Input onChange={(value) => console.log('VALUE EMAIL: ', value)} label="E-mail" />
			<Input type="password" onChange={(value) => console.log('VALUE PASS: ', value)} label="Password" />
			<Button.Default
        futurist={false}
        glow={theme.palette.primary.contrastText}
        color={theme.palette.common.black}
				width={'120px'}
				style={{ marginTop: theme.spacings.outside.medium }}
				border={theme.palette.primary.main}>
        Login
      </Button.Default>
			
			<Button.Transparent
        futurist={false}
				color={theme.palette.lighter.main}
				border={theme.palette.lighter.contrastText}
				glow={theme.palette.lighter.contrastText}
				width={'70%'}
				style={{ margin: theme.spacings.outside.xsmall }}
				>
        Create an account
      </Button.Transparent>
		</S.Container>
	)
};

export default Login;
