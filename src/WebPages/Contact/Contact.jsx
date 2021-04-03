import "./Contact.css";
import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";
import opinions from "../Images/opinions.svg";
import { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  function setInput(events) {
    const name = events.target.name;
    const value = events.target.value;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function display(events) {
    events.preventDefault();
    alert(
      data.fname +
        " " +
        data.lname +
        ",email:-" +
        data.email +
        ",phone number:-" +
        data.phone +
        " send a message:-" +
        data.message +
        "."
    );
  }

  return (
    <>
      <h1 className="text-center mb-3 mt-5">Contact Us</h1>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 order-2 order-lg-1">
            <form onSubmit={display}>
              <Input
                type="text"
                title="First Name"
                name="fname"
                value={data.fname}
                onChange={setInput}
              />
              <Input
                type="text"
                title="Last Name"
                name="lname"
                value={data.lname}
                onChange={setInput}
              />
              <Input
                type="email"
                title="Email"
                name="email"
                value={data.email}
                onChange={setInput}
              />
              <Input
                type="number"
                title="Phone Number"
                name="phone"
                value={data.phone}
                onChange={setInput}
              />
              <Input
                type="text"
                title="Address"
                name="address"
                value={data.address}
                onChange={setInput}
              />
              <TextArea
                type="text"
                title="Message"
                name="message"
                value={data.message}
                onChange={setInput}
              />
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 order-1 order-lg-2 mb-3">
            <img className="mt-5 img-fluid animated" src={opinions} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
