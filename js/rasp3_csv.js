function getLastData(csvFile) {
    return csvFile.text().then(data => {
      const rows = data.trim().split('\n');
      const lastRow = rows[rows.length - 1];
      const lastData = lastRow.split(',').find(cell => cell.startsWith('44.0'));
      return lastData;
    });
  }
  
  
  