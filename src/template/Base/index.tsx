import BottomBar from 'components/BottomBar';
import * as S from './style';

const Base = ({ children }: { children: any }) => {
  return <S.Container>
    <span>Header</span>
    <div>{children}</div>
    <BottomBar />
  </S.Container>
};

export default Base;
