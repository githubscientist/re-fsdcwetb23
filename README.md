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

### useRef

- We can use useRef in two ways:
  1. To access DOM elements directly.
  2. To store mutable values that do not cause re-renders when changed. But the value is persistent across renders.

### useReducer

- useReducer is a hook that is used for managing complex state logic in functional components.
- It is an alternative to useState and is particularly useful when the state logic involves multiple sub-values.

### useMemo

- useMemo is a hook that is used to optimize performance by memoizing expensive calculations.
- It is an uncommon hook and is used to avoid unnecessary re-computations of values that are expensive to calculate.

### useEffect

- useEffect is a hook that allows you to perform side effects in functional components.

Note:

- hooks cannot be used inside class components.
- hooks are just functions that can be used inside functional components to bring in a feature that was previously only available in class components.
- useEffect hook is used to bring in lifecycle methods to functional components.
- life cycle methods:
  Let's say I need some functions to run:
  - when the component is mounted,
  - When the component is updated or re-rendered,
  - When the component is unmounted or removed from the DOM.
- Side effects are operations that runs outside the scope of the component, such as fetching data, subscribing to events, or manipulating the DOM.

### React Router

Let's take an example.

Address or Route: http://guvi.in

- http: unsecure protocol
- https: secure protocol (with SSL certificate)
- SSL: Secure Socket Layer

guvi.in

- / : root path or route
- /code-kata
- /webkata
- /courses?current_tab=myCourses - Courses Index Page (My Courses)
  - ?current_tab=freelibrary - Free Courses
  - ?current_tab=offers - Combo Courses
  - ?current_tab=paidcourse - Paid Courses
- /sqlkata
- /debugging
- /ide
- courses-video/?course=javascriptTa

http://localhost:5173/

localhost:5173

- /
- /about
- /contact

What is happening in the application?

Step 1: Visit the URL in the browser.
let's say http://localhost:5173/dashboard
Step 2: This sets the route to the path (/dashboard).
Step 3: The React Router matches the path with the defined routes in the application and loads the corresponding component. In this case, it loads the Dashboard component.
Step 4: The Dashboard component is rendered in the browser, displaying the content of the dashboard.
Step 5: When rendering the Dashboard component, it also fetches the list of todos from the API using fetch.
Step 6: The fetched todos are stored in the state (todos) of the Dashboard component.
Step 7: This causes state change, which triggers a re-render of the Dashboard component.
Step 8: The re-rendered Dashboard component displays the list of todos fetched from the API.

### Loaders

- Loaders are functions that run before the component is rendered.

### Fetching Data

- XHR (XMLHttpRequest) is a browser API that allows you to make HTTP requests to fetch data from a server.
- Fetch API is a modern alternative to XHR that provides a more powerful and flexible way to make HTTP requests.
- It is based on Promises, making it easier to work with asynchronous code
- Axios is a popular third-party library for making HTTP requests in JavaScript. It provides a simple and intuitive API for making requests and handling responses.
- It is built on top of the Fetch API and provides additional features like request cancellation, interceptors, and automatic JSON parsing.

### Axios Instance

- An Axios instance is a pre-configured instance of the Axios library that can be used to make HTTP requests.
- It allows you to set default configurations like base URL, headers, and timeouts for all
- requests made using that instance.
