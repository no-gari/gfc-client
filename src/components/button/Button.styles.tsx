import mainTheme from '@/styles/theme';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const SmallButton = css`
  display:inline-block;
`;

const ExtendedButton = css`
  width: 100%;
`;


const PrimaryButton = css`
  background-color: ${mainTheme.colors.primary};
  color: ${mainTheme.colors.white};

  &:active {
    background-color: ${mainTheme.colors.secondary};
  }

  &:disabled {
    background-color: ${mainTheme.colors.gray3};
  }
`;

const SecondaryButton = css`
  background-color: ${mainTheme.colors.black};
  color: ${mainTheme.colors.white};

  &:active {
    background-color: ${mainTheme.colors.gray2};
  }

  &:disabled {
    background-color: ${mainTheme.colors.gray3};
  }
`;

const TertiaryButton = css`
  background-color: ${mainTheme.colors.black};
  color: ${mainTheme.colors.white};

  &:active {
    background-color: ${mainTheme.colors.gray2};
  }

  &:disabled {
    background-color: ${mainTheme.colors.gray3};
  }
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 8px;
  padding: 12px;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  width: 100%;
`;


export { StyledButton, SmallButton, ExtendedButton, PrimaryButton, SecondaryButton, TertiaryButton};