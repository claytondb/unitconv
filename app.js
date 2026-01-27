// Unit Converter

// Unit definitions with conversion to base unit
const units = {
    length: {
        name: 'Length',
        base: 'meter',
        units: {
            millimeter: { name: 'Millimeter (mm)', factor: 0.001 },
            centimeter: { name: 'Centimeter (cm)', factor: 0.01 },
            meter: { name: 'Meter (m)', factor: 1 },
            kilometer: { name: 'Kilometer (km)', factor: 1000 },
            inch: { name: 'Inch (in)', factor: 0.0254 },
            foot: { name: 'Foot (ft)', factor: 0.3048 },
            yard: { name: 'Yard (yd)', factor: 0.9144 },
            mile: { name: 'Mile (mi)', factor: 1609.344 },
            nautical_mile: { name: 'Nautical Mile', factor: 1852 }
        }
    },
    weight: {
        name: 'Weight',
        base: 'kilogram',
        units: {
            milligram: { name: 'Milligram (mg)', factor: 0.000001 },
            gram: { name: 'Gram (g)', factor: 0.001 },
            kilogram: { name: 'Kilogram (kg)', factor: 1 },
            metric_ton: { name: 'Metric Ton (t)', factor: 1000 },
            ounce: { name: 'Ounce (oz)', factor: 0.0283495 },
            pound: { name: 'Pound (lb)', factor: 0.453592 },
            stone: { name: 'Stone (st)', factor: 6.35029 }
        }
    },
    temperature: {
        name: 'Temperature',
        base: 'celsius',
        units: {
            celsius: { name: 'Celsius (°C)', special: true },
            fahrenheit: { name: 'Fahrenheit (°F)', special: true },
            kelvin: { name: 'Kelvin (K)', special: true }
        }
    },
    volume: {
        name: 'Volume',
        base: 'liter',
        units: {
            milliliter: { name: 'Milliliter (mL)', factor: 0.001 },
            liter: { name: 'Liter (L)', factor: 1 },
            cubic_meter: { name: 'Cubic Meter (m³)', factor: 1000 },
            gallon_us: { name: 'Gallon (US)', factor: 3.78541 },
            gallon_uk: { name: 'Gallon (UK)', factor: 4.54609 },
            quart: { name: 'Quart (US)', factor: 0.946353 },
            pint: { name: 'Pint (US)', factor: 0.473176 },
            cup: { name: 'Cup (US)', factor: 0.236588 },
            fluid_ounce: { name: 'Fluid Ounce (US)', factor: 0.0295735 },
            tablespoon: { name: 'Tablespoon', factor: 0.0147868 },
            teaspoon: { name: 'Teaspoon', factor: 0.00492892 }
        }
    },
    area: {
        name: 'Area',
        base: 'square_meter',
        units: {
            square_millimeter: { name: 'Square Millimeter (mm²)', factor: 0.000001 },
            square_centimeter: { name: 'Square Centimeter (cm²)', factor: 0.0001 },
            square_meter: { name: 'Square Meter (m²)', factor: 1 },
            square_kilometer: { name: 'Square Kilometer (km²)', factor: 1000000 },
            hectare: { name: 'Hectare (ha)', factor: 10000 },
            acre: { name: 'Acre', factor: 4046.86 },
            square_foot: { name: 'Square Foot (ft²)', factor: 0.092903 },
            square_yard: { name: 'Square Yard (yd²)', factor: 0.836127 },
            square_mile: { name: 'Square Mile (mi²)', factor: 2589988.11 }
        }
    },
    time: {
        name: 'Time',
        base: 'second',
        units: {
            millisecond: { name: 'Millisecond (ms)', factor: 0.001 },
            second: { name: 'Second (s)', factor: 1 },
            minute: { name: 'Minute (min)', factor: 60 },
            hour: { name: 'Hour (h)', factor: 3600 },
            day: { name: 'Day', factor: 86400 },
            week: { name: 'Week', factor: 604800 },
            month: { name: 'Month (avg)', factor: 2629746 },
            year: { name: 'Year (avg)', factor: 31556952 }
        }
    },
    speed: {
        name: 'Speed',
        base: 'meter_per_second',
        units: {
            meter_per_second: { name: 'Meters/Second (m/s)', factor: 1 },
            kilometer_per_hour: { name: 'Kilometers/Hour (km/h)', factor: 0.277778 },
            mile_per_hour: { name: 'Miles/Hour (mph)', factor: 0.44704 },
            knot: { name: 'Knot', factor: 0.514444 },
            foot_per_second: { name: 'Feet/Second (ft/s)', factor: 0.3048 }
        }
    },
    data: {
        name: 'Data',
        base: 'byte',
        units: {
            bit: { name: 'Bit (b)', factor: 0.125 },
            byte: { name: 'Byte (B)', factor: 1 },
            kilobyte: { name: 'Kilobyte (KB)', factor: 1024 },
            megabyte: { name: 'Megabyte (MB)', factor: 1048576 },
            gigabyte: { name: 'Gigabyte (GB)', factor: 1073741824 },
            terabyte: { name: 'Terabyte (TB)', factor: 1099511627776 },
            petabyte: { name: 'Petabyte (PB)', factor: 1125899906842624 }
        }
    }
};

