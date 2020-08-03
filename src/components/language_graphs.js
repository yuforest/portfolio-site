import React from "react"
import ProgressSection from "./progress_section"

const languages = {
  japanese: {
    ja: "日本語",
    en: "Japanese"
  },
  english: {
    ja: "英語",
    en: "English"
  },
  chinese: {
    ja: "中国語",
    en: "Chinese",
  },
}
const LanguageGraphs = ({ lang }) => (
  <div style={{ marginTop: `15px` }}>
    <ProgressSection
      percent="100"
      color="#F47064"
      text="Level3"
      title={languages.japanese[lang]}
    ></ProgressSection>
    <ProgressSection
      percent="67"
      color="#018E04"
      text="Level2"
      title={languages.english[lang]}
    ></ProgressSection>
    <ProgressSection
      percent="33"
      color="#2269EA"
      text="Level1"
      title={languages.chinese[lang]}
    ></ProgressSection>
  </div>
)

export default LanguageGraphs
