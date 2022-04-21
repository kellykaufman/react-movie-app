import { useState } from "react";

export default function SearchForm() {
  const [searchTitle, setSearchTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      searchTitle,
    };
    console.log("payload is: ", payload);
  }

  return (
    <>
      <form onSubmit={handleSubmit}></form>
      <div className="Form-InputWrapper">
        <label className="Label" htmlfor="Movie Name">
          <b>Movie Name:</b>{" "}
        </label>
        <input
          className="Input"
          name="Movie Name"
          type="text"
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>
      <button type="submit" className="Button">
        submit
      </button>
      <form />
    </>
  );
}
