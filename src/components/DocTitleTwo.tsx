import { useState } from "react";
import useDocTitle from "../hooks/useDocTitle";

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return (
    <>
      <div>
        <h1>Lets make the title count again!</h1>
        <button onClick={() => setCount(count + 1)}>
          Doc title one {count}
        </button>
      </div>
    </>
  );
};

export default DocTitleTwo;
