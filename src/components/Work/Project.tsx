import React from 'react'

interface IProps {
    heading: string;
    isLive: boolean;
    liveLink: string;
    isOnGithub: boolean;
    githubLink: string;
    desc: string;
    techUsed: string[];
}

export default function Project(props: IProps) {
    const { heading, isLive, liveLink, isOnGithub, githubLink, desc, techUsed } = props
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mx-3 mx-sm-0 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <div className="d-flex flex-column justify-content-between h-100">
                        <div className="mb-1">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <div><img src="assets/icons/folder.svg" alt="" /></div>
                                <div>
                                    {isOnGithub && <a href={githubLink} className="source-link" target="_blank" rel="noreferrer">
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" role="img"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <title>GitHub</title>
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                    </a>}
                                    {isLive && <a href={liveLink} className="source-link ml-2" target="_blank" rel="noreferrer">
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" role="img"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <title>External Link</title>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                            </path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>}
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="head">{heading}</h4>
                            </div>
                            <div>
                                <p className="desc">
                                    {desc}
                                </p>
                            </div>
                        </div>
                        <div>
                            <ul className="list-unstyled d-flex flex-wrap techs-used">
                                {techUsed.map((element, index) => <li key={index}>{element}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Project.defaultProps = {
    techUsed: []
}