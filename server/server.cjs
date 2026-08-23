const http = require("http");

const expenses = [
  {
    id: 1,
    name: "Pizza",
    category: "Food",
    amount: 250
  },
  {
    id: 2,
    name: "Bus Ticket",
    category: "Travel",
    amount: 50
  }
];

const server = http.createServer((req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:5173"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/expenses") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(expenses));
    return;
  }

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("Student Expense Tracker API is running");
    return;
  }

  res.writeHead(404, {
    "Content-Type": "text/plain"
  });

  res.end("Route not found");
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});