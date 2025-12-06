    import cors from "cors"
    import express from "express"
    // import dotenv from "dotenv"

    // dotenv.config({ path: ".env.local" })

    // app.js
    const app = express();
    const port = 3000; // Or any port you prefer

    // --- Middleware ---
    app.use(cors())
    app.use(express.json()) // For JSON data
    app.use(express.urlencoded({ extended: true })) // For URL-encoded data
    app.use(express.static('public'))

    // Define a simple route
    app.get('/', (req, res) => {
      res.send('Hello from Express! Lets build your first Mastra agent');
    });

    app.get('/contact', (req, res) => {
      res.send('Welcome to the Contact page!');
    })

    // app.put('/user', (req, res) => {
    //   res.send('Got a PUT request at /user')
    // })

    // Start the server
    app.listen(port, () => {
      console.log(`Express app listening at http://localhost:${port}`);
    });