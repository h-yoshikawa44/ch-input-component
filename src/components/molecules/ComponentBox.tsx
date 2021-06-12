import { VFC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';
import SubTitle from '@/components/atoms/SubTitle';

type Props = ComponentPropsWithRef<'div'> & {
  title: string;
  component: React.ReactNode;
};

const ComponentBox: VFC<Props> = ({ title, component }) => {
  return (
    <div>
      <SubTitle css={customSubTitle}>{title}</SubTitle>
      {component}
    </div>
  );
};

const customSubTitle = css`
  padding-bottom: 16px; ;
`;

export default ComponentBox;
