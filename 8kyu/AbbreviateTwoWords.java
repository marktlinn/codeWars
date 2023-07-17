/*
Link:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

public class AbbreviateTwoWords {
  public static String abbrevName(String name) {
    String[] names = name.split(" ");
    return String.format("%s.%s", names[0].substring(0, 1).toUpperCase(), names[1].substring(0, 1).toUpperCase());
  }

  public static void main(String[] args) {
    System.out.println(abbrevName("dave jones"));
  }
}
