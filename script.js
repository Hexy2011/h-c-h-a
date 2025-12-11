/* =========================================
   PHẦN 1: DỮ LIỆU NGUYÊN TỐ (FULL 118)
   ========================================= */

// Hàm tạo dữ liệu nguyên tố nhanh để đỡ tốn dung lượng code
// z: số hiệu, sym: ký hiệu, name: tên, g: nhóm, x: cột, y: hàng
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
    createEl(21, "Sc", "Scandium", "transition", 3, 4),
    createEl(22, "Ti", "Titanium", "transition", 4, 4),
    createEl(23, "V", "Vanadium", "transition", 5, 4),
    createEl(24, "Cr", "Chromium", "transition", 6, 4),
    createEl(25, "Mn", "Manganese", "transition", 7, 4),
    createEl(26, "Fe", "Iron", "transition", 8, 4),
    createEl(27, "Co", "Cobalt", "transition", 9, 4),
    createEl(28, "Ni", "Nickel", "transition", 10, 4),
    createEl(29, "Cu", "Copper", "transition", 11, 4),
    createEl(30, "Zn", "Zinc", "transition", 12, 4),
    createEl(31, "Ga", "Gallium", "post-transition", 13, 4),
    createEl(32, "Ge", "Germanium", "metalloid", 14, 4),
    createEl(33, "As", "Arsenic", "metalloid", 15, 4),
    createEl(34, "Se", "Selenium", "non-metal", 16, 4),
    createEl(35, "Br", "Bromine", "halogen", 17, 4),
    createEl(36, "Kr", "Krypton", "noble-gas", 18, 4),

    // --- CHU KỲ 5 ---
    createEl(37, "Rb", "Rubidium", "alkali", 1, 5),
    createEl(38, "Sr", "Strontium", "alkaline-earth", 2, 5),
    createEl(39, "Y", "Yttrium", "transition", 3, 5),
    createEl(40, "Zr", "Zirconium", "transition", 4, 5),
    createEl(41, "Nb", "Niobium", "transition", 5, 5),
    createEl(42, "Mo", "Molybdenum", "transition", 6, 5),
    createEl(43, "Tc", "Technetium", "transition", 7, 5),
    createEl(44, "Ru", "Ruthenium", "transition", 8, 5),
    createEl(45, "Rh", "Rhodium", "transition", 9, 5),
    createEl(46, "Pd", "Palladium", "transition", 10, 5),
    createEl(47, "Ag", "Silver", "transition", 11, 5),
    createEl(48, "Cd", "Cadmium", "transition", 12, 5),
    createEl(49, "In", "Indium", "post-transition", 13, 5),
    createEl(50, "Sn", "Tin", "post-transition", 14, 5),
    createEl(51, "Sb", "Antimony", "metalloid", 15, 5),
    createEl(52, "Te", "Tellurium", "metalloid", 16, 5),
    createEl(53, "I", "Iodine", "halogen", 17, 5),
    createEl(54, "Xe", "Xenon", "noble-gas", 18, 5),

    // --- CHU KỲ 6 (Bao gồm Lanthanides) ---
    createEl(55, "Cs", "Caesium", "alkali", 1, 6),
    createEl(56, "Ba", "Barium", "alkaline-earth", 2, 6),
    // 57-71 Lanthanides (Họ Lanthan) - Đặt xuống hàng 9
    createEl(57, "La", "Lanthanum", "lanthanoid", 4, 9),
    createEl(58, "Ce", "Cerium", "lanthanoid", 5, 9),
    createEl(59, "Pr", "Praseodymium", "lanthanoid", 6, 9),
    createEl(60, "Nd", "Neodymium", "lanthanoid", 7, 9),
    createEl(61, "Pm", "Promethium", "lanthanoid", 8, 9),
    createEl(62, "Sm", "Samarium", "lanthanoid", 9, 9),
    createEl(63, "Eu", "Europium", "lanthanoid", 10, 9),
    createEl(64, "Gd", "Gadolinium", "lanthanoid", 11, 9),
    createEl(65, "Tb", "Terbium", "lanthanoid", 12, 9),
    createEl(66, "Dy", "Dysprosium", "lanthanoid", 13, 9),
    createEl(67, "Ho", "Holmium", "lanthanoid", 14, 9),
    createEl(68, "Er", "Erbium", "lanthanoid", 15, 9),
    createEl(69, "Tm", "Thulium", "lanthanoid", 16, 9),
    createEl(70, "Yb", "Ytterbium", "lanthanoid", 17, 9),
    createEl(71, "Lu", "Lutetium", "lanthanoid", 18, 9),
    // Tiếp tục chu kỳ 6
    createEl(72, "Hf", "Hafnium", "transition", 4, 6),
    createEl(73, "Ta", "Tantalum", "transition", 5, 6),
    createEl(74, "W", "Tungsten", "transition", 6, 6),
    createEl(75, "Re", "Rhenium", "transition", 7, 6),
    createEl(76, "Os", "Osmium", "transition", 8, 6),
    createEl(77, "Ir", "Iridium", "transition", 9, 6),
    createEl(78, "Pt", "Platinum", "transition", 10, 6),
    createEl(79, "Au", "Gold", "transition", 11, 6),
    createEl(80, "Hg", "Mercury", "transition", 12, 6),
    createEl(81, "Tl", "Thallium", "post-transition", 13, 6),
    createEl(82, "Pb", "Lead", "post-transition", 14, 6),
    createEl(83, "Bi", "Bismuth", "post-transition", 15, 6),
    createEl(84, "Po", "Polonium", "post-transition", 16, 6),
    createEl(85, "At", "Astatine", "halogen", 17, 6),
    createEl(86, "Rn", "Radon", "noble-gas", 18, 6),

    // --- CHU KỲ 7 (Bao gồm Actinides) ---
    createEl(87, "Fr", "Francium", "alkali", 1, 7),
    createEl(88, "Ra", "Radium", "alkaline-earth", 2, 7),
    // 89-103 Actinides (Họ Actini) - Đặt xuống hàng 10
    createEl(89, "Ac", "Actinium", "actinoid", 4, 10),
    createEl(90, "Th", "Thorium", "actinoid", 5, 10),
    createEl(91, "Pa", "Protactinium", "actinoid", 6, 10),
    createEl(92, "U", "Uranium", "actinoid", 7, 10),
    createEl(93, "Np", "Neptunium", "actinoid", 8, 10),
    createEl(94, "Pu", "Plutonium", "actinoid", 9, 10),
    createEl(95, "Am", "Americium", "actinoid", 10, 10),
    createEl(96, "Cm", "Curium", "actinoid", 11, 10),
    createEl(97, "Bk", "Berkelium", "actinoid", 12, 10),
    createEl(98, "Cf", "Californium", "actinoid", 13, 10),
    createEl(99, "Es", "Einsteinium", "actinoid", 14, 10),
    createEl(100, "Fm", "Fermium", "actinoid", 15, 10),
    createEl(101, "Md", "Mendelevium", "actinoid", 16, 10),
    createEl(102, "No", "Nobelium", "actinoid", 17, 10),
    createEl(103, "Lr", "Lawrencium", "actinoid", 18, 10),
    // Tiếp tục chu kỳ 7
    createEl(104, "Rf", "Rutherfordium", "transition", 4, 7),
    createEl(105, "Db", "Dubnium", "transition", 5, 7),
    createEl(106, "Sg", "Seaborgium", "transition", 6, 7),
    createEl(107, "Bh", "Bohrium", "transition", 7, 7),
    createEl(108, "Hs", "Hassium", "transition", 8, 7),
    createEl(109, "Mt", "Meitnerium", "transition", 9, 7),
    createEl(110, "Ds", "Darmstadtium", "transition", 10, 7),
    createEl(111, "Rg", "Roentgenium", "transition", 11, 7),
    createEl(112, "Cn", "Copernicium", "transition", 12, 7),
    createEl(113, "Nh", "Nihonium", "post-transition", 13, 7),
    createEl(114, "Fl", "Flerovium", "post-transition", 14, 7),
    createEl(115, "Mc", "Moscovium", "post-transition", 15, 7),
    createEl(116, "Lv", "Livermorium", "post-transition", 16, 7),
    createEl(117, "Ts", "Tennessine", "halogen", 17, 7),
    createEl(118, "Og", "Oganesson", "noble-gas", 18, 7),
];

