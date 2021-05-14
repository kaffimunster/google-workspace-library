# google-workspace-library

A Google App Script (GAS) library that houses atomic functions that are handy for GAS Projects or manupulating Google Workspace documents. 

Use the following Library ID to add the library to a project:

`AKfycbwOI937TgQr8Zl3QwiXDz4JZBZy7JJ0OU8SbWfMnQFQLbox6NeS3SpDrhAqnqRFfFMa`



# Document Utilties

# Generator

```javascript
KaffiWL.documentGenerator(destinationFolderId, filename)
```
documentation coming...

# Margins

```javascript
KaffiWL.documentMargins(document, marginTop, marginBottom, marginLeft, marginRight)
```
documentation coming...

# Page Size

```javascript
KaffiWL.documentPageSize(document, paperSize, portrait)
```
documentation coming...

# PDF Converter

Converts Google Document to PDF. 

```javascript
KaffiWL.documentPdfConverter(document, folderID)
```
documentation coming...


# Range Utilities

## Determine Row

This is primarily used to find the row of an entry of an archive list. E.g., There is a list of product codes and the row number of a specific product is wanted. This is useful for updating lists on a spreadsheet, since there are no database functions. This can be thought of as VLOOKUP() of a row of any sheet so ranges can be created. 

```javascript
KaffiWL.determineRow(datasheet, dataSearchColumn, dataRowOffset, searchKey)
```

__datasheet__ : Location of the spreadsheet and sheet where the search will be conducted. E.g., SpreadsheetApp.openByUrl(url).getSheetByName(name); or ss.getSheetByName(name) variable.

__dataSearchColumn__ : Column range. E.g., 'C6:C'.

__dataRowOffset__ : Arrays are zero indexed so offset the return by the value. E.g., data begins on Row 6, the parameter should equal 6. 

__searchKey__ : What is being hunted for. 

## Build Drop Range

Builds a range for payload delivery to a sheet.

```javascript
KaffiWl.buildDropRange(sheet, startCol, endCol, firstRow, dzCountCell, payloadCount)
```

__sheet__ : Location of the spreadsheet and sheet where the search will be conducted. E.g., SpreadsheetApp.openByUrl(url).getSheetByName(name); or ss.getSheetByName(name) variable.

__startCol__: The first column of the table written as letter, not index. E.g., for column C write `'C'`.

__endCol__: The last column of the table written as letter, not index. E.g., for column C write `'C'`.

__firstRow__ : First row of the data as an integer.

__countCell__ : The cell range of a function that counts the amount of rows in the data table. Typically this is a function such as `=COUNTA(C2:C)`. Written as a range string: e.g., `C2:C`.

__payloadLength__ : The length or amount of rows in the payload data. Typically this is `array.length`. 






