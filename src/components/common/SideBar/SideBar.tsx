import { css } from '@emotion/react';
import SideBarItem from '@/components/common/SideBarItem';

const SideBar = () => {
  return (
    <div css={sideBar}>
      <h1 css={siteTitle}>
        <span>Dev</span>challenge.io
      </h1>
      <nav css={nav}>
        <ul css={ul}>
          <SideBarItem text="Typography" />
          <SideBarItem text="Grid" />
          <SideBarItem text="Buttons" />
          <SideBarItem text="Inputs" selected />
        </ul>
      </nav>
    </div>
  );
};

const sideBar = css`
  padding: 40px 48px;
  background-color: #fafbfd;
`;

const siteTitle = css`
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 19px;
  span {
    color: #f7542e;
  }
`;

const nav = css`
  padding-top: 80px;
`;

const ul = css`
  padding-inline-start: unset;
`;

export default SideBar;
