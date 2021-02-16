export default function(text: string) {
  return text
    .split("</p>")
    .filter(item => item.includes("<p>"))
    .map(item => item + "</p>");
};