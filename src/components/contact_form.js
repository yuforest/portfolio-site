import React from "react"
import InputField from "./input_field.js"
import InputArea from "./input_area.js"


const ContactForm = () => (
  <form
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    name="contact"
    style={{ maxWidth: `550px` }}
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <InputField name="name" label="名前" />
    <InputField name="email" label="メールアドレス" />
    <InputArea name="content" label="内容" />
    <button
      style={{
        padding: `10px 20px`,
        border: `none`,
        backgroundColor: `green`,
        color: `white`,
        borderRadius: `10px`,
        fontWeight: `bold`,
      }}
    >
      送信
    </button>
  </form>
)

export default ContactForm
