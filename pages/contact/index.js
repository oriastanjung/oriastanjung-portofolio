import React from "react";
import Layout from "../../components/Layout";
import ApplicationWindow from "../../components/ApplicationWindow";
import contactIcon from "../../assets/contact.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactItem from "../../components/ContactItem";
import logoLinkedin from "../../assets/linkedin-logo.jpeg"
import logoGmail from "../../assets/gmail-logo.png";
import logoGithub from "../../assets/github-logo.png"
import logoInstagram from "../../assets/instagram-logo.png"
function contact() {
  return (
    <Layout>
      <main>
        <ApplicationWindow iconWindow={contactIcon} windowTitle={"Contact"}>
          <div className="container">
            <h1 className="text-white fs-4 text-center mt-2 ">
              Lets Get Connected
            </h1>
            <div className="container d-flex flex-column gap-2">
              <ContactItem
                img={logoGmail}
                desc={"Gmail"}
                href={"mailto:oriastan999@gmail.com"}
                value={"oriastan999@gmail.com"}
              />
              <ContactItem
                img={logoLinkedin}
                desc={"Linkedin"}
                href={"https://www.linkedin.com/in/oriastanjung/"}
                value={"O. Riastanjung"}
              />
              <ContactItem
                img={logoGithub}
                desc={"Github"}
                href={"https://github.com/oriastanjung"}
                value={"oriastanjung"}
              />
              <ContactItem
                img={logoInstagram}
                desc={"Instagram"}
                href={"https://www.instagram.com/orias__027/"}
                value={"@orias__027"}
              />
            </div>
          </div>
        </ApplicationWindow>
      </main>
    </Layout>
  );
}

export default contact;
