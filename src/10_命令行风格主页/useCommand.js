import { useState } from "react";

const useCommand = (commands = {}) => {
  const inputPrefix = "guest/command-style-homepage>";
  const outputPrefix = "hibiki> ";

  const navs = [];
  commands.map((command) => {
    navs.push(command.name);
  });

  const [commandLines, setcommandLines] = useState([
    {
      text: "Frontend Demo Study Homepage",
      type: "command_line",
    },
    {
      text: "",
      type: "blank",
    },
    {
      text: inputPrefix,
      type: "command_line",
    },
  ]);

  const commandExecute = (command) => {
    let newcommandLines = [...commandLines];

    if (command === "ls") {
      newcommandLines[newcommandLines.length - 1].text += "ls";

      newcommandLines.push({ navs: navs, type: "nav" });
      newcommandLines.push({ text: inputPrefix, type: "command_line" });

      setcommandLines(newcommandLines);

      return;
    } else {
      const cmd = commands.find((item) => item.name === command);
      switch (cmd.type) {
        case "link":
          newcommandLines[newcommandLines.length - 1].text += cmd.name;

          newcommandLines.push({
            text: outputPrefix + "Jump to outer page",
            type: "command_line",
          });
          newcommandLines.push({ text: inputPrefix, type: "command_line" });

          setcommandLines(newcommandLines);

          window.open(cmd.link);

          return;
        case "router":
          newcommandLines[newcommandLines.length - 1].text += cmd.name;

          cmd.router.map((item) => {
            newcommandLines.push({
              text: outputPrefix,
              route: item.name,
              path: item.path,
              type: "command_line",
            });
          });
          newcommandLines.push({ text: inputPrefix, type: "command_line" });

          setcommandLines(newcommandLines);

          return;
      }
    }
  };

  return {
    commandLines,
    commandExecute,
  };
};

export default useCommand;
