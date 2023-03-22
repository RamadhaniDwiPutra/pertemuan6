const apiKey = "your-api-key";
const url = `https://crudcrud.com/api/f1d7b313b475453dac526d6b748aa1cd/tasks`;

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function postData(data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
}

async function updateData(id, data) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
}

async function deleteData(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
}

async function showTasks() {
  const tasks = await fetchData();
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.title;

    const span = document.createElement("span");
    span.textContent = "×";
    span.className = "close";
    span.onclick = async function () {
      await deleteData(task._id);
      li.remove();
    };

    li.appendChild(span);

    if (task.completed) {
      li.classList.add("checked");
    }

    li.onclick = async function () {
      task.completed = !task.completed;
      await updateData(task._id, task);
      li.classList.toggle("checked");
    };

    document.getElementById("myUL").appendChild(li);
  });
}

async function newElement() {
  const inputValue = document.getElementById("myInput").value;

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    const task = {
      title: inputValue,
      completed: false,
    };

    const createdTask = await postData(task);

    const li = document.createElement("li");
    li.textContent = createdTask.title;

    const span = document.createElement("span");
    span.textContent = "×";
    span.className = "close";
    span.onclick = async function () {
      await deleteData(createdTask._id);
      li.remove();
    };

    li.appendChild(span);

    li.onclick = async function () {
      createdTask.completed = !createdTask.completed;
      await updateData(createdTask._id, createdTask);
      li.classList.toggle("checked");
    };

    document.getElementById("myUL").appendChild(li);
  }
}