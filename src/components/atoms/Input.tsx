import { VFC, ComponentPropsWithRef } from 'react';
import { jsx, css } from '@emotion/react';

type InputType = 'input' | 'textarea';
type Size = 'sm' | 'md';

type Props = (
  | (Omit<ComponentPropsWithRef<'input'>, 'size'> & {
      multiline?: false;
      row?: undefined;
    })
  | (ComponentPropsWithRef<'textarea'> & { multiline: true; row?: number })
) & {
  error?: boolean;
  size?: Size;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  startIcon?: boolean;
  endIcon?: boolean;
};

const Input: VFC<Props> = ({
  multiline = false,
  row = multiline ? 4 : undefined,
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
  ...props
}) => {
  const input = 'input';
  const textArea = 'textarea';

  return (
    <label css={[inputLabelBase, error && inputLabelError]}>
      <span css={labelText}>{label}</span>
      {multiline
        ? jsx(
            textArea,
            {
              css: [
                inputBase(textArea),
                error && inputError,
                inputSize(textArea, size),
                fullWidth && inputFullWidth,
              ],
              rows: row,
              placeholder: placeholder,
              disabled: disabled,
              ...props,
            },
            value
          )
        : jsx(input, {
            css: [
              inputBase(input),
              error && inputError,
              inputSize(input, size),
              fullWidth && inputFullWidth,
            ],
            type: 'text',
            placeholder: placeholder,
            disabled: disabled,
            value: value,
            ...props,
          })}
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

  &:hover {
    color: ${styleMap.colors.action.hover};
  }

  &:focus-within {
    color: ${styleMap.colors.primary};
  }
`;

const inputLabelError = css`
  color: ${styleMap.colors.error};

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

const inputBase = (inputType: InputType) => {
  return css`
    box-sizing: border-box;
    padding: ${inputType === 'input' ? '0 12px' : '16px 12px'};
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
      border: 1px solid ${styleMap.colors.action.hover};
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
};

const inputError = css`
  border: 1px solid ${styleMap.colors.error};
  &:focus {
    border: 1px solid ${styleMap.colors.error};
  }
`;

const inputSize = (inputType: InputType, size: Size) => {
  if (inputType === 'textarea') {
    return css`
      width: 200px;
      resize: none;
    `;
  }

  // input
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
