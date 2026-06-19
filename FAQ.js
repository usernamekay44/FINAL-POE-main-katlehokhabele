const faq = [
  { q: ["material", "made from", "fabric"], a: "Our headwraps are made from soft, breathable fabric designed for comfort and durability." },
  { q: ["nationwide delivery", "deliver", "shipping"], a: "Yes, we offer nationwide delivery across South Africa." },
  { q: ["how long", "delivery take", "delivery time"], a: "Delivery usually takes 2 to 5 working days, depending on your location." },
  { q: ["care", "wash", "clean"], a: "Hand wash gently in cold water and air dry to keep the fabric in good condition." }
];

const corrections = {
  delvery: "delivery",
  naitonwide: "nationwide",
  materils: "materials",
  headwraps: "headwraps",
  dilivery: "delivery",
  reccomend: "recommend"
};

function normalize(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9s]/g, "");
}

function autocorrect(text) {
  return normalize(text)
    .split(/s+/)
    .map(word => corrections[word] || word)
    .join(" ");
}

function bestMatch(text) {
  const t = autocorrect(text);

  for (const item of faq) {
    if (item.q.some(keyword => t.includes(keyword))) {
      return item.a;
    }
  }

  return "I don't have an exact answer for that yet. Try asking about materials, delivery, delivery time, or care.";
}

function addMsg(text, cls) {
  const messages = document.getElementById("messages");
  if (!messages) return;

  const d = document.createElement("div");
  d.className = `msg ${cls}`;
  d.textContent = text;
  messages.appendChild(d);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("input");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  addMsg(text, "user");

  const corrected = autocorrect(text);

  setTimeout(() => {
    const answer = bestMatch(text);
    if (corrected !== normalize(text)) {
      addMsg(`Did you mean: ${corrected}

${answer}`, "bot");
    } else {
      addMsg(answer, "bot");
    }
  }, 250);

  input.value = "";
  input.focus();
}

function setPrompt(text) {
  const input = document.getElementById("input");
  if (!input) return;
  input.value = text;
  input.focus();
}

document.addEventListener("DOMContentLoaded", () => {
  addMsg("Hello! Ask me a question about the FAQ.", "bot");
  addMsg("What materials are your headwraps made from?", "bot");
  addMsg("Do you offer nationwide delivery?", "bot");
  addMsg("How long does delivery take?", "bot");
  addMsg("How do I care for my headwrap?", "bot");

  const input = document.getElementById("input");
  if (input) {
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") sendMessage();
    });
  }
});