/* =========================================
   PHẦN 2: DỮ LIỆU PHẢN ỨNG (MỞ RỘNG)
   ========================================= */

const reactionsDB = [
    // --- PHẢN ỨNG CỦA HYDROGEN ---
    { inputs: ["H", "O"], equation: "2H₂ + O₂ → 2H₂O", desc: "Nước" },
    { inputs: ["H", "Cl"], equation: "H₂ + Cl₂ → 2HCl", desc: "Axit Clohydric (Khí)" },
    { inputs: ["H", "F"], equation: "H₂ + F₂ → 2HF", desc: "Axit Flohydric (Ăn mòn thủy tinh)" },
    { inputs: ["H", "N"], equation: "N₂ + 3H₂ ⇌ 2NH₃", desc: "Amoniac (Làm phân bón)" },
    { inputs: ["H", "S"], equation: "H₂ + S → H₂S", desc: "Khí Hidro Sunfua (Mùi trứng thối)" },
    { inputs: ["H", "C"], equation: "C + 2H₂ → CH₄", desc: "Khí Methan (Gas)" },
    { inputs: ["H", "B"], equation: "2B + 3H₂ → B₂H₆", desc: "Diborane" },

    // --- PHẢN ỨNG CỦA OXYGEN (SỰ CHÁY) ---
    { inputs: ["C", "O"], equation: "C + O₂ → CO₂", desc: "Khí Carbonic" },
    { inputs: ["S", "O"], equation: "S + O₂ → SO₂", desc: "Khí Sunfuro" },
    { inputs: ["P", "O"], equation: "4P + 5O₂ → 2P₂O₅", desc: "Diphosphorus pentoxide" },
    { inputs: ["Mg", "O"], equation: "2Mg + O₂ → 2MgO", desc: "Magie Oxit (Cháy sáng trắng)" },
    { inputs: ["Fe", "O"], equation: "3Fe + 2O₂ → Fe₃O₄", desc: "Oxit sắt từ" },
    { inputs: ["Cu", "O"], equation: "2Cu + O₂ → 2CuO", desc: "Đồng (II) Oxit (Màu đen)" },
    { inputs: ["Al", "O"], equation: "4Al + 3O₂ → 2Al₂O₃", desc: "Nhôm Oxit (Lớp bảo vệ nhôm)" },
    { inputs: ["Na", "O"], equation: "4Na + O₂ → 2Na₂O", desc: "Natri Oxit" },

    // --- PHẢN ỨNG MUỐI (KIM LOẠI + HALOGEN) ---
    { inputs: ["Na", "Cl"], equation: "2Na + Cl₂ → 2NaCl", desc: "Muối ăn" },
    { inputs: ["K", "Cl"], equation: "2K + Cl₂ → 2KCl", desc: "Kali Clorua" },
    { inputs: ["Na", "Br"], equation: "2Na + Br₂ → 2NaBr", desc: "Natri Bromua" },
    { inputs: ["Al", "Cl"], equation: "2Al + 3Cl₂ → 2AlCl₃", desc: "Nhôm Clorua" },
    { inputs: ["Fe", "Cl"], equation: "2Fe + 3Cl₂ → 2FeCl₃", desc: "Sắt (III) Clorua" },
    { inputs: ["Cu", "Cl"], equation: "Cu + Cl₂ → CuCl₂", desc: "Đồng (II) Clorua" },
    { inputs: ["Ag", "Cl"], equation: "2Ag + Cl₂ → 2AgCl", desc: "Bạc Clorua (Kết tủa trắng)" },

    // --- PHẢN ỨNG VỚI NƯỚC (KIM LOẠI KIỀM) ---
    { inputs: ["Na", "H", "O"], equation: "2Na + 2H₂O → 2NaOH + H₂", desc: "Natri vào nước (Nổ nhẹ)" },
    { inputs: ["Li", "H", "O"], equation: "2Li + 2H₂O → 2LiOH + H₂", desc: "Lithi vào nước" },
    { inputs: ["K", "H", "O"], equation: "2K + 2H₂O → 2KOH + H₂", desc: "Kali vào nước (Nổ tím)" },
    { inputs: ["Ca", "H", "O"], equation: "Ca + 2H₂O → Ca(OH)₂ + H₂", desc: "Canxi vào nước (Sôi sục)" },

    // --- CÁC HỢP CHẤT KHÁC ---
    { inputs: ["Fe", "S"], equation: "Fe + S → FeS", desc: "Sắt (II) Sunfua (Màu đen)" },
    { inputs: ["Zn", "S"], equation: "Zn + S → ZnS", desc: "Kẽm Sunfua (Phát quang)" },
    { inputs: ["Hg", "S"], equation: "Hg + S → HgS", desc: "Chu sa (Thủy ngân phản ứng ngay thường)" }
];