// Quick references for each category
const quickRefs = {
    length: [
        { from: 1, fromUnit: 'inch', toUnit: 'centimeter' },
        { from: 1, fromUnit: 'foot', toUnit: 'meter' },
        { from: 1, fromUnit: 'mile', toUnit: 'kilometer' },
        { from: 1, fromUnit: 'meter', toUnit: 'foot' }
    ],
    weight: [
        { from: 1, fromUnit: 'pound', toUnit: 'kilogram' },
        { from: 1, fromUnit: 'ounce', toUnit: 'gram' },
        { from: 1, fromUnit: 'kilogram', toUnit: 'pound' },
        { from: 100, fromUnit: 'gram', toUnit: 'ounce' }
    ],
    temperature: [
        { from: 0, fromUnit: 'celsius', toUnit: 'fahrenheit' },
        { from: 100, fromUnit: 'celsius', toUnit: 'fahrenheit' },
        { from: 32, fromUnit: 'fahrenheit', toUnit: 'celsius' },
        { from: 98.6, fromUnit: 'fahrenheit', toUnit: 'celsius' }
    ],
    volume: [
        { from: 1, fromUnit: 'gallon_us', toUnit: 'liter' },
        { from: 1, fromUnit: 'liter', toUnit: 'quart' },
        { from: 1, fromUnit: 'cup', toUnit: 'milliliter' },
        { from: 1, fromUnit: 'tablespoon', toUnit: 'teaspoon' }
    ],
    area: [
        { from: 1, fromUnit: 'acre', toUnit: 'square_meter' },
        { from: 1, fromUnit: 'square_foot', toUnit: 'square_meter' },
        { from: 1, fromUnit: 'hectare', toUnit: 'acre' }
    ],
    time: [
        { from: 1, fromUnit: 'hour', toUnit: 'minute' },
        { from: 1, fromUnit: 'day', toUnit: 'hour' },
        { from: 1, fromUnit: 'week', toUnit: 'day' },
        { from: 1, fromUnit: 'year', toUnit: 'day' }
    ],
    speed: [
        { from: 100, fromUnit: 'kilometer_per_hour', toUnit: 'mile_per_hour' },
        { from: 60, fromUnit: 'mile_per_hour', toUnit: 'kilometer_per_hour' },
        { from: 1, fromUnit: 'meter_per_second', toUnit: 'kilometer_per_hour' }
    ],
    data: [
        { from: 1, fromUnit: 'gigabyte', toUnit: 'megabyte' },
        { from: 1, fromUnit: 'terabyte', toUnit: 'gigabyte' },
        { from: 1, fromUnit: 'megabyte', toUnit: 'kilobyte' }
    ]
};

// State
let currentCategory = 'length';
let history = [];

// DOM Elements
const fromValue = document.getElementById('from-value');
const toValue = document.getElementById('to-value');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const formulaDisplay = document.getElementById('formula-display');

// Initialize
function init() {
    loadHistory();
    setupEventListeners();
    loadCategory('length');
}

function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadCategory(btn.dataset.category);
        });
    });

    // Input change
    fromValue.addEventListener('input', convert);
    fromUnit.addEventListener('change', convert);
    toUnit.addEventListener('change', convert);

    // Swap button
    document.getElementById('swap-btn').addEventListener('click', swap);

    // Clear history
    document.getElementById('clear-history').addEventListener('click', clearHistory);
}

function loadCategory(category) {
    currentCategory = category;
    const categoryData = units[category];
    
    // Populate selects
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    Object.entries(categoryData.units).forEach(([key, unit]) => {
        fromUnit.add(new Option(unit.name, key));
        toUnit.add(new Option(unit.name, key));
    });
    
    // Set defaults
    const unitKeys = Object.keys(categoryData.units);
    fromUnit.value = unitKeys[0];
    toUnit.value = unitKeys.length > 2 ? unitKeys[2] : unitKeys[1];
    
    // Clear and convert
    fromValue.value = '';
    toValue.value = '';
    formulaDisplay.textContent = 'Enter a value to see the conversion';
    
    // Load quick refs
    loadQuickRefs(category);
    
    // Update table
    updateTable();
}

function convert() {
    const value = parseFloat(fromValue.value);
    if (isNaN(value)) {
        toValue.value = '';
        formulaDisplay.textContent = 'Enter a value to see the conversion';
        updateTable();
        return;
    }
    
    const from = fromUnit.value;
    const to = toUnit.value;
    const result = convertValue(value, from, to, currentCategory);
    
    toValue.value = formatNumber(result);
    updateFormula(value, from, to, result);
    updateTable(value);
    
    // Add to history
    addToHistory(value, from, to, result, currentCategory);
}

