/* =========================================
   PHẦN 1: DỮ LIỆU (DATABASE)
   ========================================= */

// Hàm tạo nhanh dữ liệu (Z, Ký hiệu, Tên, Nhóm, Cột, Hàng)
const createEl = (z, sym, name, group, x, y) => ({ z, sym, name, group, x, y });

// DANH SÁCH 118 NGUYÊN TỐ (CẤU TRÚC CHUẨN)
const elementsData = [
    // Hàng 1
    createEl(1, "H", "Hydrogen", "non-metal", 1, 1),
    createEl(2, "He", "Helium", "noble-gas", 18, 1),

    // Hàng 2
    createEl(3, "Li", "Lithium", "alkali", 1, 2),
    createEl(4, "Be", "Beryllium", "alkaline-earth", 2, 2),
    createEl(5, "B", "Boron", "metalloid", 13, 2),
    createEl(6, "C", "Carbon", "non-metal", 14, 2),
    createEl(7, "N", "Nitrogen", "non-metal", 15, 2),
    createEl(8, "O", "Oxygen", "non-metal", 16, 2),
    createEl(9, "F", "Fluorine", "halogen", 17, 2),
    createEl(10, "Ne", "Neon", "noble-gas", 18, 2),

    // Hàng 3
    createEl(11, "Na", "Sodium", "alkali", 1, 3),
    createEl(12, "Mg", "Magnesium", "alkaline-earth", 2, 3),
    createEl(13, "Al", "Aluminium", "post-transition", 13, 3),
    createEl(14, "Si", "Silicon", "metalloid", 14, 3),
    createEl(15, "P", "Phosphorus", "non-metal", 15, 3),
    createEl(16, "S", "Sulfur", "non-metal", 16, 3),
    createEl(17, "Cl", "Chlorine", "halogen", 17, 3),
    createEl(18, "Ar", "Argon", "noble-gas", 18, 3),

    // Hàng 4
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

    // Hàng 5
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

    // Hàng 6 (Bao gồm nhóm Lanthan)
    createEl(55, "Cs", "Caesium", "alkali", 1, 6),
    createEl(56, "Ba", "Barium", "alkaline-earth", 2, 6),
    // 57-71 Lanthanides (Hàng phụ 1 - Y=9)
    createEl(57, "La", "Lanthanum", "lanthanoid", 4, 9),
    createEl(58, "Ce", "Cerium", "lanthanoid", 5, 9),
    createEl(59, "Pr", "Praseodymium", "lanthanoid", 6, 9),
    createEl(60, "Nd", "Neodymium", "lanthanoid", 7, 9),
    // ...Các nguyên tố Lanthan khác bạn có thể thêm tiếp vào đây...
    createEl(71, "Lu", "Lutetium", "lanthanoid", 18, 9),
    
    // Tiếp Hàng 6
    createEl(72, "Hf", "Hafnium", "transition", 4, 6),
    createEl(74, "W", "Tungsten", "transition", 6, 6),
    createEl(79, "Au", "Gold", "transition", 11, 6),
    createEl(80, "Hg", "Mercury", "transition", 12, 6),
    createEl(82, "Pb", "Lead", "post-transition", 14, 6),
    createEl(86, "Rn", "Radon", "noble-gas", 18, 6),

    // Hàng 7 (Bao gồm nhóm Actini)
    createEl(87, "Fr", "Francium", "alkali", 1, 7),
    createEl(88, "Ra", "Radium", "alkaline-earth", 2, 7),
    // 89-103 Actinides (Hàng phụ 2 - Y=10)
    createEl(89, "Ac", "Actinium", "actinoid", 4, 10),
    createEl(92, "U", "Uranium", "actinoid", 7, 10),
    createEl(94, "Pu", "Plutonium", "actinoid", 9, 10),
    // ...
    createEl(118, "Og", "Oganesson", "noble-gas", 18, 7)
];

// DANH SÁCH PHẢN ỨNG
const reactionsDB = [
    { inputs: ["H", "O"], equation: "2H₂ + O₂ → 2H₂O", desc: "Nước" },
    { inputs: ["H", "B"], equation: "2B + 3H₂ → B₂H₆", desc: "Diborane" },
    { inputs: ["Na", "Cl"], equation: "2Na + Cl₂ → 2NaCl", desc: "Muối ăn" },
    { inputs: ["C", "O"], equation: "C + O₂ → CO₂", desc: "Khí Carbonic" },
    { inputs: ["H", "Cl"], equation: "H₂ + Cl₂ → 2HCl", desc: "Axit Clohydric" },
    { inputs: ["Fe", "O"], equation: "3Fe + 2O₂ → Fe₃O₄", desc: "Oxit sắt từ" },
    { inputs: ["Na", "H", "O"], equation: "2Na + 2H₂O → 2NaOH + H₂", desc: "Natri vào nước" },
    { inputs: ["K", "H", "O"], equation: "2K + 2H₂O → 2KOH + H₂", desc: "Kali vào nước" },
    { inputs: ["S", "O"], equation: "S + O₂ → SO₂", desc: "Lưu huỳnh đioxit" },
    { inputs: ["Cu", "Cl"], equation: "Cu + Cl₂ → CuCl₂", desc: "Đồng(II) Clorua" },
    { inputs: ["Ag", "Cl"], equation: "Ag + Cl₂ → AgCl", desc: "Bạc Clorua (Kết tủa trắng)" }
];

