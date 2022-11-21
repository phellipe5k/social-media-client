import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
    ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${theme.palette.secondary.main};
    `}
`;
