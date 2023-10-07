import { FC } from 'react';
import { css } from '@emotion/react';
import ComponentBox from '@/components/common/ComponentBox';
import Input from '@/components/common/Input';
import { breakPoint, colors } from '@/styles/constants';
import { poppins } from '@/styles/fonts';

const Home: FC = () => {
  return (
    <main css={main}>
      <div css={container}>
        <h2 css={pageTitle}>Inputs</h2>
        <div css={inputRows}>
          <div css={inputRow(2)}>
            <ComponentBox title="<Input />" component={<Input />} />
            <ComponentBox title="<Input error />" component={<Input error />} />
          </div>
          <div css={inputRow(3)}>
            <ComponentBox
              title="<Input disabled />"
              component={<Input disabled />}
            />
            <ComponentBox
              title='<Input label="TEL" />'
              component={<Input label="TEL" />}
            />
            <ComponentBox
              title='<Input placeholder="example" />'
              component={<Input placeholder="example" />}
            />
          </div>
          <div css={inputRow(2)}>
            <ComponentBox
              title='<Input helperText="Some interesting text" />'
              component={<Input helperText="Some interesting text" />}
            />
            <ComponentBox
              title='<Input helperText="Some interesting text" error />'
              component={<Input helperText="Some interesting text" error />}
            />
          </div>
          <div css={inputRow(2)}>
            <ComponentBox
              title='<Input startIcon="phone" />'
              component={<Input startIcon="phone" />}
            />
            <ComponentBox
              title='<Input endIcon="phone" />'
              component={<Input endIcon="phone" />}
            />
            <ComponentBox
              title='<Input startIcon="mail" />'
              component={<Input startIcon="mail" />}
            />
            <ComponentBox
              title='<Input startIcon="lock" />'
              component={<Input startIcon="lock" />}
            />
            <ComponentBox
              title='<Input startIcon="identity" />'
              component={<Input startIcon="identity" />}
            />
            <ComponentBox
              title='<Input startIcon="home" />'
              component={<Input startIcon="home" />}
            />
          </div>
          <div css={inputRow(2)}>
            <ComponentBox
              title='<Input size="sm" />'
              component={<Input size="sm" />}
            />
            <ComponentBox
              title='<Input size="md" />'
              component={<Input size="md" />}
            />
          </div>
          <ComponentBox
            title="<Input fullWidth />"
            component={<Input fullWidth />}
          />
          <div css={inputRow(2)}>
            <ComponentBox
              title='<Input color="primary" />'
              component={<Input color="primary" />}
            />
            <ComponentBox
              title='<Input color="secondary" />'
              component={<Input color="secondary" />}
            />
          </div>
          <div css={inputRow(2)}>
            <ComponentBox
              title='<Input value="Text" />'
              component={<Input value="Text" onChange={() => {}} />}
            />
            <ComponentBox
              title="<Input multiline row={4} />"
              component={<Input multiline row={4} />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const main = css`
  margin: 56px 0;
`;

const container = css`
  max-width: 1280px;
  padding: 0 8%;
  margin-right: auto;
`;

const pageTitle = css`
  font-family: ${poppins.style.fontFamily};
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: ${colors.blackLighten};
`;

const inputRows = css`
  display: grid;
  grid-row-gap: 45px;
  padding-top: 24px;
`;

const inputRow = (column: number) => {
  return css`
    display: grid;
    grid-template-columns: repeat(${column}, max-content);
    grid-gap: 45px 64px;

    @media (max-width: ${breakPoint.md - 1}px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, max-content));
    }
  `;
};

export default Home;
