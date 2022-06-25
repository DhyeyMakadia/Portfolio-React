import React from 'react'

export default function Footer() {
    return (
        <footer id="footer" className="page-footer font-small special-color-dark pt-4 canAlsoBlur">

            {/* Footer Elements */}
            <div className="container">

                {/* Social buttons */}
                <ul className="list-unstyled list-inline text-center mb-0 d-md-none">
                    <li className="list-inline-item">
                        <a href='https://www.instagram.com/_dhyey_24_/' target='_blank' rel="noreferrer" className="btn-floating btn-instagram mx-1">
                            <i className="fab fa-instagram"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href='https://www.linkedin.com/in/dhyey-makadia' target='_blank' rel="noreferrer" className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href='https://github.com/DhyeyMakadia' target='_blank' rel="noreferrer" className="btn-floating btn-github mx-1">
                            <i className="fab fa-github"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href='https://twitter.com/Dhyey_Makadia' target='_blank' rel="noreferrer" className="btn-floating btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href='https://www.facebook.com/dhyey.patel.16503' target='_blank' rel="noreferrer" className="btn-floating btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                </ul>

            </div>

            {/* Copyright */}
            <div className="footer-copyright text-center py-3">
                <a href="https://github.com/DhyeyMakadia" className=" d-inline-block">Designed and Built by Dhyey Makadia
                    <div className="git-stats d-none">
                        <span className="mr-3">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                <title>Star</title>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                            </svg>
                            <span className='pl-1'>100</span>
                        </span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-branch">
                                <title>Git Fork</title>
                                <line x1="6" y1="3" x2="6" y2="15"></line>
                                <circle cx="18" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M18 9a9 9 0 0 1-9 9"></path>
                            </svg>
                            <span className='pl-1'>5</span>
                        </span>
                    </div>
                </a>
            </div>

        </footer>
    )
}
