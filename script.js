/* =========================================
   PHẦN 1: DỮ LIỆU CƠ BẢN (NGUYÊN TỐ)
   ========================================= */

const createEl = (z, sym, name, group, x, y) => ({ z, sym, name, group, x, y });

const elementsData = [
    // --- CHU KỲ 1 ---
    createEl(1, "H", "Hydrogen", "non-metal", 1, 1),
    createEl(2, "He", "Helium", "noble-gas", 18, 1),
    // --- CHU KỲ 2 ---
    createEl(3, "Li", "Lithium", "alkali", 1, 2),
    createEl(4, "Be", "Beryllium", "alkaline-earth", 2, 2),
    createEl(5, "B", "Boron", "metalloid", 13, 2),
    createEl(6, "C", "Carbon", "non-metal", 14, 2),
    createEl(7, "N", "Nitrogen", "non-metal", 15, 2),
    createEl(8, "O", "Oxygen", "non-metal", 16, 2),
    createEl(9, "F", "Fluorine", "halogen", 17, 2),
    createEl(10, "Ne", "Neon", "noble-gas", 18, 2),
    // --- CHU KỲ 3 ---
    createEl(11, "Na", "Sodium", "alkali", 1, 3),
    createEl(12, "Mg", "Magnesium", "alkaline-earth", 2, 3),
    createEl(13, "Al", "Aluminium", "post-transition", 13, 3),
    createEl(14, "Si", "Silicon", "metalloid", 14, 3),
    createEl(15, "P", "Phosphorus", "non-metal", 15, 3),
    createEl(16, "S", "Sulfur", "non-metal", 16, 3),
    createEl(17, "Cl", "Chlorine", "halogen", 17, 3),
    createEl(18, "Ar", "Argon", "noble-gas", 18, 3),
    // --- CHU KỲ 4 ---
    createEl(19, "K", "Potassium", "alkali", 1, 4),
    createEl(20, "Ca", "Calcium", "alkaline-earth", 2, 4),
    createEl(26, "Fe", "Iron", "transition", 8, 4),
    createEl(29, "Cu", "Copper", "transition", 11, 4),
    createEl(30, "Zn", "Zinc", "transition", 12, 4),
    createEl(35, "Br", "Bromine", "halogen", 17, 4),
    // --- CÁC NGUYÊN TỐ KHÁC (Đại diện) ---
    createEl(47, "Ag", "Silver", "transition", 11, 5),
    createEl(53, "I", "Iodine", "halogen", 17, 5),
    createEl(79, "Au", "Gold", "transition", 11, 6),
    createEl(80, "Hg", "Mercury", "transition", 12, 6),
    createEl(82, "Pb", "Lead", "post-transition", 14, 6),
    createEl(92, "U", "Uranium", "actinoid", 7, 10),
    // ... Bạn có thể thêm đủ 118 nếu muốn, nhưng đây là các chất chính để test
];

/* =========================================
   PHẦN 2: DỮ LIỆU PHẢN ỨNG (THỦ CÔNG + TỰ ĐỘNG)
   ========================================= */

// Danh sách ban đầu (Viết tay các phản ứng đặc biệt)
const reactionsDB = [
    { inputs: ["H", "O"], equation: "2H₂ + O₂ → 2H₂O", desc: "Nước" },
    { inputs: ["H", "B"], equation: "2B + 3H₂ → B₂H₆", desc: "Diborane" },
    { inputs: ["H", "N"], equation: "N₂ + 3H₂ ⇌ 2NH₃", desc: "Amoniac" },
    { inputs: ["C", "O"], equation: "C + O₂ → CO₂", desc: "Khí Carbonic" },
    { inputs: ["Na", "H", "O"], equation: "2Na + 2H₂O → 2NaOH + H₂", desc: "Natri vào nước" },
    { inputs: ["Fe", "S"], equation: "Fe + S → FeS", desc: "Sắt(II) Sunfua" }
];

// --- BỘ MÁY SINH DỮ LIỆU TỰ ĐỘNG (AUTO GENERATOR) ---
// Đây là phần giúp bạn có hàng trăm phản ứng mà không cần viết tay

const groups = {
    alkalis: ["Li", "Na", "K", "Rb", "Cs"],             // Nhóm I
    alkalineEarths: ["Be", "Mg", "Ca", "Sr", "Ba"],     // Nhóm II
    halogens: ["F", "Cl", "Br", "I"]                    // Nhóm VII
};

// 1. Tự động tạo phản ứng: KIM LOẠI KIỀM + HALOGEN (Na+Cl, K+Cl, Li+Br...)
groups.alkalis.forEach(metal => {
    groups.halogens.forEach(hal => {
        reactionsDB.push({
            inputs: [metal, hal],
            equation: `2${metal} + ${hal}₂ → 2${metal}${hal}`,
            desc: `Muối ${metal} ${hal}ua`
        });
    });
    
    // Tự động tạo phản ứng với OXY (Na+O, K+O...)
    reactionsDB.push({
        inputs: [metal, "O"],
        equation: `4${metal} + O₂ → 2${metal}₂O`,
        desc: `Oxit ${metal}`
    });
});

