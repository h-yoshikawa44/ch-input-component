import { FC, ComponentPropsWithRef } from 'react';
import { css } from '@emotion/react';

type Props = ComponentPropsWithRef<'h6'>;

const SubTitle: FC<Props> = ({ ...props }) => {
  return <h6 css={subTitle} {...props} />;
};

const subTitle = css`
  font-family: 'Ubuntu Mono', sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 12px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export default SubTitle;