function convertValue(value, from, to, category) {
    const categoryData = units[category];
    
    // Special handling for temperature
    if (category === 'temperature') {
        return convertTemperature(value, from, to);
    }
    
    // Convert to base unit, then to target
    const fromFactor = categoryData.units[from].factor;
    const toFactor = categoryData.units[to].factor;
    
    return (value * fromFactor) / toFactor;
}

function convertTemperature(value, from, to) {
    // Convert to Celsius first
    let celsius;
    switch(from) {
        case 'celsius': celsius = value; break;
        case 'fahrenheit': celsius = (value - 32) * 5/9; break;
        case 'kelvin': celsius = value - 273.15; break;
    }
    
    // Convert from Celsius to target
    switch(to) {
        case 'celsius': return celsius;
        case 'fahrenheit': return celsius * 9/5 + 32;
        case 'kelvin': return celsius + 273.15;
    }
}

function formatNumber(num) {
    if (Math.abs(num) >= 1000000 || (Math.abs(num) < 0.001 && num !== 0)) {
        return num.toExponential(6);
    }
    return parseFloat(num.toPrecision(10));
}

function updateFormula(value, from, to, result) {
    const fromName = units[currentCategory].units[from].name;
    const toName = units[currentCategory].units[to].name;
    formulaDisplay.innerHTML = `<strong>${value} ${fromName.split(' ')[0]}</strong> = <strong>${formatNumber(result)} ${toName.split(' ')[0]}</strong>`;
}

function swap() {
    const tempUnit = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = tempUnit;
    
    const tempValue = fromValue.value;
    fromValue.value = toValue.value;
    toValue.value = tempValue;
    
    convert();
}

function loadQuickRefs(category) {
    const grid = document.getElementById('quick-grid');
    const refs = quickRefs[category] || [];
    
    grid.innerHTML = refs.map(ref => {
        const result = convertValue(ref.from, ref.fromUnit, ref.toUnit, category);
        const fromName = units[category].units[ref.fromUnit].name.split(' ')[0];
        const toName = units[category].units[ref.toUnit].name.split(' ')[0];
        
        return `
            <div class="quick-item" onclick="quickConvert(${ref.from}, '${ref.fromUnit}', '${ref.toUnit}')">
                <div class="from">${ref.from} ${fromName}</div>
                <div class="to">= ${formatNumber(result)} ${toName}</div>
            </div>
        `;
    }).join('');
}

function quickConvert(value, from, to) {
    fromValue.value = value;
    fromUnit.value = from;
    toUnit.value = to;
    convert();
}
window.quickConvert = quickConvert;

function updateTable(value = 1) {
    const tableBody = document.getElementById('table-body');
    const categoryData = units[currentCategory];
    const from = fromUnit.value;
    
    if (isNaN(value) || value === '') value = 1;
    
    tableBody.innerHTML = Object.entries(categoryData.units).map(([key, unit]) => {
        const result = convertValue(value, from, key, currentCategory);
        return `
            <tr>
                <td>${unit.name}</td>
                <td>${formatNumber(result)}</td>
            </tr>
        `;
    }).join('');
}

// History
function addToHistory(value, from, to, result, category) {
    const fromName = units[category].units[from].name.split(' ')[0];
    const toName = units[category].units[to].name.split(' ')[0];
    
    const entry = {
        id: Date.now(),
        display: `${value} ${fromName} = ${formatNumber(result)} ${toName}`,
        category: units[category].name,
        value, from, to, categoryKey: category
    };
    
    // Don't add duplicates
    if (history.length > 0 && history[0].display === entry.display) return;
    
    history.unshift(entry);
    if (history.length > 10) history.pop();
    
    saveHistory();
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    
    if (history.length === 0) {
        list.innerHTML = '<p class="empty-state">Your conversions will appear here</p>';
        return;
    }
    
    list.innerHTML = history.map(h => `
        <div class="history-item" onclick="loadFromHistory('${h.id}')">
            <span class="conversion">${h.display}</span>
            <span class="category">${h.category}</span>
        </div>
    `).join('');
}

function loadFromHistory(id) {
    const entry = history.find(h => h.id == id);
    if (!entry) return;
    
    // Switch category
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.cat-btn[data-category="${entry.categoryKey}"]`).classList.add('active');
    loadCategory(entry.categoryKey);
    
    // Set values
    setTimeout(() => {
        fromValue.value = entry.value;
        fromUnit.value = entry.from;
        toUnit.value = entry.to;
        convert();
    }, 50);
}
window.loadFromHistory = loadFromHistory;

function clearHistory() {
    history = [];
    saveHistory();
    renderHistory();
}

function saveHistory() {
    localStorage.setItem('unitconv-history', JSON.stringify(history));
}

function loadHistory() {
    const saved = localStorage.getItem('unitconv-history');
    if (saved) {
        history = JSON.parse(saved);
        renderHistory();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', init);
