/*
Link:
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/java
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

*/

public class SchoolPaperwork {
  public static int paperWork(int n, int m) {
    return (n < 0 || m < 0) ? 0 : n * m;
  }

  public static void main(String[] args) {
    int result1 = paperWork(5, 4);
    System.out.println(String.format("result 1: %d ", result1));

    int result2 = paperWork(3, 7);
    System.out.println(String.format("Result 2: %d", result2));
  }
}
