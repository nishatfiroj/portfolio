"use client"

// third party components
import Image from "next/image"

// custom components
import Base from "@/components/base"
import TarotCard from "@/components/tarot-card"
import Tape from "@/components/tape"

// styled-components
import { Card } from "./styled"

// pngs & svgs
import self from "../../public/self.png"
import nishatsWorkspace from "../../public/svg/nishatsWorkspace.svg"
import fullstackDevStamp from "../../public/svg/fullstackDevStamp.svg"
import webDevStamp from "../../public/svg/webDevStamp.svg"
import systemDesignerStamp from "../../public/svg/systemDesignerStamp.svg"
import spotifyCard from "../../public/svg/spotifyCard.svg"
import jupiterCard from "../../public/svg/jupiterCard.svg"
import ncrCard from "../../public/svg/ncrCard.svg"

// assets
import {
  jupiterWorkExperiences,
  ncrWorkExperiences,
  spotifyWorkExperiences,
  tarotCards,
} from "../utils/assets"
import { TarotCardContent, WorkExperience } from "@/utils/types"
import Paper from "@/paper"

export default function Home() {
  const generateExperiences = (workExperiences: WorkExperience[]) =>
    workExperiences.map((experience: WorkExperience, i: number) => (
      <div key={i}>
        <h6>{experience.title}</h6>
        <p>{experience.description}</p>
      </div>
    ))
  return (
    <Base>
      {/* First section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "600px",
          margin: "16px",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <Tape top="-16px" />
            <Card>
              <Image
                src={self}
                alt="Photo of Nishat (me)"
                width={120}
                height={140}
              />
            </Card>
          </div>
          <div style={{ position: "relative" }}>
            <Tape top="-16px" right="0px" />

            <Card>
              <Image src={nishatsWorkspace} alt="Nishat's workspace" />
            </Card>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxWidth: "104px",
            justifyContent: "center",
          }}
        >
          <Image
            src={fullstackDevStamp}
            alt="Fullstack developer"
            width={104}
            height={104}
          />
          <Image
            src={webDevStamp}
            alt="Web developer"
            width={104}
            height={104}
          />
          <Image
            src={systemDesignerStamp}
            alt="System designer"
            width={104}
            height={104}
          />
        </div>
      </div>

      {/* Second section */}
      <div style={{ padding: "64px 0" }}>
        <div>
          <p style={{ opacity: "40%", textAlign: "center" }}>
            ...swipe left for more
          </p>
        </div>
        <div
          style={{
            display: "flex",
            overflow: "scroll",
            gap: "48px",
            padding: "0 48px",
            scrollSnapType: "x mandatory",
          }}
        >
          {tarotCards.map((tarotCard: TarotCardContent, i: number) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TarotCard
                svg={tarotCard.svg}
                altText={tarotCard.altText}
                yearsOfExperience={tarotCard.yearsOfExperience}
                githubLinks={tarotCard.githubLinks}
                quote={tarotCard.quote}
              />
              <div style={{ position: "relative" }}>
                <p
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: tarotCard.labelSvg?.width,
                  }}
                >
                  <Image
                    src={tarotCard.labelSvg!}
                    alt={`${tarotCard.altText}, handwritten`}
                  />
                </p>
                <Tape large />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "64px 0",
        }}
      >
        <Image src={spotifyCard} alt="Spotify card" />
        <Paper large>{generateExperiences(spotifyWorkExperiences)}</Paper>

        <div style={{ padding: "64px 0" }} />

        <Image src={jupiterCard} alt="Jupiter card" />
        <Paper>{generateExperiences(jupiterWorkExperiences)}</Paper>

        <div style={{ padding: "64px 0" }} />

        <Image src={ncrCard} alt="Ncr card" />
        <Paper>{generateExperiences(ncrWorkExperiences)}</Paper>
      </div>
    </Base>
  )
}
