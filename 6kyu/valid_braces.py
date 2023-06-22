"""Link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/python
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
"""

"""
### --- Pseudocode --- ###
Create a stack for every char, check if char == (, [ or {
if so add to the stack
else if equal a closing tab check the closing tab for the last element of the stack,
  if matching pop the last element of the stack
if stack length == 0 return true
  else return false
"""

tags = {'{': '}', '[': ']', '(': ')'}


# First iteration
def valid_braces(string):
    stack = []
    for char in string:
        if char in tags.keys():
            stack.append(char)
        elif char in tags.values() and stack:
            if tags[stack[-1]] == char:
                stack.pop()
        else:
            return False
    return len(stack) == 0


# Second:
def valid_braces(string):
    stack = []
    for char in string:
        if char in tags.keys():
            stack.append(char)
        elif char in tags.values() and stack:
            if tags[stack[-1]] == char:
                stack.pop()
        else:
            return False
    return not stack


print(valid_braces("[()](]"))
