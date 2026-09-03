  let mdIp = document.getElementById('markdown-input') 
  let mdOp = document.getElementById('html-output')
  let pre = document.getElementById('preview')

function convertMarkdown() {
  let txt = mdIp.value;

  // H1,2,3
  txt = txt.replace(/^\s*###\s+(.*)$/gm, "<h3>$1</h3>");
  txt = txt.replace(/^\s*##\s+(.*)$/gm, "<h2>$1</h2>");
  txt = txt.replace(/^\s*#\s+(.*)$/gm, "<h1>$1</h1>");
  // Blockquotes
  txt = txt.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>");
  // strong
  txt = txt.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  txt = txt.replace(/__(.*?)__/g, "<strong>$1</strong>");
  // em (italic)
  txt = txt.replace(/\*(.*?)\*/g, "<em>$1</em>");
  txt = txt.replace(/_(.*?)_/g, "<em>$1</em>");
  // img
  txt = txt.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
  // link
  txt = txt.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  return txt
}

mdIp.addEventListener("input", () => {
  const convtedH = convertMarkdown();

  mdOp.textContent = convtedH;

  pre.innerHTML = convtedH;
});