document.getElementById('check_div_Button').addEventListener('click', () => {
    const divBlocks = document.querySelectorAll('.task1_div');
  
    divBlocks.forEach((div) => {
      let text = div.textContent.trim();

      if (text.length > 10) {
        div.textContent = text.substring(0, 10) + '...';
      }
    });
});

/*Task_2*/
document.getElementById('check_table_Button').addEventListener('click', calculateSum);
    
function calculateSum() {
    const table = document.querySelector('.number-table tbody');
    const rows = table.querySelectorAll('tr');
    const columnCount = rows[0].children.length;
    const sums = new Array(columnCount).fill(0);

    rows.forEach((row, rowIndex) => {
        if (rowIndex < rows.length - 1) {
            row.querySelectorAll('td').forEach((cell, colIndex) => {
                sums[colIndex] += parseInt(cell.textContent) || 0;
            });
        }
    });

    const sumRow = document.getElementById('sumRow');
    sumRow.innerHTML = sums.map(sum => `<td>${sum}</td>`).join('');
}
