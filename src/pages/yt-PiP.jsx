import querystring from "query-string"
import React, { useState, useCallback } from "react"

import withLocation from "../hooks/withLocation"
import { arrayParams } from "../hooks/arrayParams"
// import getVideoId from "get-video-id"

const Code = ({ code, ...props }) => (
  <pre {...props}>{JSON.stringify(code, null, 2)}</pre>
)

const YoutubePiP = ({ search }) => {
  const { yt } = search
  // const [searchParams, setSearchParams] = useState(
  //   "implicit&explicit=1&foo[]=1&foo[]=2"
  // )
  const [searchParams, setSearchParams] = useState({ yt })

  // const { searchURL } = window.location
  // const query = new URLSearchParams(searchURL).get("yt")
  // const [searchQuery, setSearchQuery] = useState(query || "")

  // const { id } = getVideoId(searchParams)

  const onInputChange = useCallback(ev => {
    setSearchParams(ev.target.value)
  }, [])

  return (
    <div className="App">
      <h1>URLSearchParams vs. query-string</h1>
      <div>
        <p>Youtube URL: {yt}</p>
        {/* <p>Video ID: {id}</p> */}
      </div>
      <p>
        <em>Note:</em> URLSearchParams is using a{" "}
        <a
          href="https://codesandbox.io/s/using-urlsearchparams-tflmb?file=/src/arrayParams.ts"
          target="_blank"
          rel="noreferrer noopener"
        >
          custom function
        </a>{" "}
        to resolve array parameters.
      </p>
      <form>
        <label htmlFor="search">Change me</label>
        <input
          id="search"
          type="text"
          value={searchParams}
          onChange={onInputChange}
        />
      </form>
      <div>
        <h2>URLSearchParams</h2>
        <Code code={arrayParams(new URLSearchParams(searchParams))} />
      </div>
      <div>
        <h2>query-string</h2>
        <Code
          code={querystring.parse(searchParams, { arrayFormat: "bracket" })}
        />
      </div>
    </div>
  )
}

export default withLocation(YoutubePiP)
