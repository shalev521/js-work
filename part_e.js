// תרגיל 22

// const movie = {
//   id: 41,
//   title: "Orbit",
//   genre: "Sci-Fi",
//   rating: 8.4,
// };

// const { genre, title, rating } = movie;

// console.log(`${title} | ${genre} | ${rating}`);


// תרגיל 23
// const user = {
//   id: 7,
//   u_name: "Dana Levi",
//   email: "dana@example.com",
//   isActive: true,
// };

// const formatUser = ({ u_name, email }) => `${u_name} ${email}`;
// console.log(formatUser(user));

// const getUserStatus = ({ u_name, isActive }) => `${u_name} - ${isActive ? 'active' : 'inactive'}`
// console.log(getUserStatus(user))


// תרגיל 24
// const player = {
//   id: 1,
//   nickname: "Noni",
//   score: 1200,
//   level: 8,
// };

// const comments = [
//   { id: 1, user: "Noa", text: "Great game!", likes: 12 },
//   { id: 2, user: "Dan", text: "Well played", likes: 7 },
// ];

// const commentnew = {
//   id: 66,
//   user: "shalev",
//   text: "hey",
//   likes: 10,
// };

// const updatedPlayer = { ...player, score: 410 };

// console.log(updatedPlayer);

// const commentsadd = [...comments, commentnew ];
// console.log(comments);
// console.log(commentsadd );


// תרגילל 25
// const tasks = [
//   { id: 1, title: "Write tests", completed: false, priority: "high" },
//   { id: 2, title: "Update profile", completed: true, priority: "low" },
//   { id: 3, title: "Fix login", completed: false, priority: "high" },
// ];

// const removetaskid = (tasks, id) =>
//  tasks.filter((task) => task.id != id);

// console.log(tasks)

// const tasksafter = removeTaskById(tasks, 1);
// console.log(tasksafter);

// console.log(tasks);