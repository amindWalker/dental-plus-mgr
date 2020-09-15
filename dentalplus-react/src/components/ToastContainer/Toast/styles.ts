import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #67a7eb;
    color: whitesmoke;
  `,
  success: css`
    background: #1ed76f;
    color: #2e6560;
  `,
  error: css`
    background: #fdded0;
    color: #c53030;
  `,
};
export const Container = styled(animated.div)<ContainerProps>`
  width: 330px;
  height: auto;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  display: flex;

  & + div {
    margin-top: 10px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
