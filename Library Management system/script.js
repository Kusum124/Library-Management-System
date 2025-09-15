// Data initialization
function initializeData() {
  // Check if books data exists in localStorage
  if (!localStorage.getItem("books")) {
    // Sample book data
    const books = [
      {
        id: "B001",
        title: "Introduction to JavaScript",
        author: "John Doe",
        year: 2020,
        isAvailable: true,
      },
      {
        id: "B002",
        title: "CSS Mastery",
        author: "Jane Smith",
        year: 2019,
        isAvailable: true,
      },
      {
        id: "B003",
        title: "HTML5 Fundamentals",
        author: "Mike Johnson",
        year: 2021,
        isAvailable: false,
      },
      {
        id: "B004",
        title: "Web Development Basics",
        author: "Sarah Williams",
        year: 2018,
        isAvailable: true,
      },
      {
        id: "B005",
        title: "Advanced React",
        author: "David Brown",
        year: 2022,
        isAvailable: true,
      },
      {
        id: "B006",
        title: "Python for Beginners",
        author: "Emily Davis",
        year: 2020,
        isAvailable: true,
      },
      {
        id: "B007",
        title: "Data Structures & Algorithms",
        author: "Robert Wilson",
        year: 2019,
        isAvailable: false,
      },
      {
        id: "B008",
        title: "Machine Learning Basics",
        author: "Maria Garcia",
        year: 2021,
        isAvailable: true,
      },
      {
        id: "B009",
        title: "Database Management",
        author: "Laura Chen",
        year: 2020,
        isAvailable: true,
      },
      {
        id: "B010",
        title: "Cybersecurity Essentials",
        author: "James Smith",
        year: 2022,
        isAvailable: true,
      },
      {
        id: "B011",
        title: "Cloud Computing",
        author: "Alice Johnson",
        year: 2021,
        isAvailable: true,
      },
      {
        id: "B012",
        title: "C++ Programming",
        author: "Emily Davis",
        year: 2020,
        isAvailable: true,
      },
      {
        id: "B013",
        title: "Java Programming",
        author: "John Smith",
        year: 2021,
        isAvailable: true,
      },
      {
        id: "B014",
        title: "JavaScript Advanced Concepts",
        author: "Jane Doe",
        year: 2023,
        isAvailable: true,
      },
      {
        id: "B015",
        title: "React and Redux",
        author: "Alice Johnson",
        year: 2023,
        isAvailable: true,
      },
      {
        id: "B016",
        title: "Node.js in Action",
        author: "John Doe",
        year: 2020,
        isAvailable: true,
      },
      {
        id: "B017",
        title: "Angular for Beginners",
        author: "Jane Smith",
        year: 2022,
        isAvailable: true,
      },
      {
        id: "B018",
        title: "Vue.js Essentials",
        author: "Alice Johnson",
        year: 2021,
        isAvailable: true,
      },
      {
        id: "B019",
        title: "Django for Web Development",
        author: "Michael Brown",
        year: 2020,
        isAvailable: true,
      },
      {
        id: "B020",
        title: "Flask Web Framework",
        author: "Alice Johnson",
        year: 2020,
        isAvailable: true,
      },
    ];
    localStorage.setItem("books", JSON.stringify(books));
  }

  // Check if users data exists in localStorage
  if (!localStorage.getItem("users")) {
    // Sample user data
    const users = [
      {
        username: "admin",
        password: "admin123",
        fullName: "System Administrator",
        email: "admin@library.com",
        joinDate: "January 1, 2023",
        booksBorrowed: 1,
      },
      {
        username: "librarian",
        password: "lib123",
        fullName: "Library Manager",
        email: "librarian@library.com",
        joinDate: "February 15, 2023",
        booksBorrowed: 2,
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }

  // Check if transactions data exists in localStorage
  if (!localStorage.getItem("transactions")) {
    localStorage.setItem("transactions", JSON.stringify([]));
  }
}

// DOM Elements
const authModal = document.getElementById("authModal");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const closeModalBtn = document.querySelector(".close-modal");
const loginHeaderBtn = document.getElementById("loginHeaderBtn");
const registerHeaderBtn = document.getElementById("registerHeaderBtn");
const getStartedBtn = document.getElementById("getStartedBtn");
const ctaGetStartedBtn = document.getElementById("ctaGetStartedBtn");
const landingPage = document.getElementById("landingPage");
const dashboard = document.getElementById("dashboard");

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  initializeData();

  // Stats animation
  const statElements = document.querySelectorAll(".stat-number");
  const values = [5000, 250, 98];
  const durations = [2000, 1500, 1000];

  statElements.forEach((element, index) => {
    let startTime = null;
    const duration = durations[index];
    const endValue = values[index];
    const isPercent = element.textContent.includes("%");

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      let value = Math.floor(progress * endValue);
      element.textContent = isPercent ? value + "%" : value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });

  // Check if user is already logged in
  const currentUser = sessionStorage.getItem("currentUser");
  if (currentUser) {
    showDashboard(JSON.parse(currentUser));
  }
});

