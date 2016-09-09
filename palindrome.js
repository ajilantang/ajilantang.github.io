function palindrome(string){
  var indexString=string.length
  for (var i = 0; i <Math.floor(indexString/2); i++) {
    if (string[i]==string[(indexString-1)-i]) {
      return true
    }
  }
return false
}
console.log(palindrome("aba"));
