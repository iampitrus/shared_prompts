// Our backend url is http://localhost:300/api/users
// Instead of using express! This is awesome

export async function GET(request) {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];
}
