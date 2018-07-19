// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Layout,
  Fill,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Markdown,
  Image
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

// Import theme
import createTheme from "../theme";


// Require CSS
require("normalize.css");

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="darkChocolate">
          <Image display="block" src={require("./assets/images/truffle-logo.svg")} style={{ verticalAlign: 'middle' }} />
          <Heading size={1} lineHeight={1} textColor="pink">
            Chocolate Life
          </Heading>
          <Heading size={4} lineHeight={1} textColor="pink">
            Truffle Tips and Tricks
          </Heading>
        </Slide>
        <Slide transition={[]} bgColor="darkChocolate">
          <Heading size={3} caps lineHeight={1} textColor="pink">
            About Me
          </Heading>
          <Layout>
            <Fill>
              <Image display="block" src={require("./assets/images/me_and_piper_the_cat.jpg")} style={{ verticalAlign: 'middle' }} />
            </Fill>
            <Fill>
              <Text
                textSize="1em"
                textColor="secondary"
                textAlign="left"
                lineHeight={1}
                style={{ verticalAlign: "middle" }}
                margin={10}
              >
                g. nicholas d'andrea<br />
                Truffle Engineering Lead<br />
                @gnidan [
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon icon={faTwitter} />
                ] <br />
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="darkChocolate">
          <Heading textColor="pink" size={4}>
            What to expect
          </Heading>
          <Markdown source={require("raw-loader!./assets/markdown/agenda.md")}> </Markdown>
        </Slide>
        <Slide bgColor="darkChocolate">
          <Heading textColor="pink" size={3}>
            What you need
          </Heading>
          <Markdown source={require("raw-loader!./assets/markdown/requirements.md")}> </Markdown>
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          bgColor="darkChocolate"
          lang="bash"
          code={require("raw-loader!./assets/code/clone.sh")}
          ranges={[
            { loc: [0, 6], title: "Cloning the Sample Project" },
          ]}
          showLineNumbers={false}
        />
        <CodeSlide
          transition={["zoom"]}
          bgColor="darkChocolate"
          lang="bash"
          code={require("raw-loader!./assets/code/next.sh")}
          ranges={[
            { loc: [0, 3], title: "Installing Truffle Next" },
          ]}
          showLineNumbers={false}
        />
        <Slide transition={["zoom"]} bgColor="darkChocolate">
          <Heading size={1} fit caps lineHeight={1} textColor="pink">
            OK! What have we got?
          </Heading>
        </Slide>
        <Slide bgColor="darkChocolate">
          <Heading textColor="pink" size={3}>
            Contents
          </Heading>
          <Markdown source={require("raw-loader!./assets/markdown/contents.md")}> </Markdown>
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          bgColor="darkChocolate"
          lang="js"
          code={require("raw-loader!./assets/code/contracts/RegistryLib.sol")}
          ranges={[
            { loc: [0, 111], title: "RegistryLib" },
            { loc: [0, 2], note: "versioning pragmas" },
            { loc: [1, 2], note: "force Solidity v0.5.0 features" },
            { loc: [3, 4], note: "library definition: reusable behavior module" },
            { loc: [9, 17], note: "data structure: stores records" },
            { loc: [17, 25], note: "individual record: key value pair" },
            { loc: [30, 31], note: "logged when record gets set" },
            { loc: [37, 43], note: "internal set method - called from Solidity" },
            { loc: [44, 45], note: "we use a hash because it has a fixed size" },
            { loc: [45, 46], note: "read record from registry" },
            { loc: [47, 51], note: "initialize new record" },
            { loc: [52, 57], note: "save record info" },
            { loc: [58, 59], note: "log event" },

            { loc: [61, 68], note: "internal get method - called from Solidity" },
            { loc: [69, 70], note: "read from storage" },
            { loc: [70, 74], note: "error if record doesn't exist" },

            { loc: [76, 80], note: "size method - num records in registry" },
            { loc: [84, 88], note: "list method - enumerate records" },
            { loc: [102, 106], note: "helper method to compute hash" },
          ]}
        />
        <CodeSlide
          transition={["zoom"]}
          bgColor="darkChocolate"
          lang="js"
          code={require("raw-loader!./assets/code/contracts/Registrar.sol")}
          ranges={[
            { loc: [0, 110], title: "Registrar" },
            { loc: [0, 2], note: "versioning pragmas" },
            { loc: [1, 2], note: "force Solidity v0.5.0 features" },
            { loc: [3, 4], note: "import library source" },
            { loc: [5, 6], note: "contract definition: stores named registries" },
            { loc: [6, 7], note: "provides library behavior for Registry data structure" },
            { loc: [9, 11], note: "uses bytes32 hash for fixed size" },
            { loc: [17, 23], note: "public set method - called from JS" },
            { loc: [24, 25], note: "compute hash - reuse library getHash() method" },
            { loc: [25, 27], note: "read registry with name" },
            { loc: [27, 28], note: "invoke library set()" },

            { loc: [30, 38], note: "public get method - called from JS" },
            { loc: [39, 40], note: "name -> hash translation" },
            { loc: [40, 42], note: "read registry" },
            { loc: [42, 44], note: "read record - invoke library get()" },
            { loc: [45, 48], note: "convert record to return values" },

            { loc: [50, 54], note: "public size method" },
            { loc: [62, 66], note: "public list method - note index parameter" },
          ]}
        />
        <Slide transition={["zoom"]} bgColor="darkChocolate">
          <Heading size={2} fit lineHeight={1} textColor="pink">
            Step 0: Initial Exploration
          </Heading>
          <Text
            textSize="1em"
            textColor="secondary"
            textAlign="left"
            lineHeight={1}
            style={{ verticalAlign: "middle" }}
            margin={10}
          >
            In a terminal, run <code>truffle develop</code>. <br />
            Then:<br />
              <code>truffle(develop)> migrate</code><br />
              <code>truffle(develop)> let reg = await Registrar.deployed()</code><br />
              <code>truffle(develop)> reg.set("gnidan", "current-location",</code><br />
              <code>                          "dappcon")</code><br /><br />
            Let's try debugging this transaction.

          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkChocolate">
          <Heading size={2} fit lineHeight={1} textColor="pink">
            Step 1: Run Tests
          </Heading>
          <Text
            textSize="1em"
            textColor="secondary"
            textAlign="left"
            lineHeight={1}
            style={{ verticalAlign: "middle" }}
            margin={10}
          >
            <code>truffle(develop)> test</code><br />
            You should see "4 passing" and "1 pending".<br />
            Let's look at file <code>test/registrar.js</code>
          </Text>
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          bgColor="darkChocolate"
          lang="js"
          code={require("raw-loader!./assets/code/test/registrar.js")}
          ranges={[
            { loc: [0, 51], title: "Registrar Tests" },
            { loc: [34, 35], note: "pending test - remove \".skip\" and rerun test" },
          ]}
        />
        <Slide bgColor="darkChocolate">
          <Heading size={2} fit lineHeight={1} textColor="pink">
            Step 2: Debug and fix failing test
          </Heading>
          <Text
            textSize="1em"
            textColor="secondary"
            textAlign="left"
            lineHeight={1}
            style={{ verticalAlign: "middle" }}
            margin={10}
          >
            Let's update our test to give us some extra information.<br />
            Maybe we can debug and see what's going wrong.
          </Text>
        </Slide>
        <CodeSlide
          transition={["zoom"]}
          bgColor="darkChocolate"
          lang="js"
          code={require("raw-loader!./assets/code/truffle-config.js")}
          ranges={[
            { loc: [0, 13], title: "Quick Aside: truffle-config.js" },
            { loc: [4, 11], note: "uncomment this block to configure eth-gas-reporter, then re-run tests" }
          ]}
        />
        <Slide bgColor="darkChocolate">
          <Heading size={2} fit lineHeight={1} textColor="pink">
            Step 3: Mob Programming!
          </Heading>
          <Text
            textSize="1em"
            textColor="secondary"
            textAlign="left"
            lineHeight={1}
            style={{ verticalAlign: "middle" }}
            margin={10}
          >
            Let's use what we've learned to add some functionality to our
            contract. <br /><br />

            <strong>Task:</strong> Add authorization to Registrar.<br />
            The first account to set a record for a particular registry
            name is the registry's "owner". Only the owner should be able to
            write to that registry henceforth.<br />

            Let's start by writing tests and watching them fail, and proceed
            from there.
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="darkChocolate">
          <Heading size={1} fit caps lineHeight={1} textColor="pink">
            Danke schön!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
