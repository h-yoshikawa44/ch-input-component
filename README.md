<!-- Please update value in the {}  -->

<h1 align="center">Input component</h1>

<div align="center">
   Solution for a challenge from  <a href="http://legacy.devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://ch-input-component-h-yoshikawa44.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/solutions/ClokxKDirrSdDyCt8D0D">
      Solution
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/challenges/TSqutYM4c5WtluM7QzGp">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [learned/improved](#learnedimproved)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![overview](/screenshots/overview.png)

I have created an Input component that contains a label.  
Since it was created as a component for text input, the type of input element is limited to text format.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

Base
- [Node.js](https://nodejs.org/)：20.8.0
- [TypeScript](https://www.typescriptlang.org/)：4.6.2
- [React](https://reactjs.org/)：18.2.0
- [Next.js](https://nextjs.org/)：13.5.4

Other major libraries
- [emotion](https://emotion.sh/)
- [emotion-icons](https://emotion-icons.dev/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://legacy.devchallenges.io/challenges) challenge. The [challenge](https://legacy.devchallenges.io/challenges/TSqutYM4c5WtluM7QzGp) was to build an application to complete the given user stories.

- [x] User story: I can see error state
- [x] User story: I can choose to disable input
- [x] User story: I can choose to have helper text
- [x] User story: I can choose to have an icon on the left or right (Use Google Icon and at least 5 variants)
- [x] User story: I can have different input sizes
- [x] User story: I can have different colors
- [x] User story: I can choose to have input take the width of the parent
- [x] User story: I can have multiline input like a textarea
- [x] User story: When I hover or focus, I can see visual indicators
- [ ] User story: I can still access all input attributes → ※1
- [x] User story (optional): Show input in a similar way like the design or use Storybook. Otherwise, showing the input in multiple states is enough

※1：  
excluded some props whose settings conflict with custom props.  
Also, Since it was created as a component for text input, the type of input element is limited to text format.
```tsx
// Input Component
type InputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';

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
```

## How To Use

<!-- Example:  -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/h-yoshikawa44/input-component.git
or
git clone git@github.com:h-yoshikawa44/input-component.git

# Install dependencies
npm install

# Run the app
npm run dev
```

## learned/improved
- `ComponentPropsWithRef` makes it easy to get prop type information for existing elements such as `input`.
- How to style a parent element when the child element has focus.
- How to make the hover of the parent element work when the child element is hovered.
- Types of css pseudo-classes that I was only partially aware of so far.
- How to create an input component with an icon inside.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- [Material UI](https://material-ui.com/)
- [実践プロトタイピング Wevフロントエンド&バックエンドでプロトタイピング ※書籍](https://tk-rabbit-house.booth.pm/items/2381995)
- [CSS疑似クラスを活用した、モダンでインタラクティブなフォームの作り方](https://ics.media/entry/200413/)
- [子要素にhoverやclickがあったときに親要素に反応させたい](https://www.softel.co.jp/blogs/tech/archives/6008)

## Contact

- Website：[h-yoshikawa44.com](https://h-yoshikawa44.com)
- GitHub：[@h-yoshikawa44](https://github.com/h-yoshikawa44)
- Twitter：[@yoshi44_lion](https://twitter.com/yoshi44_lion)

