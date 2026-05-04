const connections = require('../data/connections');

exports.sendRequest = (req, res) => {
  const senderId = req.user.userId;
  const receiverId = req.params.userId;

  if (senderId === receiverId) {
    return res.status(400).json({ message: "Cannot connect yourself" });
  }

  const exists = connections.find(c =>
    c.senderId === senderId && c.receiverId === receiverId
  );

  if (exists) {
    return res.status(400).json({ message: "Already requested" });
  }

  connections.push({
    id: Date.now().toString(),
    senderId,
    receiverId,
    status: "pending"
  });

  res.json({ message: "Request sent" });
};

exports.acceptRequest = (req, res) => {
  const request = connections.find(c => c.id === req.params.id);
  if (!request) return res.status(404).json({ message: "Not found" });

  request.status = "accepted";

  res.json({ message: "Accepted" });
};

exports.rejectRequest = (req, res) => {
  const request = connections.find(c => c.id === req.params.id);
  if (!request) return res.status(404).json({ message: "Not found" });

  request.status = "rejected";

  res.json({ message: "Rejected" });
};

exports.getConnections = (req, res) => {
  const userId = req.user.userId;

  const result = connections.filter(c =>
    c.status === "accepted" &&
    (c.senderId === userId || c.receiverId === userId)
  );

  res.json(result);
};