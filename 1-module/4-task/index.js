/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toLowerCase();
  if(str.includes('xxx')||str.includes('1xbet')||str.includes('free xxxxx')) {
     return(true);
  }
  else {
      return(false);
  }
}

checkSpam();
