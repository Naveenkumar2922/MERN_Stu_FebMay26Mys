const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const connectionRoutes = require('./routes/connectionRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

app.use(logger);

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/connections', connectionRoutes);
app.use('/posts', postRoutes);

app.use(errorHandler);

module.exports = app;