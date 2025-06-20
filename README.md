#  Node CI/CD Pipeline with Render

This project demonstrates a complete CI/CD pipeline for a Node.js backend application using **GitHub Actions**. It includes automated testing, linting, and deployment to [Render](https://render.com), with real-time Slack notifications on pipeline success or failure.

---

##  Features
-  **CI**: Runs ESLint and tests on every push to `main`
-  **CD**: Automatically deploys to Render after a successful build
-  **Slack Notifications**: Notifies success or failure in your preferred Slack channel
-  **Secrets Management**: Uses GitHub Secrets for secure deployment keys and webhooks

---

## Workflow Breakdown

###  `build-and-deploy` Job
| Step                | Description                              |
|---------------------|------------------------------------------|
| Checkout            | Pulls latest code from `main` branch     |
| Setup Node          | Sets up Node.js v18 environment          |
| Install Dependencies| Runs `npm install`                       |
| Lint Code           | Runs ESLint and auto-fixes issues        |
| Run Tests           | Executes unit tests                      |
| Deploy              | Triggers Render deploy via webhook       |

### `notify` Job
| Condition  | Slack Message                             |
|------------|--------------------------------------------|
| `success()`|  CI/CD success! Node app deployed to Render 🚀 |
| `failure()`|  CI/CD FAILED! Something broke 😓        |

---

##  Setup Instructions

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/yourrepo.git
   cd yourrepo
   ```

2. **Add GitHub Secrets**  
   Go to **Settings → Secrets and variables → Actions** and add:
   - `RENDER_DEPLOY_HOOK`: Your Render deploy webhook URL
   - `SLACK_WEBHOOK_URL`: Your Slack Incoming Webhook URL

3. **Push to `main` branch**  
   This will trigger the full CI/CD pipeline automatically.

---

##  Project Structure

```
.github/
└── workflows/
    └── node-ci-cd.yml     # Your GitHub Actions workflow file

src/
├── index.js               # Your main server file
├── routes/                # API routes
└── tests/                 # Unit tests
```

---

##  Example Slack Notifications

> `CI/CD success! Node app deployed to Render 🚀`  
> `CI/CD FAILED! Something broke in the pipeline 😓`

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Want to Extend It?
- Add `build` or `dockerize` steps
- Run code coverage checks
- Auto-deploy to staging & production environments
- Use status badges in your README
