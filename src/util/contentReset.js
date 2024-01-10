export default function contentReset(content) {
  content.innerText = "";
  content.setAttribute("class", "content");
  return content;
}
