## [Click me to see LIVE link](https://653dc3e8779d1a22eb281c3d--unique-malasada-6676ff.netlify.app/)
# Event Management: Educational and Training Events Events; 
**Steep and Steps : Educational and Training Organizations.**
( Auth Based Assignment-09 by **Programming HeroTeam** )



*In my Assignment-9 Educational and Training Events project, I've encountered the necessity for efficient state management. Effective state management plays a pivotal role in creating dynamic and interactive user interfaces using React and Firebase. In this context, I can provide valuable insights into the typical state management practices utilized in React and Firebase. Furthermore, the use of descriptive Git commit messages has proven to be particularly relevant and beneficial in ensuring the project's clarity and maintainability.*


**Effective five Git Commit Messages:**

-

-  **Implement Steeps and Steps Dynamic Website**  : "Effortlessly integrating meticulously organized mock data from 'edu.json' , all.json and the 'firebase.config.js' file into the project has significantly enhanced its functionality and realism. Furthermore, the added functionality for dynamic authentication based on Firebase has been implemented, providing a seamless and secure user experience."


 - **Add Home page functionality** : Implemented Home page functionality by creating a responsive and visually appealing landing page. Incorporated dynamic content rendering and navigation to provide a user-friendly experience, enhancing the overall project's usability.

- **Created Various site which is manual and automated** : Developed a comprehensive website that combines both manual and automated functionalities. This platform allows users to explore various opportunities through user-friendly manual search options while also benefiting from an automated system.

- **Ensure proper data authentication system and getting data from Login and Register** : Established a comprehensive data authentication system, bolstering the project's security and privacy features. Streamlined the process of data acquisition during user registration and login, enhancing data reliability and user interaction across the platform.

- **Update README.md and questions_and_answers.md file and Answering the required Question with project details** : I have diligently updated both the 'README.md' and 'questions_and_answers.md' files to ensure they accurately reflect the project's details and provide comprehensive information for users and contributors. In the 'README.md' file, I have provided a clear project description, installation instructions, usage guidelines, and a concise project structure overview. Additionally, I have included relevant badges, such as build status and license information, to enhance the project's visibility and credibility.

**In the 'questions_and_answers.md' file, I have thoroughly answered all required questions with detailed explanations, offering insights into the project's architecture, technologies used, and its purpose.** 



  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greeting = {};
console.log(greeting);
```

- A: `{}`
- B: `ReferenceError: greeting is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `undefined`


<i> The variable greeting is declared but not initialized until the second line of code, so it has an initial value of undefined until it is assigned the empty object {} on the second line.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: `"12"`


<i> The code combines a number and a string using the `+` operator, resulting in string concatenation due to JavaScript's dynamic typing. As a result, `sum(1, "2")` yields the string `"12"` by joining the number `1` and the string `"2"`. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`


<i>In the code provided, an array called `food` is created with four food emojis. An object `info` is also defined with a property `favoriteFood`, initially set to `"🍕"`. The subsequent assignment of `"🍝"` to `info.favoriteFood` doesn't affect the `food` array, which retains its original content as `["🍕", "🍫", "🥑", "🍔"]`. When logged, the `food` array remains unchanged as `['🍕', '🍫', '🥑', '🍔']`. This illustrates that altering a property within an object doesn't impact the content of an array used for that property's initial value. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i> The code attempts to call the `sayHi` function without passing an argument for the `name` parameter. In JavaScript, when a function is called without an argument for a parameter, that parameter takes on the value `undefined`. </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i> The `forEach` method is used to iterate through an array called `nums`. For each element in the array, a function is executed to check if the element (`num`) is truthy, meaning it's not equal to 0. When `num` is truthy (in this case, for elements 1, 2, and 3), it increments the `count` variable by 1. However, for the element 0, which is falsy, it does not affect `count`. As a result of this logic, the `count` variable is incremented three times, reflecting the number of truthy elements in the array. Therefore, the final value of `count` is `3`. </i>

</p>
</details>





## Authors

[@A  K M Azhar](https://www.linkedin.com/in/a-k-m-azarul-islam-3a9499167/)

