import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import SideBar from '@/components/organisms/SideBar';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Input component</title>
        <meta
          name="description"
          content="devChallenges.io - Input component | by h-yoshikawa44"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={container}>
        <SideBar />
        {children}
      </div>
    </div>
  );
};

const container = css`
  display: flex;
`;

export default Layout;
