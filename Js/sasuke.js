const sasukeQuote = document.querySelector(".sasukeQuote");

const quotes = {
  "01": "My dream doesn’t exist in the future. It lies in the past. That’s the only place it exists.",
  "02": "Having too many bonds causes one to lose focus—weakening their strongest wish, their greatest desire.",
  "03": "No man chooses evil because he is evil; he only mistakes it for happiness, the good he seeks.",
};

for (const [key, value] of Object.entries(quotes)) {
  const html = `
  <h1 class="quote">
          ${key}: ${value}
        </h1>`;
  sasukeQuote.insertAdjacentHTML("beforebegin", html);
}
