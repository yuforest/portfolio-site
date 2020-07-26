import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

const SnsLinks = () => {
   library.add(fab)
  return (
    <div>
      <a href="https://twitter.com/yuta_prog" target="_blank">
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          style={{ fontSize: `30px`, color: `#2EA1F2` }}
        />
      </a>
      <a href="https://www.facebook.com/yuta.omori.315" target="_blank">
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          style={{ fontSize: `30px`, color: `#2577E8` }}
        />
      </a>
    </div>
  )
}

export default SnsLinks
