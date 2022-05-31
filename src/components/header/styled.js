import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 10px;
  margin-botton: 10px;
  form {
  position: relative;
  background: rgb(238, 240, 239);
  width: 40%;
  padding: 10px 30px 30px;
  box-shadow: 5px 5px 10px;
  margin: 10px;
  }
  h1 {
    margin: 10px;
    font-size: 16px;
    font-weight: bold;

  }
  input {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    font-weight: 500;
  }
  button {
    background-color: #225ed8;
    margin: 50px;
    border-radius: 8px;
    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;