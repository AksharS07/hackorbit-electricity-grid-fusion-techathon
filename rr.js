/*
===========================================================
SMART GRID DEMAND FORECASTING SYSTEM
Enterprise Energy Dashboard Website
Includes:
1. Login Page
2. Signup Page
3. Error Page
4. Home Dashboard
5. Exit Page
6. Responsive UI
7. Sidebar Toggle
8. Live Clock
9. Fake Dynamic Data Updates
10. Strong Password Validation

HOW TO USE:
1. Create:
   - index.html
   - style.css
   - script.js

2. Paste this JS into script.js

3. Connect:
   <script src="script.js"></script>

===========================================================
*/


/* =========================================================
GLOBAL VARIABLES
========================================================= */

const users = [];

/* =========================================================
APP INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeClock();
    initializeSidebar();
    initializeAuthForms();
    initializeDashboard();
    initializeExitPage();
});


/* =========================================================
LIVE CLOCK
========================================================= */

function initializeClock() {
    const clock = document.getElementById("liveClock");

    if (!clock) return;

    setInterval(() => {
        const now = new Date();

        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        clock.innerHTML = `
            <span>${date}</span>
            <span>${time}</span>
        `;
    }, 1000);
}


/* =========================================================
SIDEBAR TOGGLE
========================================================= */

function initializeSidebar() {

    const toggleBtn = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");

    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
}


/* =========================================================
AUTHENTICATION SYSTEM
========================================================= */

function initializeAuthForms() {

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    /* LOGIN */
    if (loginForm) {

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username =
                document.getElementById("loginUsername").value.trim();

            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value;

            const foundUser = users.find(user =>
                user.username === username &&
                user.email === email &&
                user.password === password
            );

            if (foundUser) {

                showPopup("Login Successful ✅");

                setTimeout(() => {
                    window.location.href = "home.html";
                }, 1500);

            } else {

                window.location.href = "error.html";
            }
        });
    }


    /* SIGNUP */
    if (signupForm) {

        signupForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const username =
                document.getElementById("signupUsername").value.trim();

            const email =
                document.getElementById("signupEmail").value.trim();

            const phone =
                document.getElementById("signupPhone").value.trim();

            const password =
                document.getElementById("signupPassword").value;

            /* VALIDATE PASSWORD */
            if (!isStrongPassword(password)) {

                alert(
                    "Password must contain:\n" +
                    "• Uppercase letter\n" +
                    "• Lowercase letter\n" +
                    "• Number\n" +
                    "• Special character\n" +
                    "• Minimum 8 characters"
                );

                document.getElementById("signupPassword").focus();
                return;
            }

            /* SAVE USER */
            users.push({
                username,
                email,
                phone,
                password
            });

            showPopup("Account Created Successfully 🎉");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);

        });
    }
}


/* =========================================================
STRONG PASSWORD VALIDATION
========================================================= */

function isStrongPassword(password) {

    const strongRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return strongRegex.test(password);
}


/* =========================================================
POPUP FUNCTION
========================================================= */

function showPopup(message) {

    const popup = document.createElement("div");

    popup.className = "popup-message";
    popup.innerText = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show");
    }, 100);

    setTimeout(() => {

        popup.classList.remove("show");

        setTimeout(() => {
            popup.remove();
        }, 500);

    }, 2500);
}


/* =========================================================
DASHBOARD FEATURES
========================================================= */

function initializeDashboard() {

    initializeDynamicCards();
    initializeHoverEffects();
    initializeProgressBars();
    initializeNotificationDropdown();
}


/* =========================================================
DYNAMIC KPI DATA
========================================================= */

function initializeDynamicCards() {

    const rmse = document.getElementById("rmseValue");
    const mape = document.getElementById("mapeValue");
    const peak = document.getElementById("peakDemand");
    const load = document.getElementById("avgLoad");

    if (!rmse) return;

    setInterval(() => {

        /* Simulated Data From Backend */

        const rmseData =
            (Math.random() * 5 + 1).toFixed(2);

        const mapeData =
            (Math.random() * 10 + 1).toFixed(2);

        const peakData =
            Math.floor(Math.random() * 500 + 200);

        const loadData =
            Math.floor(Math.random() * 300 + 100);

        rmse.innerText = rmseData;
        mape.innerText = `${mapeData}%`;
        peak.innerText = `${peakData} MW`;
        load.innerText = `${loadData} MW`;

    }, 3000);
}


/* =========================================================
CARD HOVER EFFECTS
========================================================= */

function initializeHoverEffects() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(0,255,255,0.15),
                rgba(255,255,255,0.03))`;
        });

        card.addEventListener("mouseleave", () => {

            card.style.background =
                "rgba(255,255,255,0.05)";
        });
    });
}


/* =========================================================
ANIMATED PROGRESS BARS
========================================================= */

function initializeProgressBars() {

    const bars = document.querySelectorAll(".progress-fill");

    bars.forEach(bar => {

        const value = bar.dataset.progress;

        setTimeout(() => {
            bar.style.width = value + "%";
        }, 500);
    });
}


/* =========================================================
NOTIFICATION DROPDOWN
========================================================= */

function initializeNotificationDropdown() {

    const bell =
        document.getElementById("notificationBell");

    const dropdown =
        document.getElementById("notificationDropdown");

    if (!bell || !dropdown) return;

    bell.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
}


/* =========================================================
EXIT PAGE
========================================================= */

function initializeExitPage() {

    const exitBtn = document.getElementById("exitButton");

    if (!exitBtn) return;

    exitBtn.addEventListener("click", () => {

        const confirmExit =
            confirm("Are you sure you want to exit?");

        if (confirmExit) {

            showPopup("Exited Successfully 👋");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);

        }
    });
}


/* =========================================================
RESPONSIVE WINDOW HANDLING
========================================================= */

window.addEventListener("resize", () => {

    const sidebar = document.getElementById("sidebar");

    if (!sidebar) return;

    if (window.innerWidth < 768) {

        sidebar.classList.add("collapsed");

    } else {

        sidebar.classList.remove("collapsed");
    }
});


/* =========================================================
LOADING SCREEN
========================================================= */

window.onload = function () {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);
};


/* =========================================================
THEME TRANSITION EFFECTS
========================================================= */

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("theme-btn")) {

        document.body.classList.toggle("light-theme");
    }
});


/* =========================================================
FAKE ALERTS & INSIGHTS
========================================================= */

const alerts = [
    "⚠ Peak load increased in Zone A",
    "✅ Forecast accuracy improved",
    "⚡ Voltage stable across sectors",
    "🔋 Energy optimization active",
    "📊 AI prediction updated"
];

function rotateAlerts() {

    const alertBox =
        document.getElementById("liveAlerts");

    if (!alertBox) return;

    let index = 0;

    setInterval(() => {

        alertBox.innerText = alerts[index];

        index++;

        if (index >= alerts.length) {
            index = 0;
        }

    }, 4000);
}

rotateAlerts();


/* =========================================================
BUTTON RIPPLE EFFECT
========================================================= */

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("ripple")) {

        const button = e.target;

        const circle = document.createElement("span");

        const diameter =
            Math.max(button.clientWidth, button.clientHeight);

        const radius = diameter / 2;

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - button.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - button.offsetTop - radius}px`;

        circle.classList.add("ripple-effect");

        const ripple =
            button.getElementsByClassName("ripple-effect")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }
});


/* =========================================================
SAMPLE LOGOUT FUNCTION
========================================================= */

function logout() {

    showPopup("Logging out...");

    setTimeout(() => {
        window.location.href = "exit.html";
    }, 1200);
}


/* =========================================================
END OF FILE
========================================================= */