import React from "react";
import Button from "../Button/Button";
import Link from "../Link/Link";

interface IProps {
  post: string;
  companyName: string;
  companyLink: string;
}

export default function Hero(props: IProps) {
  const { post, companyName, companyLink } = props;
  const Resume = () => {
    window.open("/assets/DhyeyMakadia_Resume.pdf", "_blank");
  };

  return (
    <section id="hero" className="container">
      <div className="d-flex flex-column justify-content-center hero-content">
        <div className="line1 mb-3">Hi, my name is</div>
        <div className="line2">
          <h1 className="animate__animated animate__flash">
            Dhyey Makadia
          </h1>
        </div>
        <div className="line3 mb-3">I am a {post}</div>
        <div className="line4">
          I am a software engineer and highly passionate about programming,
          logic building & web development. Currently, I'm enrolled for
          developing web techs at&nbsp;
          <Link url={companyLink} name={companyName}/>
          .
        </div>
        <div>
          <Button click={Resume} btnText="Resume" class="mt-4" />
        </div>
      </div>
    </section>
  );
}
