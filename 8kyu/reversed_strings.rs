/* Reversed Strings
Link:
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/rust
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

fn solution(phrase: &str) -> String {
  phrase.chars().rev().collect()
}