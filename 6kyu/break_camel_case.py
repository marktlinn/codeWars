"""
Link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/python
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
"""


def solution(s):
    res = ""
    for l in s:
        ascii = ord(l)
        if ascii >= 65 and ascii <= 90:
            res += " " + l
        else:
            res += l
    return res


print(solution("camelCasing"))
