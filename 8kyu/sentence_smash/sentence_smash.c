#include <stdio.h>
#include <stdlib.h>
#include <string.h>
/*
 *Write a function that takes an array of words and smashes them together into a
 *sentence and returns the sentence. You can ignore any need to sanitize words
 *or add punctuation, but you should add spaces between each word. Be careful,
 *there shouldn't be a space at the beginning or the end of the sentence!
 * */

char *smash(const char *const words[], size_t count) {
  if (count == 0) {
    char *empty_string = calloc(1, sizeof(char));
    if (empty_string == NULL) {
      return NULL;
    }
    return empty_string;
  }

  size_t total_phrase_len = 0;

  for (size_t i = 0; i < count; i++) {
    total_phrase_len += strlen(words[i]);
  }

  total_phrase_len += count - 1;

  char *result = (char *)calloc(total_phrase_len + 1, sizeof(char));

  if (result == NULL) {
    return NULL;
  }

  strcpy(result, words[0]);
  for (size_t i = 1; i < count; i++) {
    strcat(result, " ");
    strcat(result, words[i]);
  }

  return result;
}

int main() {
  const char *words1[] = {"Hello", "world", "!"};
  size_t count1 = sizeof(words1) / sizeof(words1[0]);
  char *result1 = smash(words1, count1);
  if (result1 != NULL) {
    printf("Result 1: %s\n", result1);
    free(result1); // Free memory allocated by smash
  } else {
    printf("Memory allocation failed for Result 1\n");
  }

  return 0;
}
