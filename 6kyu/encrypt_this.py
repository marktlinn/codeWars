"""
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
"""

"""
### --- Pseudocode --- ###
if the string is empty return an empty string
else:
  Split up the sentence into individual words
  create an list to store values
  for each word in the split sentence, 
    if a word's length is less than or equal to 2
      convert the first char to ASCII code and add concate with the next and then append to list
    else convert first cahr to ASCII then concate last char, ttl strig from index 2:-1 and then concate word at index 1
  finally return the list joined into a string.


"""


def encrypt_this(text):
    if text == "":
        return ""
    words = text.split()
    result = []
    for word in words:
        if len(word) <= 2:
            result.append(str(ord(word[0])) + word[1:])
        else:
            result.append(str(ord(word[0])) + word[-1] + word[2:-1] + word[1])
    return " ".join(result)
