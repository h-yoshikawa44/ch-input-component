import { VFC, ComponentPropsWithRef } from 'react';
import { jsx, css } from '@emotion/react';
import { Home } from '@emotion-icons/material-rounded/Home';
import { Mail } from '@emotion-icons/material-rounded/Mail';
import { PermIdentity } from '@emotion-icons/material-rounded/PermIdentity';
import { PhoneEnabled } from '@emotion-icons/material-rounded/PhoneEnabled';
import { Lock } from '@emotion-icons/material-rounded/Lock';

type InputType = 'input' | 'textarea';
type Size = 'sm' | 'md';
type IconPosition = 'start' | 'end';
type IconName = 'phone' | 'mail' | 'lock' | 'identity' | 'home';

type IconProps = {
  iconName: IconName;
  position: IconPosition;
};

const Icon: VFC<IconProps> = ({ iconName, position }) => {
  const size = 16;

  return (
    <span css={icon(position)}>
      {iconName === 'phone' && <PhoneEnabled size={size} />}
      {iconName === 'mail' && <Mail size={size} />}
      {iconName === 'lock' && <Lock size={size} />}
      {iconName === 'identity' && <PermIdentity size={size} />}
      {iconName === 'home' && <Home size={size} />}
    </span>
  );
};

type InputProps = (
  | (Omit<ComponentPropsWithRef<'input'>, 'size' | 'type'> & {
      multiline?: false;
      row?: undefined;
    })
  | (Omit<ComponentPropsWithRef<'textarea'>, 'rows' | 'cols'> & {
      multiline: true;
      row?: number;
    })
) & {
  error?: boolean;
  size?: Size;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  startIcon?: IconName;
  endIcon?: IconName;
};

const Input: VFC<InputProps> = ({
  multiline = false,
  row = multiline ? 4 : undefined,
  error = false,
  size = 'md',
  fullWidth = false,
  label = 'Label',
  placeholder = 'Placeholder',
  helperText,
  disabled = false,
  startIcon,
  endIcon,
  value,
  ...props
}) => {
  const input = 'input';
  const textArea = 'textarea';
  const inputType = multiline ? textArea : input;

  return (
    <label css={[inputLabelBase, error && inputLabelError]}>
      <span css={labelText}>{label}</span>
      <div
        css={[
          inputControlBase(inputType, disabled),
          error && inputControlError,
          inputControlSize(inputType, size),
          fullWidth && inputControlFullWidth,
        ]}
      >
        {startIcon && <Icon iconName={startIcon} position="start" />}
        {multiline
          ? jsx(
              textArea,
              {
                css: inputBase,
                rows: row,
                placeholder: placeholder,
                disabled: disabled,
                ...props,
              },
              value
            )
          : jsx(input, {
              css: inputBase,
              type: 'text',
              placeholder: placeholder,
              disabled: disabled,
              value: value,
              ...props,
            })}
        {endIcon && <Icon iconName={endIcon} position="end" />}
      </div>
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

const inputControlBase = (inputType: InputType, disabled: boolean) => {
  return css`
    display: flex;
    align-items: center;
    padding: ${inputType === 'input' ? '0 12px' : '16px 12px'};
    background-color: ${disabled
      ? styleMap.colors.action.disabledBackground
      : '#FFF'};
    border: ${disabled
      ? ` 1px solid ${styleMap.colors.action.disabled}`
      : ` 1px solid ${styleMap.colors.default}`};
    border-radius: 8px;
    transition: border 0.3s;

    &:hover {
      border: ${disabled
        ? ` 1px solid ${styleMap.colors.action.disabled}`
        : ` 1px solid ${styleMap.colors.action.hover}`};
    }
    &:focus-within {
      border: 1px solid ${styleMap.colors.primary};
    }
  `;
};

const inputControlError = css`
  border: 1px solid ${styleMap.colors.error};
  &:focus-within {
    border: 1px solid ${styleMap.colors.error};
  }
`;

const inputControlSize = (inputType: InputType, size: Size) => {
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

const inputControlFullWidth = css`
  width: 100%;
`;

const icon = (position: IconPosition) => {
  if (position === 'start') {
    return css`
      display: flex;
      padding-right: 12px;
      color: ${styleMap.colors.text.caption};
    `;
  }
  if (position === 'end') {
    return css`
      display: flex;
      padding-left: 12px;
      color: ${styleMap.colors.text.caption};
    `;
  }
};

const inputBase = css`
  width: 100%;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${styleMap.colors.text.primary};
  pointer-events: auto;
  resize: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${styleMap.colors.text.caption};
  }
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
