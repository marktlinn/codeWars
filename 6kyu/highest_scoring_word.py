"""
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
"""

def high(x: str) -> str:
    words = x.split()
    highest_score = 0
    highest_word = ""

    for w in words:
        num = _get_letter_position(w)
        if num > highest_score:
            highest_score = num
            highest_word = w
    return highest_word


def _get_letter_position(letters: str) -> int:
    num = 0
    for l in letters:
        num += ord(l) - 96
    return num


print(high("man i need a taxi up to ubud")) # taxi
print(high("what time are we climbing up the volcano")) # volcano

