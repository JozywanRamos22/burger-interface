import styled from 'styled-components'

import Background from '../../assets/backgroud.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerIntens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 75px;
    margin-top: 6px;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 50px;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391px;
  height: 38px;
  background: #ffffff;
  box-shadow: 4px 3px 10px rgba(74, 144, 225, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? ' 2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;

  color: #cc1717;
`
