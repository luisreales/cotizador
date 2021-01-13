import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
//StyleComponents , defines que etiqueta in html va tener estilo.
//se agrega el pluggin vscode-styled-components para autocompletado
const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding:10px;
    font-weight:bold;
    color:white;

`;

const TextoHeader = styled.h1`

    font-size:2rem;
    margin:0;
    font-family:'Slabo 27 px', serif;
    text-align:center;
`;



const Header = ({titulo}) => {
    return ( 

        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>

     );
}
 
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;