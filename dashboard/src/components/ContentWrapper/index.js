import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

function ContentWrapper(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div className="content">
                <TopBar />
                {/* <ContentRowTop /> */}
                {
                    props.children
                }
            </div>
            <Footer />
        </div>    
    );
}

export default ContentWrapper;