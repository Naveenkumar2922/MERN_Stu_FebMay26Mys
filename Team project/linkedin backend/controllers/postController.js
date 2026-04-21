const posts = require('../data/posts');
const connections = require('../data/connections');

exports.createPost = (req, res) => {
  const post = {
    id: Date.now().toString(),
    authorId: req.user.userId,
    content: req.body.content,
    likes: [],
    comments: [],
    createdAt: new Date()
  };

  posts.push(post);
  res.json(post);
};

exports.likePost = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (post.likes.includes(req.user.userId)) {
    return res.status(400).json({ message: "Already liked" });
  }

  post.likes.push(req.user.userId);
  res.json(post);
};

exports.commentPost = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  post.comments.push({
    userId: req.user.userId,
    text: req.body.text
  });

  res.json(post);
};

exports.getFeed = (req, res) => {
  const userId = req.user.userId;

  const userConnections = connections
    .filter(c => c.status === "accepted" &&
      (c.senderId === userId || c.receiverId === userId))
    .map(c => c.senderId === userId ? c.receiverId : c.senderId);

  const feed = posts
    .filter(p => userConnections.includes(p.authorId))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json(feed);
};