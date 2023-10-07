import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import SideBar from '@/components/common/SideBar';
import Footer from '@/components/common/Footer';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Input component</title>
        <meta
          name="description"
          content="devChallenges.io(legacy) - Input component | by h-yoshikawa44"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={globalLayout}>
        <SideBar />
        <div css={rightBlock}>
          <div css={contents}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const globalLayout = css`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const rightBlock = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const contents = css`
  flex: 1 0 auto;
`;

export default Layout;
