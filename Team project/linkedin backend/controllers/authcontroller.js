const users = require('../data/users');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "User exists" });
  }

  const user = {
    id: Date.now().toString(),
    email,
    password,
    role: "user",
    connections: []
  };

  users.push(user);

  res.status(201).json({ message: "Registered" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, "secret", {
    expiresIn: "1h"
  });

  req.session.userId = user.id;

  res.cookie('token', token, { httpOnly: true });

  res.json({ token });
};