/* =========================================
   PHẦN 1: CƠ SỞ DỮ LIỆU (DATABASE)
   ========================================= */

// 1. Danh sách Nguyên tố (Thêm đủ các nhóm chính để bảng đẹp hơn)
const elementsData = [
    // Hàng 1
    { z: 1, sym: "H", name: "Hydrogen", group: "non-metal", x: 1, y: 1 },
    { z: 2, sym: "He", name: "Helium", group: "noble-gas", x: 18, y: 1 },

    // Hàng 2
    { z: 3, sym: "Li", name: "Lithium", group: "alkali", x: 1, y: 2 },
    { z: 4, sym: "Be", name: "Beryllium", group: "alkaline-earth", x: 2, y: 2 },
    { z: 5, sym: "B", name: "Boron", group: "metalloid", x: 13, y: 2 }, // Đã thêm Boron
    { z: 6, sym: "C", name: "Carbon", group: "non-metal", x: 14, y: 2 },
    { z: 7, sym: "N", name: "Nitrogen", group: "non-metal", x: 15, y: 2 },
    { z: 8, sym: "O", name: "Oxygen", group: "non-metal", x: 16, y: 2 },
    { z: 9, sym: "F", name: "Fluorine", group: "halogen", x: 17, y: 2 },
    { z: 10, sym: "Ne", name: "Neon", group: "noble-gas", x: 18, y: 2 },

    // Hàng 3
    { z: 11, sym: "Na", name: "Sodium", group: "alkali", x: 1, y: 3 },
    { z: 12, sym: "Mg", name: "Magnesium", group: "alkaline-earth", x: 2, y: 3 },
    { z: 13, sym: "Al", name: "Aluminium", group: "post-transition", x: 13, y: 3 },
    { z: 14, sym: "Si", name: "Silicon", group: "metalloid", x: 14, y: 3 },
    { z: 15, sym: "P", name: "Phosphorus", group: "non-metal", x: 15, y: 3 },
    { z: 16, sym: "S", name: "Sulfur", group: "non-metal", x: 16, y: 3 },
    { z: 17, sym: "Cl", name: "Chlorine", group: "halogen", x: 17, y: 3 },
    { z: 18, sym: "Ar", name: "Argon", group: "noble-gas", x: 18, y: 3 },

    // Hàng 4 (Một số kim loại quan trọng)
    { z: 19, sym: "K", name: "Potassium", group: "alkali", x: 1, y: 4 },
    { z: 20, sym: "Ca", name: "Calcium", group: "alkaline-earth", x: 2, y: 4 },
    { z: 26, sym: "Fe", name: "Iron", group: "transition", x: 8, y: 4 },
    { z: 29, sym: "Cu", name: "Copper", group: "transition", x: 11, y: 4 },
    { z: 30, sym: "Zn", name: "Zinc", group: "transition", x: 12, y: 4 },
    { z: 47, sym: "Ag", name: "Silver", group: "transition", x: 11, y: 5 },
    { z: 79, sym: "Au", name: "Gold", group: "transition", x: 11, y: 6 },
];

// 2. Danh sách Phản ứng (Thêm nhiều phản ứng phổ biến)
const reactionsDB = [
    // Phản ứng bạn đang test
    { inputs: ["H", "B"], equation: "2B + 3H₂ → B₂H₆", desc: "Diborane (Hợp chất cao năng lượng)" },

    // Phản ứng cơ bản
    { inputs: ["H", "O"], equation: "2H₂ + O₂ → 2H₂O", desc: "Nước (Sự cháy của Hydro)" },
    { inputs: ["Na", "Cl"], equation: "2Na + Cl₂ → 2NaCl", desc: "Muối ăn (Phản ứng cháy sáng vàng)" },
    { inputs: ["C", "O"], equation: "C + O₂ → CO₂", desc: "Khí Carbonic (Hiệu ứng nhà kính)" },
    { inputs: ["H", "Cl"], equation: "H₂ + Cl₂ → 2HCl", desc: "Khí Hiđro Clorua (Tan trong nước tạo Axit)" },
    
    // Phản ứng kim loại
    { inputs: ["Fe", "O"], equation: "4Fe + 3O₂ → 2Fe₂O₃", desc: "Gỉ sắt (Oxit sắt III)" },
    { inputs: ["Cu", "Cl"], equation: "Cu + Cl₂ → CuCl₂", desc: "Đồng(II) Clorua (Tinh thể màu xanh)" },
    { inputs: ["Mg", "O"], equation: "2Mg + O₂ → 2MgO", desc: "Magie Oxit (Cháy sáng chói lòa)" },
    
    // Phản ứng nhiều chất
    { inputs: ["Na", "H", "O"], equation: "2Na + 2H₂O → 2NaOH + H₂", desc: "Natri tác dụng mãnh liệt với nước" },
    { inputs: ["S", "O"], equation: "S + O₂ → SO₂", desc: "Lưu huỳnh đioxit (Khí mùi hắc)" },
    { inputs: ["N", "H"], equation: "N₂ + 3H₂ ⇌ 2NH₃", desc: "Amoniac (Nguyên liệu làm phân bón)" }
];

