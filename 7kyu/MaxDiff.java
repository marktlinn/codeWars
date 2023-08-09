/*
Link: https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/java
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

class MaxDiff{
  public static int maxDiff(int[] lst) {
    if (lst.length == 0) {
      return 0;
    }
    int max = lst[0];
    int min = lst[0];
    for (int i : lst) {
      if (i > max)
        max = i;
      if (i < min)
        min = i;
    }
    return max - min;
  }
}