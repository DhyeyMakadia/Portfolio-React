import React from 'react'

interface IProps {
  tagId:number;
  TagName: string;
  target: string;
  changeContent: (target: number) => void;
  contentId: number;
}

export default function ContentTag(props: IProps) {
  const {tagId, TagName, target, changeContent, contentId} = props
  return (
    <button
      className={`name ${tagId === contentId && 'name-selected'}`}
      data-target={target}
      onClick={() => { changeContent(parseInt(target)) }}
    >
      {TagName}
    </button>
  )
}

