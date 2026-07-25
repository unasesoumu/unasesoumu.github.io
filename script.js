const searchInput = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

const works = [
    {
        name: "「またのお越しはお待ちしておりません。」",
        text: "CoC6版 ソロシナリオ 海底郵便局を舞台にした物語作品",
        url: "work1.html"
    }
];


searchInput.addEventListener("input", function() {

    const keyword = this.value.toLowerCase();

    results.innerHTML = "";

    if (keyword === "") {
        return;
    }


    works.forEach(work => {

        if (
            work.name.toLowerCase().includes(keyword) ||
            work.text.toLowerCase().includes(keyword)
        ) {

            results.innerHTML += `

            <div class="result-card">

                <h3>
                    ${work.name}
                </h3>

                <p>
                    ${work.text}
                </p>

               <a href="${work.url}">
    作品ページへ
</a>

            </div>

            `;

        }

    });

});
const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");


if(menuButton && menuPanel){

    menuButton.addEventListener("click",()=>{

        menuButton.classList.toggle("active");

        menuPanel.classList.toggle("open");

    });

}
