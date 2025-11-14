"use client"

// third party components
import Image from "next/image"
import Link from "next/link"

// custom components
import Tape from "@/components/tape"
import Base from "@/components/base"
import Paper from "@/components/paper"
import Subtitle from "@/components/subtitle"
import StickyNote from "@/components/sticky-note"
import { GoBackButton } from "@/components/go-back"

// styled components
import { Break, Caption, Card, ResponsiveHandwriting } from "../styled"
import { ResponsiveImageCardContainer } from "./styled"

// svgs
import spotifyCard from "../../../public/svg/spotifyCard.svg"
import techStackByMe from "../../../public/svg/techStackByMe.svg"
import leadershipByMe from "../../../public/svg/leadershipByMe.svg"
import testingAndDocsByMe from "../../../public/svg/testingAndDocsByMe.svg"
import listeningPartiesByMe1 from "../../../public/svg/spotify-svg/1ListeningPartiesByMe.svg"
import merchByMe2 from "../../../public/svg/spotify-svg/2MerchByMe.svg"
import listeningPartiesByMe from "../../../public/svg/spotify-svg/listeningPartiesByMe.svg"
import merchByMe from "../../../public/svg/spotify-svg/merchByMe.svg"
import vinylStats1 from "../../../public/svg/spotify-svg/vinylStats1.svg"
import vinylStats2 from "../../../public/svg/spotify-svg/vinylStats2.svg"
import vinylStats3 from "../../../public/svg/spotify-svg/vinylStats3.svg"
import vinylStats4 from "../../../public/svg/spotify-svg/vinylStats4.svg"
import vinylStats5 from "../../../public/svg/spotify-svg/vinylStats5.svg"
import vinylStats6 from "../../../public/svg/spotify-svg/vinylStats6.svg"
import swipeLeftForMore from "../../../public/svg/swipeLeftForMore.svg"

// pngs
import shopWebiPhone from "../../../public/png/shop_web_mobile.png"
import shopWebDesktop from "../../../public/png/shop_web_desktop.png"

import { spotifyDesktopImages, spotifyMobileImages } from "@/utils/assets"
import { ImageCard } from "@/utils/types"

