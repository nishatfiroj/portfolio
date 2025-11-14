"use client"

import { GoBackButton } from "@/components/go-back"
import Subtitle from "@/components/subtitle"

import { ResponsiveiFrame } from "./styled"

import resume from "../../../public/svg/resumeTitleByMe.svg"
import coverLetter from "../../../public/svg/coverLetterTitleByMe.svg"

export default function Resume() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GoBackButton />

      <Subtitle svg={resume} alt="Resume" id="resume" top={50} left={30} />

      <ResponsiveiFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNrywt8nXx3Nl4zOCvHYcFz%2FNishat%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DXkI9SYHhijDRjEui-1"
        allowFullScreen
      ></ResponsiveiFrame>

      <Subtitle
        svg={coverLetter}
        alt="Cover Letter"
        id="cover-letter"
        top={25}
        left={70}
      />

      <ResponsiveiFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNrywt8nXx3Nl4zOCvHYcFz%2FNishat%3Ftype%3Ddesign%26node-id%3D3%253A68%26mode%3Ddesign%26t%3DXkI9SYHhijDRjEui-1"
        allowFullScreen
      ></ResponsiveiFrame>
    </div>
  )
}
