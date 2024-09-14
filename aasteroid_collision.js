var asteroidCollision = function (asteroids) {
  const res = []
  for (let i = 0; i < asteroids.length; i++) {
      const last = res[res.length - 1]
      const cur = asteroids[i]
      if (!res.length || last < 0 || cur > 0) {
          res.push(cur)
      } else if (-cur == last) {
          res.pop()
      } else if (-cur > last) {
          res.pop()
          i--
      }
  }
  return res
};



var asteroidCollision = function (rocks) {
  const result = [];
  for (let index = 0; index < rocks.length; index++) {
      const top = result[result.length - 1];
      const current = rocks[index];
      if (!result.length || top < 0 || current > 0) {
          result.push(current);
      } else if (-current == top) {
          result.pop();
      } else if (-current > top) {
          result.pop();
          index--;
      }
  }
  return result;
};



/* We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
2/2
ChatGPT said:
ChatGPT

To solve the problem of determining the state of asteroids after all collisions, we can use a stack-based approach. This approach effectively manages the collisions between asteroids by processing them in a linear pass through the array.
Approach

    Use a Stack:
        Iterate through the asteroids array.
        Use a stack to keep track of asteroids that have not yet collided.
        For each asteroid, check if it should collide with the asteroid at the top of the stack:
            Collision Rules:
                If both asteroids are moving in the same direction, no collision occurs.
                If the asteroid from the current iteration is moving left and the top asteroid of the stack is moving right, a collision occurs.
                Compare the absolute sizes of the colliding asteroids to determine which one survives.
        Continue processing until all collisions are resolved.

    Handle Collisions:
        If the current asteroid is smaller than the top of the stack, it will explode.
        If the current asteroid is larger, pop the stack and continue checking for further collisions.
        If both asteroids are of equal size, both explode.

Example

For asteroids = [10, 2, -5]:

    Process 10: Stack is now [10].
    Process 2: Stack is [10, 2].
    Process -5: 2 and -5 collide. -5 survives, so stack becomes [10, -5]. Then 10 and -5 collide, 10 survives.

Here's the implementation of the approach:

javascript

/**
 * @param {number[]} asteroids
 * @return {number[]}
 *
var asteroidCollision = function(asteroids) {
  let stack = [];
  
  for (let asteroid of asteroids) {
      // Process current asteroid
      let collision = true;
      while (collision && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
          // Check for collision
          if (stack[stack.length - 1] < -asteroid) {
              // The current asteroid is larger, so pop the stack and continue
              stack.pop();
          } else if (stack[stack.length - 1] === -asteroid) {
              // Both asteroids are of equal size, so both explode
              stack.pop();
              collision = false;
          } else {
              // The asteroid in the stack is larger, so the current asteroid explodes
              collision = false;
          }
      }
      if (collision) {
          // No collision, or the current asteroid survived
          stack.push(asteroid);
      }
  }
  
  return stack;
};

// Example usage:
console.log(asteroidCollision([5,10,-5])); // Output: [5, 10]
console.log(asteroidCollision([8,-8])); // Output: []
console.log(asteroidCollision([10,2,-5])); // Output: [10]

Explanation

  Iterate Through Asteroids:
      For each asteroid, check for potential collisions with the top of the stack.

  Handle Collisions:
      If a collision occurs, resolve it based on size and direction.
      Update the stack accordingly to reflect the state of asteroids after collisions.

  Output Result:
      Return the stack which represents the state of the asteroids after all collisions.

This approach efficiently processes the collisions in linear time and ensures that we handle all possible scenarios correctly.
*/