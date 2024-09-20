import React from "react";
import { SearchBoxContainer, SearchBoxInput } from "./search-box.styles";

const SearhBox = ({ onSearch }: any) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChange", e.target.value);
    onSearch(e.target.value);
  };
  return (
    <SearchBoxContainer>
      <SearchBoxInput
        type={"text"}
        onChange={onChangeHandler}
        placeholder={"Search"}
      />
    </SearchBoxContainer>
  );
};

export default SearhBox;
