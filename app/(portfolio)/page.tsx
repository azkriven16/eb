import { Globe } from "@/components/globe";
import { TextEffect } from "@/components/ui/text-effect";

export default async function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-6xl p-4 flex flex-col">
      <Globe />
      <div className="mx-auto max-w-3xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
        recusandae nulla doloremque incidunt eos fugit minus, inventore ex illo
        magnam impedit facilis sequi suscipit laboriosam fuga similique rem
        odit! Numquam.
      </div>
    </main>
  );
}
