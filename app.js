function assemble() {
    const code = document.getElementById('input').value;
    const output = assembleCode(code);
    document.getElementById('output').textContent = output;
}