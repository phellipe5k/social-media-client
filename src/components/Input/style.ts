import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.label)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    position: relative;
    color: ${theme.palette.primary.main};
    padding-top: ${theme.spacings.outside.medium};
  `}
`;

export const Label = styled(motion.p)`
  ${({ theme, isSelected }) => css`
    font-size: ${ theme.font.sizes.small};
    position: absolute;
    top: 45px;
    left:  ${ theme.spacings.inside.huge } ;
    color: ${ theme.palette.secondary.contrastText };
    transition: ${ theme.transition.fast };
    ${ isSelected && css`
        color: ${ theme.palette.primary.main };
        top: 8px;
        left: 5px;
    ` }
  `}
`;

export const Input = styled(motion.input)`
  ${({ theme, isSelected }) => css`
    width: 100%;
    height: 45px;
    background: transparent;
    border: 2px solid ${ theme.palette.secondary.contrastText };
    border-radius: ${theme.borderRadius};
    padding-left: ${ theme.spacings.inside.huge };
    color: ${theme.palette.common.white};
    outline: none;

    ${ isSelected && css`
      border-color: ${theme.palette.primary.contrastText};
    ` }
    &:focus {
      border-color: ${theme.palette.primary.main};
    }
  `}
`;
