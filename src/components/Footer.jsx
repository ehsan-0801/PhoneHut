import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer style={ { background: "#b0c4b1" } } className="font-small pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Phone Hut</h5>
                            <p>Contact Us</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <div>
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright
                </div>

            </footer>
        </div>
    )
}

export default Footer
