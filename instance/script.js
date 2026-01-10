function toggleTheme() {
    const root = document.documentElement;

    const isDark = root.classList.contains("dark-theme");

    if (!isDark) {
        // Dark / Purple theme
        root.style.setProperty("--bg-main", "#12001a");
        root.style.setProperty("--bg-card", "rgba(70, 0, 100, 0.4)");
        root.style.setProperty("--bg-header-start", "#3b005f");
        root.style.setProperty("--bg-header-end", "#12001a");
        // root.style.setProperty("--bg-link",`linear-gradient(to left, #3b005f, #12001a);`); does not work 
        root.style.setProperty("--text-main", "#f5f5f5");
        root.style.setProperty("--accent-outline", "#ff8c00");

        root.classList.add("dark-theme");
    } else {
        // Revert to light theme
        root.style.setProperty("--bg-main", "#81d6df");
        root.style.setProperty("--bg-card", "rgba(255, 255, 255, 0.3)");
        root.style.setProperty("--bg-header-start", "#47bac9");
        root.style.setProperty("--bg-header-end", "#effbfc");

        root.style.setProperty("--text-main", "#000000");
        root.style.setProperty("--accent-outline", "#47bac9");

        root.classList.remove("dark-theme");
    }
}

var switchbtn = document.getElementById('switch');
switchbtn.onclick = toggleTheme;
