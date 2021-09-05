import React from "react";
import Code from "react-code-prettify";

const code = `
import React, { useState } from 'react';

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      You clicked {count} times
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`;

function CodeView() {
  return (
    <div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeView;
