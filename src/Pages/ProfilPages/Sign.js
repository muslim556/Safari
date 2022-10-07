import React, { useState } from "react";
import "./Profil.css";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Components/Context/DataContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function SignIn() {
  const loginData = useContext(DataContext);
  const signIn = loginData.signIn;
  const setSignIn = loginData.setSignIn;
  const inspection = loginData.inspection;
  const setInspection = loginData.setInspection;

  const [boolin, setBoolin] = useState(false);

  console.log(boolin);
  return (
    <>
      <div id="Account">
        <h1 id="AccountH11">Hello there!</h1>
        <p id="AccountP1">Please sign in or create account to continue</p>
        <div id="MinAccount">
          <div id="SingInAccount">
            <h1>SIGN IN</h1>
            <form
              className="SingInForm"
              onSubmit={(e) => {
                e.preventDefault();
                const signEmail = e.target.email.value;
                const signPassword = e.target.password.value;
                setInspection({ signEmail, signPassword });
              }}
            >
              <label>
                Email
                <input autoComplete="off" type="text" name="email" />
              </label>
              <label id="PasswordInputLabel">
                Password
                <input
                  autoComplete="off"
                  className="PasswordInput"
                  type="password"
                  name="password"
                />
              </label>
              <label id="formChecked">
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
                <p>Remeber my details</p>
              </label>
              <Button className="SinginBtn" type="submit">
                Sign In
              </Button>
              <NavLink id="ForgotPa" to="forgot+password">
                Forgot password?
              </NavLink>
            </form>
          </div>
          <div id="SingInAccount">
            <h1>SIGN IN</h1>
            <form
              className="SingInForm"
              onSubmit={(e) => {
                e.preventDefault();

                const firstName = e.target.firstName.value;
                const lastName = e.target.lastName.value;
                const email = e.target.email.value;
                const createPassword = e.target.createPassword.value;
                const confirmPassword = e.target.confirmPassword.value;

                if (
                  createPassword == confirmPassword &&
                  confirmPassword != ""
                ) {
                  setSignIn({
                    firstName,
                    lastName,
                    email,
                    password: confirmPassword,
                  });
                } else {
                  alert("passwordda xatolik");
                }
              }}
            >
              <label>
                First name
                <input autoComplete="off" type="text" name="firstName" />
              </label>

              <label>
                Last name
                <input autoComplete="off" type="text" name="lastName" />
              </label>

              <label>
                Email
                <input autoComplete="off" type="text" name="email" />
              </label>

              <label>
                Create Password
                <input
                  autoComplete="off"
                  className="PasswordInput"
                  type="password"
                  name="createPassword"
                />
              </label>

              <label id="PasswordInputLabel">
                Confirm Password
                <input
                  autoComplete="off"
                  className="PasswordInput"
                  type="password"
                  name="confirmPassword"
                />
              </label>

              <label id="formChecked">
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
                <p>
                  I want to receive Safari newsletters with the best deals{" "}
                  <br /> and offers
                </p>
              </label>
              <Button className="SinginBtn" type="submit">
                CREATE ACCOUNT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
