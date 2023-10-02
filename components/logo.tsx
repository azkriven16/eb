import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/profile.svg" className="h-10 w-10 rounded-full object-fill" />
      <p className="font-bold text-inherit">Eb</p>
    </Link>
  );
}
