function palindrome(string){
  if (string.split('').toString()===string.split('').reverse().toString()) {
    return true
  }else {
    return false
  }
}
console.log(palindrome("salas"));
