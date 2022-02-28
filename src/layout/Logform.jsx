import React from 'react';
import Foorterlogform from '../components/Footerlogform';
import Headerlogform from '../components/Headerlogform';
// import { Container } from './styles';

function Logform({children}) {
    return(
        <>
        <div class="page_detaillogform">
        <Headerlogform></Headerlogform>
        {children}
        <Foorterlogform></Foorterlogform>
        </div>
        </>
    );
}

export default Logform;