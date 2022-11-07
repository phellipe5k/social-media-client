import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${theme.palette.common.white};
    padding: ${theme.spacings.inside.huge};
    background-color: ${theme.palette.common.black};
    overflow-y: hidden;
  `}
`;

export const Title = styled(motion.h1)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    width: 70%;
    text-align: center;
    padding: ${theme.spacings.inside.huge};
  `}
`;

export const Subtitle = styled(motion.h5)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.palette.lighter.main};
    margin: ${theme.spacings.outside.xxsmall};
    text-align: center;
    margin-bottom: 30px;
  `}
`;

export const Image = styled(motion.img)`
  height: 50%;
`;
