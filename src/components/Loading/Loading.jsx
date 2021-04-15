import styled from 'styled-components'

const LoadingStyles = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:80vh;
`

const Loading = () => {
    return (
        <LoadingStyles>
            <img src="loading.gif" alt="loading" />
        </LoadingStyles>
    )
}

export default Loading;