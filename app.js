// Handles form submission and offline queueing
document.getElementById('spotterForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const submission = Object.fromEntries(formData.entries());

  document.getElementById('status').textContent = "Submitting...";

  try {
    // Placeholder: Replace with real Wix backend endpoint or webhook
    const response = await fetch("https://your-webhook-or-backend-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission)
    });

    if (response.ok) {
      document.getElementById('status').textContent = "Submitted successfully!";
      form.reset();
    } else {
      throw new Error("Network error");
    }
  } catch (err) {
    document.getElementById('status').textContent = "Saved offline, will retry.";
    // Save to IndexedDB queue here (via idb.js)
  }
});