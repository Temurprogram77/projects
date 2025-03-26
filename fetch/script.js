'use strict';
const API = 'https://reqres.in/api/users';
let createUserBtn = document.querySelector('#createBtn');
let saveContainer = document.querySelector('#saveContainer');
let message = document.querySelector('.message')
let user = [];

const createUser = async () => {
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;
  if (!name || !job) {
    message.textContent = "Iltimos ismingiz bilan kasbingizni kiriting";
  }
  try {
    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, job }),
    });
    const data = await response.json();
    user.push(data);
    message.textContent = "Yangi foydalanuchi qo'shildi.";
    
    console.log(data);
  } catch {
    message.textContent = "Iltimos ismingiz bilan kasbingizni kiriting";
  }
};
createUserBtn.addEventListener("click", createUser);
