import { styled } from "styled-components";
import background from '../../assets/15186165_5566879.jpg'

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${background});
`