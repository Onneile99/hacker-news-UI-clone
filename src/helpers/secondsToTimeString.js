// Please do not change the name of this function
function secondsToTimeString(seconds) {
    if (seconds === undefined) return '';
    
    const parsedYears = Math.floor(seconds / 31536000);
    const parsedMonths = Math.floor((seconds - (parsedYears * 31536000)) / 2592000);
    const parsedDays = Math.floor((seconds - (parsedYears * 31536000) - (parsedMonths * 2592000)) / 86400);
    const parsedHours   = Math.floor((seconds - (parsedYears * 31536000) - (parsedDays * 86400) - (parsedMonths * 2592000)) / 3600);
    const parsedMinutes = Math.floor((seconds - (parsedYears * 31536000) - (parsedDays * 86400) - (parsedMonths * 2592000) - (parsedHours * 3600)) / 60);
    const parsedSeconds = seconds - (parsedHours * 3600) - (parsedDays * 86400) - (parsedYears * 31536000) - (parsedMinutes * 60) - (parsedMonths * 2592000);
    
  
    // Strings
    const yearString = addPluralOrSingular(parsedYears, 'year', 'years').toString(); 
    const monthString = addPluralOrSingular(parsedMonths, 'month', 'months').toString();
    const dayString = addPluralOrSingular(parsedDays, 'day', 'days').toString();
    const hourString = addPluralOrSingular(parsedHours, 'hour', 'hours').toString();
    const minuteString = addPluralOrSingular(parsedMinutes, 'minute', 'minutes').toString();
    const secondString = addPluralOrSingular(parsedSeconds, 'second', 'seconds').toString();
    
    if (parsedYears > 0 && parsedDays > 0 && parsedHours > 0 && parsedHours > 0 && parsedMinutes > 0) {
      return yearString;
    }
    if (parsedMonths > 0 && parsedDays > 0 && parsedHours > 0 && parsedHours > 0 && parsedMinutes > 0) {
      return monthString;
    }
  
    if (parsedDays > 0 && parsedHours > 0 && parsedHours > 0 && parsedMinutes > 0) {
      return dayString;
    }
    if (parsedHours > 0 && parsedMinutes > 0 && parsedMinutes > 0) {
      return hourString;
    }
    if (parsedMinutes > 0 && parsedSeconds > 0) {
      return minuteString;
    } 
    if (parsedMinutes > 0 && parsedSeconds === 0) {
      return minuteString;
    } 
    if (parsedSeconds > 0 && parsedMinutes === 0) {
      return secondString;
    } 
    
  
    function addPluralOrSingular (num, singular, plural) {
        const noun = num === 1 ? singular : plural;
        return num + ' ' + noun;
      }
  }
  
  if (typeof module !== 'undefined') {
    module.exports = { secondsToTimeString };
  }