function right(lines) {
  return lines.map(
    line => [0].concat(line.slice(0, line.length - 1))
  );
}

function left(lines) {
  return lines.map(
    line => line.slice(1, line.length).concat([0])
  );
}

function up(lines) {
  const zeroLine = Array(lines[0].length).fill(0);
  return lines.slice(1, lines.length).concat([zeroLine]);
}

function down(lines) {
  const zeroLine = Array(lines[0].length).fill(0);
  return [zeroLine].concat(lines.slice(0, lines.length - 1));
}

function complement(lines) {
  return lines.map(
    line => line.map(e => e == 0 ? 1 : 0)
  );
}

function and(lines1, lines2) {
  return lines1.map(
    (line1, i) => line1.map(
      (e1, j) => e1 & lines2[i][j]
    )
  );
}

export { right, left, up, down, complement, and };
