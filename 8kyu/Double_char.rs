// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


fn double_char(s: &str) -> String {
  let mut res = String::new();
  for c in s.chars(){
      for _ in 0..2{
          res.push(c);
      }
  }
  res
}

fn main(){
  let result = double_char("Hello");
  println!("{}", result);
}