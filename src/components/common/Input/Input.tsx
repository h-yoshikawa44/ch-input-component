import { FC, ComponentPropsWithRef } from 'react';
import { jsx, css } from '@emotion/react';
import { Home } from '@emotion-icons/material-rounded/Home';
import { Mail } from '@emotion-icons/material-rounded/Mail';
import { PermIdentity } from '@emotion-icons/material-rounded/PermIdentity';
import { PhoneEnabled } from '@emotion-icons/material-rounded/PhoneEnabled';
import { Lock } from '@emotion-icons/material-rounded/Lock';
import { colors } from '@/styles/constants';
import { notoSansJp } from '@/styles/fonts';

type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
type InputElement = 'input' | 'textarea';
type Size = 'sm' | 'md';
type Color = 'primary' | 'secondary';
type IconPosition = 'start' | 'end';
type IconName = 'phone' | 'mail' | 'lock' | 'identity' | 'home';

type IconProps = {
  iconName: IconName;
  position: IconPosition;
};

const Icon: FC<IconProps> = ({ iconName, position }) => {
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
  type?: InputType;
  error?: boolean;
  size?: Size;
  fullWidth?: boolean;
  color?: Color;
  label?: string;
  helperText?: string;
  startIcon?: IconName;
  endIcon?: IconName;
};

const Input: FC<InputProps> = ({
  type = 'text',
  multiline = false,
  row = multiline ? 4 : undefined,
  error = false,
  size = 'md',
  fullWidth = false,
  color = 'primary',
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
  const inputElement = multiline ? textArea : input;

  return (
    <label css={[inputLabelBase(color), error && inputLabelError]}>
      <span css={labelText}>{label}</span>
      <div
        css={[
          inputControlBase(inputElement, color, disabled),
          error && inputControlError,
          inputControlSize(inputElement, size),
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
              value,
            )
          : jsx(input, {
              css: inputBase,
              type: type,
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
    default: colors.base,
    action: {
      hover: colors.action.hover,
      disabled: colors.action.disabled,
      disabledBackground: colors.action.disabledBackground,
    },
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    text: {
      primary: colors.text.primary,
      caption: colors.text.caption,
    },
  },
};

const inputLabelBase = (color: Color) => {
  return css`
    color: ${styleMap.colors.text.primary};
    pointer-events: none;
    transition: color 0.3s;

    &:hover {
      color: ${styleMap.colors.action.hover};
    }

    &:focus-within {
      color: ${styleMap.colors[color]};
    }
  `;
};

const inputLabelError = css`
  color: ${styleMap.colors.error};

  &:focus-within {
    color: ${styleMap.colors.error};
  }
`;

const labelText = css`
  display: block;
  padding-bottom: 4px;
  font-family: ${notoSansJp.style.fontFamily};
  font-size: 12px;
  font-weight: normal;
  line-height: 17px;
  color: inherit;
  pointer-events: auto;
`;

const inputControlBase = (
  inputElement: InputElement,
  color: Color,
  disabled: boolean,
) => {
  return css`
    display: flex;
    align-items: center;
    padding: ${inputElement === 'input' ? '0 12px' : '16px 12px'};
    background-color: ${disabled
      ? stylemap.colors.action.disabledbackground
      : colors.white};
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
      border: 1px solid ${styleMap.colors[color]};
    }
  `;
};

const inputControlError = css`
  border: 1px solid ${styleMap.colors.error};

  &:focus-within {
    border: 1px solid ${styleMap.colors.error};
  }
`;

const inputControlSize = (inputElement: InputElement, size: Size) => {
  if (inputElement === 'textarea') {
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
  font-family: ${notoSansJp.style.fontFamily};
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
  font-family: ${notoSansJp.style.fontFamily};
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
