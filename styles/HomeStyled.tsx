import styled from 'styled-components';

export const HomeContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 1rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        margin-top: 2rem;
        font-size: 32px;
        background: linear-gradient(45deg, #00eeff, #00ff95);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;

        :hover {
            background: linear-gradient(45deg, #00ff95, #00eeff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

export const SorteioWrapper = styled.div`
    padding: 10px;
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    position: relative;

    p {
        width: 90px;
        font-size: 48px;
        color: white;
        padding: 20px;
    }

    p:hover {
        animation: sort 1.2s ease;
    }
`;

export const CopyButton = styled.div`
    color: white;
    position: absolute;
    padding: 0.5rem;
    right: -50px;
    background-color: #353232;
    border: 1px solid #9e9c9c;
    border-radius: 8px;
    font-size: 26px;
    text-align: center;
    display: flex;
    align-items: center;
    transition: all 0.6s ease;

    &.copied {
        background-color: #109230 !important;
        border: 1px solid #109230 !important;
    }

    &.copied:hover {
        background-color: #116d28 !important;
    }

    :hover {
        background-color: var(--bgColor);
    }
`;

export const Button = styled.a`
    padding: 10px;
    color: white;
    background-color: var(--defaultBlue);
    font-size: 22px;
    margin-top: 20px;
    transition: all 0.2s ease;
    border-radius: 12px;
    border: 1px solid var(--defaultBlue);
    position: relative;
    box-shadow:  0 0 5px var(--shadowColor), 0 0 20px  var(--shadowColor) , 0 0 40px var(--shadowColor);

    :hover {
        box-shadow:  0 0 10px var(--shadowColor), 0 0 40px  var(--shadowColor) , 0 0 80px var(--shadowColor);
    }
`;