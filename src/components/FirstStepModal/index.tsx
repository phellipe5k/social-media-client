import * as S from './style';
import FirstStepModalTypes from './types';
import { useTheme } from 'styled-components';
import { Button } from 'web3-components';
import { FadeScale } from 'styles/animations';

const FirstStepModal = ({ title = 'FirstStepModal' }: FirstStepModalTypes) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Image src="assets/social-illustration.png" />
      <S.Title>Find new Friends With Cringe</S.Title>
      <S.Subtitle>
        With Cringe then you will find new friends from other countries and
        regions throughout the region
      </S.Subtitle> 
      <Button.Default
        futurist={false}
        glow={theme.palette.primary.main}
        color={theme.palette.primary.main}>
        Get Started
      </Button.Default>
    </S.Container>
  );
}

export default FirstStepModal;
