// fetch("https://jsonplaceholder.typicode.com/todos")
//   //then first because https request need time
//   .then((res) => res.json())
//   //then second beacuse .json() need time too
//   .then((data) => console.log(data));

// console.log("midas");

const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return data;
};

getTodos().then((data) => console.log(data));

console.log("midas");
