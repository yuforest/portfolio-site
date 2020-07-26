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
    <InputField name="name" label="Name" />
    <InputField name="email" label="Email" />
    <InputField name="subject" label="Subject" />
    <InputArea name="content" label="Content" />
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
      Send
    </button>
  </form>
)

export default ContactForm
