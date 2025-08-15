import { useState } from "react";
import { Loader } from "./components/loader";
import { Experience } from "./components/experience";

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <main>
      {loading ? (
        <Loader loading={loading} setLoading={setLoading} />
      ) : (
        <Experience />
      )}
    </main>
  );
}
