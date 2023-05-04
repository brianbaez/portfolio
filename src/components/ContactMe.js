import React from "react";

// Components

function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();

    var form = document.getElementById("my-form");
    var status = document.getElementById("my-form-status");
    var data = new FormData(e.target);

    fetch(e.target.action, {
      method: form.method,
      body: data,
      headers: {
        "Accept": "application/json"
      }
    })
    .then((res) => {
      if(res.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      }
      else {
        res.json().then((data) => {
          if(Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"].map((error) => error["message"].join(", "));
          }
          else {
            status.innerHTML = "Oops! There was a problem submitting your form."
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form."
    });
  }

  return (
    <section className="contact" id="contact">
      <div className="container container__contact">
        <h2 className="section__title">Contact</h2>
        <div className="contact__inner-container">
          <div className="contact__prompt">
            <h3>Let's Get In Touch</h3>
            <p>Interested in working together, chatting about some of my work, or geek out over Star Wars?</p>
            <p>Leave a message below and I look forward to meeting you!</p>
          </div>
          <div className="contact__form">
            <form action="https://formspree.io/f/xoqregpk" method="POST" id="my-form" onSubmit={(e) => handleSubmit(e)}>
              <input type="text" name="name" className="name" placeholder="Name" required></input>
              <input type="email" name="email" className="email" placeholder="Email" required></input>
              <textarea name="message" className="message" rows="10" placeholder="Message" required></textarea>
              <button className="submit button" type="submit" name="button">Send</button>
              <p className="status" id="my-form-status"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
