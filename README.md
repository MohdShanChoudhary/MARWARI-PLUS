## This project was made with the help of AI (ChatGPT).

🔰 I only have basic to mid-level knowledge of HTML and CSS, and very little experience with React. Even though I didn’t know MERN stack properly, I was able to build this entire project with the help of ChatGPT — including backend APIs, frontend forms, MongoDB integration, and Excel export features.

💡 This shows that I have a strong ability to learn new things quickly. Even without knowing the full stack at the beginning, I created a working project that can actually be used in the real world for managing client transactions.

This was my first time building a full-stack app, and I learned a lot throughout the process. With the right mindset and support tools like AI, anything is possible — even for beginners.





##  Money Management System

A simple and powerful money management web app for tracking Buy/Sell transactions of clients. Built using the **MERN (MongoDB, Express.js, React.js, Node.js)** stack.

---

## 📌 Features

- 🧾 Add/Edit/Delete client transactions (Buy/Sell)
- 🔍 Filter clients by transaction type (Buy/Sell)
- 🗂️ Store Name, Phone, Amount, Paid, Pending, Remarks
- 📤 Export client data to Excel
- ☁️ MongoDB database for persistent storage
- 💻 Responsive and clean UI with React

---

## ⚙️ How It Works

1. User fills a form to add a Buy or Sell entry.
2. Data is stored in MongoDB via Node.js Express API.
3. Users can:
   - Filter by Buy/Sell
   - Edit client data using the same form
   - Delete client entry
   - Export the table to Excel file
4. Unique client name ensures data integrity.
---
## 📤 Export to Excel
We use the xlsx library in the frontend to convert the table data into an Excel sheet and trigger download.
