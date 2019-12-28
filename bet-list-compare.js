(function() {

    var _realSheet = false;
    var _realSheetData = false;

    var blc = function(realSheet, betSheets) {

        _realSheet = realSheet;
        prepareRealSheetData();

        var points = [];

        for (var i = 0, len = betSheets.length; i  < len; i++) {
            points[i] = 0;

            var sheet = betSheets[i];
            for (var j = 0, lenj = sheet.length; j < lenj; j++) {

                for (var k = (j + 1); k < lenj; k++) {
                    if (checkIfAIsBeforeBInRealSheet(sheet[j], sheet[k])) {
                        points[i]++;
                    }
                }

            }

        }
        return points;
    }


    function prepareRealSheetData() {
        _realSheetData = {};
        var currPoints = _realSheet.length;
        for (var i = 0, len = _realSheet.length; i  < len; i++) {
            if (Array.isArray(_realSheet[i])) {
                for (var j = 0, lenj = _realSheet[i].length; j  < lenj; j++) {
                    var key = _realSheet[i][j];
                    _realSheetData[key] = currPoints;
                }
            } else {
                var key = _realSheet[i];
                _realSheetData[key] = currPoints;
            }
            currPoints--;
        }
    }



    function checkIfAIsBeforeBInRealSheet(a, b) {
        if (_realSheetData[a] > _realSheetData[b]) {
            return true;
        } else {
            return false;
        }
    }



    window.betListCompare = blc;

}());
