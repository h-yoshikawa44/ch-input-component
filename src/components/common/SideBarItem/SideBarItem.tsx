import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';
import { notoSansJp } from '@/styles/fonts';

type Props = ComponentPropsWithRef<'li'> & {
  text: string;
  selected?: boolean;
};

const SideBarItem: FC<Props> = ({ text, selected = false }) => {
  return <li css={sideBarItem(selected)}>{text}</li>;
};

const sideBarItem = (selected: boolean) => {
  return css`
    padding-bottom: 32px;
    font-family: ${notoSansJp.style.fontFamily};
    font-size: 14px;
    font-weight: ${selected ? 'bold' : '500'};
    line-height: 20px;
    color: ${selected ? colors.action.selected : colors.gray};
    list-style: none;
  `;
};

export default SideBarItem;
