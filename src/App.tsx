import React, { ReactElement, useState, useRef } from "react";

import { PTButton, PTPlate, MyParagraphElement } from "productivitytools.plate";

const initialValue = (content: string) => [
  {
    type: "p",
    children: [
      {
        text: content,
      },
    ],
  },
];

function App() {
  const [content, setContent] = useState(
    JSON.parse(
      '[{"type":"title","children":[{"text":"121"}]},{"type":"unorderedList","children":[{"type":"list-item","children":[{"text":""},{"type":"link","href":"https://cloud.google.com/blog/topics/developers-practitioners/troubleshooting-cloud-functions-connection-issues-cloud-sql-private-ips/","children":[{"text":"Blog "}]},{"text":"opublikowany"}]},{"type":"list-item","children":[{"text":""},{"type":"link","href":"https://www.youtube.com/watch?time_continue=9&v=eSP4Y9fDDkQ&feature=emb_logo&themeRefresh=1","children":[{"text":"Youtube "}]},{"text":"opublikowane"}]},{"type":"list-item","children":[{"text":"Przeprowadziła się do nowego domu, "}]},{"type":"list-item","children":[{"text":"Nie wie jak będzie się komunikować"}]}]}]'
    )
  );

  const setRawContent = (value: string) => {
    let x = initialValue(value);
    setContent(x);
  };

  const [plateValue, setPlateValue] = useState<MyParagraphElement[]>();

  const contentChanged = (e: MyParagraphElement[]) => {
    setPlateValue(e);
  };

  return (
    <div className="App">
      hello2
      <input type="text" onChange={(x) => setRawContent(x.target.value)}></input>
      <PTButton label="click me!"></PTButton>
      <PTPlate content={content} forceResetContent={content}  contentChanged={contentChanged}></PTPlate>
      <span>Raw content changed:{JSON.stringify(plateValue)}</span>
    </div>
  );
}

export default App;
