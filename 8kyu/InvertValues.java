/*
Link:
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/java
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

import java.util.Arrays;

public class InvertValues {
  public static int[] invert(int[] array) {
    int[] result = new int[array.length];
    for (int i = 0; i < array.length; i++) {
      result[i] = array[i] * -1;
    }
    return result;
  }

  public static void main(String[] args) {
    int[] inputArr = { 1, -2, -5, 7, 2, -4, -1, 3 };
    System.out.println(Arrays.toString(invert(inputArr)));
  }
}