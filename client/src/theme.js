const KEY = "theme";

export function getTheme() {
  const saved = localStorage.getItem(KEY);
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function applyTheme(theme) {
  const html = document.documentElement;
  html.classList.toggle("dark", theme === "dark");
}

export function saveTheme(theme) {
  localStorage.setItem(KEY, theme);
}
