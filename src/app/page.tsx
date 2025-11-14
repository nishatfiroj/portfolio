"use client"

// third party components
import Image from "next/image"

// custom components
import Base from "@/components/base"
import TarotCard from "@/components/tarot-card"
import Tape from "@/components/tape"

// styled-components
import {
  Card,
  ResponsiveHandwriting,
  ResponsiveSectionOne,
  ResponsiveSelfPortrait,
  ResponsiveTarotContainer,
} from "./styled"

// pngs & svgs
import self from "../../public/png/self.png"
import nishatsPortfolio from "../../public/svg/nishatsPortfolio.svg"
import nishatDescriptor from "../../public/svg/nishatDescriptor.svg"
import koothCard from "../../public/svg/koothCard.svg"
import spotifyCard from "../../public/svg/spotifyCard.svg"
import jupiterCard from "../../public/svg/jupiterCard.svg"
import ncrCard from "../../public/svg/ncrCard.svg"
import clickForMore from "../../public/svg/clickForMore.svg"
import resumeByMe from "../../public/svg/resumeByMe.svg"
import swipeLeftForMore from "../../public/svg/swipeLeftForMore.svg"
import linkedIn from "../../public/svg/linkedIn.svg"
import github from "../../public/svg/github.svg"

// assets
import {
  jupiterWorkExperiences,
  koothWorkExperiences,
  ncrWorkExperiences,
  spotifyWorkExperiences,
  tarotCards,
} from "../utils/assets"
import { TarotCardContent, WorkExperience } from "@/utils/types"
import Paper from "@/components/paper"
import Link from "next/link"

export default function Home() {
  const generateExperiences = (workExperiences: WorkExperience[]) =>
    workExperiences.map((experience: WorkExperience, i: number) => (
      <div key={i} style={{ padding: "4px 0" }}>
        <h4>{experience.title}</h4>
        <p>{experience.description}</p>
      </div>
    ))
  return (
    <Base>
      {/* First section */}
      <ResponsiveSectionOne>
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
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <ResponsiveSelfPortrait src={self} alt="Photo of Nishat (me)" />
              <ResponsiveHandwriting
                src={nishatsPortfolio}
                alt="Nishat's portfolio"
              />
            </Card>
          </div>
          <div style={{ position: "relative" }}>
            <Tape top="-16px" right="0px" />

            <Card>
              <ResponsiveHandwriting
                src={nishatDescriptor}
                alt=""
                width={168}
                height={122}
              />
            </Card>
          </div>
          <Link href="/resume" style={{ position: "relative" }}>
            <Tape top="-16px" right="30px" />

            <Card>
              <ResponsiveHandwriting
                src={resumeByMe}
                alt="Click here for resume"
                width={178}
              />
            </Card>
          </Link>

          <div style={{ position: "relative" }}>
            <Tape top="-16px" left="10px" />

            <Card style={{ justifyContent: "space-around" }}>
              <div>
                <Link
                  href="https://linkedin.com/in/nishatfiroj"
                  aria-label="Linked-In"
                >
                  <ResponsiveHandwriting src={linkedIn} alt="" width={50} />
                </Link>
              </div>
              <div>
                <Link href="https://github.com/nishatfiroj" aria-label="GitHub">
                  <ResponsiveHandwriting src={github} alt="" width={50} />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </ResponsiveSectionOne>

      {/* Second section */}
      <div style={{ padding: "64px 0", textAlign: "center" }}>
        <div className="scroll-text-animation">
          <ResponsiveHandwriting src={swipeLeftForMore} alt="" width={178} />
        </div>
        <ResponsiveTarotContainer>
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
        </ResponsiveTarotContainer>
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
        <Link href="/kooth" style={{ position: "relative" }}>
          <Tape top="-12px" right="12px" />
          <Image src={koothCard} alt="Kooth card" />
          {/* <Image
            src={clickForMore}
            alt="Click to read more"
            style={{
              position: "absolute",
              bottom: 64,
              left: 20,
              transform: "rotate(10deg);",
            }}
          /> */}
        </Link>
        <Paper small>{generateExperiences(koothWorkExperiences)}</Paper>

        <div style={{ padding: "64px 0" }} />

        <Link href="/spotify" style={{ position: "relative" }}>
          <Tape top="-12px" right="12px" />
          <Image src={spotifyCard} alt="Spotify card" />
          <Image
            src={clickForMore}
            alt="Click to read more"
            style={{
              position: "absolute",
              bottom: 64,
              left: 28,
              transform: "rotate(-15deg);",
            }}
          />
        </Link>
        <Paper>{generateExperiences(spotifyWorkExperiences)}</Paper>

        <div style={{ padding: "64px 0" }} />

        <Link href="/jupiter" style={{ position: "relative" }}>
          <Tape top="-12px" left="24px" />
          <Image src={jupiterCard} alt="Jupiter card" />
          <Image
            src={clickForMore}
            alt="Click to read more"
            style={{
              position: "absolute",
              bottom: 64,
              left: 16,
              transform: "rotate(10deg);",
            }}
          />
        </Link>
        <Paper small>{generateExperiences(jupiterWorkExperiences)}</Paper>

        <div style={{ padding: "64px 0" }} />

        <Link href="/ncr" style={{ position: "relative" }}>
          <Tape top="-12px" left="32px" />
          <Image src={ncrCard} alt="Ncr card" />
          <Image
            src={clickForMore}
            alt="Click to read more"
            style={{
              position: "absolute",
              bottom: 64,
              left: 20,
              transform: "rotate(-5deg);",
            }}
          />
        </Link>
        <Paper small>{generateExperiences(ncrWorkExperiences)}</Paper>
      </div>
    </Base>
  )
}
