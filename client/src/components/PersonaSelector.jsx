import { useChat } from "../context/ChatContext";

const personas = [
  {
    id: "hitesh",
    name: "Hitesh Choudhary",
  },
  {
    id: "piyush",
    name: "Piyush Garg",
  },
];

function PersonaSelector() {
  const { persona, setPersona } = useChat();

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
      <label htmlFor="persona" className="text-sm font-medium text-slate-300">
        Persona
      </label>

      <select
        id="persona"
        value={persona}
        onChange={(e) => setPersona(e.target.value)}
        className="
          rounded-lg
          border
          border-slate-700
          bg-slate-800
          px-3
          py-2
          text-sm
          text-white
          outline-none
          focus:border-blue-500
        "
      >
        {personas.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PersonaSelector;
