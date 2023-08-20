/*
Link: https://www.codewars.com/kata/5f1804560873b20023e8244a/train/rust
You are given a float (single precision) which means, that 32 bit are used to hold a value.
Return the number an integer would hold with the same bit arrangement

10.0 (f32) == 01000001001000000000000000000000 (binary)
convert_to_i32(10.0) returns 1092616192 (i32)

Rust's official documentation can be very helpful!
*/

// return binary representation as i32
pub fn convert_to_i32(f: f32) -> i32 {
    return f.to_bits() as i32;
}

fn main(){
  println!("{}", convert_to_i32(99.0));
}