/* =========================================
   PHẦN 3: LOGIC ĐIỀU KHIỂN
   ========================================= */

const tableContainer = document.getElementById('periodic-table');
const dropZone = document.getElementById('drop-zone');
const mixContainer = document.getElementById('current-mix-container');
const resultBox = document.getElementById('reaction-result');
const equationDisplay = document.getElementById('equation-display');
const productDesc = document.getElementById('product-desc');

let currentIngredients = []; 

// Khởi tạo bảng
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

        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('application/json', JSON.stringify(el));
            div.classList.add('dragging');
        });
        div.addEventListener('dragend', () => div.classList.remove('dragging'));
        div.addEventListener('click', () => addToMix(el));

        tableContainer.appendChild(div);
    });
}

// Logic Kéo thả
dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('hovered'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('hovered'));
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('hovered');
    try {
        const data = e.dataTransfer.getData('application/json');
        addToMix(JSON.parse(data));
    } catch (err) {}
});

function addToMix(element) {
    if (!currentIngredients.find(e => e.sym === element.sym)) {
        currentIngredients.push(element);
        renderMixIngredients();
        checkReaction();
    }
}

function renderMixIngredients() {
    mixContainer.innerHTML = '';
    if (currentIngredients.length > 0) {
        dropZone.classList.add('has-items');
        currentIngredients.forEach(el => {
            const div = document.createElement('div');
            div.className = `element ${el.group}`;
            div.style.width = '50px'; div.style.height = '50px'; div.style.minWidth = '50px';
            div.style.cursor = 'pointer';
            div.title = "Click để bỏ ra";
            div.innerHTML = `<span class="el-sym" style="font-size:16px;">${el.sym}</span>`;
            div.onclick = () => removeIngredient(el.sym);
            mixContainer.appendChild(div);
        });
    } else {
        dropZone.classList.remove('has-items');
    }
}