export default function Spotify() {
  return (
    <Base>
      {/* Section 0: navigate back to home */}
      <GoBackButton />

      {/* Section 1: Spotify card w/ table of contents */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "128px auto",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <Tape top="-12px" left="12px" />
          <Image src={spotifyCard} alt="Spotify card" />
          <div
            style={{
              position: "absolute",
              bottom: "36px",
              left: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Link href="#listening-parties">
              <Image
                src={listeningPartiesByMe1}
                alt="Navigate to Listening Parties content"
              />
            </Link>
            <Link href="#shop-web">
              <Image src={merchByMe2} alt="Navigate to Merch content" />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Listening parties title */}
      <Subtitle
        svg={listeningPartiesByMe}
        alt="Listening Parties introduction"
        id="listening-parties"
        top={32}
        left={12}
      />

      {/* Listening parties content */}

      <Paper small>
        I co-created Listening Parties (LPs), with music playback, live
        interaction and chat, streaming to the main app, and an artist store, to
        enable artists to communicate and earn revenue with thousands of fans at
        once. I accomplished this in under 6 months to enable artists to connect
        with their fans, earn thousands of dollars, and create new streams of
        revenue for Spotify
      </Paper>

      <div style={{ textAlign: "center", marginTop: "64px" }}>
        <div style={{ display: "inline-block", margin: "4px auto" }}>
          <Image
            style={{ margin: "8px" }}
            src={vinylStats1}
            alt="Over 90 LPs conducted"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats2}
            alt="Over 20,000 fans hosted on the application"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats3}
            alt="95% satisfaction rate amongst attendees"
          />
          <br />

          <p style={{ padding: "0 12px", marginBottom: "64px" }}>
            Ran 90+ LPs, rewarding over 20,000 fans with an opportunity to
            interact with their favorite artists, with 95% satisfied, 60%
            actively engaged
          </p>
          <br />

          <Image
            style={{ margin: "8px" }}
            src={vinylStats4}
            alt="125% average causal lift in streaming in the week following the LP"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats5}
            alt="444% average lift in song saves among attendees on the day of the event"
          />
          <Image
            style={{ margin: "8px" }}
            src={vinylStats6}
            alt="44% average causal lift in users listening to the artist in the week following the event"
          />
          <br />
          <p style={{ padding: "0 12px" }}>
            98% of artists registering a causal lift in streams in the week
            following the LP, with 125% avg. causal lift in streaming in the
            week following the LP and 444% avg. lift in song saves among
            attendees on the day of the event
          </p>
        </div>

        <div style={{ padding: "64px 0", textAlign: "center" }}>
          <div className="scroll-text">
            <ResponsiveHandwriting
              src={swipeLeftForMore}
              alt="Swipe left for more"
              width={178}
            />
          </div>
          <ResponsiveImageCardContainer>
            {spotifyMobileImages.map((mobileImage: ImageCard, i: number) => (
              <div key={i} style={{ margin: "0px 32px", maxWidth: "350px" }}>
                <Card style={{ margin: "20px" }}>
                  <Image
                    src={mobileImage.img}
                    alt={mobileImage.subtitle}
                    width={250}
                  />
                </Card>
                <Caption>
                  <b>{mobileImage.subtitle}: </b>
                  {mobileImage.caption}
                </Caption>
              </div>
            ))}
          </ResponsiveImageCardContainer>
        </div>

        <Break />
        <Break />
        <Break />

        <StickyNote
          svg={techStackByMe}
          alt="Tech stack for LPs"
          top={20}
          left={44}
        />

        <Paper>
          An LP is a single page Next.js app, utilizing React and Typescript
          technologies, with life cycle stages including the RSVP phase, Hype
          phase, Test phase, Live phase, and Ended phase.
          <Break />
          LPs manage data by having clients send HTTP requests to a data layer,
          which then orchestrates all data points to relevant backend micro
          services. All events are then disseminated to all attendees over a
          WebSocket connection, where the client synchronizes all streamed
          content via client level state management system.
          <Break />
          Client state management was built in house, using custom reducers,
          hooks, and providers, to synchronize streamed Spotify playback and
          audio.
        </Paper>

        <div className="scroll-text">
          <ResponsiveHandwriting src={swipeLeftForMore} alt="" width={178} />
        </div>
        <ResponsiveImageCardContainer>
          {spotifyDesktopImages.map((desktopImage: ImageCard, i: number) => (
            <div key={i} style={{ margin: "8px", maxWidth: "350px" }}>
              <Card style={{ margin: "16px" }}>
                <Image
                  src={desktopImage.img}
                  alt="Desktop layout of LP event"
                  width={300}
                />
              </Card>
              <Caption>
                <b>{desktopImage.subtitle}: </b>
                {desktopImage.caption}
              </Caption>
            </div>
          ))}
        </ResponsiveImageCardContainer>

        <Break />
        <Break />
        <Break />

        <StickyNote
          svg={leadershipByMe}
          alt="My leadership role in implementing LPs"
          top={24}
          left={32}
        />

        <Paper>
          One of my key achievements was the planning, design, and
          implementation of a data orchestration layer, that enabled users to
          make purchases directly from their favorite artists. TL;DR, my plan
          involved horizontally slicing the architectural build, to meet tight
          deadlines and still effectively merge old and new backend services
          into one orchestration layer. In addition to improving the user
          experience, this helped Spotify see a notable rise in revenue and
          streams.
          <Break /> I led the demos and QA sessions for LPs, not only within the
          immediate team, but also for hundreds of other Spotifiers, engineering
          directors, and other Spotify leadership.
        </Paper>

        <Break />
        <Break />
        <Break />
        <Break />
        <Break />

        <StickyNote
          svg={testingAndDocsByMe}
          alt="My testing and documentation work for LPs"
          top={24}
          left={24}
        />

        <Paper small>
          These frontend and backend systems were all built using a tech
          principles document that I co-wrote, to guide all engineers towards
          building a well organized, robust, future-proof system of
          repositories.
          <Break />
          The entire repository had over 100k lines of code and had 50% coverage
          in terms of unit tests, synthetic tests, and more.
          <Break /> I wrote documentation for all testing and QA procedures for
          LPs.
        </Paper>
      </div>

      {/* Section 3: Shop web title */}
      <Subtitle
        svg={merchByMe}
        alt="Merch introduction"
        id="shop-web"
        top={42}
        left={96}
      />

      {/* Section 4: shop web content */}

      <div
        style={{
          textAlign: "center",
          padding: "16px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper small>
          I oversaw the deployment and ongoing upkeep of Spotify&apos;s retail
          store, bringing about improvements that benefited millions of users on
          a site that brought in $40 million in income. My work included
          maintenance of the Shopify integration, UTM attribution mapping, user
          behavior instrumentation, and responsive styling.
        </Paper>

        <Break />
        <Break />

        <Card style={{ margin: "20px" }}>
          <Image
            src={shopWebDesktop}
            alt="Desktop view of Spotify's online merch store"
            width={300}
          />
        </Card>
        <Caption style={{ margin: "8px 16px" }}>
          This is what a Spotify user will see upon{" "}
          <a href="https://shop.spotify.com/en/artist/2YZyLoL8N0Wb9xBt1NhZWg/product/good-kid-m-a-a-d-city-cassette">
            navigating to this product page for Kendrick Lamar&apos;s &apos;good
            kid, m.A.A.d city&apos; Cassette on the desktop shop.
          </a>
        </Caption>
        <Card style={{ margin: "28px" }}>
          <Image
            src={shopWebiPhone}
            width={200}
            alt="Mobile view of Spotify's online merch store"
          />
        </Card>
        <Caption style={{ margin: "8px 16px" }}>
          This is what a Spotify user will see upon navigating to{" "}
          <a href="https://shop.spotify.com/en/artist/2YZyLoL8N0Wb9xBt1NhZWg/store?container_platform=">
            Kendrick Lamar&apos;s store{" "}
          </a>
          on mobile.
        </Caption>
      </div>
    </Base>
  )
}
