import React from "react";
import Link from "../Link/Link";

interface IProps {
  id: string;
  role: string;
  link:string;
  companyName: string;
  duration: string;
  description: string[];
}

export default function Content(props: IProps) {
  const { id, role, link, companyName, duration, description } = props;
  return (
    <div id={id} className="content">
      <h3 className="mb-0">
        <span className="role">{`${role} `}</span>
        <span className="company">
          {"@ "}
          <Link url={link} name={companyName}/>
        </span>
      </h3>
      <p className="duration">{duration}</p>
      <ul className="custom-li">
        {description.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

Content.defaultProps = {
  description: [],
};
