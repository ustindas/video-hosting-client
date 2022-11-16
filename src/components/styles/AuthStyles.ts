import styled, {css} from "styled-components";
import eyeImg from '../../images/eyeIcon.png'

export const Form = styled.form<{width?: string}>`
  border-radius: 8px;
  border: 1px solid #dadce0;
  display: flex;
  flex-direction: column;
  padding: 35px 25px 25px;
  margin: 5vw auto;
  min-height: 470px;
  width: ${props => props.width || "510px"};
`

export const TitleForm = styled.h1`
  cursor: default;
  font-size: 25px;
  font-weight: 600;
  align-self: flex-start;
  margin: 5px 0px
`

export const SubtitleForm = styled.h2`
  cursor: default;
  font-size: 14px;
  font-weight: 400;
  align-self: flex-start;
  margin: 5px 0px;
  color: #777575;
`

export const FormInputArea = styled.div<{width?: string}>`
  padding: 20px 10px;
  display: flex;
  justify-self: stretch;
  align-self: stretch;
  flex-direction: column;
  width: ${props => props.width || "auto"};
`
export const Input = styled.input`
  padding: 6px 16px;
`

interface IButton {
    background?: string,
    color?: string,
    primary?: any,
    dark?: string,
    light?: any
}

export const Button = styled.button<IButton>`
  background: ${props => props.background || 'black'};
  color: ${props => props.color || 'white'};
  height: 39px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  margin: 5px 0px;

  ${props => props.primary && css`
    background: black;
    color: white;
  `};

  ${props => props.light && css`
    background: white;
    color: #777575;
    border: 2px solid #ECECEC;

  `};
`

export const FormInputGroup = styled.div`
  padding: 5px 0px;
  border: 1px solid #ECECEC;
  border-radius: 8px;
  height: 39px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-top: 5px;
  display: flex;
 input{
  width: 85%;
}
  button{
    width: 15%;
  }

`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin: 3px 0px 2px;
`

export const FootForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  margin: 30px 0px 0px 0px;
`

interface IEyeButton {
    img?: any
}

export const EyeButton = styled.button<IEyeButton>`
  box-sizing: border-box;
  border: none;
  background-color: rgba(41, 45, 50, 0);
  background-image: url(${eyeImg});
  background-repeat: no-repeat;
  background-size: 19px 19px;
  margin: 5px 0px;
  cursor: pointer;
`

export const InputsRow = styled.div`
 display: flex;
  justify-content: space-between;
  div{
    width: 95%
  }
`


