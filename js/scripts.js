



var palindromeChecker = function(word){

  var charArray = word.split('');

  var reverseArray = charArray.slice().reverse();

  for(i=0; i<word.length; i++){
    if (charArray[i] === reverseArray[i]) {
      // alert(charArray[i]);
      continue;
    } else {
      alert("Not a palindrome");
      return [word, reverseArray.join('')];
    }

  }

  alert("Is Palindrome");
  return [word, reverseArray.join('')];

}

console.log(palindromeChecker("racecasdfasdfr"));
