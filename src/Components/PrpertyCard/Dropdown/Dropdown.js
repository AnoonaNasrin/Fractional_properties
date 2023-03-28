import React, { useState } from "react";
import { Dropdown, Form, DropdownButton } from "react-bootstrap";

import "./Drop.css";

import { Slider, TextField } from "@mui/material";

const DropdownField = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState("");

  const value = [0, 5000];

  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    // onSortChange(sortOption);
  };

  const handleCityChange = (event) => {
    const value = [0, 5000];
    setSelectedCity(value);
  };

  const [selectedOption, onSelectedOptionChange] = useState(options[0]);

  const [range, setRange] = useState(value);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newRange) => {
    setRange(newRange);
    // onChange(newRange);
  };

  const handleSelect = (event) => {
    setOpen(false);
    setRange(event.target.value);
    // onChange(event.target.value);
  };

  return (
    <>
      <div className="filter">
        <div className="filter-text">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="city-dropdown">
              Select city
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <input
                  type="radio"
                  value="Alibaug"
                  checked={selectedCity === "Alibaug"}
                  onChange={handleCityChange}
                />{" "}
                Alibaug
              </Dropdown.Item>
              <Dropdown.Item>
                <input
                  type="radio"
                  value="Goa"
                  checked={selectedCity === "Goa"}
                  onChange={handleCityChange}
                />{" "}
                Goa
              </Dropdown.Item>
              <Dropdown.Item>
                <input
                  type="radio"
                  value="Nilgiris"
                  checked={selectedCity === "Nilgiris"}
                  onChange={handleCityChange}
                />{" "}
                Nilgiris
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="city-dropdown">
              Select price
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Slider
                    value={range}
                    onChange={handleChange}
                    min={value[0]}
                    max={value[value.length - 1]}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                    style={{ marginBottom: 16 }}
                  />
                  <div style={{ display: "flex" }}>
                    <TextField
                      label="Min"
                      value={range[0]}
                      onChange={(event) =>
                        handleChange(event, [
                          Number(event.target.value),
                          range[1],
                        ])
                      }
                      type="number"
                      inputProps={{
                        min: value[0],
                        max: value[value.length - 1],
                        step: 1,
                      }}
                      style={{ marginRight: 8 }}
                    />
                    <TextField
                      label="Max"
                      value={range[1]}
                      onChange={(event) =>
                        handleChange(event, [
                          range[0],
                          Number(event.target.value),
                        ])
                      }
                      type="number"
                      inputProps={{
                        min: value[0],
                        max: value[value.length - 1],
                        step: 1,
                      }}
                      style={{ marginLeft: 8 }}
                    />
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={(eventKey) => onSelectedOptionChange(eventKey)}>
            <Dropdown.Toggle
              variant="outline-secondary"
              id="dropdown-radio"
              className="d-flex align-items-center justify-content-between"
            >
              {selectedOption}
            </Dropdown.Toggle>

            <Dropdown.Menu show={isOpen}>
              {options.map((option, index) => (
                <Dropdown.Item key={index} eventKey={option}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>{option}</span>
                    {selectedOption === option && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.853 3.146a.5.5 0 0 1 0 .708L6.707 10l6.146 6.146a.5.5 0 0 1-.708.708L6 10.707l-6.146 6.147a.5.5 0 0 1-.708-.708L5.293 10 .147 3.854a.5.5 0 0 1 .708-.708L6 9.293l6.146-6.147a.5.5 0 0 1 .708 0z" />
                      </svg>
                    )}
                  </div>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <DropdownButton id="dropdown-sortby" title={`Sort by: ${sortBy}`}>
            <Dropdown.Item
              onClick={() => handleSortChange("lowest")}
              active={sortBy === "lowest"}
            >
              Price: Lowest to Highest
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleSortChange("highest")}
              active={sortBy === "highest"}
            >
              Price: Highest to Lowest
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};

const options = ["All Type", "Featured", "New Releases", "Upcoming"];

export default DropdownField;