// Auth Modal functionality
loginHeaderBtn.addEventListener("click", showAuthModal);
registerHeaderBtn.addEventListener("click", showAuthModal);
getStartedBtn.addEventListener("click", showAuthModal);
ctaGetStartedBtn.addEventListener("click", showAuthModal);

function showAuthModal() {
  authModal.style.display = "flex";
}

closeModalBtn.addEventListener("click", function () {
  authModal.style.display = "none";
  document.getElementById("loginMsg").classList.add("hidden");
  document.getElementById("registerMsg").classList.add("hidden");
});

window.addEventListener("click", function (event) {
  if (event.target === authModal) {
    authModal.style.display = "none";
    document.getElementById("loginMsg").classList.add("hidden");
    document.getElementById("registerMsg").classList.add("hidden");
  }
});

// Tab switching functionality
loginTab.addEventListener("click", function () {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  document.getElementById("loginMsg").classList.add("hidden");
  document.getElementById("registerMsg").classList.add("hidden");
});

registerTab.addEventListener("click", function () {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  document.getElementById("loginMsg").classList.add("hidden");
  document.getElementById("registerMsg").classList.add("hidden");
});

// Registration functionality
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    document.getElementById("registerMsg").textContent ="Passwords do not match!";
    document.getElementById("registerMsg").className = "message error";
    document.getElementById("registerMsg").classList.remove("hidden");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));

  // Check if username already exists
  if (users.find((user) => user.username === username)) {
    document.getElementById("registerMsg").textContent ="Username already exists!";
    document.getElementById("registerMsg").className = "message error";
    document.getElementById("registerMsg").classList.remove("hidden");
    return;
  }

  // Add new user
  users.push({
    username: username,
    password: password,
    fullName: fullName,
    email: email,
    joinDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    booksBorrowed: 1,
  });

  localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("registerMsg").textContent ="Registration successful! You can now login.";
    document.getElementById("registerMsg").className = "message success";
    document.getElementById("registerMsg").classList.remove("hidden");

  // Switch to login tab after a delay
    setTimeout(function () {
    loginTab.click();
    registerForm.reset();
}, 2000);
});

// Login functionality
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
    (u) => u.username === username && u.password === password
);

    if (user) {
    // Store current user in session
    sessionStorage.setItem("currentUser", JSON.stringify(user));

    // Update profile information
    document.getElementById("profileName").textContent = user.fullName;
    document.getElementById("profileUsername").textContent = user.username;
    document.getElementById("profileEmail").textContent = user.email;
    document.getElementById("profileDate").textContent = user.joinDate;
    document.getElementById("profileBooks").textContent = user.booksBorrowed;

    // Show dashboard, hide landing page and auth modal
    showDashboard(user);
    authModal.style.display = "none";
} else {
    document.getElementById("loginMsg").textContent =
    "Invalid username or password!";
    document.getElementById("loginMsg").className = "message error";
    document.getElementById("loginMsg").classList.remove("hidden");
}
});

function showDashboard(user) {
    landingPage.style.display = "none";
    dashboard.style.display = "block";

  // Update profile information
    document.getElementById("profileName").textContent = user.fullName;
    document.getElementById("profileUsername").textContent = user.username;
    document.getElementById("profileEmail").textContent = user.email;
    document.getElementById("profileDate").textContent = user.joinDate;
    document.getElementById("profileBooks").textContent = user.booksBorrowed;
}

