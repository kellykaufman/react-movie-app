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
    </>
  );
}
