import React from 'react'
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types';
const Mensaje = styled.p`
    background-color:rgb(127,224,237);
    margin-top:2rem;
    padding:1rem;
    text-align: center;

`;


const TextCotizacion = styled.p`
    color:#00838f;
    padding:1rem;
    text-transform:uppercase;
    margin:0;
`;

const ResultadoCotizacion = styled.div`
    text-align:center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127,224,237);
    margin-top : 1rem;
    position: relative;

`

const Resultado = ({cotizacion}) => {
    return ( 

        (cotizacion === 0) ? <Mensaje>Elegir una marca, año y tipo de seguro</Mensaje> 
        
        : 
        (

            <ResultadoCotizacion>
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado" key={cotizacion} timeout={{enter:500,exit:500}}>
                        <TextCotizacion>El total es : $ <span>{cotizacion}</span></TextCotizacion>
                    </CSSTransition>
                </TransitionGroup>
                
            </ResultadoCotizacion>

            
        )
        
        
        
     );
}
 
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
export default Resultado;