const form = document.querySelector("form");

form.addEventListener("submit", onSubmitHandler);

async function onSubmitHandler(event) {
  event.preventDefault();
  const title = event.target["title"].value;
  const body = event.target["body"].value;
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const userId = event.target["userId"].value;
    const id = event.target["id"].value;

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const json = await response.json();
    console.log(json)

    const userList = document.querySelector(".fetch-data .users");
    userList.appendChild(
      document.createElement("li")
    ).textContent = `USER ID : ${json.userId}`;
    // console.log(response)

    
      let ul = document.createElement("ul");
      userList.append(ul);
      
      ul.appendChild(document.createElement("li")).textContent = `${json.body}`;
      ul.appendChild(document.createElement("li")).textContent = `${json.title}`;
    

    if (!response.ok) throw new Error(response.statusText);
    
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}
