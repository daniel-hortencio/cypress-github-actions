import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        data-cy="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p data-cy="p">{input}</p>

      <button>Botão Editado</button>
    </div>
  );
};

export default Home;
