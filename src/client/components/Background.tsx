import * as React from 'react';
import styled from 'styled-components';


const Background: React.FC<BackgroundProps> = () => {

    return (

        <BG>


            <header>

                <div className="head-text">
                    <div className="head-image">
                        <img src="/images/bg.png" style={{ "height": "100%", "width": "100%" }} />
                    </div>

                </div>

            </header>


        </BG>
    );

}


const BG = styled.div`

.head-text {
position: relative;
text-align: center;
color: black;
 }

 @media (max-width: 991px) and (orientation: landscape) {
 height: 60%;
}

 `;



interface BackgroundProps {
    // home_page: IHome
}

export default Background;