// 2. Tự động tạo phản ứng: KIỀM THỔ + HALOGEN (Mg+Cl, Ca+Cl...)
groups.alkalineEarths.forEach(metal => {
    groups.halogens.forEach(hal => {
        reactionsDB.push({
            inputs: [metal, hal],
            equation: `${metal} + ${hal}₂ → ${metal}${hal}₂`,
            desc: `Muối ${metal} ${hal}ua`
        });
    });

    // Tự động tạo phản ứng với OXY (Mg+O, Ca+O...)
    reactionsDB.push({
        inputs: [metal, "O"],
        equation: `2${metal} + O₂ → 2${metal}O`,
        desc: `Oxit ${metal}`
    });
});

// 3. Tự động tạo phản ứng với HYDRO (H+Cl, H+Br...)
groups.halogens.forEach(hal => {
    reactionsDB.push({
        inputs: ["H", hal],
        equation: `H₂ + ${hal}₂ → 2H${hal}`,
        desc: `Axit / Khí Hydro ${hal}ua`
    });
});

/* =========================================
   PHẦN 3: LOGIC & ĐIỀU KHIỂN
   ========================================= */

const tableContainer = document.getElementById('periodic-table');
const dropZone = document.getElementById('drop-zone');
const mixContainer = document.getElementById('current-mix-container');
const resultBox = document.getElementById('reaction-result');
const equationDisplay = document.getElementById('equation-display');
const productDesc = document.getElementById('product-desc');
const placeholder = document.querySelector('.placeholder-text');

let currentIngredients = []; 

function initTable() {
    tableContainer.innerHTML = "";
    elementsData.forEach(el => {
        const div = document.createElement('div');
        div.className = `element ${el.group}`;
        div.style.gridColumn = el.x;
        div.style.gridRow = el.y;
        
        div.innerHTML = `
            <span class="el-num">${el.z}</span>
            <span class="el-sym">${el.sym}</span>
            <span class="el-name">${el.name}</span>
        `;

        // Kéo thả Desktop
        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('application/json', JSON.stringify(el));
            div.style.opacity = '0.4';
        });
        div.addEventListener('dragend', () => div.style.opacity = '1');

        // Click Mobile
        div.addEventListener('click', () => {
            addToMix(el);
            if (navigator.vibrate) navigator.vibrate(30);
        });

        tableContainer.appendChild(div);
    });
}

// Xử lý vùng thả
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('active'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('active'));
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('active');
    try {
        const data = e.dataTransfer.getData('application/json');
        addToMix(JSON.parse(data));
    } catch (err) {}
});

function addToMix(element) {
    if (placeholder) placeholder.style.display = 'none';

    if (!currentIngredients.find(e => e.sym === element.sym)) {
        currentIngredients.push(element);
        renderMix();
        checkReaction();
        // Tự động cuộn
        dropZone.scrollLeft = dropZone.scrollWidth;
    } else {
        const items = mixContainer.children;
        for (let item of items) {
            if (item.innerText.includes(element.sym)) {
                item.style.borderColor = "#d32f2f";
                setTimeout(() => item.style.borderColor = "#fff", 300);
            }
        }
    }
}

function renderMix() {
    mixContainer.innerHTML = '';
    currentIngredients.forEach(el => {
        const div = document.createElement('div');
        div.className = `element ${el.group}`;
        Object.assign(div.style, {
            width: '45px', height: '45px', minWidth: '45px',
            position: 'relative', border: '2px solid #fff', margin: '0'
        });
        div.innerHTML = `<span class="el-sym" style="font-size: 14px;">${el.sym}</span>`;
        div.title = "Chạm để xóa";
        div.onclick = (e) => {
            e.stopPropagation();
            removeIngredient(el.sym);
        };
        mixContainer.appendChild(div);
    });

    if (currentIngredients.length === 0 && placeholder) placeholder.style.display = 'block';
}

function removeIngredient(symbol) {
    currentIngredients = currentIngredients.filter(e => e.sym !== symbol);
    renderMix();
    checkReaction();
}

function checkReaction() {
    const currentSyms = currentIngredients.map(e => e.sym).sort();

    // Tìm kiếm trong database (Lúc này đã RẤT LỚN nhờ code sinh tự động)
    const foundReaction = reactionsDB.find(reaction => {
        const recipeSyms = [...reaction.inputs].sort();
        return JSON.stringify(currentSyms) === JSON.stringify(recipeSyms);
    });

    if (foundReaction) {
        showResult(foundReaction.equation, foundReaction.desc, true);
    } else {
        if (currentIngredients.length >= 2) {
            showResult("???", "Chưa có dữ liệu cho phản ứng này", false);
        } else {
            resultBox.classList.remove('show');
        }
    }
}

function showResult(eq, desc, isSuccess) {
    resultBox.classList.add('show');
    equationDisplay.innerText = eq;
    productDesc.innerText = desc;
    
    if (isSuccess) {
        resultBox.style.borderColor = "#4CAF50";
        resultBox.style.background = "rgba(76, 175, 80, 0.15)";
        equationDisplay.style.color = "#4CAF50";
    } else {
        resultBox.style.borderColor = "#FF9800";
        resultBox.style.background = "rgba(255, 152, 0, 0.15)";
        equationDisplay.style.color = "#FF9800";
    }
}

window.resetLab = function() {
    currentIngredients = [];
    renderMix();
    resultBox.classList.remove('show');
}

initTable();