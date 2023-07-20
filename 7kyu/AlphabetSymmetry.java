
/*
Link: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/java
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/
// needed for first implementation
// import java.util.ArrayList;
import java.util.Arrays;

public class AlphabetSymmetry {
  // public static int[] solve(String[] arr) {
  // String alpha = "abcdefghijklmnopqrstuvwxyz";
  // ArrayList<Integer> result = new ArrayList<>();
  // for (String word : arr) {
  // int count = 0;
  // int minLength = Math.min(word.length(), alpha.length());
  // for (int i = 0; i < minLength; i++) {
  // if (alpha.charAt(i) == Character.toLowerCase(word.charAt(i))) {
  // count++;
  // }
  // }
  // result.add(count);
  // }
  // int[] array = new int[result.size()];
  // for (int i = 0; i < result.size(); i++) {
  // array[i] = result.get(i);
  // }
  // return array;
  // }
  public static int[] solve(String[] arr) {
    String alpha = "abcdefghijklmnopqrstuvwxyz";
    return Arrays.stream(arr)
        .mapToInt(word -> {
          int count = 0;
          int minLength = Math.min(word.length(), alpha.length());
          for (int i = 0; i < minLength; i++) {
            if (alpha.charAt(i) == Character.toLowerCase(word.charAt(i))) {
              count++;
            }
          }
          return count;
        })
        .toArray();
  }
}