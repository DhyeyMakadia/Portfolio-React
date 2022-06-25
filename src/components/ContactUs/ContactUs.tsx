import React from "react";
import Button from "../Button/Button";

export default function ContactUs() {
  const handleSayHello = () => {
    window.location.href = "mailto:dj.makadia24@gmail.com";
  };
  return (
    <section
      id="contact"
      className="container d-flex flex-column justify-content-center align-items-center text-center"
    >
      <h5 className="heading"> What's Next?</h5>
      <h1>Get in Touch</h1>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <Button btnText="Say Hello!" click={handleSayHello} class="mt-5" />
    </section>
  );
}
