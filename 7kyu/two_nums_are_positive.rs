/*
Link:
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
two_are_positive(2, 4, -3) == true
two_are_positive(-4, 6, 8) == true
two_are_positive(4, -6, 9) == true
two_are_positive(-4, 6, 0) == false
two_are_positive(4, 6, 10) == false
two_are_positive(-14, -3, -4) == false
*/


fn two_are_positive(a: i32, b: i32, c: i32) -> bool {
  let arr: [i32; 3] = [a,b,c];
  let mut count: u8 = 0;
  for &n in arr.iter(){
      if n > 0{
          count+=1;
      }
  }
  return count == 2;
}

fn main () {
  println!("{}", two_are_positive(2, 4, -3));
  println!("{}", two_are_positive(-4, 6, 8));
  println!("{}", two_are_positive(4, -6, 9));
  println!("{}", two_are_positive(-4, 6, 0));
  println!("{}", two_are_positive(4, 6, 10));
  println!("{}", two_are_positive(-14, -3, -4));
}