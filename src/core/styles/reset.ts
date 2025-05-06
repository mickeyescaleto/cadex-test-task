'use client';

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }

  html {
    font-family: system-ui, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
  }

  b,
  strong {
    font-weight: 700;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, Consolas, Menlo, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    border-color: currentcolor;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    line-height: 1.5;
    font-size: 100%;
    margin: 0;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
    -webkit-appearance: button;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    appearance: textfield;
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    appearance: none;
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    appearance: button;
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  :-moz-focusring {
    outline: auto;
  }

  ol,
  ul,
  menu {
    list-style: none;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: inline-block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  ::placeholder {
    opacity: 1;
  }

  textarea {
    resize: vertical;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
`;

export const ResetStyles = createGlobalStyle`
  ${styles}
`;
