
document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.querySelector("#password");
    const toggleButton = document.querySelector("#login-toggle-password");

    if (!passwordInput || !toggleButton) return;

    const eyeIcon = `
        <svg class="eye-icon" viewBox="0 0 24 24"
             fill="none" stroke="currentColor"
             stroke-width="1.8"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    `;

    const eyeOffIcon = `
        <svg class="eye-icon" viewBox="0 0 24 24"
             fill="none" stroke="currentColor"
             stroke-width="1.8"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M3 3l18 18"/>
            <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/>
            <path d="M9.9 5.2A11 11 0 0 1 12 5c6.4 0 10 7 10 7a13 13 0 0 1-3 3.7"/>
            <path d="M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1 0 2-.2 2.9-.5"/>
        </svg>
    `;

    toggleButton.innerHTML = eyeIcon;

    toggleButton.addEventListener("click", function () {

        const isHidden = passwordInput.type === "password";

        passwordInput.type = isHidden ? "text" : "password";

        toggleButton.innerHTML = isHidden ? eyeOffIcon : eyeIcon;

        toggleButton.setAttribute("aria-pressed", String(isHidden));

        toggleButton.setAttribute(
            "aria-label",
            isHidden ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"
        );

    });

});

