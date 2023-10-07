import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import { fonts } from '@/styles/constants';

type Props = ComponentPropsWithRef<'div'> & {
  title: string;
  component: React.ReactNode;
};

const ComponentBox: FC<Props> = ({ title, component }) => {
  return (
    <div>
      <h6 css={subTitle}>{title}</h6>
      {component}
    </div>
  );
};

const subTitle = css`
  margin-block-start: 0;
  margin-block-end: 16px;
  font-family: ${fonts.ubuntuMono};
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
`;

export default ComponentBox;
