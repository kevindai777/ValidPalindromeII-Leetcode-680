//Java Solution

class Solution {
    public boolean validPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;
        
        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) {
                return isValid(i + 1, j, s) || isValid(i, j - 1, s);
            }
            
            i++;
            j--;
        }
        
        return true;
    }
    
    public boolean isValid(int i, int j, String s) {
        while (i < j) {
            if (s.charAt(i++) != s.charAt(j--)) {
                return false;
            }
        }
        
        return true;
    }
}