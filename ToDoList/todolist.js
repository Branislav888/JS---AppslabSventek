        const input = document.getElementById("taskinput");
        const button = document.getElementById("idBtn");
        const list = document.getElementById("taskList");
        const counter = document.getElementById("counter");

        function updateCounter() {
            counter.textContent = "Počet úloh: " + list.children.length;
        }

        function pridajUlohu() {
            const text = input.value.trim();
            if (text === "") return;

            const li = document.createElement("li");
            li.textContent = text;

            li.addEventListener("click", function () {
                li.remove();
                updateCounter(); 
            });

            list.appendChild(li);
            input.value = "";
            updateCounter(); 
        }

        button.addEventListener("click", pridajUlohu);

        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                pridajUlohu();
            }
        });