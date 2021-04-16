import styled from 'styled-components'

const StatisticsStyles = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-family: 'Lobster', cursive;
color:#00C36F;
h1 {
    margin:2rem 0 0 0;
}
.main {
    margin: 3rem 0 0 0;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    height:15vh;
}
label {
    font-size:1.5rem;
}
.bar {
    align-items:center;
    display:flex;
    margin: 0 0 0 0.5rem;
    height:2rem;
    width:20rem;
    border-radius:0.9rem;
    background-color: #0f774a;
    color:#fff;
    text-align:center;

    p{
        margin : 0 0 0 0.5rem;
    }

    div {
        text-align:center;
        height:2rem;
        border-radius:0.9rem;
        margin:0;
        background-color:#00c36f;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;

    }
}
.Gender {
    display:flex;
    margin: 0 0 2rem 0;

}
.Language {
    
    .circle {
        flex-wrap:wrap;
        width:15rem;
        height:15rem;

        p{
            font-size:1,5rem;
            font-weight:600;
        }

    .languagesList {
        div {
            height:0.4rem;
            background-color:#0F774A;
        }
    }
        
    }
}
`

export default StatisticsStyles;