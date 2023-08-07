/*
Link: https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/java
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

*/

import java.util.Stack;

class ValidBrackets {
  public static boolean validParentheses(String parenStr) {
    Stack<Character> stack = new Stack<>();
    
    for (char c : parenStr.toCharArray()) {
      if (c == '(') {
          stack.push(c);
      } else if (c == ')' && !stack.isEmpty() && stack.peek() == '(') {
          stack.pop();
      } else if (c == ')' && stack.isEmpty()) {
          return false;
      }
    }
    
    return stack.isEmpty();
  }
  
  public static void main(String[] args) {
    System.out.println(validParentheses("()("));
    System.out.println(validParentheses("()()"));
    System.out.println(validParentheses("(()())"));
  }
}