/* =========================================
   PHẦN 2: LOGIC & ĐIỀU KHIỂN
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Chỉ chạy code khi trang đã tải xong để tránh lỗi null
    const tableContainer = document.getElementById('periodic-table');
    const dropZone = document.getElementById('drop-zone');
    const mixContainer = document.getElementById('current-mix-container');
    const resultBox = document.getElementById('reaction-result');
    const equationDisplay = document.getElementById('equation-display');
    const productDesc = document.getElementById('product-desc');
    const placeholder = document.querySelector('.placeholder-text');

    let currentIngredients = []; 

    // 1. Khởi tạo bảng
    function initTable() {
        tableContainer.innerHTML = "";
        
        // Loop qua danh sách để tạo ô
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

            // EVENT CHO PC: KÉO THẢ (DRAG)
            div.draggable = true;
            div.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('application/json', JSON.stringify(el));
                div.style.opacity = '0.4';
            });
            div.addEventListener('dragend', () => div.style.opacity = '1');

            // EVENT CHO MOBILE: CHẠM (TAP)
            div.addEventListener('click', () => {
                addToMix(el);
                // Rung nhẹ trên Android
                if (navigator.vibrate) navigator.vibrate(40);
            });

            tableContainer.appendChild(div);
        });

        // Tạo các ô trống ảo để lấp đầy bảng (cho đẹp Grid) nếu cần
        // (Phần này tùy chọn, hiện tại grid-row/col đã xử lý vị trí)
    }

    // 2. Xử lý vùng thả (PC)
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('active'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('active'););
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('active');
        try {
            const data = e.dataTransfer.getData('application/json');
            addToMix(JSON.parse(data));
        } catch (err) {}
    });

    // 3. Logic thêm vào bình
    function addToMix(element) {
        if (placeholder) placeholder.style.display = 'none';

        // Kiểm tra trùng
        if (!currentIngredients.find(e => e.sym === element.sym)) {
            currentIngredients.push(element);
            renderMix();
            checkReaction();
            
            // Tự động cuộn sang phải (cho Mobile)
            setTimeout(() => {
                dropZone.scrollLeft = dropZone.scrollWidth;
            }, 100);
        } else {
            // Hiệu ứng báo trùng
            const items = mixContainer.children;
            for(let item of items) {
                if(item.innerText.includes(element.sym)) {
                    item.style.transform = "scale(1.2)";
                    item.style.borderColor = "red";
                    setTimeout(() => {
                        item.style.transform = "scale(1)";
                        item.style.borderColor = "#fff";
                    }, 200);
                }
            }
        }
    }

    // 4. Vẽ lại bình chứa
    function renderMix() {
        mixContainer.innerHTML = '';
        currentIngredients.forEach(el => {
            const div = document.createElement('div');
            div.className = `element ${el.group}`;
            // Style thu nhỏ
            Object.assign(div.style, {
                width: '45px', height: '45px', minWidth: '45px',
                position: 'relative', gridColumn: 'auto', gridRow: 'auto',
                border: '2px solid #fff', margin: '0'
            });
            
            div.innerHTML = `<span class="el-sym" style="font-size: 14px;">${el.sym}</span>`;
            
            // Click để xóa
            div.onclick = (e) => {
                e.stopPropagation();
                removeIngredient(el.sym);
            };
            mixContainer.appendChild(div);
        });

        if (currentIngredients.length === 0 && placeholder) {
            placeholder.style.display = 'block';
        }
    }

    function removeIngredient(symbol) {
        currentIngredients = currentIngredients.filter(e => e.sym !== symbol);
        renderMix();
        checkReaction();
    }

    // 5. Kiểm tra phản ứng
    function checkReaction() {
        const currentSyms = currentIngredients.map(e => e.sym).sort();

        const foundReaction = reactionsDB.find(reaction => {
            const recipeSyms = [...reaction.inputs].sort();
            return JSON.stringify(currentSyms) === JSON.stringify(recipeSyms);
        });

        if (foundReaction) {
            showResult(foundReaction.equation, foundReaction.desc, true);
        } else {
            if (currentIngredients.length >= 2) {
                showResult("???", "Chưa có dữ liệu phản ứng", false);
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

    // Expose reset function to window so button can call it
    window.resetLab = function() {
        currentIngredients = [];
        renderMix();
        resultBox.classList.remove('show');
    };

    // Khởi chạy
    initTable();
});