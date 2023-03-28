import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  TextField,
} from "@mui/material";

export default function Stoper() {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Personal Information</StepLabel>
          <StepContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            </form>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Account Information</StepLabel>
          <StepContent>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              <Button variant="contained" onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            </form>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Confirmation</StepLabel>
          <StepContent>
            <form onSubmit={handleSubmit}>
              <p>Please review your information:</p>
              <p>{`Name: ${formValues.firstName} ${formValues.lastName}`}</p>
              <p>{`Email: ${formValues.email}`}</p>
              <Button variant="contained" onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
}
