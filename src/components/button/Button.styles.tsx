import {css} from '@emotion/react';
import styled from '@emotion/styled';

const SmallButton = css`
  display:inline-block;
`;

const ExtendedButton = css`
  width: 100%;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 8px;
  padding: 12px;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`;

const PrimaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:active {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;

const SecondaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  &:active {
    background-color: ${({ theme }) => theme.colors.gray2};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray3};
  }
`;

const TertiaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  &:active {
    background-color: ${({ theme }) => theme.colors.gray2};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray3};
  }
`;

export { SmallButton, ExtendedButton, PrimaryButton, SecondaryButton, TertiaryButton};