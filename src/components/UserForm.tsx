import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

const UserForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const onSubmitChangeHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    window.alert(`Hi ${firstName} ${lastName}!`);
  };
  return (
    <>
      <form
        onSubmit={onSubmitChangeHandler}
        style={{ border: "2px dotted black" }}
      >
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
        ></input>
        <br></br>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
