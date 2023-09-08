import { useEffect, useState } from "react";

const DocTitleOne = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count ${count}`;
    })
    return (
        <>
        <div>
            <h1>Lets make the title count!</h1>
            <button onClick={() => setCount(count+1)}>Doc title one {count}</button>
        </div>
        </>
    )
}

export default DocTitleOne;