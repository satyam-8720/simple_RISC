const editor = ace.edit("editor");
editor.setTheme("ace/theme/textmate");
editor.session.setMode("ace/mode/assembly_x86"); // Closest match

function assembleCode() {
  const code = editor.getValue();
  let output = "";

  if (!code.trim()) {
    output = "Please enter assembly code.";
  } else {
    // Simulated "assembler"
    output = "Address   Instruction\n";
    output += code.split('\n').map((line, i) => {
      return `0x${(i * 4).toString(16).padStart(4, '0')}   ${line}`;
    }).join('\n');
  }

  document.getElementById("output").textContent = output;
}
