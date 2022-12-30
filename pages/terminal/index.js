import React, { useRef, useState, useEffect } from "react";
import ApplicationWindow from "../../components/ApplicationWindow";
import Layout from "../../components/Layout";
import Item from "../../components/Item";
import terminalIcon from "../../assets/terminal.png";
import aboutIcon from "../../assets/about.png";
import projectsIcon from "../../assets/projects.png";
import certificatesIcon from "../../assets/certificates.png";
import contactIcon from "../../assets/contact.png";
import { useRouter } from "next/router";
// import { useState, useRef } from "react";

function Terminal() {
  const router = useRouter();

  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      let newOutput =
        output + "users~Web~Apps:~ oriastanjung$ " + command + "\n";
      if (command === "help") {
        newOutput += `clear : clear all history command
        user : show user active
        print text_here : print text_here to terminal 
        `;
      } else if (command === "clear") {
        newOutput = "";
      } else if (command === "user") {
        newOutput += "User active currently is : ~oriastanjung \n";
      } else if (command.includes("print")) {
        let indexOfPrint = command.indexOf("print");
        if (indexOfPrint != 0) {
          newOutput += "Erorr in " + command + "\n";
        } else {
          let res = command.slice(indexOfPrint + 6);
          newOutput += `${res} \n`;
        }
      } else {
        newOutput += "No  found\n";
      }
      setOutput(newOutput);
      setCommand("");
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Layout>
      <main className="d-flex flex-row-reverse justify-content-between">
        <section className="items">
          <div className="one-items-column">
            <Item
              title="Terminal"
              imgSource={terminalIcon}
              onClick={() => {
                router.push("/terminal");
              }}
            />
          </div>
          <div className="four-items-column">
            <Item
              title="About"
              imgSource={aboutIcon}
              onClick={() => {
                router.push("/about");
              }}
            />
            <Item
              title="Projects"
              imgSource={projectsIcon}
              onClick={() => {
                router.push("/projects");
              }}
            />
            <Item
              title="Certificates"
              imgSource={certificatesIcon}
              onClick={() => {
                router.push("/certificates");
              }}
            />
            <Item
              title="Contact"
              imgSource={contactIcon}
              onClick={() => {
                router.push("/contact");
              }}
            />
          </div>
        </section>
        <ApplicationWindow
          isTerminal
          iconWindow={terminalIcon}
          windowTitle={"Terminal"}
        >
          <div
            className="px-4 pt-3 terminal"
            onClick={(e) => inputRef.current.focus()}
          >
            {output && <div className=" terminal-output w-100">{output}</div>}
            <span className="text-white d-flex  terminal-input">
              <p className="">users~Web~Apps:~ oriastanjung$ </p>
              <input
                ref={inputRef}
                type="text"
                name=""
                id=""
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleSubmit}
              />
            </span>
          </div>
        </ApplicationWindow>
      </main>
    </Layout>
  );
}

export default Terminal;
