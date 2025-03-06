const getUsersAsync = async () => {
  try {
    const url ="https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const dataJSON = await response.json();
    console.log(dataJSON)

    const userList = document.querySelector(".fetch-data .users");
    userList.appendChild(document.createElement("li")).textContent = `USER ID : ${dataJSON[0].userId}`;

    dataJSON.forEach(el => {                
        let ul = document.createElement("ul");
        userList.append(ul);
        ul.appendChild(document.createElement("li")).textContent = `Post ID :${el.id}`;
        ul.appendChild(document.createElement("li")).textContent = `${el.body}`;
        ul.appendChild(document.createElement("li")).textContent = `${el.title}`;
    });
    
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }  

  
};

getUsersAsync();