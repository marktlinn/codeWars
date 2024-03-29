/*
Link: https://www.codewars.com/kata/5a87449ab1710171300000fd/java
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)
Explanation:
The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3
*/


class TidyNumbers {
  public static boolean tidyNumber(int number) {
    String[] arr = String.valueOf(number).split("");
    for (int i = 0; i < arr.length-1; i++) {
      if (Integer.parseInt(arr[i]) > Integer.parseInt(arr[i + 1])) {
        return false;
      }
    }
    return true;
  }
  
  public static void main(String[] args) {
    System.out.println(tidyNumber(123));
    System.out.println(tidyNumber(2247));
  }
}