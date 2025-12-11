/* --- PHẦN 1: DỮ LIỆU --- */

// 1. Database Nguyên tố (Mẫu đại diện, bạn có thể điền thêm đủ 118)
// x: Cột (1-18), y: Hàng (1-7, 9-10 cho họ Lanthanides/Actinides)
const elementsData = [
    // Hàng 1
    { z: 1, sym: "H", name: "Hydrogen", group: "non-metal", x: 1, y: 1 },
    { z: 2, sym: "He", name: "Helium", group: "noble-gas", x: 18, y: 1 },
    
    // Hàng 2
    { z: 3, sym: "Li", name: "Lithium", group: "alkali", x: 1, y: 2 },
    { z: 4, sym: "Be", name: "Beryllium", group: "alkaline-earth", x: 2, y: 2 },
    { z: 5, sym: "B", name: "Boron", group: "metalloid", x: 13, y: 2 },
    { z: 6, sym: "C", name: "Carbon", group: "non-metal", x: 14, y: 2 },
    { z: 7, sym: "N", name: "Nitrogen", group: "non-metal", x: 15, y: 2 },
    { z: 8, sym: "O", name: "Oxygen", group: "non-metal", x: 16, y: 2 },
    { z: 9, sym: "F", name: "Fluorine", group: "halogen", x: 17, y: 2 },
    { z: 10, sym: "Ne", name: "Neon", group: "noble-gas", x: 18, y: 2 },

    // Hàng 3 (Một số đại diện)
    { z: 11, sym: "Na", name: "Sodium", group: "alkali", x: 1, y: 3 },
    { z: 12, sym: "Mg", name: "Magnesium", group: "alkaline-earth", x: 2, y: 3 },
    { z: 13, sym: "Al", name: "Aluminium", group: "post-transition", x: 13, y: 3 },
    { z: 17, sym: "Cl", name: "Chlorine", group: "halogen", x: 17, y: 3 },
    { z: 18, sym: "Ar", name: "Argon", group: "noble-gas", x: 18, y: 3 },

    // Hàng 4 (Đại diện kim loại chuyển tiếp)
    { z: 19, sym: "K", name: "Potassium", group: "alkali", x: 1, y: 4 },
    { z: 26, sym: "Fe", name: "Iron", group: "transition", x: 8, y: 4 },
    { z: 29, sym: "Cu", name: "Copper", group: "transition", x: 11, y: 4 },
    
    // Ví dụ một nguyên tố Đất hiếm (Nằm ở hàng phụ)
    { z: 57, sym: "La", name: "Lanthanum", group: "lanthanoid", x: 4, y: 9 }, // Hàng 9
];

// 2. Database Phản ứng (Thêm các phương trình vào đây)
const reactionsDB = [
    { inputs: ["H", "O"], equation: "2H₂ + O₂ → 2H₂O", desc: "Nước (Phản ứng cháy nổ mạnh)" },
    { inputs: ["Na", "Cl"], equation: "2Na + Cl₂ → 2NaCl", desc: "Muối ăn (Natri Clorua)" },
    { inputs: ["C", "O"], equation: "C + O₂ → CO₂", desc: "Khí Carbonic (Sự cháy)" },
    { inputs: ["H", "Cl"], equation: "H₂ + Cl₂ → 2HCl", desc: "Axit Clohydric (Khí)" },
    { inputs: ["Fe", "O"], equation: "4Fe + 3O₂ → 2Fe₂O₃", desc: "Rỉ sắt (Oxit sắt III)" },
    { inputs: ["Na", "H", "O"], equation: "2Na + 2H₂O → 2NaOH + H₂", desc: "Natri tác dụng với nước" }
];

/* --- PHẦN 2: LOGIC XỬ LÝ --- */

const tableContainer = document.getElementById('periodic-table');
const dropZone = document.getElementById('drop-zone');
const mixContainer = document.getElementById('current-mix-container');
let currentIngredients = []; // Danh sách các chất đang trong bình

// 1. Hàm vẽ bảng tuần hoàn
function initTable() {
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

        // Thiết lập Kéo (Drag)
        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('application/json', JSON.stringify(el));
            div.style.opacity = '0.5';
        });
        div.addEventListener('dragend', () => {
            div.style.opacity = '1';
        });

        // Click để thêm nhanh (cho điện thoại)
        div.addEventListener('click', () => {
            addToMix(el);
        });

        tableContainer.appendChild(div);
    });
}

// 2. Xử lý vùng Thả (Drop Zone)
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Bắt buộc để cho phép drop
    dropZone.classList.add('hovered');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('hovered');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('hovered');
    const data = e.dataTransfer.getData('application/json');
    if (data) {
        const el = JSON.parse(data);
        addToMix(el);
    }
});

// 3. Logic thêm chất và kiểm tra phản ứng
function addToMix(element) {
    // Kiểm tra nếu chất này chưa có trong bình (hoặc cho phép lặp lại tùy logic bạn muốn)
    // Ở đây mình cho phép 1 loại nguyên tố xuất hiện 1 lần trong danh sách input để dễ tra cứu
    if (!currentIngredients.some(e => e.sym === element.sym)) {
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
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.position = 'relative'; // Reset grid position
            div.innerHTML = `<span class="el-sym">${el.sym}</span>`;
            mixContainer.appendChild(div);
        });
    } else {
        dropZone.classList.remove('has-items');
    }
}

// 4. Kiểm tra xem có phản ứng nào khớp không
function checkReaction() {
    // Lấy danh sách ký hiệu các chất đang có, sort để so sánh không phụ thuộc thứ tự
    const currentSymbols = currentIngredients.map(e => e.sym).sort();
    
    const foundReaction = reactionsDB.find(reaction => {
        const recipeSymbols = reaction.inputs.sort();
        // So sánh 2 mảng
        return JSON.stringify(currentSymbols) === JSON.stringify(recipeSymbols);
    });

    const resultBox = document.getElementById('reaction-result');
    if (foundReaction) {
        resultBox.classList.remove('hidden');
        document.getElementById('equation-display').innerText = foundReaction.equation;
        document.getElementById('product-desc').innerText = foundReaction.desc;
    } else {
        resultBox.classList.add('hidden');
    }
}

// 5. Reset
function resetLab() {
    currentIngredients = [];
    renderMixIngredients();
    document.getElementById('reaction-result').classList.add('hidden');
}

// Khởi chạy
initTable();