import startSelfPing from "@/lib/self-ping";

// Ensure this runs only once on the server
if (typeof window === "undefined") {
  startSelfPing();
}
