console.log("script読み込みOK");


// ====================
// 作品検索
// ====================

const searchInput = document.getElementById("searchInput");
const workCards = document.querySelectorAll(".work-card");

if (searchInput && workCards.length > 0) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        workCards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(keyword)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}


// ====================
// ハンバーガーメニュー
// ====================

const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");

if (menuButton && menuPanel) {

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");
        menuPanel.classList.toggle("open");

    });

}
