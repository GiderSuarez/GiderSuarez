
# npm install

```bash
npm install
```

Installs dependencies listed in `package.json` and creates a `node_modules` folder.

**Common options:**
- `npm install <package>` - Install a specific package
- `npm install --save-dev <package>` - Install as a dev dependency
- `npm install --global <package>` - Install globally
- `npm ci` - Clean install (for CI/CD environments)

# npm start

```bash
npm start
```

Runs the start script defined in `package.json`. This typically launches your application or development server.

**Common usage:**
- `npm start` - Run the default start script
- `npm run <script>` - Run any custom script defined in `package.json`
