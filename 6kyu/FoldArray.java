/*
Link: https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/java
In this kata you have to write a method that folds a given array of integers by the middle x-times.
An example says more than thousand words:
Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!
*/

// import java.util.Arrays;

// public class FoldArray {

//   public static int[] foldArray(int[] array, int runs) {
//     int[] foldedArray = Arrays.copyOf(array, array.length);

//     for (int i = 0; i < runs; i++) {
//       int middle = foldedArray.length / 2;

//       for (int j = 0; j < middle; j++) {
//         foldedArray[j] += foldedArray[foldedArray.length - 1 - j];
//       }

//       foldedArray = Arrays.copyOf(foldedArray, middle + foldedArray.length % 2);
//     }

//     return foldedArray;
//   }
// }

// second solution using streams:

import java.util.Arrays;
import java.util.stream.IntStream;

public class FoldArray {
  public static int[] foldArray(int[] array, int runs) {
    int[] result = Arrays.copyOfRange(array, 0, Math.round(array.length / 2.0f));
    // division with floating point precision to enable rounding correctly
    IntStream.range(0, array.length / 2)
        .forEach(i -> result[i] = array[i] + array[array.length - 1 - i]);
    return runs > 1 ? foldArray(result, runs - 1) : result;
  }
}
