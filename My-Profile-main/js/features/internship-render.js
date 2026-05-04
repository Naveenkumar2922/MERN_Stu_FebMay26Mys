const container = document.getElementById("internship-container");

internships.forEach((item) => {
    const card = document.createElement("div");

    card.className = "group shadow-2xl rounded-3xl p-8 hover:shadow-2xl transition-all relative overflow-hidden";

    card.innerHTML = `
        <div class="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div class="relative z-10 flex items-center gap-4">
            <div class="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                <span class="text-white font-bold">I</span>
            </div>

            <div>
                <h3 class="text-2xl font-semibold">${item.role}</h3>
                <p class="text-md font-semibold">${item.company}</p>
                <p class="text-sm">Duration: ${item.duration}</p>
                <p class="text-sm mt-2">${item.description}</p>
            </div>
        </div>
    `;

    container.appendChild(card);
});