import React from "react";
import Layout from "../../components/Layout";
import Skill from "../../components/Skill";
import ApplicationWindow from "../../components/ApplicationWindow";
import aboutIcon from "../../assets/about.png";
import profilePic from "../../assets/profile.jpeg";
import Image from "next/image";
import logoNext from "../../assets/next-logo.png";
import logoReact from "../../assets/react-logo.png";
import logoMongodb from "../../assets/mongodb-logo.png";
import logoExpress from "../../assets/express-logo.png";
import logoBootstrap from "../../assets/bootstrap-logo.png";
import logoHtml from "../../assets/html-logo.png";
import logoCss from "../../assets/css-logo.png";
import logoJs from "../../assets/javascript-logo.png";
import logoTailwind from "../../assets/tailwind-logo.png";
import logoReactJS from "../../assets/reactjs-logo.png";
import logoNextJS from "../../assets/nextjs-logo.png";
import logoMongo from "../../assets/mongodb.png";
import logoCPP from "../../assets/c++-logo.png";
import logoPython from "../../assets/python.png";
import logoFigma from "../../assets/figma-logo.png";
import Link from "next/link";

function about() {
  return (
    <Layout>
      <main>
        <ApplicationWindow iconWindow={aboutIcon} windowTitle={"About"}>
          <section className="profile">
            <div className="profile-pic">
              <Image src={profilePic} />
            </div>
            <div className="profile-desc">
              <h4>O. Riastanjung</h4>
              <h5>Frontend Developer</h5>
              <p>
                I{"'"}m currently a little intermediate in Front-End Developer.
                I Focusing on ReactJS Career as Frontend Developer . I have
                serious passion for UI Design, Creating Website, Algorithm,
                Problem Solving and High Curiosity at Coding. Let{"'"}s Know
                each other.
              </p>
              <div className="profile-language">
                <Image src={logoMongodb} width={"70px"} height={"20px"} />
                <Image src={logoExpress} width={"70px"} height={"20px"} />
                <Image src={logoReact} width={"70px"} height={"20px"} />
                <Image src={logoNext} width={"70px"} height={"20px"} />
                {/* <Image src={logob} width={"70px"} height={'20px'}/> */}
              </div>
              <Link href={'/contact'}>Get Connected with Me</Link>
            </div>
          </section>
          <section className="profile-skill">
            <div className="skills-title">
              <h6>Skill and Language</h6>
            </div>
            <section className="skills">
              <Skill srcSkillImg={logoHtml} title="HTML" level={"Advance"} />
              <Skill srcSkillImg={logoCss} title="CSS" level={"Intermediate"} />
              <Skill
                srcSkillImg={logoJs}
                title="Javascript"
                level={"Intermediate"}
              />
              <Skill
                srcSkillImg={logoBootstrap}
                title="Bootstrap 5"
                level={"Intermediate"}
              />
              <Skill
                srcSkillImg={logoReactJS}
                title="ReactJs"
                level={"Intermediate"}
              />
              <Skill
                srcSkillImg={logoNextJS}
                title="NextJS"
                level={"Intermediate"}
              />
              <Skill
                srcSkillImg={logoTailwind}
                title="Boo"
                level={"Beginner"}
              />
              <Skill
                srcSkillImg={logoMongo}
                title="Mongodb"
                level={"Beginner"}
              />
              <Skill srcSkillImg={logoCPP} title="C++" level={"Intermediate"} />
              <Skill
                srcSkillImg={logoPython}
                title="Python"
                level={"Intermediate"}
              />
              <Skill
                srcSkillImg={logoFigma}
                title="Figma"
                level={"Intermediate"}
              />
            </section>
          </section>
        </ApplicationWindow>
      </main>
    </Layout>
  );
}

export default about;
