import { FormEvent, FormEventHandler } from "react";
import useUser from "../hooks/useUser";

const UserForm = () => {
  const [firstNameValue, bindFirstName, resetFirstName] = useUser();
  const [lastNameValue, bindLastName, resetLastName] = useUser();
  const onSubmitChangeHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    window.alert(`Hi ${firstNameValue} ${lastNameValue}!`);
    resetFirstName();
    resetLastName();
  };
  return (
    <>
      <form
        onSubmit={onSubmitChangeHandler}
        style={{ border: "2px dotted black" }}
      >
        <label>First Name</label>
        <input type="text" {...bindFirstName}></input>
        <br></br>
        <label>Last Name</label>
        <input type="text" {...bindLastName}></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
