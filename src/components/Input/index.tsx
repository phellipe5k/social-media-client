import { useState } from 'react';
import * as S from './style';
import InputTypes from './types';
import { FadeScale } from 'styles/animations';

const Input = ({ label = 'Input', onChange }: InputTypes) => {
  const [toggle, setToggle] = useState(false);

  function handleTyped({ target }: { target: any }) {
   onChange(target.value);
  }

  return (
    <S.Container
      initial="hidden"
      animate="visible"
      variants={FadeScale}
      transition={FadeScale.transition}>
      <S.Label isSelected={toggle}>{label}</S.Label>
      <S.Input
        isSelected={toggle}
        data-cy={`input-${label}`}
        onClick={() => setToggle(true)}
        onBlur={({target}) => target.value.length > 0 ? setToggle(true) : setToggle(false)}
        onChange={ handleTyped }
      />
    </S.Container>
  );
};

export default Input;
