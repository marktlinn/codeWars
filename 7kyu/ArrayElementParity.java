/*
Link: https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/java
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance
[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance
[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)
*/
import java.util.Arrays;
// import java.util.HashSet;
// import java.util.Set;

class ArrayElementParity {
  // public static int solve(int[] arr) {
  //   Set<Integer> positiveSet = new HashSet<>();
  //   Set<Integer> negativeSet = new HashSet<>();

  //   for (int i : arr) {
  //     if (i > 0) {
  //       positiveSet.add(i);
  //     } else {
  //       negativeSet.add(-i);
  //     }
  //   }

  //   for (int i : arr) {
  //     if ((i > 0 && !negativeSet.contains(i)) || (i < 0 && !positiveSet.contains(-i))) {
  //       return i;
  //     }
  //   }

  //   return 0;
  // }
  
  // Much shorted solution:
      public static int solve(int [] arr){
        return Arrays.stream(arr).distinct().sum();
    }
  public static void main(String[] args) {
    System.out.println(solve(new int[] {1,1,-1,2,3,4,-2,-4}));
  }
}
