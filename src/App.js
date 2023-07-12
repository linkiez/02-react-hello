import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import Timer from "./components/Timer";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";

export default function App() {
  const [name, setName] = useState("Fabio");
  const [birthDate, setBirthDate] = useState("1986-02-26");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }


    window.addEventListener("online", () => toggleOnline);
    window.addEventListener("offline", () => toggleOffline);

    return () => {
      window.removeEventListener("online", () => toggleOnline);
      window.removeEventListener("offline", () => toggleOffline);
    }
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentValue => !currentValue);
  }

  return (
    <>
      <Header>Component Header - Projeto React Hello</Header>
      <Main>
        <OnlineOffline isOnline={isOnline}/>
        {showTimer && (<div className="text-right">
          <Timer />
        </div>)}
        <CheckboxInput labelDescription="Mostrar Timer" onCheckboxChange={toggleShowTimer}/>
        <TextInput
          id={getNewId()}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <DateInput
          id={getNewId()}
          labelDescription="Digite a sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          Meu nome é {name} e tenho {getAgeFrom(birthDate)} anos
        </p>
      </Main>
    </>
  );
}
