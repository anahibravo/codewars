
/*
replace all the words in the string with sex
use the replace method

*/
function toFreud(string) {
    return string.replace(' ','sex');
    }

    /*
    actual solution
    */
    function toFreud(string) {
        return string.replace(/\S+/g, 'sex');
      }