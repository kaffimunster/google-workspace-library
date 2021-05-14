function determineRow(dataSheet, dataSearchColumn, dataRowOffset, searchKey) {

    let searchRange = dataSheet.getRange(dataSearchColumn).getValues();
    let i = 0;

    while (i < searchRange.length) {

        let searchCell = searchRange[i][0].toString();
        if (searchCell === searchKey) {
            
            let determinedRow = dataRowOffset + i;
            return determinedRow;
            break;

        }
        i++;
    }
}

function buildDropRange(sheet, startCol, endCol, firstRow, countCell, payloadCount) {

    let dzCountInteger = countCell.getValue();
    let firstDropZoneRow = firstRow + dzCountInteger;
    let lastDropZoneRow = firstDropZoneRow + payloadCount - 1;
    let range = sheet.getRange(startCol + firstDropZoneRow + ':' + endCol + lastDropZoneRow);
    return range;

}