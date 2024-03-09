
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
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


