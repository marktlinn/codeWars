/*
Link: https://www.codewars.com/kata/53af2b8861023f1d88000832/train/rust
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/

fn are_you_playing_banjo(name: &str) -> String {
  let c = name.chars().nth(0);
  match c {
    Some('R) | Some('r) => format!("{} plays banjo", name),
    _ => format!("{} does not play banjo", name)
  }
}

