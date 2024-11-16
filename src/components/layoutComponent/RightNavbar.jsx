import React from 'react';
import FindUs from '../FindUs';
import SocialLogin from '../SocialLogin';

const RightNavbar = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <div>Gallery Section</div>
            <div>Adv Section</div>
        </div>
    );
};

export default RightNavbar;