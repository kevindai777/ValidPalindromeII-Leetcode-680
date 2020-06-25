//Objective is the same as 'Valid Palindrome', except this time you are allowed
//to remove up to 1 character to make it a valid palindrome

let string = 'abca'


//O(n) solution that uses a 2-pointer approach to check if a string is a palindrome.
//If the two ends don't match, try to skip that character and see if it is a palindrome.

let left = 0
let right = string.length - 1

while (left < right) {
    //Ends don't match, so skip this one element and go left/right 
    if (string.charAt(left) !== string.charAt(right)) {
        return isPalindrome(string, left + 1, right) || isPalindrome(string, left, right - 1)
    }

    left++
    right--
}

return true 

function isPalindrome(string, left, right) {
    while (left < right) {
        if (string.charAt(left++) !== string.charAt(right--)) {
            return false
        }
    }

    return true
}