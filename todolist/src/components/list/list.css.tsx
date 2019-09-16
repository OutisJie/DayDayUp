import styled from 'styled-components'

const Wrapper = styled.div`
  .title{
    position: relative;
    height: 44px;
    line-height: inherit;
    padding-left: 20px;
    border-bottom: 1.5px solid #fff;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    background: #f39894;
    font-size: 16px;
    span {
      display: inline-block;
      margin-left: 5px;
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 50%;
      line-height: 21px;
      text-align: center;
      font-size: 14px;
    }
  }
  .count {
    font-size: 12px;
  }
`

export default Wrapper