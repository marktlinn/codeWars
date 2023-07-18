/*
Link:
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/java
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

import java.util.Arrays;

public class ConvertStringToArray {
  public static String[] stringToArray(String s) {
    return s.split(" ");
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(stringToArray("Hello People")));
  }
}
