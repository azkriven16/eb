function startSelfPing() {
  const url = process.env.SELF_URL ? `${process.env.SELF_URL}/api/ping` : null;

  if (!url) {
    console.log("⚠️ No SELF_URL provided, skipping self-ping.");
    return;
  }

  setInterval(async () => {
    try {
      const res = await fetch(url);
      console.log(`[SelfPing] ✅ Pinged ${url}, status: ${res.status}`);
    } catch (err: any) {
      console.error("[SelfPing] ❌ Failed:", err.message);
    }
  }, 12 * 60 * 1000); // every 12 minutes
}

export default startSelfPing;
