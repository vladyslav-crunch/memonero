import React, { useEffect, useRef, useState } from "react";
import { Deck } from "../../../utils/firebase/deck";
import {
  DropdownOption,
  DropdownOptions,
  DropdownWrapper,
  StyledSelect,
} from "./decks-dropdown.style";
import { useNavigate } from "react-router-dom";

type DecksDropdownProps = {
  decks: Deck[];
};

const DecksDropdown: React.FC<DecksDropdownProps> = ({ decks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelect = (value: Deck) => {
    setSelectedValue(value.deckName);
    let path = "/cardlist/" + value.id;
    navigate(path);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      {" "}
      <StyledSelect onClick={() => setIsOpen((prev) => !prev)}>
        {selectedValue || "Select a Deck"}
      </StyledSelect>
      {isOpen && (
        <DropdownOptions>
          {decks.map((deck, index) => (
            <DropdownOption key={index} onClick={() => handleSelect(deck)}>
              {deck.deckName}
            </DropdownOption>
          ))}
        </DropdownOptions>
      )}
    </DropdownWrapper>
  );
};

export default DecksDropdown;
