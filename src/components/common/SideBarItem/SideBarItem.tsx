import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { fonts, colors } from '@/styles/constants';

type Props = ComponentPropsWithRef<'li'> & {
  text: string;
  selected?: boolean;
};

const SideBarItem: VFC<Props> = ({ text, selected = false }) => {
  return <li css={sideBarItem(selected)}>{text}</li>;
};

const sideBarItem = (selected: boolean) => {
  return css`
    padding-bottom: 32px;
    font-family: ${fonts.notoSansJp};
    font-size: 14px;
    font-weight: ${selected ? 'bold' : '500'};
    line-height: 20px;
    color: ${selected ? colors.action.selected : colors.gray};
    list-style: none;
  `;
};

export default SideBarItem;
