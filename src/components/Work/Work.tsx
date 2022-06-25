import React, { useEffect, useState } from "react";
import Project from "./Project";
import { Projects } from "../../utils/projects";
import Button from "../Button/Button";

export default function Work() {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const allProjects: any = Projects;
  let displayProjects: any = allProjects.records.filter(
    (n: any) => n.displayOnSite === true
  );

  useEffect(() => {
    setData(
      displayProjects.length > 6
        ? displayProjects.slice(0, 6)
        : displayProjects.slice(0, 3)
    );
    setShowMore(false);
    // eslint-disable-next-line
  }, []);

  const handleShowMore = () => {
    if (showMore === true) {
      setData(
        displayProjects.length > 6
          ? displayProjects.slice(0, 6)
          : displayProjects.slice(0, 3)
      );
      setShowMore(false);
    } else {
      setData(displayProjects);
      setShowMore(true);
    }
  };

  return (
    <section
      id="work"
      className="container d-flex flex-column justify-content-center"
    >
      <h2 className="heading mb-5">Some Work I have done</h2>
      <div className="row justify-content-center justify-content-sm-start">
        {data.map((element: any, index: number) => {
          if (element.displayOnSite === true) {
            return (
              <Project
                key={index}
                heading={element.heading}
                isLive={element.isLive}
                liveLink={element.liveLink}
                isOnGithub={element.isOnGithub}
                githubLink={element.githubLink}
                desc={element.desc}
                techUsed={element.techUsed}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="text-center w-100 mt-4">
        <Button
          btnText={showMore ? "Show Less" : "Show More"}
          click={handleShowMore}
          class="morepro"
        />
      </div>
    </section>
  );
}
