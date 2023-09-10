import { useContext } from "react";
import useDocTitle from "../hooks/useDocTitle";
import CountContext from "../contexts/CountContext";

const DocTitleTwo = () => {
  const {count, setCount} = useContext(CountContext);
  useDocTitle(count);
  return (
    <>
      <div>
        <h1>Lets make the title count again x10!</h1>
        <button onClick={() => setCount(count + 10)}>
          Doc title one {count}
        </button>
      </div>
    </>
  );
};

export default DocTitleTwo;
