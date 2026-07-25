console.log("読み込みできてる");
console.log("script読み込みOK");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("searchResults");


if(searchInput && results){

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

}

const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");


if(menuButton && menuPanel){

    menuButton.addEventListener("click",()=>{

        menuButton.classList.toggle("active");

        menuPanel.classList.toggle("open");

    });

}
