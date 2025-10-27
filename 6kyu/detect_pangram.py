import re

RE_PATTERN = r"[^A-Za-z]"
phrase = "The quick brown fox jumps over the lazy dog."


def is_pangram(st: str):
    found = {}
    clean_st = re.sub(RE_PATTERN, "", st.lower())

    for l in clean_st:
        if l not in found:
            found[l] = 0
    return len(found) == 26


print(is_pangram(phrase))
