import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const ItemEditorForm = styled.div`
    width: 42%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

export const FormH2 = styled.h2`
    font-weight: 700;
    color: rgb(0, 0, 0);
    letter-spacing: -0.03em;
    font-size: 1.125rem;
    line-height: 1.5rem;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-bottom: 16px;
`

export const FormParagraph = styled.p`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(102, 102, 102);
    margin-top: 8px;
    margin-bottom: 24px;
`

export const InputWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 16px;

    div {
        flex-basis: 48%;
    }
`