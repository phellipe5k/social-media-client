import * as S from './style';
import BottomBarTypes from './types';
import { FadeScale } from 'styles/animations';
import { Icons as I } from 'components/@shared';
const BottomBar = ({ title = 'BottomBar' }: BottomBarTypes) => (
  <S.Container
    initial="hidden"
    animate="visible"
    variants={FadeScale}
    transition={FadeScale.transition}>
    <S.Title data-cy="bottombar"><I.ProfileIcon /></S.Title>
  </S.Container>
);

export default BottomBar;
