import CardNav from "../ui/card-nav";
import { InView } from "../ui/in-view";

export default function Navbar() {
  return (
    <header className="container mx-auto h-16 max-w-6xl p-4 sticky top-0 z-50">
      <InView>
        <CardNav />
      </InView>
    </header>
  );
}
