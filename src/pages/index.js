import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import withLocation from "../hooks/withLocation"
import getVideoId from "get-video-id"

const IndexPage = ({ search }) => {
  const { yt } = search
  const [urlParams, setUrlParams] = useState(``)

  const { id } = getVideoId(`${yt}`)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      if (urlParams) {
        setUrlParams(urlParams)
      }
    }
  }, [])

  console.log(urlParams)

  const params = urlParams.toString()
  return (
    <>
      {params.length > 0 ? (
        <div id="video-player">
          <iframe
            title="Youtube PiP"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Layout>
          <Seo title="Home" />
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
          <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
          </p>
        </Layout>
      )}
    </>
  )
}

export default withLocation(IndexPage)
