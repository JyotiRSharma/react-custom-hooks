import { ChangeEvent, useState } from "react";

type UserControl = [
  string,
  { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void },
  () => void
];

const useUser = (): UserControl => {
  const [value, setValue] = useState<string>("");
  const bind = {
    value: value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
  };
  const reset = () => {
    setValue("");
  };
  return [ value, bind, reset ];
};

export default useUser;
