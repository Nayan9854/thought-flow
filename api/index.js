// import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/index.js';
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';
import likesRouter from './routes/likes.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import commentRouter from './routes/comment.routes.js';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();

const app = express();

// ✅ Step C — Backend CORS: allow production + Vercel previews
const allowedOrigins = [
  'https://thought-flow-x8ch.vercel.app', // Production domain
  /\.vercel\.app$/                        // Any Vercel preview deployment
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow Postman / curl / server-to-server
    const allowed = allowedOrigins.some(o =>
      (o instanceof RegExp ? o.test(origin) : o === origin)
    );
    if (allowed) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for origin ' + origin));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/post', postRouter);
app.use('/api/v1/post/likes', likesRouter);
app.use('/api/v1/post/comments', commentRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

connectToMongoDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed!", error);
  });

export { app };
