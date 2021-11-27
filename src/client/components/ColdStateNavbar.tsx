import * as React from 'react';
import { NavLink } from 'react-router-dom';


const ColdNavbar: React.FC<ColdNavbarProps> = () => {

    return (
        <nav className="navbar navbar-expand-lg py-3 navbar-light shadow-sm">
            <div className="container">
                <a href="#" className="navbar-brand">

                    {/*logo */}
                    {/* <img src="https://images.squarespace-cdn.com/content/v1/5b1c3180c258b419dc9ac73c/1528825872555-S63CQSHUXR2PA9TKUVSW/ke17ZwdGBToddI8pDm48kO2pS9cMHbO4RvHPc8Skf1tZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7SSwGn0TPzISNt3iSJufpcvR7xFZ2oYA-YTitnkXPCuTgiUfhLEJ_Uxi_cK3qclb8w/Untitled+design+%2827%29.png?format=500w" width="100" alt="" className="d-inline-block align-middle mr-2" /> */}

                    {/*company name */}
                    <span className="text-uppercase font-weight-bold"></span>
                </a>

                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link">Home <span className="sr-only">(current)</span></a></li>
                        <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
                        <ul className="nav navbar-nav navbar-right">
                            <button className="btn float-right text-white" type="button"><a href="/register">GET STARTED</a></button>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>

       
    );



}



interface ColdNavbarProps { }


export default ColdNavbar;