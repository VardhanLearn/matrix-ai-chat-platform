import axios from "axios";
import { useState } from "react";

export default function ChatBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const resp = await axios.post("/api/search", { query });
    setResults(resp.data.results || []);
  };

  return (
    <div>
      <input
        placeholder="Search query..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 10, width: "300px" }}
      />
      <button onClick={search} style={{ padding: 10, marginLeft: 10 }}>
        Search
      </button>

      <pre style={{ marginTop: 20 }}>
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  );
}

