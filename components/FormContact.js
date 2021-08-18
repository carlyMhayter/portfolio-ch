import { useForm, ValidationError } from "@formspree/react";

const FormContact = () => {
  return (
    <form
      className="form-contact"
      action="https://formspree.io/f/xzbykrqk"
      method="POST"
    >
      <label className="text-tile-text-emp" htmlFor="name">
        <p>Name:</p>
        <input className="form-boxes small-box" name="name" />
      </label>
      <label className="text-tile-text-emp" htmlFor="email">
        <p>Email:</p>
        <input className="form-boxes small-box" name="email" />
      </label>
      <label className="text-tile-text-emp" htmlFor="message">
        Enter Message:
      </label>
      <textarea
        className="form-boxes"
        rows={10}
        name="message"
        id="message"
        defaultValue={"Enter message here."}
      ></textarea>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};
export default FormContact;