// Dashboard functionality
// Navigation handling
const navButtons = document.querySelectorAll(".nav-btn");
const contentSections = document.querySelectorAll(".section");

navButtons.forEach((button) => {
    button.addEventListener("click", function () {
    const target = this.getAttribute("data-target");

    // Update active button
    navButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    // Show target section
    contentSections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === target) {
        section.classList.add("active");

        // Load data for specific sections
        if (target === "display") {
            displayAllBooks();
        }
    }
    });
});
});

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.removeItem("currentUser");
    dashboard.style.display = "none";
    landingPage.style.display = "block";
    document.getElementById("loginForm").reset();
    document.getElementById("loginMsg").classList.add("hidden");
});

// Search functionality
const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        const searchTerm = document
        .getElementById("searchInput")
        .value.toLowerCase();
    const books = JSON.parse(localStorage.getItem("books"));

    const results = books.filter(
        (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.id.toLowerCase().includes(searchTerm)
    );

    displayBooks(results, "searchResults");
});
}

// Issue book functionality
const issueForm = document.getElementById("issueForm");
if (issueForm) {
    issueForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const bookId = document.getElementById("issueBookId").value;
    const memberId = document.getElementById("memberId").value;

    const books = JSON.parse(localStorage.getItem("books"));
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
        document.getElementById("issueStatus").innerHTML = `<div class="message error">Book not found!</div>`;
        return;
    }

    if (!books[bookIndex].isAvailable) {
        document.getElementById("issueStatus").innerHTML = `<div class="message error">Book is already issued!</div>`;
        return;
    }

    // Update book status
    books[bookIndex].isAvailable = false;
    localStorage.setItem("books", JSON.stringify(books));

    // Record transaction
    const transactions = JSON.parse(localStorage.getItem("transactions"));
    transactions.push({
        bookId: bookId,
        username: username,
        issueDate: new Date().toISOString(),
        returnDate: null,
    });
    localStorage.setItem("transactions", JSON.stringify(transactions));

    document.getElementById("issueStatus").innerHTML = `<div class="message success">Book issued successfully!</div>`;

    // Clear form
    issueForm.reset();
});
}

// Return book functionality
const returnForm = document.getElementById("returnForm");
if (returnForm) {
    returnForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const bookId = document.getElementById("returnBookId").value;
    const memberId = document.getElementById("returnMemberId").value;

    const books = JSON.parse(localStorage.getItem("books"));
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        document.getElementById("returnStatus").innerHTML = `<div class="message error">Book not found!</div>`;
        return;
    }

    if (books[bookIndex].isAvailable) {
        document.getElementById("returnStatus").innerHTML = `<div class="message error">Book was not issued!</div>`;
        return;
    }

    // Update book status
    books[bookIndex].isAvailable = true;
    localStorage.setItem("books", JSON.stringify(books));

    // Update transaction record
    const transactions = JSON.parse(localStorage.getItem("transactions"));
    const transactionIndex = transactions.findIndex((t) =>t.bookId === bookId && t.username === username && t.returnDate === null);

    if (transactionIndex !== -1) {
        transactions[transactionIndex].returnDate = new Date().toISOString();
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }

    document.getElementById("returnStatus").innerHTML = `<div class="message success">Book returned successfully!</div>`;

    // Clear form
    returnForm.reset();
});
}

// Function to display books
function displayBooks(books, containerId) {
    const container = document.getElementById(containerId);

if (books.length === 0) {
    container.innerHTML = '<div class="message error">No books found.</div>';
    return;
}

    let html = '<div class="book-list">';
    books.forEach((book) => {
    html += `
        <div class="book-card">
        <div class="book-title">${book.title}</div>
        <div class="book-info"><strong>ID:</strong> ${book.id}</div>
        <div class="book-info"><strong>Author:</strong> ${book.author}</div>
        <div class="book-info"><strong>Year:</strong> ${book.year}</div>
        <div class="book-info"><strong>Status:</strong> <span class="${book.isAvailable? "status-available": "status-borrowed"}">${book.isAvailable ? "Available" : "Borrowed"}</span></div>
        </div>`;
});
    html += "</div>";
    container.innerHTML = html;
}

// Function to display all books
function displayAllBooks() {
    const books = JSON.parse(localStorage.getItem("books"));
    displayBooks(books, "allBooks");
}

