import React from 'react';
import Foorterlogform from '../components/Footerlogform';
import Headerstory from '../components/Headerstory';
// import { Container } from './styles';

function Story({children}) {
    return(
        <>
        <div class="page_detailstory">
        <Headerstory></Headerstory>
        </div>
        {children}
        <div class="page_detaillogform">
        <Foorterlogform></Foorterlogform>
        </div>
        </>
    );
}

export default Story;