import Noise from "./components/ui/noise";

export default function Page() {
  return (
    <div className="bg-red-500">
      <h1>Hover over the elements below</h1>
      <button className="cursor-target">Click me!</button>
      <div className="cursor-target">Hover target</div>
    </div>
  );
}
