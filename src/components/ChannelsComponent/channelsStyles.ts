import styled from "styled-components";

export const ChannelsMenu = styled.div`
  margin-top: 50px;
  width: 52%;
  padding: 10px 20px;
`
export const Title = styled.h2`
  font-size: 18px;
  text-align: left;
  margin: 14px 0px;
  font-weight: 500;
`
export const ChannelCard = styled.div`
  border: 2px solid #ECECEC;
  border-radius: 8px;
  height: 94px;
  display: flex;
  margin: 16px 0px;
  //align-items: center
`

export const Button = styled.button`
  text-align: center;
  height: 40px;
  width: 140px;
  border: 0px;
  border-radius: 8px;

  background: #7B2CBF;;
  color: white;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  padding: 0px 16px;
  letter-spacing: -0.025em;
  cursor: pointer;
  :hover{
    opacity: 95%;
  }
`
export const HeaderChannelsMenu = styled.div`
  margin-bottom: 23px;
  display: flex;
  justify-content: space-between;
`

export const ChannelAvatar = styled.img`
  align-self: center;
  margin: 8px 17px;
  background-color: darkgrey;
  border-radius: 50%;
  border: gray 1px solid;
  width: 65px;
  height: 65px;
`

export const ChannelName = styled.div`
  align-self: center;
  font-size: 21px;
  font-weight: 300;
  color: #464a50;
`
