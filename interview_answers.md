# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   - REDUX has a metric fuckton of boilerplate and Context API, though it has performance downsides, is very nice to code.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   - Actions: return a type and sometimes a payload that tells the reducer what to do.
   - Reducers: create a new state based on the action object passed
   - Store: where the most current state is kept

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    - Thunk allows us to write more involved functions in our Action Creators, making the rest of our code cleaner

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    - I really like context api because it minimizes cognitive load while you're writing code.