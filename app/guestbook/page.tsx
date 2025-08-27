import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { GuestbookSection } from "@/components/sections/guestbook";

export default function GuestbookPage() {
  return (
    <>
      <Navbar />
      <main className="shell mt-20 md:mt-30 space-y-10 md:space-y-20 mb-10 md:mb-20">
        <GuestbookSection />
      </main>
      <Footer />
    </>
  );
}
