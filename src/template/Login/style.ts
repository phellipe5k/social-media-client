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

export const Title = styled(motion.h2)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xmedium};
    margin-bottom: ${theme.spacings.outside.medium};
  `}
`;

export const Image = styled(motion.img)`
  ${({ theme }) => css`
    width: 70%;
  `}
`;