# React Repo for FSD-C-WE-T-B23

## Steps to initialize the project as a Git Repo

1. **Initialize Git**: Open your terminal and navigate to the project directory. Run:

```bash
git init
```

2. Visit [GitHub](https://github.com) and create a new repository. Do not initialize it with a README, .gitignore, or license.

3. **Add Remote Origin**: After creating the repository, copy the remote URL and run:

```bash
git remote add origin <your-repo-url>
```

4. **Rename the default branch**: If your Git version is 2.28 or later, you can set the default branch name to `main` by running:

```bash
git branch -M main
```

5. **Add Files**: Add all files to the staging area:

```bash
git add .
```

6. **Commit Changes**: Commit the changes with a message:

```bash
git commit -m "Initial commit"
```

7. **Push to GitHub**: Finally, push your changes to the remote repository:

```bash
git push -u origin main
```

#### Component

- Component are the building blocks of React applications.
- They are reusable pieces of code that can be composed to create complex UIs.

#### JSX

- JavaScript XML (JSX) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.

#### Props Drilling

- Props drilling refers to the process of passing data from a parent component to a deeply nested child component through multiple layers of components.

ComponentA (data)

- return ComponentB (data) - return ComponentC (data) - return ComponentD (data)

Disadvantages of Props Drilling:

- It can make the code harder to read and maintain.
- It can lead to unnecessary re-renders of components that do not need the data.
- The data is passed through multiple layers of components, which might not need it, leading to performance issues.

#### Solution to Props Drilling

- Use Context API.

### React Components

- We have two types of components in React:

1. Class Components

   - uses class syntax.
   - it is a legacy way of creating components.
   - Stateful components [State -> Component's Memory]
   - They can hold and manage their own state.
   - They have lifecycle methods that allow you to hook into different stages of a component's life (e.g., mounting, updating, unmounting).
   - They are more verbose and require more boilerplate code.

2. Functional Components
   - uses function syntax.
   - it was available since the beginning of React but became more popular in the year of 2019 with the introduction of Hooks.
   - Stateless components
   - They do not have their own state.
   - They do not have lifecycle methods.
   - They are simpler and easier to read.
   - They are more performant than class components.
   - Despite they are performant, they are not stateful and do not have lifecycle methods and hence they are not suitable.
   - Then, in 2019, React introduced Hooks, which allow functional components to have state and lifecycle methods.

### Hooks

- Hooks are functions that allow you to use state and other React features in functional components.
- They were introduced in React 16.8.
- All the hooks start with the word "use".
- The most commonly used hooks are:
  - useState: To manage state in functional components.
  - useEffect: To perform side effects in functional components (similar to lifecycle methods in class components).
