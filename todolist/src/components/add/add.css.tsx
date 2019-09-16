import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding: 30px 90px 30px 0;
  font-size: 16px;
  .input {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 26px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-sizing: border-box;
    font-size: inherit;
    outline: none;
    &:focus {
      border: 1px solid #f39894;
    }
  }
  .addButton {
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: #fff;
    transition: background 0.3s ease-in;
    padding: 7px 0;
    outline: none;
    text-align: center;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
    border: 1px solid #f39894;
    background: #f39894;
    &:hover {
      background: #d77672;
    }
  }
  .toastify {
    top: 44vh;
    width: 300px;
    left: calc(50% - 150px);
    background-color:#FF9800;
    button{
      opacity:1;
    }
  }
`
export default Wrapper