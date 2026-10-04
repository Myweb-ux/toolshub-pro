// ===== Tools list - defines all 13 tools with name, file, description, gradient color =====
const tools = [
  { name: "Word Counter", file: "word-counter.html", offline: true, icon: "📝", desc: "Count words & chars instantly", gradient: "gradient-1" },
  { name: "Case Converter", file: "case-converter.html", offline: true, icon: "🔤", desc: "UPPER, lower, Title Case", gradient: "gradient-2" },
  { name: "Password Generator", file: "password-generator.html", offline: false, icon: "🔐", desc: "Strong secure passwords", gradient: "gradient-3" },
  { name: "Stopwatch", file: "stopwatch.html", offline: true, icon: "⏱️", desc: "Accurate lap timer", gradient: "gradient-4" },
  { name: "QR Generator", file: "qr-generator.html", offline: false, icon: "📱", desc: "Create QR code fast", gradient: "gradient-5" },
  { name: "Image Compressor", file: "image-compressor.html", offline: false, icon: "🖼️", desc: "Compress & convert images + resize + quality control", gradient: "gradient-6" },
  { name: "JSON Formatter", file: "json-formatter.html", offline: false, icon: "{}", desc: "Beautify, minify & validate JSON", gradient: "gradient-7" },
  { name: "Lorem Generator", file: "lorem-generator.html", offline: false, icon: "📄", desc: "Generate paragraphs, words, sentences", gradient: "gradient-8" },
  { name: "Percentage Calc", file: "percentage-calc.html", offline: false, icon: "%", desc: "X% of Y, increase/decrease calculator", gradient: "gradient-9" },
  { name: "BMI Calculator", file: "bmi-calculator.html", offline: false, icon: "⚖️", desc: "Body Mass Index with category & chart", gradient: "gradient-10" },
  { name: "Age Calculator", file: "age-calculator.html", offline: true, icon: "🎂", desc: "Exact age in years, months, days", gradient: "gradient-11" },
  { name: "Unit Converter", file: "unit-converter.html", offline: false, icon: "🔄", desc: "Length, weight, temperature with swap", gradient: "gradient-12" },
  { name: "Color Studio Pro", file: "color-studio.html", offline: true, icon: "🎨", desc: "Picker + Mixer + Gradient + 24 Backgrounds for devs", gradient: "gradient-13" },
];

// ===== Function to render grid cards =====
function renderGrid(list) {
  const grid = document.getElementById('toolsGrid');
  if (!grid) return;
  
  // Map each tool to colorful card HTML
  grid.innerHTML = list.map(t => `
    <a href="tools/${t.file}" class="tool-card ${t.gradient}">
      <h5>${t.icon} ${t.name}</h5>
      <p>${t.desc}</p>
      <span class="badge bg-white text-dark rounded-pill">${t.offline ? '✅ Offline' : '🔒 Online'}</span><br>
      <span class="open-btn">Open Tool →</span>
    </a>
  `).join('');
  
  document.getElementById('toolCount').innerText = list.length + " Tools Available";
}

// Render on homepage load
if (document.getElementById('toolsGrid')) {
  renderGrid(tools);
}

// ===== Search filter function =====
function filterTools() {
  let q = document.getElementById('toolSearch').value.toLowerCase();
  // Filter by name or description
  renderGrid(tools.filter(t => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)));
}

// ===== Sidebar toggle =====
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== Dark/Light theme with localStorage save =====
function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Load the saved theme safely on every page.
// Some pages load this script in the <head>, so wait for <body> when necessary.
function applySavedTheme() {
  if (localStorage.getItem('theme') === 'dark' && document.body) {
    document.body.classList.add('dark');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applySavedTheme);
} else {
  applySavedTheme();
}

// Close sidebar when clicking outside
document.addEventListener('click', function(e) {
  let sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  let inside = sidebar.contains(e.target);
  let isMenuBtn = e.target.closest('button') && e.target.closest('button').innerText.includes('Menu');
  if (sidebar.classList.contains('open') && !inside && !isMenuBtn) {
    sidebar.classList.remove('open');
  }
});