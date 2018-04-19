var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var getDaysInMonthForYear = function(year, month) {
    if (month === 2) {
        if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
            return 29;
        } else {
            return 28;
        }
    } else {
        return daysInMonth[month - 1];
    }
};

/**
 * Sunday = 1, .., Saturday = 7
 */
var getNumMonthsStartingWithDay = function(fromYear, fromMonth, toYear, toMonth, day) {
    if (fromYear < 1900) {
        alert('Sorry, dates before 1900 are not supported.');
        return;
    }
    if (fromYear > toYear || (fromYear === toYear && fromMonth > toMonth)) {
        alert('Your from date must be less than your to date!');
    }

    day = day % 7;
    var year = 1900;
    var month = 1;
    var startingDay = 2;
    var numMonthsStartingWithDay = 0;

    while (year < toYear || (year === toYear && month <= toMonth)) {
        if((year > fromYear || (year === fromYear && month >=fromMonth)) && startingDay === day){
            numMonthsStartingWithDay++;
        }

        //Get the starting day of the next month
        var daysInMonth = getDaysInMonthForYear(year, month);
        startingDay = (startingDay + daysInMonth) % 7;
        //Increment the month
        month++;
        //Increment the year
        if(month >= 13){
            month = 1;
            year++;
        }
    }

    return numMonthsStartingWithDay;
};

console.log(getNumMonthsStartingWithDay(1901, 1, 2000, 12, 1));