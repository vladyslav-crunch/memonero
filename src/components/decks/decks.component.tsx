import { useState } from "react";
import { DecksWrapper, DecksHeader } from "./decks.styles.component";
import { ReactComponent as FilterIcon } from "../../assets/icons/fliter-icon.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/plus-icon.svg";

import DecksList from "../decks-list/decksList.component";
import DecksModalsGroup from "../decks-modals-group/decks-modals-group";

const Decks = () => {
  const [shouldRefetchDecksTrigger, setShouldRefetchDecksTrigger] = useState<boolean>(false);
  const [isShowDeckCreateModalWindow, setIsShowDeckCreateModalWindow] = useState<boolean>(false);

  return (
    <>
      <DecksWrapper>
        <DecksHeader>
          <div>
            <h2>My decks</h2>
          </div>
          <div style={{ display: "flex" }}>
            <FilterIcon />
            <AddIcon onClick={() => setIsShowDeckCreateModalWindow(prevState => !prevState)} />
          </div>
        </DecksHeader>
        <DecksList shouldRefetchDecksTrigger={shouldRefetchDecksTrigger} />
        <DecksModalsGroup
          isShowDeckCreateModalWindow={isShowDeckCreateModalWindow}
          setIsShowDeckCreateModalWindow={setIsShowDeckCreateModalWindow}
          setShouldRefetchDecksTrigger={setShouldRefetchDecksTrigger}
        />
      </DecksWrapper>
    </>
  );
};

export default Decks;
