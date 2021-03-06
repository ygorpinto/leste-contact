import styled from 'styled-components'

const ContactListStyle = styled.div`
overflow:scroll;
width:100%;
height:80vh;
display:flex;
flex-direction:column;
border: 2px 2px 2px 2px;
box-shadow: 2px 2px #00c36f;

.filterMenu {
margin: 2rem 0 1rem 0;
align-items:center;
justify-items:center;
display:grid;
grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
font-family: 'Lobster', cursive;
font-weight:900;
font-size:1.1rem;
color:#00C36F; 
}

.contactList:nth-child(odd) {
	background-color:#ffffff;
	}
.contactList:nth-child(even) {
	background-color:#caf7e4;
	}

.contactList {
display:grid;
grid-template-columns: 1fr 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows:1fr;
align-items:center;
justify-items:center;
background-color:#fff;
font-family: 'Raleway', sans-serif;
color:#00C36F;
font-size:1rem;
font-weight:600;
box-shadow: 2px 2px rgba(0,0,0,0.12);

img {
    margin:0.2rem;
    width:40%;
    border-radius:50%;
}

.buttons {
    display:flex;
    justify-content:center;
    align-items:center;

    button {
        border:none;
        background:none;
        margin: 0.3rem;
        width:2rem;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    }

 img {
    width:1.4rem;
}
}
}
`
export default ContactListStyle;