function removeIngredient(symbol) {
    currentIngredients = currentIngredients.filter(e => e.sym !== symbol);
    renderMixIngredients();
    checkReaction();
}

function checkReaction() {
    const currentSyms = currentIngredients.map(e => e.sym).sort();

    const foundReaction = reactionsDB.find(reaction => {
        const recipeSyms = [...reaction.inputs].sort();
        return JSON.stringify(currentSyms) === JSON.stringify(recipeSyms);
    });

    if (foundReaction) {
        showResult(foundReaction.equation, foundReaction.desc, "success");
    } else {
        if (currentIngredients.length >= 2) {
            showResult("???", "Chưa có dữ liệu phản ứng cho hỗn hợp này.", "warning");
        } else {
            resultBox.classList.add('hidden');
        }
    }
}

function showResult(eq, desc, type) {
    resultBox.classList.remove('hidden');
    equationDisplay.innerText = eq;
    productDesc.innerText = desc;
    if (type === 'success') {
        resultBox.style.borderColor = "#4CAF50";
        resultBox.style.background = "rgba(76, 175, 80, 0.1)";
        equationDisplay.style.color = "#4CAF50";
    } else {
        resultBox.style.borderColor = "#FF9800";
        resultBox.style.background = "rgba(255, 152, 0, 0.1)";
        equationDisplay.style.color = "#FF9800";
    }
}

function resetLab() {
    currentIngredients = [];
    renderMixIngredients();
    resultBox.classList.add('hidden');
}

initTable();