/* =========================================
   PHẦN 2: LOGIC XỬ LÝ (CONTROLLER)
   ========================================= */

const tableContainer = document.getElementById('periodic-table');
const dropZone = document.getElementById('drop-zone');
const mixContainer = document.getElementById('current-mix-container');
const resultBox = document.getElementById('reaction-result');
const equationDisplay = document.getElementById('equation-display');
const productDesc = document.getElementById('product-desc');

let currentIngredients = []; 

// --- KHỞI TẠO BẢNG TUẦN HOÀN ---
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

        // Sự kiện Kéo (Desktop)
        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('application/json', JSON.stringify(el));
            div.classList.add('dragging');
        });
        div.addEventListener('dragend', () => {
            div.classList.remove('dragging');
        });

        // Sự kiện Click (Mobile/Tablet)
        div.addEventListener('click', () => {
            addToMix(el);
        });

        tableContainer.appendChild(div);
    });
}

// --- XỬ LÝ KÉO THẢ ---
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
        console.error("Lỗi dữ liệu drop:", err);
    }
});

// --- LOGIC THÊM VÀO BÌNH ---
function addToMix(element) {
    // Kiểm tra xem chất này đã có chưa (để tránh spam click)
    const exists = currentIngredients.find(e => e.sym === element.sym);
    
    if (!exists) {
        currentIngredients.push(element);
        renderMixIngredients();
        checkReaction(); // Kiểm tra ngay lập tức
    } else {
        // Hiệu ứng rung báo đã tồn tại (Optional)
        const existingEl = Array.from(mixContainer.children).find(child => child.innerText.includes(element.sym));
        if(existingEl) {
            existingEl.style.transform = "scale(1.2)";
            setTimeout(() => existingEl.style.transform = "scale(1)", 200);
        }
    }
}

// --- VẼ LẠI CÁC CHẤT TRONG BÌNH ---
function renderMixIngredients() {
    mixContainer.innerHTML = '';
    
    if (currentIngredients.length > 0) {
        dropZone.classList.add('has-items');
        currentIngredients.forEach(el => {
            const div = document.createElement('div');
            div.className = `element ${el.group}`;
            // Style thu gọn cho icon trong bình
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.minWidth = '50px';
            div.style.cursor = 'pointer'; // Báo hiệu có thể click để xóa
            div.title = "Click để bỏ chất này ra";
            
            div.innerHTML = `<span class="el-sym" style="font-size:16px;">${el.sym}</span>`;
            
            // Click vào chất trong bình thì xóa nó đi
            div.onclick = () => removeIngredient(el.sym);
            
            mixContainer.appendChild(div);
        });
    } else {
        dropZone.classList.remove('has-items');
    }
}

// --- XÓA CHẤT KHỎI BÌNH ---
function removeIngredient(symbol) {
    currentIngredients = currentIngredients.filter(e => e.sym !== symbol);
    renderMixIngredients();
    checkReaction();
}

// --- [QUAN TRỌNG] KIỂM TRA PHẢN ỨNG ---
function checkReaction() {
    // 1. Lấy danh sách ký hiệu đang có và sắp xếp A-Z
    const currentSyms = currentIngredients.map(e => e.sym).sort();

    // 2. Tìm trong Database
    const foundReaction = reactionsDB.find(reaction => {
        const recipeSyms = [...reaction.inputs].sort();
        return JSON.stringify(currentSyms) === JSON.stringify(recipeSyms);
    });

    // 3. Hiển thị kết quả
    if (foundReaction) {
        // ==> THÀNH CÔNG
        showResult(
            foundReaction.equation, 
            foundReaction.desc, 
            "success"
        );
    } else {
        // ==> CHƯA TÌM THẤY
        if (currentIngredients.length >= 2) {
            // Có từ 2 chất trở lên mà không khớp -> Báo chưa rõ
            showResult(
                "???", 
                "Chưa có dữ liệu phản ứng cho hỗn hợp này.", 
                "warning"
            );
        } else {
            // Mới có 0 hoặc 1 chất -> Ẩn bảng kết quả
            resultBox.classList.add('hidden');
        }
    }
}

// Hàm hiển thị UI kết quả
function showResult(eq, desc, type) {
    resultBox.classList.remove('hidden');
    equationDisplay.innerText = eq;
    productDesc.innerText = desc;

    if (type === 'success') {
        resultBox.style.borderColor = "#4CAF50"; // Xanh lá
        resultBox.style.background = "rgba(76, 175, 80, 0.1)";
        equationDisplay.style.color = "#4CAF50";
    } else {
        resultBox.style.borderColor = "#FF9800"; // Cam
        resultBox.style.background = "rgba(255, 152, 0, 0.1)";
        equationDisplay.style.color = "#FF9800";
    }
}

// --- RESET LAB ---
function resetLab() {
    currentIngredients = [];
    renderMixIngredients();
    resultBox.classList.add('hidden');
}

// Chạy khởi tạo
initTable();