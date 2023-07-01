import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #82a9;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px;
    background-color: white;
    margin: 0 auto;
  }
`

export const Img = styled.img`
  background: none;
  width: 80%;
  max-width: 250px;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const H1 = styled.h1`
  margin-bottom: 15px;
  font-weight: 800;
  font-size: 28px;
  line-height: 1.2;
  color: #ffff;
`

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 15px;
  color: #82a;
`

export const Input = styled.input`
  width: 200px;
  height: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #aaaa;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  padding-left: 5px;
`

export const Button = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 15px;
  border: none;
  margin-top: 20px;
  color: white;
  background: #25c325;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`

export const StyledLink = styled.a`
  background: #82a9e5;
  border-radius: 6px;
  width: 90%;
  max-width: 342px;
  height: 64px;
  border: none;
  text-align: center;
  padding-top: 30px;
  text-decoration: none;
  margin-top: 10px;
  font-weight: 900;
  font-size: 14px;
  line-height: 2px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`
