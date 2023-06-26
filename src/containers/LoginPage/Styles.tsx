import styled, { css } from 'styled-components'

const btn = (bgColor: string, dark: string) => css`
  width: 100%;
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 0;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-color: ${bgColor};
  border: 1px solid ${dark};
  &:hover {
    filter: brightness(0.85);
    &[disabled] {
      filter: brightness(0.85);
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

// const btnDefault = css`
//   ${btn('#ffffff', '#d5d5d5')} color: #555;
// `

const btnPrimary = btn('#238636', '#2ea043')

export default styled.div`
  
  font-family: sans-serif;

  main {
    width: 340px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 24px;
    text-align: center;
    color: #fff;
  }

  & > div {
    text-align: center;
  }

  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #fff;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
    }

    .error-msg {
      margin: 0;
      margin-left: 110px;
      min-height: 2rem;
      font-size: 14px;
    }

    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      &[type='submit'] {
        ${btnPrimary}
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
      color: #fff;
    }
  }
`
