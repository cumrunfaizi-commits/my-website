
document.addEventListener("DOMContentLoaded", function () {

    const passwordWrappers = document.querySelectorAll(".password-wrapper");

    passwordWrappers.forEach(function (wrapper) {

        const passwordInput = wrapper.querySelector("input");
        const toggleButton = wrapper.querySelector(".toggle-password");

        if (!passwordInput || !toggleButton) return;

        toggleButton.addEventListener("click", function () {

            const isHidden = passwordInput.type === "password";

            passwordInput.type = isHidden ? "text" : "password";

            toggleButton.textContent = isHidden ? "مخفی" : "نمایش";

            toggleButton.setAttribute("aria-pressed", isHidden);

        });

    });

});
