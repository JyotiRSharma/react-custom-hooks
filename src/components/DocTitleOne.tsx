import { useContext } from "react";
import useDocTitle from "../hooks/useDocTitle";
import CountContext from "../contexts/CountContext";

const DocTitleOne = () => {
  const {count, setCount} = useContext(CountContext);
  useDocTitle(count);
  return (
    <>
      <div>
        <h1>Lets make the title count x5!</h1>
        <button onClick={() => setCount(count + 5)}>
          Doc title one {count}
        </button>
      </div>
    </>
  );
};

export default DocTitleOne;
