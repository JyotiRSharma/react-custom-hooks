import {Dispatch, SetStateAction} from "react";
import { createContext } from "react";

interface ICountContext {
    count: number;
    setCount: Dispatch<SetStateAction<number>>
}

const CountContext = createContext<ICountContext>({count: 0, setCount: () => {}});

export default CountContext;
