function palindrome(string){
  var indexString=string.length
  for (var i = 0; i <indexString; i++) {
    if (string[i]==string[(indexString-1)-i]) {
      return true
    }
  }
return false
}
console.log(palindrome("salah"));
