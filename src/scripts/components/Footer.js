import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer grey lighten-5">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="copyright pink-text text-lighten-3">
                            <strong>© 2019 Developed By <a target="_blank" href="https://mdeasin.com" className="btn purple darken-4"><strong>Md Easin</strong></a></strong>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="footer-nav right-align">
                            <a target="_blank" href="https://github.com/mdeasindev/react-redux-project" className="btn purple darken-4"><strong>github</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;