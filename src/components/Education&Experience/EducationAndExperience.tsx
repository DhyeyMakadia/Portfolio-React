import React, { useEffect, useState } from "react";
import Content from "./Content";
import ContentTag from "./ContentTag";
import { eduData } from "../../utils/edudata";

type Data = {
  id:number
  role:string
  title:string
  link:string
  startDate:string
  endDate:string
  description:string[]
}

let defaultContentData = {
  id:0,
  role:'role',
  title:'title',
  link:'link',
  startDate:'date',
  endDate:'date',
  description:[]
}

export default function EducationAndExperience() {
  const [tags, setTags] = useState<Data[]>([]);
  const [contentData, setContentData] = useState<Data>(defaultContentData); //Display data of selected item
  const [leftBorderStyle, setLeftBorderStyle] = useState<any>({
    transform: "translateY(calc(" + 0 + " * var(--tab-height)))",
  });
  const displayData = eduData.data.filter((n: any) => {
    return n.displayOnSite === true;
  });

  useEffect(() => {
    setTags(displayData);
    setContentData(displayData[0]);
    setLeftBorderStyle({
      transform: "translateY(calc(" + 0 + " * var(--tab-height)))",
    });
    // eslint-disable-next-line
  }, []);

  const changeContent = (target: number) => {
    const FetchData = async (target: number) => {
      setContentData(displayData[target]);
      setLeftBorderStyle({
        transform: "translateY(calc(" + target + " * var(--tab-height)))",
      });
    };
    FetchData(target);
  };

  return (
    <section
      id="experiences"
      className="container px-0 d-flex flex-column justify-content-center"
    >
      <h2 className="heading mb-md-5 mb-3"> Education & Experience</h2>

      <div className="row p-0 mx-2 mx-md-0">
        <div className="col-md-auto pb-3 pb-md-0">
          <div
            className="name-box d-flex flex-row flex-md-column justify-content-md-center"
            data-total="7"
          >
            {tags.map((e: any, index: number) => {
              return (
                <ContentTag
                  key={e["id"]}
                  tagId={e["id"]}
                  contentId={contentData.id}
                  target={index.toString()}
                  TagName={e["tagName"]}
                  changeContent={changeContent}
                />
              );
            })}
            <div style={leftBorderStyle} id="name-highlight"></div>
          </div>
        </div>

        <div className="col">
          {
            <div key={contentData.id}>
              <Content
                id="content"
                role={contentData.role}
                link={contentData.link}
                companyName={contentData.title}
                duration={contentData.startDate + " - " + contentData.endDate}
                description={contentData.description}
              />
            </div>
          }
        </div>
      </div>
    </section>
  );
}