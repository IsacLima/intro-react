import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #079441;
`;

export const LogoImg = styled.img`
    height: 72px;
    width: 72px;
    margin-bottom: 30px;
`;

export const Box = styled.div`
    height: 40%;
    width: 60%;
    display: grid;
    border-radius: 30px;
    background-color: #52FF9A;
    opacity: .7;
`;

export const Flexbox = styled.div`
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width};
`;

