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
