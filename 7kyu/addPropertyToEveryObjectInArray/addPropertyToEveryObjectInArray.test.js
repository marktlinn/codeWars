const myFunkyFunction = require("./addPropertyToEveryObjectInArray");

describe("Test the property & value have been added to the objects in the array", () => {
  test("Array object should include 'usersAnswer: null' ", () => {
    //Array to test
    const questions = [
      {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0,
      },
      {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0,
      },
    ];

    myFunkyFunction(questions);
    console.log(questions);
    expect(questions).toEqual([
      {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0,
        usersAnswer: null,
      },
      {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0,
        usersAnswer: null,
      },
    ]);
  });
});
