"""
https://www.codewars.com/kata/539ee3b6757843632d00026b/train/python
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

"""
def capitals(word):
    res = []
    for i in range(len(word)):
        if(ord(word[i])) <= 90:
            res.append(i)
    return res
