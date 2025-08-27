/* eslint-disable no-console */
const startSelfPing = () => {
  const url = process.env.SELF_URL ? `${process.env.SELF_URL}/api/ping` : null;

  if (!url) {
    console.log("⚠️ No SELF_URL provided, skipping self-ping.");
    return;
  }

  setInterval(async () => {
    try {
      const res = await fetch(url);
      console.log(`[SelfPing] ✅ Pinged ${url}, status: ${res.status}`);
    } catch (err) {
      if (err instanceof Error) {
        console.error("[SelfPing] ❌ Failed:", err.message);
      } else {
        console.error("[SelfPing] ❌ Unknown error");
      }
    }
  }, 12 * 60 * 1000); // every 12 minutes
};

export default startSelfPing;
