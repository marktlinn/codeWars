"""
Link: https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/python
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output.


"""


# def drop_cap(words):
#     def capitalize_word(word):
#         return word.capitalize() if len(word.strip()) > 2 else word

#     words_list = words.split(" ")
#     processed_words = [capitalize_word(word) for word in words_list]
#     return " ".join(processed_words)

# Second more succinct version
def drop_cap(words):
    return " ".join(w.capitalize() if len(w) > 2 else w for w in words.split(" "))


print(drop_cap("apple"))
print(drop_cap("one   space"))
print(drop_cap("   space WALK   "))
print(drop_cap("apple of banana"))
