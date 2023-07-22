/*
Link: https://www.codewars.com/kata/57f759bb664021a30300007d/train/java
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

public class Switcheroo {
  public static String switcheroo(String x) {
    StringBuilder newStr = new StringBuilder();
    for (char c : x.toCharArray()) {
      if (Character.toLowerCase(c) == 'a') {
        newStr.append("b");
      } else if (Character.toLowerCase(c) == 'b') {
        newStr.append("a");
      } else {
        newStr.append(c);
      }
    }
    return newStr.toString();
  }

  public static void main(String[] args) {
    System.out.println(switcheroo("abba"));
  }
}