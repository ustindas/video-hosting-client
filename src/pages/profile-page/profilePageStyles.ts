import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  padding: 23px 17px;
  display: flex;
  width: 47vw;
  margin: 50px auto;
  justify-content: space-between;
`
export const ProfileInformation = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;

  width: 40%;
`

export const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #7B2CBF;
  margin-bottom: 15px;
`

export const Button = styled.button`

  height: 39px;
  background-color: #f9f5fc;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ECECEC;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: gray;
  margin-bottom: 30px;
`