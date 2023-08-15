import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  font-family: Roboto;
`

export const RegisterPage = styled.div`
  height: 90%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 60%;
  width: 40%;
  margin-left: 25%;
`

export const LoginForm = styled.form`
  height: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
`

export const LoginHeading = styled.h1`
  color: #334155;
  font-size: 50px;
  font-weight: 600;
`

export const Label = styled.label`
  color: #64748b;
  font-size: 18px;
  font-weight: 450;
  margin-top: 2%;
  margin-bottom: 1%;
`
export const Input = styled.input`
  height: 50px;
  width: 400px;
  padding: 10px;
`
export const Select = styled.select`
  height: 50px;
  width: 400px;
  padding: 10px;
  outline: none;
`
export const Options = styled.option`
  color: #334155;
  font-size: 18px;
`

export const LoginButton = styled.button`
  padding: 1%;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 5%;
  background-color: #3b82f6;
  color: #ffffff;
  height: 10%;
  width: 25%;
`

export const Errormsg = styled.p`
  color: #ff0b37;
  margin-top: 4px;
  font-size: 18px;
`
