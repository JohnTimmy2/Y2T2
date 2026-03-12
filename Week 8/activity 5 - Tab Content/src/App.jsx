import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  /**
   * Handle the selection of a new topic
   * @param {string} topic - the topic name
   */
  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  /**
   * Compute the tab content according to the selected topic
   * @returns the tab content - or an empty content if no selected topic
   */
  function tabContent() {
    if (selectedTopic) {
      return (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    } else {
      return <p>Please select a topic.</p>; // Empty tab content
    }
  }

  return (
    <div>
      <Header />
      <main>
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent()}
        </section>
      </main>
    </div>
  );
}

export default App;