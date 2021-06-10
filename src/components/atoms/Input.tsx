import { VFC, ClassAttributes, InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';

type Size = 'sm' | 'md';

type Props = ClassAttributes<HTMLInputElement> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    error?: boolean;
    size?: Size;
    fullWidth?: boolean;
    label?: string;
    helperText?: string;
    startIcon?: boolean;
    endIcon?: boolean;
  };

const Input: VFC<Props> = ({
  error = false,
  size = 'md',
  fullWidth = false,
  label = 'Label',
  placeholder = 'Placeholder',
  helperText,
  disabled = false,
  startIcon = false,
  endIcon = false,
  value,
}) => {
  return (
    <label css={[inputLabelBase, error && inputLabelError]}>
      <span css={labelText}>{label}</span>
      <input
        css={[
          inputBase,
          error && inputError,
          inputSize(size),
          fullWidth && inputFullWidth,
        ]}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
      {helperText && (
        <span css={[helperTextBase, error && helperTextError]}>
          {helperText}
        </span>
      )}
    </label>
  );
};

const styleMap = {
  colors: {
    default: '#828282',
    action: {
      hover: '#333333',
      disabled: '#e0e0e0',
      disabledBackground: '#f2f2f2',
    },
    primary: '#2962FF',
    error: '#D32F2F',
    text: {
      primary: '#333333',
      caption: '#828282',
    },
  },
};

const inputLabelBase = css`
  color: ${styleMap.colors.text.primary};
  pointer-events: none;
  transition: color 0.3s;

  &:focus-within {
    color: ${styleMap.colors.primary};
  }
`;

const inputLabelError = css`
  color: ${styleMap.colors.error};

  &:hover {
    color: ${styleMap.colors.action};
  }

  &:focus-within {
    color: ${styleMap.colors.error};
  }
`;

const labelText = css`
  display: block;
  padding-bottom: 4px;
  font-family: 'Noto Sans Jp', sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 17px;
  color: inherit;
  pointer-events: auto;
`;

const inputBase = css`
  box-sizing: border-box;
  padding-left: 12px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${styleMap.colors.text.primary};
  pointer-events: auto;
  border: 1px solid ${styleMap.colors.default};
  border-radius: 8px;
  outline: none;
  transition: border 0.3s;

  &:hover {
    border: 1px solid ${styleMap.colors.action};
  }
  &:focus {
    border: 1px solid ${styleMap.colors.primary};
  }
  &::placeholder {
    color: ${styleMap.colors.text.caption};
  }
  &:disabled {
    background-color: ${styleMap.colors.action.disabledBackground};
    border: 1px solid ${styleMap.colors.action.disabled};
  }
`;

const inputError = css`
  border: 1px solid ${styleMap.colors.error};
  &:focus {
    border: 1px solid ${styleMap.colors.error};
  }
`;

const inputSize = (size: Size) => {
  if (size === 'sm') {
    return css`
      width: 200px;
      height: 40px;
    `;
  }
  if (size === 'md') {
    return css`
      width: 200px;
      height: 56px;
    `;
  }
};

const inputFullWidth = css`
  width: 100%;
`;

const helperTextBase = css`
  display: block;
  padding-top: 4px;
  font-family: 'Noto Sans Jp', sans-serif;
  font-size: 10px;
  font-weight: normal;
  line-height: 14px;
  color: ${styleMap.colors.text.caption};
  pointer-events: auto;
`;

const helperTextError = css`
  color: ${styleMap.colors.error};
`;

export default Input;
