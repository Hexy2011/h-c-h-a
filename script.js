/* --- PHẦN 1: DỮ LIỆU --- */

const elementsData = [
    { z: 1, sym: "H", name: "Hydrogen", group: "non-metal", x: 1, y: 1 },
    { z: 2, sym: "He", name: "Helium", group: "noble-gas", x: 18, y: 1 },
    { z: 3, sym: "Li", name: "Lithium", group: "alkali", x: 1, y: 2 },
    { z: 6, sym: "C", name: "Carbon", group: "non-metal", x: 14, y: 2 },
    { z: 7, sym: "N", name: "Nitrogen", group: "non-metal", x: 15, y: 2 },
    { z: 8, sym: "O", name: "Oxygen", group: "non-metal", x: 16, y: 2 },
    { z: 11, sym: "Na", name: "Sodium", group: "alkali", x: 1, y: 3 },
    { z: 12, sym: "Mg", name: "Magnesium", group: "alkaline-earth", x: 2, y: 3 },
    { z: 13, sym: "Al", name: "Aluminium", group: "post-transition", x: 13, y: 3 },
    { z: 17, sym: "Cl", name: "Chlorine", group: "halogen", x: 17, y: 3 },
    { z: 19, sym: "K", name: "Potassium", group: "alkali", x: 1, y: 4 },
    { z: 26, sym: "Fe", name: "Iron", group: "transition", x: 8, y: 4 },
    { z: 29, sym: "Cu", name: "Copper", group: "transition", x: 11, y: 4 },
    { z: 16, sym: "S", name: "Sulfur", group: "non-metal", x: 16, y: 3 },
];

// Danh sách phản ứng (Lưu ý: inputs phải khớp với sym ở trên)
const reactionsDB = [
    { inputs: ["H", "O"], equation: "2H₂ + O₂ → 2H₂O", desc: "Nước" },
    { inputs: ["Na", "Cl"], equation: "2Na + Cl₂ → 2NaCl", desc: "Muối ăn (Natri Clorua)" },
    { inputs: ["C", "O"], equation: "C + O₂ → CO₂", desc: "Khí Carbonic" },
    { inputs: ["H", "Cl"], equation: "H₂ + Cl₂ → 2HCl", desc: "Axit Clohydric" },
    { inputs: ["Fe", "O"], equation: "4Fe + 3O₂ → 2Fe₂O₃", desc: "Rỉ sắt (Sắt III Oxit)" },
    { inputs: ["Na", "H", "O"], equation: "2Na + 2H₂O → 2NaOH + H₂", desc: "Natri tác dụng với nước" },
    { inputs: ["S", "O"], equation: "S + O₂ → SO₂", desc: "Khí Sunfuro" },
    { inputs: ["Cu", "Cl"], equation: "Cu + Cl₂ → CuCl₂", desc: "Đồng (II) Clorua" }
];

/* --- PHẦN 2: LOGIC XỬ LÝ --- */

const tableContainer = document.getElementById('periodic-table');
const dropZone = document.getElementById('drop-zone');
const mixContainer = document.getElementById('current-mix-container');
const resultBox = document.getElementById('reaction-result');

let currentIngredients = []; 

// 1. Khởi tạo bảng tuần hoàn
function initTable() {
    tableContainer.innerHTML = ""; // Xóa cũ nếu có
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

        // Kéo thả desktop
        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('application/json', JSON.stringify(el));
        });

        // Click (cho điện thoại hoặc thao tác nhanh)
        div.addEventListener('click', () => {
            addToMix(el);
        });

        tableContainer.appendChild(div);
    });
}

// 2. Xử lý sự kiện thả (Drop)
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('hovered');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('hovered');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('hovered');
    try {
        const data = e.dataTransfer.getData('application/json');
        const el = JSON.parse(data);
        addToMix(el);
    } catch (err) {
        console.error("Lỗi khi thả:", err);
    }
});

// 3. Logic thêm chất
function addToMix(element) {
    // Kiểm tra trùng lặp (nếu đã có H rồi thì không thêm H nữa để tránh lỗi logic so sánh)
    const exists = currentIngredients.find(e => e.sym === element.sym);
    
    if (!exists) {
        currentIngredients.push(element);
        renderMixIngredients();
        checkReaction(); // Kiểm tra ngay sau khi thêm
    } else {
        // Hiệu ứng rung hoặc báo đã có (tuỳ chọn)
        console.log("Đã có chất này trong bình: " + element.sym);
    }
}

// 4. Vẽ lại các chất trong bình thí nghiệm
function renderMixIngredients() {
    mixContainer.innerHTML = '';
    
    if (currentIngredients.length > 0) {
        dropZone.classList.add('has-items');
        currentIngredients.forEach(el => {
            const div = document.createElement('div');
            div.className = `element ${el.group}`;
            div.style.width = '50px';
            div.style.height = '50px';
            div.innerHTML = `<span class="el-sym">${el.sym}</span>`;
            
            // Tính năng click vào chất trong bình để xóa nó đi
            div.title = "Click để bỏ chất này ra";
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
    checkReaction(); // Kiểm tra lại sau khi xóa
}

// 5. [QUAN TRỌNG] Kiểm tra phản ứng - Đã sửa lỗi
function checkReaction() {
    // Lấy ra danh sách ký hiệu các chất đang có trong bình, ví dụ: ["H", "O"]
    // .sort() để đảm bảo thứ tự không quan trọng (H trước hay O trước cũng được)
    const currentSyms = currentIngredients.map(e => e.sym).sort();
    
    console.log("Đang có trong bình:", currentSyms); // Bật F12 tab Console để xem

    const foundReaction = reactionsDB.find(reaction => {
        // Copy mảng input của DB ra để sort (dùng [...array]) để tránh lỗi biến đổi dữ liệu gốc
        const recipeSyms = [...reaction.inputs].sort();
        
        // So sánh chuỗi JSON của 2 mảng
        return JSON.stringify(currentSyms) === JSON.stringify(recipeSyms);
    });

    if (foundReaction) {
        console.log("Tìm thấy phản ứng!", foundReaction.equation);
        resultBox.classList.remove('hidden');
        document.getElementById('equation-display').innerText = foundReaction.equation;
        document.getElementById('product-desc').innerText = foundReaction.desc;
        resultBox.style.borderColor = "#4CAF50"; // Màu xanh báo thành công
    } else {
        console.log("Chưa có phản ứng nào khớp.");
        resultBox.classList.add('hidden');
    }
}

// 6. Nút làm sạch
function resetLab() {
    currentIngredients = [];
    renderMixIngredients();
    resultBox.classList.add('hidden');
    console.log("Đã làm sạch bình.");
}

// Khởi chạy
initTable();