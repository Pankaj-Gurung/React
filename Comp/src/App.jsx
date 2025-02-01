import React, { useState, useRef, useEffect } from "react";
import Button from "./components/ButtonComp/Button";
import RippleButton from "./components/ButtonComp/RippleButton";
import Loader from "./components/ButtonLoaderComponent/Loader";
import ChildComponent from "./components/LoaderComp/childcomponent/ChildComponent";
import LoaderComp from "./components/LoaderComp/loader/LoaderComp";
import InputField from "./components/InputFieldComponent/InputField";
import TextArea from "./components/InputFieldComponent/TextArea";
import SearchField from "./components/InputFieldComponent/SearchField";
import { FaDeleteLeft } from "react-icons/fa6";
import "./index.css";

const App = () => {
  const Ref = useRef(null);

  useEffect(() => {
    if (Ref.current) {
      Ref.current.focus();
    }
  }, []);

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const clearSearchButton = () => {
    setSearch("");
  };

  const clearTextButton = () => {
    setText("");
  };

  const clearDateButton = () => {
    setDate("");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length >= 0 && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setDate(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleLogin = () => {
    alert("Login Successful");
  };

  const handleSignup = () => {
    alert("SignUp Successful");
  };

  return (
    <>
      <div className="appbuttoncontainer">
        <div className="Button-Component">
          <h1>Button Component</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                maxWidth: "800px",
              }}
            >
              <Button
                title="Title Prop"
                style={{ backgroundColor: "#949497" }}
                variant="text"
              />
              <Button
                title="Style Prop"
                style={{ backgroundColor: "#000000", fontSize: "17px" }}
              />
              <Button style={{ backgroundColor: "#949497" }}>
                Children Prop
              </Button>
              <Button
                title="Click Me!"
                onClick={() => {
                  alert("This is onClick Prop");
                }}
                style={{ backgroundColor: "#949497" }}
              />

              <Button
                title="Login"
                onClick={handleLogin}
                color="success"
                variant="outlined"
              />

              <Button title="SignUp" onClick={handleSignup} color="info" />

              <Button
                title="TextStyleProp"
                textStyle={{ fontWeight: "bold", fontSize: "20px" }}
                style={{ backgroundColor: "#949497" }}
              />
              <Button
                title="TextStyleProp"
                textStyle={{ fontStyle: "italic", fontSize: "20px" }}
                style={{ backgroundColor: "#949497" }}
              />
              <Button
                title="Custom Text Style"
                textStyle={{
                  fontFamily: "Courier New",
                  textTransform: "uppercase",
                }}
                style={{ backgroundColor: "#949497" }}
              />

              <Button title=" Primarsady " variant="contained" />
              <Button title=" Secondary " color="secondary" />
              <Button title=" Success " color="success" />
              <Button title=" Error " color="error" />
              <Button title=" Default " color="default" />
              <Button title=" Warning " color="warning" />
              <Button title=" Info " color="info" />

              <Button title="Contained Variant" variant="contained" />
              <Button title="Outlined Variant" variant="outlined" />
              <Button title="Text Variant" variant="text" />

              <Button title="Primary Text" color="primary" variant="text" />
              <Button title="Secondary Text" color="secondary" variant="text" />
              <Button title="Success Text" color="success" variant="text" />
              <Button title="Error Text" color="error" variant="text" />
              <Button title="Default Text" color="default" variant="text" />

              <RippleButton
                title="RippleButton"
                variant="contained"
              ></RippleButton>

              <Button title="Submit" loading={true} color="primary"></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="appbuttonloadercontainer">
        <div className="loaderButtonComponent">
          <h1>Loader Button Component</h1>
          <Loader title="Post" className="loader-button-comp" />
        </div>
      </div>
      <div className="apploadercomponent">
        <div className="loadercomponent">
          <h1>Loader Component</h1>
          <LoaderComp variant="three" loading={true}>
            <ChildComponent />
          </LoaderComp>

          <LoaderComp title="Button" variant="three" />
          <LoaderComp title="Button" variant="four" />
        </div>
      </div>

      <div className="appinputfieldcontainer">
        <div className="inputfieldcontainer">
          <h1>InputField Form</h1>
          <InputField
            name="username"
            placeholder="User Name"
            label="User Name"
            value={username}
            onChange={handleUsernameChange}
            type="text"
            ref={Ref}
            minLength={3}
            maxLength={20}
          />

          <InputField
            name="phonenumber"
            placeholder="Phone Number"
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type="text"
          />

          <InputField
            name="date"
            label="Date"
            value={date}
            onChange={handleDateChange}
            type="date"
            leftAdorn="Date"
            rightAdorn={<FaDeleteLeft />}
            clear={clearDateButton}
          />

          <InputField
            name="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email"
          />

          <TextArea
            name="text"
            label="Text Area"
            rightAdorn={<FaDeleteLeft />}
            value={text}
            onChange={handleTextChange}
            clear={clearTextButton}
            minLength={10}
            maxLength={30}
          />

          <SearchField
            name="search"
            label="Search Field"
            placeholder="Search..."
            leftAdorn="Search"
            rightAdorn={<FaDeleteLeft />}
            onChange={handleSearchChange}
            value={search}
            clear={clearSearchButton}
          />
        </div>
      </div>
    </>
  );
};

export default App;
