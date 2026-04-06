/* ============================================================
   Flower Admin Panel – WooCommerce-style Demo
   All text: Traditional Chinese  |  Currency: NT$
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. MOCK DATA
     ---------------------------------------------------------- */

  // --- Products (12+) ---
  const products = [
    { id: 1001, name: '永恆玫瑰花盒', category: '經典花盒', price: 2680, salePrice: 2380, stock: 24, sku: 'PF-RB-001', status: '已上架', image: 'images/rose-box.jpg', description: '手工永生玫瑰，精緻禮盒包裝', featured: true, created: '2025-09-12' },
    { id: 1002, name: '粉彩繡球花束', category: '花束系列', price: 1980, salePrice: null, stock: 18, sku: 'PF-HB-002', status: '已上架', image: 'images/hydrangea.jpg', description: '夢幻粉彩繡球搭配滿天星', featured: true, created: '2025-10-05' },
    { id: 1003, name: '迷你玻璃罩花', category: '玻璃罩系列', price: 1580, salePrice: 1280, stock: 32, sku: 'PF-GD-003', status: '已上架', image: 'images/glass-dome.jpg', description: '小王子經典玻璃罩永生花', featured: false, created: '2025-10-18' },
    { id: 1004, name: '奢華牡丹花籃', category: '花籃系列', price: 3980, salePrice: null, stock: 8, sku: 'PF-PB-004', status: '已上架', image: 'images/peony-basket.jpg', description: '頂級牡丹花搭配進口花材', featured: true, created: '2025-11-02' },
    { id: 1005, name: '永生花相框', category: '居家擺飾', price: 1280, salePrice: 980, stock: 45, sku: 'PF-FR-005', status: '已上架', image: 'images/flower-frame.jpg', description: '立體花藝相框，適合送禮', featured: false, created: '2025-11-15' },
    { id: 1006, name: '經典紅玫瑰花束', category: '花束系列', price: 2280, salePrice: null, stock: 20, sku: 'PF-RR-006', status: '已上架', image: 'images/red-rose.jpg', description: '浪漫紅玫瑰永生花束', featured: true, created: '2025-12-01' },
    { id: 1007, name: '藍色妖姬花盒', category: '經典花盒', price: 3280, salePrice: 2980, stock: 12, sku: 'PF-BB-007', status: '已上架', image: 'images/blue-rose.jpg', description: '稀有藍色永生玫瑰禮盒', featured: false, created: '2025-12-10' },
    { id: 1008, name: '乾燥花花圈', category: '居家擺飾', price: 1680, salePrice: null, stock: 15, sku: 'PF-WR-008', status: '已上架', image: 'images/wreath.jpg', description: '自然風乾燥花門飾花圈', featured: false, created: '2026-01-05' },
    { id: 1009, name: '永生花夜燈', category: '居家擺飾', price: 1480, salePrice: 1180, stock: 28, sku: 'PF-NL-009', status: '已上架', image: 'images/night-light.jpg', description: '浪漫永生花LED夜燈', featured: true, created: '2026-01-20' },
    { id: 1010, name: '婚禮胸花組', category: '婚禮系列', price: 880, salePrice: null, stock: 50, sku: 'PF-WC-010', status: '已上架', image: 'images/corsage.jpg', description: '新郎新娘胸花套組', featured: false, created: '2026-02-01' },
    { id: 1011, name: '母親節康乃馨花盒', category: '節慶限定', price: 2480, salePrice: 2180, stock: 0, sku: 'PF-MC-011', status: '已下架', image: 'images/carnation.jpg', description: '溫馨康乃馨永生花盒', featured: false, created: '2026-02-14' },
    { id: 1012, name: '畢業花束', category: '節慶限定', price: 1880, salePrice: null, stock: 35, sku: 'PF-GB-012', status: '已上架', image: 'images/graduation.jpg', description: '向日葵主題畢業花束', featured: true, created: '2026-03-01' },
    { id: 1013, name: '迷你桌上花瓶組', category: '居家擺飾', price: 780, salePrice: 680, stock: 60, sku: 'PF-MV-013', status: '已上架', image: 'images/mini-vase.jpg', description: '小巧精緻桌上永生花瓶', featured: false, created: '2026-03-10' },
    { id: 1014, name: '豪華落地花藝', category: '花籃系列', price: 6800, salePrice: null, stock: 3, sku: 'PF-LF-014', status: '已上架', image: 'images/floor-arrangement.jpg', description: '大型落地永生花藝擺設', featured: false, created: '2026-03-20' }
  ];

  // --- Orders (8+) ---
  const orders = [
    { id: 20240001, customer: '王美玲', email: 'meiling.wang@mail.com', date: '2026-04-05', status: 'completed', items: [{ productId: 1001, name: '永恆玫瑰花盒', qty: 1, price: 2380 }, { productId: 1005, name: '永生花相框', qty: 2, price: 980 }], total: 4340, shipping: { name: '王美玲', address: '台北市大安區忠孝東路四段100號5樓', phone: '0912-345-678' }, payment: '信用卡', note: '請附贈卡片，寫「生日快樂」' },
    { id: 20240002, customer: '林志豪', email: 'zhihao.lin@mail.com', date: '2026-04-04', status: 'processing', items: [{ productId: 1006, name: '經典紅玫瑰花束', qty: 1, price: 2280 }], total: 2280, shipping: { name: '林志豪', address: '新北市板橋區文化路一段200號', phone: '0923-456-789' }, payment: 'LINE Pay', note: '' },
    { id: 20240003, customer: '陳雅婷', email: 'yating.chen@mail.com', date: '2026-04-03', status: 'shipped', items: [{ productId: 1004, name: '奢華牡丹花籃', qty: 1, price: 3980 }, { productId: 1009, name: '永生花夜燈', qty: 1, price: 1180 }], total: 5160, shipping: { name: '張大明', address: '台中市西屯區台灣大道三段99號', phone: '0934-567-890' }, payment: '信用卡', note: '送給朋友的結婚禮物' },
    { id: 20240004, customer: '張家豪', email: 'jiahao.zhang@mail.com', date: '2026-04-02', status: 'pending', items: [{ productId: 1003, name: '迷你玻璃罩花', qty: 3, price: 1280 }], total: 3840, shipping: { name: '張家豪', address: '高雄市前鎮區中山二路500號', phone: '0945-678-901' }, payment: '銀行轉帳', note: '三個不同顏色' },
    { id: 20240005, customer: '李淑芬', email: 'shufen.li@mail.com', date: '2026-04-01', status: 'completed', items: [{ productId: 1010, name: '婚禮胸花組', qty: 5, price: 880 }], total: 4400, shipping: { name: '李淑芬', address: '台南市東區大學路一段1號', phone: '0956-789-012' }, payment: '信用卡', note: '婚禮用，請小心包裝' },
    { id: 20240006, customer: '吳建宏', email: 'jianhong.wu@mail.com', date: '2026-03-30', status: 'cancelled', items: [{ productId: 1007, name: '藍色妖姬花盒', qty: 1, price: 2980 }], total: 2980, shipping: { name: '吳建宏', address: '桃園市中壢區中央西路二段88號', phone: '0967-890-123' }, payment: 'LINE Pay', note: '' },
    { id: 20240007, customer: '黃雅琪', email: 'yaqi.huang@mail.com', date: '2026-03-28', status: 'completed', items: [{ productId: 1002, name: '粉彩繡球花束', qty: 1, price: 1980 }, { productId: 1013, name: '迷你桌上花瓶組', qty: 2, price: 680 }], total: 3340, shipping: { name: '黃雅琪', address: '新竹市東區光復路二段101號', phone: '0978-901-234' }, payment: '信用卡', note: '' },
    { id: 20240008, customer: '劉志明', email: 'zhiming.liu@mail.com', date: '2026-03-25', status: 'completed', items: [{ productId: 1012, name: '畢業花束', qty: 2, price: 1880 }], total: 3760, shipping: { name: '劉志明', address: '台北市中正區重慶南路一段122號', phone: '0989-012-345' }, payment: '銀行轉帳', note: '畢業典禮當天送達' },
    { id: 20240009, customer: '周怡君', email: 'yijun.zhou@mail.com', date: '2026-03-22', status: 'processing', items: [{ productId: 1014, name: '豪華落地花藝', qty: 1, price: 6800 }], total: 6800, shipping: { name: '周怡君', address: '台北市信義區松仁路100號', phone: '0910-111-222' }, payment: '信用卡', note: '公司大廳擺設用' },
    { id: 20240010, customer: '鄭淑華', email: 'shuhua.zheng@mail.com', date: '2026-03-20', status: 'shipped', items: [{ productId: 1008, name: '乾燥花花圈', qty: 1, price: 1680 }, { productId: 1009, name: '永生花夜燈', qty: 1, price: 1180 }], total: 2860, shipping: { name: '鄭淑華', address: '台中市北區學士路38號', phone: '0921-333-444' }, payment: 'LINE Pay', note: '喬遷禮物' }
  ];

  // --- Customers (6+) ---
  const customers = [
    { id: 'C001', name: '王美玲', email: 'meiling.wang@mail.com', phone: '0912-345-678', ordersCount: 5, totalSpent: 12480, joinDate: '2025-06-15', lastOrder: '2026-04-05', status: '活躍' },
    { id: 'C002', name: '林志豪', email: 'zhihao.lin@mail.com', phone: '0923-456-789', ordersCount: 3, totalSpent: 7640, joinDate: '2025-08-20', lastOrder: '2026-04-04', status: '活躍' },
    { id: 'C003', name: '陳雅婷', email: 'yating.chen@mail.com', phone: '0934-567-890', ordersCount: 8, totalSpent: 24360, joinDate: '2025-03-10', lastOrder: '2026-04-03', status: '活躍' },
    { id: 'C004', name: '張家豪', email: 'jiahao.zhang@mail.com', phone: '0945-678-901', ordersCount: 2, totalSpent: 5120, joinDate: '2025-11-01', lastOrder: '2026-04-02', status: '活躍' },
    { id: 'C005', name: '李淑芬', email: 'shufen.li@mail.com', phone: '0956-789-012', ordersCount: 12, totalSpent: 38900, joinDate: '2024-12-05', lastOrder: '2026-04-01', status: 'VIP' },
    { id: 'C006', name: '吳建宏', email: 'jianhong.wu@mail.com', phone: '0967-890-123', ordersCount: 1, totalSpent: 2980, joinDate: '2026-02-28', lastOrder: '2026-03-30', status: '一般' },
    { id: 'C007', name: '黃雅琪', email: 'yaqi.huang@mail.com', phone: '0978-901-234', ordersCount: 4, totalSpent: 9820, joinDate: '2025-07-22', lastOrder: '2026-03-28', status: '活躍' },
    { id: 'C008', name: '劉志明', email: 'zhiming.liu@mail.com', phone: '0989-012-345', ordersCount: 6, totalSpent: 16540, joinDate: '2025-05-18', lastOrder: '2026-03-25', status: '活躍' }
  ];

  // --- Dashboard stats ---
  const dashboardStats = {
    revenue: { value: 158760, change: 12.5, period: '本月' },
    orders: { value: 47, change: 8.3, period: '本月' },
    products: { value: products.filter(function (p) { return p.status === '已上架'; }).length, change: 2, period: '上架中' },
    customers: { value: customers.length, change: 15.2, period: '總計' }
  };

  // --- Monthly revenue for chart ---
  const monthlyRevenue = [
    { month: '2025/11', revenue: 98200 },
    { month: '2025/12', revenue: 132500 },
    { month: '2026/01', revenue: 115800 },
    { month: '2026/02', revenue: 142300 },
    { month: '2026/03', revenue: 168900 },
    { month: '2026/04', revenue: 158760 }
  ];

  // --- Recent activity ---
  const recentActivity = [
    { type: 'order', message: '王美玲 完成了訂單 #20240001', time: '1 小時前' },
    { type: 'order', message: '林志豪 下了新訂單 #20240002', time: '3 小時前' },
    { type: 'product', message: '商品「畢業花束」庫存已補充', time: '5 小時前' },
    { type: 'customer', message: '新會員 鄭淑華 已註冊', time: '1 天前' },
    { type: 'order', message: '訂單 #20240003 已出貨', time: '2 天前' },
    { type: 'system', message: '系統備份已完成', time: '3 天前' }
  ];

  /* ----------------------------------------------------------
     2. STATE
     ---------------------------------------------------------- */

  var state = {
    currentPage: 'dashboard',
    sidebarOpen: window.innerWidth > 768,
    selectedOrders: [],
    selectedProducts: [],
    orderPage: 1,
    productPage: 1,
    customerPage: 1,
    perPage: 5,
    orderFilter: 'all',
    orderSearch: '',
    productSearch: '',
    customerSearch: '',
    editingProduct: null,
    notifications: []
  };

  /* ----------------------------------------------------------
     3. HELPER UTILITIES
     ---------------------------------------------------------- */

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function formatCurrency(n) {
    return 'NT$' + Number(n).toLocaleString('zh-TW');
  }

  function formatDate(str) {
    if (!str) return '-';
    var d = new Date(str);
    return d.getFullYear() + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + String(d.getDate()).padStart(2, '0');
  }

  function statusLabel(s) {
    var map = {
      pending: '待處理',
      processing: '處理中',
      shipped: '已出貨',
      completed: '已完成',
      cancelled: '已取消'
    };
    return map[s] || s;
  }

  function statusClass(s) {
    var map = {
      pending: 'status-pending',
      processing: 'status-processing',
      shipped: 'status-shipped',
      completed: 'status-completed',
      cancelled: 'status-cancelled'
    };
    return map[s] || '';
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function paginate(arr, page, perPage) {
    var start = (page - 1) * perPage;
    return {
      data: arr.slice(start, start + perPage),
      totalPages: Math.ceil(arr.length / perPage),
      total: arr.length
    };
  }

  /* ----------------------------------------------------------
     4. NOTIFICATION SYSTEM
     ---------------------------------------------------------- */

  var notifId = 0;

  function showNotification(message, type) {
    type = type || 'info';
    var id = ++notifId;
    var container = $('#admin-notifications');
    if (!container) {
      container = document.createElement('div');
      container.id = 'admin-notifications';
      container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;display:flex;flex-direction:column;gap:10px;max-width:380px;';
      document.body.appendChild(container);
    }

    var iconMap = { success: '&#10003;', error: '&#10007;', warning: '&#9888;', info: '&#8505;' };
    var colorMap = { success: '#27ae60', error: '#e74c3c', warning: '#f39c12', info: '#3498db' };

    var el = document.createElement('div');
    el.className = 'admin-notif admin-notif-' + type;
    el.dataset.id = id;
    el.style.cssText = 'display:flex;align-items:center;gap:10px;padding:14px 18px;border-radius:8px;background:#fff;box-shadow:0 4px 20px rgba(0,0,0,.15);border-left:4px solid ' + colorMap[type] + ';animation:slideInRight .3s ease;font-size:14px;cursor:pointer;';
    el.innerHTML = '<span style="color:' + colorMap[type] + ';font-size:18px;font-weight:bold;">' + iconMap[type] + '</span>' +
      '<span style="flex:1;">' + escapeHtml(message) + '</span>' +
      '<span style="opacity:.5;font-size:18px;" class="notif-close">&times;</span>';

    el.addEventListener('click', function () { removeNotification(el); });
    container.appendChild(el);

    setTimeout(function () { removeNotification(el); }, 4000);

    state.notifications.push({ id: id, message: message, type: type, time: new Date() });
    return id;
  }

  function removeNotification(el) {
    if (!el || !el.parentNode) return;
    el.style.animation = 'slideOutRight .3s ease forwards';
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
  }

  /* ----------------------------------------------------------
     5. SIDEBAR & NAVIGATION
     ---------------------------------------------------------- */

  function initSidebar() {
    // Submenu toggle
    $$('.admin-sidebar .has-submenu > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var parent = this.parentElement;
        var isOpen = parent.classList.contains('open');
        // close others
        $$('.admin-sidebar .has-submenu.open').forEach(function (el) { el.classList.remove('open'); });
        if (!isOpen) parent.classList.add('open');
      });
    });

    // Page navigation links
    $$('[data-page]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo(this.dataset.page);
      });
    });

    // Mobile toggle
    var toggle = $('#sidebar-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () { toggleSidebar(); });
    }

    // Close sidebar on mobile when clicking overlay
    var overlay = $('#sidebar-overlay');
    if (overlay) {
      overlay.addEventListener('click', function () { toggleSidebar(false); });
    }
  }

  function toggleSidebar(forceState) {
    var sidebar = $('.admin-sidebar');
    var overlay = $('#sidebar-overlay');
    if (!sidebar) return;
    state.sidebarOpen = typeof forceState === 'boolean' ? forceState : !state.sidebarOpen;
    sidebar.classList.toggle('open', state.sidebarOpen);
    if (overlay) overlay.classList.toggle('active', state.sidebarOpen && window.innerWidth <= 768);
    document.body.classList.toggle('sidebar-open', state.sidebarOpen);
  }

  function navigateTo(page) {
    state.currentPage = page;

    // Update active link
    $$('.admin-sidebar a').forEach(function (a) { a.classList.remove('active'); });
    var activeLink = $('[data-page="' + page + '"]');
    if (activeLink) activeLink.classList.add('active');

    // Show/hide sections
    $$('.admin-page').forEach(function (section) {
      section.style.display = section.dataset.section === page ? '' : 'none';
    });

    // Render page content
    switch (page) {
      case 'dashboard': renderDashboard(); break;
      case 'orders': renderOrders(); break;
      case 'products': renderProducts(); break;
      case 'customers': renderCustomers(); break;
      case 'settings': initSettingsTabs(); break;
    }

    // Close sidebar on mobile after navigation
    if (window.innerWidth <= 768) toggleSidebar(false);
  }

  /* ----------------------------------------------------------
     6. DASHBOARD
     ---------------------------------------------------------- */

  function renderDashboard() {
    renderDashboardStats();
    renderRevenueChart();
    renderRecentOrders();
    renderActivityFeed();
    renderTopProducts();
  }

  function renderDashboardStats() {
    var container = $('#dashboard-stats');
    if (!container) return;

    var items = [
      { label: '本月營收', value: formatCurrency(dashboardStats.revenue.value), change: dashboardStats.revenue.change, icon: '&#128176;' },
      { label: '本月訂單', value: dashboardStats.orders.value + ' 筆', change: dashboardStats.orders.change, icon: '&#128230;' },
      { label: '上架商品', value: dashboardStats.products.value + ' 件', change: dashboardStats.products.change, icon: '&#127809;' },
      { label: '會員總數', value: dashboardStats.customers.value + ' 人', change: dashboardStats.customers.change, icon: '&#128101;' }
    ];

    container.innerHTML = items.map(function (item) {
      var changeClass = item.change >= 0 ? 'stat-up' : 'stat-down';
      var arrow = item.change >= 0 ? '&#9650;' : '&#9660;';
      return '<div class="stat-card">' +
        '<div class="stat-icon">' + item.icon + '</div>' +
        '<div class="stat-info">' +
          '<div class="stat-label">' + item.label + '</div>' +
          '<div class="stat-value">' + item.value + '</div>' +
          '<div class="stat-change ' + changeClass + '">' + arrow + ' ' + Math.abs(item.change) + '%</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderRevenueChart() {
    var container = $('#revenue-chart');
    if (!container) return;

    var maxRevenue = Math.max.apply(null, monthlyRevenue.map(function (m) { return m.revenue; }));

    container.innerHTML = '<h3 class="chart-title">月營收趨勢</h3>' +
      '<div class="chart-bars">' +
        monthlyRevenue.map(function (m) {
          var pct = Math.round((m.revenue / maxRevenue) * 100);
          return '<div class="chart-bar-group">' +
            '<div class="chart-bar-wrapper">' +
              '<div class="chart-bar" style="height:' + pct + '%" data-value="' + formatCurrency(m.revenue) + '">' +
                '<span class="chart-bar-label">' + formatCurrency(m.revenue) + '</span>' +
              '</div>' +
            '</div>' +
            '<div class="chart-month">' + m.month + '</div>' +
          '</div>';
        }).join('') +
      '</div>';
  }

  function renderRecentOrders() {
    var container = $('#recent-orders');
    if (!container) return;

    var recent = orders.slice(0, 5);
    container.innerHTML = '<h3>最近訂單</h3>' +
      '<table class="admin-table">' +
        '<thead><tr><th>訂單編號</th><th>顧客</th><th>金額</th><th>狀態</th></tr></thead>' +
        '<tbody>' +
          recent.map(function (o) {
            return '<tr class="clickable-row" data-order="' + o.id + '">' +
              '<td>#' + o.id + '</td>' +
              '<td>' + escapeHtml(o.customer) + '</td>' +
              '<td>' + formatCurrency(o.total) + '</td>' +
              '<td><span class="badge ' + statusClass(o.status) + '">' + statusLabel(o.status) + '</span></td>' +
            '</tr>';
          }).join('') +
        '</tbody>' +
      '</table>';

    $$('.clickable-row[data-order]', container).forEach(function (row) {
      row.addEventListener('click', function () {
        showOrderDetail(Number(this.dataset.order));
      });
    });
  }

  function renderActivityFeed() {
    var container = $('#activity-feed');
    if (!container) return;

    var typeIcon = { order: '&#128230;', product: '&#127809;', customer: '&#128100;', system: '&#9881;' };
    container.innerHTML = '<h3>最近活動</h3><ul class="activity-list">' +
      recentActivity.map(function (a) {
        return '<li class="activity-item activity-' + a.type + '">' +
          '<span class="activity-icon">' + (typeIcon[a.type] || '') + '</span>' +
          '<span class="activity-text">' + escapeHtml(a.message) + '</span>' +
          '<span class="activity-time">' + a.time + '</span>' +
        '</li>';
      }).join('') +
    '</ul>';
  }

  function renderTopProducts() {
    var container = $('#top-products');
    if (!container) return;

    var sorted = products.slice().sort(function (a, b) { return b.stock - a.stock; }).slice(0, 5);
    container.innerHTML = '<h3>熱門商品</h3><ul class="top-products-list">' +
      sorted.map(function (p) {
        var displayPrice = p.salePrice || p.price;
        return '<li class="top-product-item">' +
          '<span class="top-product-name">' + escapeHtml(p.name) + '</span>' +
          '<span class="top-product-price">' + formatCurrency(displayPrice) + '</span>' +
          '<span class="top-product-stock">庫存: ' + p.stock + '</span>' +
        '</li>';
      }).join('') +
    '</ul>';
  }

  /* ----------------------------------------------------------
     7. ORDERS
     ---------------------------------------------------------- */

  function getFilteredOrders() {
    var filtered = orders.slice();
    if (state.orderFilter !== 'all') {
      filtered = filtered.filter(function (o) { return o.status === state.orderFilter; });
    }
    if (state.orderSearch) {
      var q = state.orderSearch.toLowerCase();
      filtered = filtered.filter(function (o) {
        return o.customer.toLowerCase().indexOf(q) !== -1 ||
               o.email.toLowerCase().indexOf(q) !== -1 ||
               String(o.id).indexOf(q) !== -1;
      });
    }
    return filtered;
  }

  function renderOrders() {
    var container = $('#orders-content');
    if (!container) return;

    var filtered = getFilteredOrders();
    var paged = paginate(filtered, state.orderPage, state.perPage);

    // Status filter tabs
    var statuses = ['all', 'pending', 'processing', 'shipped', 'completed', 'cancelled'];
    var statusLabels = { all: '全部', pending: '待處理', processing: '處理中', shipped: '已出貨', completed: '已完成', cancelled: '已取消' };

    var html = '<div class="table-toolbar">' +
      '<div class="status-filters">' +
        statuses.map(function (s) {
          var count = s === 'all' ? orders.length : orders.filter(function (o) { return o.status === s; }).length;
          return '<button class="filter-btn ' + (state.orderFilter === s ? 'active' : '') + '" data-filter="' + s + '">' +
            statusLabels[s] + ' (' + count + ')</button>';
        }).join('') +
      '</div>' +
      '<div class="table-actions">' +
        '<input type="text" class="search-input" id="order-search" placeholder="搜尋訂單..." value="' + escapeHtml(state.orderSearch) + '">' +
        '<div class="bulk-actions">' +
          '<select id="order-bulk-action"><option value="">批次操作</option>' +
            '<option value="processing">標記為處理中</option>' +
            '<option value="shipped">標記為已出貨</option>' +
            '<option value="completed">標記為已完成</option>' +
            '<option value="cancelled">標記為已取消</option>' +
          '</select>' +
          '<button class="btn btn-sm" id="apply-order-bulk">套用</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    html += '<table class="admin-table orders-table">' +
      '<thead><tr>' +
        '<th><input type="checkbox" id="select-all-orders"></th>' +
        '<th>訂單編號</th><th>顧客</th><th>日期</th><th>狀態</th><th>付款方式</th><th>金額</th><th>操作</th>' +
      '</tr></thead><tbody>';

    if (paged.data.length === 0) {
      html += '<tr><td colspan="8" class="empty-state">沒有找到符合條件的訂單</td></tr>';
    } else {
      paged.data.forEach(function (o) {
        var checked = state.selectedOrders.indexOf(o.id) !== -1 ? 'checked' : '';
        html += '<tr>' +
          '<td><input type="checkbox" class="order-checkbox" value="' + o.id + '" ' + checked + '></td>' +
          '<td class="order-id clickable" data-order="' + o.id + '">#' + o.id + '</td>' +
          '<td><div class="customer-cell"><strong>' + escapeHtml(o.customer) + '</strong><br><small>' + escapeHtml(o.email) + '</small></div></td>' +
          '<td>' + formatDate(o.date) + '</td>' +
          '<td><span class="badge ' + statusClass(o.status) + '">' + statusLabel(o.status) + '</span></td>' +
          '<td>' + escapeHtml(o.payment) + '</td>' +
          '<td class="text-right"><strong>' + formatCurrency(o.total) + '</strong></td>' +
          '<td>' +
            '<button class="btn btn-icon btn-view" data-order="' + o.id + '" title="檢視">&#128065;</button>' +
          '</td>' +
        '</tr>';
      });
    }

    html += '</tbody></table>';
    html += renderPagination(paged.totalPages, state.orderPage, 'order');

    container.innerHTML = html;
    bindOrderEvents();
  }

  function bindOrderEvents() {
    // Filter buttons
    $$('.filter-btn[data-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.orderFilter = this.dataset.filter;
        state.orderPage = 1;
        state.selectedOrders = [];
        renderOrders();
      });
    });

    // Search
    var searchInput = $('#order-search');
    if (searchInput) {
      var debounce;
      searchInput.addEventListener('input', function () {
        var val = this.value;
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          state.orderSearch = val;
          state.orderPage = 1;
          renderOrders();
        }, 300);
      });
    }

    // Select all
    var selectAll = $('#select-all-orders');
    if (selectAll) {
      selectAll.addEventListener('change', function () {
        var checked = this.checked;
        var filtered = getFilteredOrders();
        var paged = paginate(filtered, state.orderPage, state.perPage);
        if (checked) {
          paged.data.forEach(function (o) {
            if (state.selectedOrders.indexOf(o.id) === -1) state.selectedOrders.push(o.id);
          });
        } else {
          var pageIds = paged.data.map(function (o) { return o.id; });
          state.selectedOrders = state.selectedOrders.filter(function (id) { return pageIds.indexOf(id) === -1; });
        }
        $$('.order-checkbox').forEach(function (cb) { cb.checked = checked; });
      });
    }

    // Individual checkboxes
    $$('.order-checkbox').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var id = Number(this.value);
        if (this.checked) {
          if (state.selectedOrders.indexOf(id) === -1) state.selectedOrders.push(id);
        } else {
          state.selectedOrders = state.selectedOrders.filter(function (x) { return x !== id; });
        }
      });
    });

    // Bulk action apply
    var applyBulk = $('#apply-order-bulk');
    if (applyBulk) {
      applyBulk.addEventListener('click', function () {
        var action = $('#order-bulk-action').value;
        if (!action) { showNotification('請選擇批次操作', 'warning'); return; }
        if (state.selectedOrders.length === 0) { showNotification('請先選擇訂單', 'warning'); return; }
        state.selectedOrders.forEach(function (id) {
          var order = orders.find(function (o) { return o.id === id; });
          if (order) order.status = action;
        });
        showNotification('已更新 ' + state.selectedOrders.length + ' 筆訂單狀態為「' + statusLabel(action) + '」', 'success');
        state.selectedOrders = [];
        renderOrders();
      });
    }

    // View order detail
    $$('.btn-view[data-order], .clickable[data-order]').forEach(function (el) {
      el.addEventListener('click', function () {
        showOrderDetail(Number(this.dataset.order));
      });
    });
  }

  /* ----------------------------------------------------------
     8. ORDER DETAIL VIEW
     ---------------------------------------------------------- */

  function showOrderDetail(orderId) {
    var order = orders.find(function (o) { return o.id === orderId; });
    if (!order) return;

    var statuses = ['pending', 'processing', 'shipped', 'completed', 'cancelled'];
    var statusOptions = statuses.map(function (s) {
      return '<option value="' + s + '"' + (order.status === s ? ' selected' : '') + '>' + statusLabel(s) + '</option>';
    }).join('');

    var html = '<div class="order-detail">' +
      '<div class="detail-header">' +
        '<h2>訂單 #' + order.id + '</h2>' +
        '<span class="badge ' + statusClass(order.status) + '">' + statusLabel(order.status) + '</span>' +
      '</div>' +

      '<div class="detail-grid">' +
        '<div class="detail-section">' +
          '<h4>訂單資訊</h4>' +
          '<p><strong>訂單日期：</strong>' + formatDate(order.date) + '</p>' +
          '<p><strong>付款方式：</strong>' + escapeHtml(order.payment) + '</p>' +
          '<p><strong>訂單備註：</strong>' + (order.note ? escapeHtml(order.note) : '<em>無</em>') + '</p>' +
          '<div class="status-update">' +
            '<label>更新狀態：</label>' +
            '<select class="status-select" data-order="' + order.id + '">' + statusOptions + '</select>' +
            '<button class="btn btn-primary btn-sm update-status-btn" data-order="' + order.id + '">更新</button>' +
          '</div>' +
        '</div>' +

        '<div class="detail-section">' +
          '<h4>顧客資訊</h4>' +
          '<p><strong>姓名：</strong>' + escapeHtml(order.customer) + '</p>' +
          '<p><strong>Email：</strong>' + escapeHtml(order.email) + '</p>' +
        '</div>' +

        '<div class="detail-section">' +
          '<h4>收件資訊</h4>' +
          '<p><strong>收件人：</strong>' + escapeHtml(order.shipping.name) + '</p>' +
          '<p><strong>地址：</strong>' + escapeHtml(order.shipping.address) + '</p>' +
          '<p><strong>電話：</strong>' + escapeHtml(order.shipping.phone) + '</p>' +
        '</div>' +
      '</div>' +

      '<div class="detail-section">' +
        '<h4>訂單商品</h4>' +
        '<table class="admin-table">' +
          '<thead><tr><th>商品名稱</th><th>單價</th><th>數量</th><th>小計</th></tr></thead>' +
          '<tbody>' +
            order.items.map(function (item) {
              return '<tr>' +
                '<td>' + escapeHtml(item.name) + '</td>' +
                '<td>' + formatCurrency(item.price) + '</td>' +
                '<td>' + item.qty + '</td>' +
                '<td>' + formatCurrency(item.price * item.qty) + '</td>' +
              '</tr>';
            }).join('') +
          '</tbody>' +
          '<tfoot><tr><td colspan="3" class="text-right"><strong>訂單總計</strong></td><td><strong>' + formatCurrency(order.total) + '</strong></td></tr></tfoot>' +
        '</table>' +
      '</div>' +
    '</div>';

    openModal('訂單詳情', html);

    // Status update button
    var updateBtn = $('.update-status-btn');
    if (updateBtn) {
      updateBtn.addEventListener('click', function () {
        var select = $('.status-select[data-order="' + order.id + '"]');
        if (select) {
          updateOrderStatus(order.id, select.value);
        }
      });
    }
  }

  function updateOrderStatus(orderId, newStatus) {
    var order = orders.find(function (o) { return o.id === orderId; });
    if (!order) return;
    var oldStatus = order.status;
    order.status = newStatus;
    showNotification('訂單 #' + orderId + ' 狀態已從「' + statusLabel(oldStatus) + '」更新為「' + statusLabel(newStatus) + '」', 'success');
    closeModal();
    if (state.currentPage === 'orders') renderOrders();
    if (state.currentPage === 'dashboard') renderDashboard();
  }

  /* ----------------------------------------------------------
     9. PRODUCTS
     ---------------------------------------------------------- */

  function getFilteredProducts() {
    var filtered = products.slice();
    if (state.productSearch) {
      var q = state.productSearch.toLowerCase();
      filtered = filtered.filter(function (p) {
        return p.name.toLowerCase().indexOf(q) !== -1 ||
               p.sku.toLowerCase().indexOf(q) !== -1 ||
               p.category.toLowerCase().indexOf(q) !== -1;
      });
    }
    return filtered;
  }

  function renderProducts() {
    var container = $('#products-content');
    if (!container) return;

    var filtered = getFilteredProducts();
    var paged = paginate(filtered, state.productPage, state.perPage);

    var html = '<div class="table-toolbar">' +
      '<div class="toolbar-left">' +
        '<button class="btn btn-primary" id="add-product-btn">&#43; 新增商品</button>' +
        '<div class="bulk-actions">' +
          '<select id="product-bulk-action"><option value="">批次操作</option>' +
            '<option value="delete">刪除所選</option>' +
            '<option value="unpublish">下架所選</option>' +
          '</select>' +
          '<button class="btn btn-sm" id="apply-product-bulk">套用</button>' +
        '</div>' +
      '</div>' +
      '<div class="toolbar-right">' +
        '<input type="text" class="search-input" id="product-search" placeholder="搜尋商品..." value="' + escapeHtml(state.productSearch) + '">' +
      '</div>' +
    '</div>';

    html += '<table class="admin-table products-table">' +
      '<thead><tr>' +
        '<th><input type="checkbox" id="select-all-products"></th>' +
        '<th>圖片</th><th>商品名稱</th><th>SKU</th><th>分類</th><th>價格</th><th>庫存</th><th>狀態</th><th>操作</th>' +
      '</tr></thead><tbody>';

    if (paged.data.length === 0) {
      html += '<tr><td colspan="9" class="empty-state">沒有找到符合條件的商品</td></tr>';
    } else {
      paged.data.forEach(function (p) {
        var checked = state.selectedProducts.indexOf(p.id) !== -1 ? 'checked' : '';
        var priceHtml = p.salePrice
          ? '<del>' + formatCurrency(p.price) + '</del> ' + formatCurrency(p.salePrice)
          : formatCurrency(p.price);
        var stockClass = p.stock === 0 ? 'stock-out' : p.stock <= 10 ? 'stock-low' : 'stock-ok';
        html += '<tr>' +
          '<td><input type="checkbox" class="product-checkbox" value="' + p.id + '" ' + checked + '></td>' +
          '<td><div class="product-thumb" style="background:#f0f0f0;width:50px;height:50px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:20px;">&#127801;</div></td>' +
          '<td><strong>' + escapeHtml(p.name) + '</strong>' + (p.featured ? ' <span class="badge-star" title="精選商品">&#9733;</span>' : '') + '</td>' +
          '<td><code>' + escapeHtml(p.sku) + '</code></td>' +
          '<td>' + escapeHtml(p.category) + '</td>' +
          '<td>' + priceHtml + '</td>' +
          '<td><span class="stock-badge ' + stockClass + '">' + (p.stock === 0 ? '缺貨' : p.stock) + '</span></td>' +
          '<td><span class="badge ' + (p.status === '已上架' ? 'status-completed' : 'status-cancelled') + '">' + p.status + '</span></td>' +
          '<td class="actions-cell">' +
            '<button class="btn btn-icon btn-edit" data-product="' + p.id + '" title="編輯">&#9998;</button>' +
            '<button class="btn btn-icon btn-delete" data-product="' + p.id + '" title="刪除">&#128465;</button>' +
          '</td>' +
        '</tr>';
      });
    }

    html += '</tbody></table>';
    html += renderPagination(paged.totalPages, state.productPage, 'product');

    container.innerHTML = html;
    bindProductEvents();
  }

  function bindProductEvents() {
    // Search
    var searchInput = $('#product-search');
    if (searchInput) {
      var debounce;
      searchInput.addEventListener('input', function () {
        var val = this.value;
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          state.productSearch = val;
          state.productPage = 1;
          renderProducts();
        }, 300);
      });
    }

    // Add product
    var addBtn = $('#add-product-btn');
    if (addBtn) {
      addBtn.addEventListener('click', function () {
        state.editingProduct = null;
        showProductForm();
      });
    }

    // Edit product
    $$('.btn-edit[data-product]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = Number(this.dataset.product);
        state.editingProduct = products.find(function (p) { return p.id === id; });
        showProductForm();
      });
    });

    // Delete product
    $$('.btn-delete[data-product]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = Number(this.dataset.product);
        deleteProduct(id);
      });
    });

    // Select all
    var selectAll = $('#select-all-products');
    if (selectAll) {
      selectAll.addEventListener('change', function () {
        var checked = this.checked;
        var filtered = getFilteredProducts();
        var paged = paginate(filtered, state.productPage, state.perPage);
        if (checked) {
          paged.data.forEach(function (p) {
            if (state.selectedProducts.indexOf(p.id) === -1) state.selectedProducts.push(p.id);
          });
        } else {
          var pageIds = paged.data.map(function (p) { return p.id; });
          state.selectedProducts = state.selectedProducts.filter(function (id) { return pageIds.indexOf(id) === -1; });
        }
        $$('.product-checkbox').forEach(function (cb) { cb.checked = checked; });
      });
    }

    // Individual checkboxes
    $$('.product-checkbox').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var id = Number(this.value);
        if (this.checked) {
          if (state.selectedProducts.indexOf(id) === -1) state.selectedProducts.push(id);
        } else {
          state.selectedProducts = state.selectedProducts.filter(function (x) { return x !== id; });
        }
      });
    });

    // Bulk action
    var applyBulk = $('#apply-product-bulk');
    if (applyBulk) {
      applyBulk.addEventListener('click', function () {
        var action = $('#product-bulk-action').value;
        if (!action) { showNotification('請選擇批次操作', 'warning'); return; }
        if (state.selectedProducts.length === 0) { showNotification('請先選擇商品', 'warning'); return; }
        if (action === 'delete') {
          var count = state.selectedProducts.length;
          state.selectedProducts.forEach(function (id) {
            var idx = products.findIndex(function (p) { return p.id === id; });
            if (idx !== -1) products.splice(idx, 1);
          });
          showNotification('已刪除 ' + count + ' 件商品', 'success');
        } else if (action === 'unpublish') {
          state.selectedProducts.forEach(function (id) {
            var product = products.find(function (p) { return p.id === id; });
            if (product) product.status = '已下架';
          });
          showNotification('已下架 ' + state.selectedProducts.length + ' 件商品', 'success');
        }
        state.selectedProducts = [];
        renderProducts();
      });
    }
  }

  function deleteProduct(id) {
    var product = products.find(function (p) { return p.id === id; });
    if (!product) return;

    var html = '<div class="confirm-dialog">' +
      '<p>確定要刪除商品「' + escapeHtml(product.name) + '」嗎？</p>' +
      '<p class="text-muted">此操作無法復原。</p>' +
      '<div class="confirm-actions">' +
        '<button class="btn btn-secondary" id="cancel-delete">取消</button>' +
        '<button class="btn btn-danger" id="confirm-delete" data-id="' + id + '">確定刪除</button>' +
      '</div>' +
    '</div>';

    openModal('確認刪除', html);

    $('#cancel-delete').addEventListener('click', closeModal);
    $('#confirm-delete').addEventListener('click', function () {
      var idx = products.findIndex(function (p) { return p.id === id; });
      if (idx !== -1) products.splice(idx, 1);
      showNotification('商品「' + product.name + '」已刪除', 'success');
      closeModal();
      renderProducts();
    });
  }

  /* ----------------------------------------------------------
     10. PRODUCT FORM (ADD / EDIT)
     ---------------------------------------------------------- */

  function showProductForm() {
    var p = state.editingProduct;
    var isEdit = !!p;
    var title = isEdit ? '編輯商品' : '新增商品';

    var categories = ['經典花盒', '花束系列', '玻璃罩系列', '花籃系列', '居家擺飾', '婚禮系列', '節慶限定'];

    var html = '<form id="product-form" class="admin-form">' +
      '<div class="form-grid">' +
        '<div class="form-main">' +
          '<div class="form-group">' +
            '<label>商品名稱 <span class="required">*</span></label>' +
            '<input type="text" id="pf-name" value="' + (isEdit ? escapeHtml(p.name) : '') + '" required>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group">' +
              '<label>SKU</label>' +
              '<input type="text" id="pf-sku" value="' + (isEdit ? escapeHtml(p.sku) : '') + '">' +
            '</div>' +
            '<div class="form-group">' +
              '<label>分類</label>' +
              '<select id="pf-category">' +
                categories.map(function (c) {
                  return '<option value="' + c + '"' + (isEdit && p.category === c ? ' selected' : '') + '>' + c + '</option>';
                }).join('') +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group">' +
              '<label>原價 (NT$) <span class="required">*</span></label>' +
              '<input type="number" id="pf-price" value="' + (isEdit ? p.price : '') + '" min="0" required>' +
            '</div>' +
            '<div class="form-group">' +
              '<label>特價 (NT$)</label>' +
              '<input type="number" id="pf-sale-price" value="' + (isEdit && p.salePrice ? p.salePrice : '') + '" min="0">' +
            '</div>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group">' +
              '<label>庫存數量</label>' +
              '<input type="number" id="pf-stock" value="' + (isEdit ? p.stock : '0') + '" min="0">' +
            '</div>' +
            '<div class="form-group">' +
              '<label>狀態</label>' +
              '<select id="pf-status">' +
                '<option value="已上架"' + (isEdit && p.status === '已上架' ? ' selected' : '') + '>已上架</option>' +
                '<option value="已下架"' + (isEdit && p.status === '已下架' ? ' selected' : '') + '>已下架</option>' +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label>商品描述</label>' +
            '<textarea id="pf-description" rows="4">' + (isEdit ? escapeHtml(p.description) : '') + '</textarea>' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="checkbox-label"><input type="checkbox" id="pf-featured"' + (isEdit && p.featured ? ' checked' : '') + '> 設為精選商品</label>' +
          '</div>' +
        '</div>' +

        '<div class="form-sidebar">' +
          '<div class="form-group">' +
            '<label>商品圖片</label>' +
            '<div class="image-upload-area" id="image-upload-area">' +
              '<div class="upload-placeholder">' +
                '<span class="upload-icon">&#128247;</span>' +
                '<p>拖曳圖片至此或</p>' +
                '<button type="button" class="btn btn-sm btn-secondary" id="upload-btn">選擇檔案</button>' +
                '<input type="file" id="pf-image" accept="image/*" style="display:none">' +
              '</div>' +
              (isEdit ? '<div class="upload-preview"><div class="preview-thumb" style="background:#f0f0f0;width:100%;height:150px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:48px;">&#127801;</div><p class="preview-name">' + escapeHtml(p.image) + '</p></div>' : '') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="form-actions">' +
        '<button type="button" class="btn btn-secondary" id="cancel-product-form">取消</button>' +
        '<button type="submit" class="btn btn-primary">' + (isEdit ? '更新商品' : '新增商品') + '</button>' +
      '</div>' +
    '</form>';

    openModal(title, html, 'modal-lg');

    // Form events
    $('#cancel-product-form').addEventListener('click', closeModal);

    // Image upload area interactions
    var uploadArea = $('#image-upload-area');
    var uploadBtn = $('#upload-btn');
    var fileInput = $('#pf-image');

    if (uploadBtn && fileInput) {
      uploadBtn.addEventListener('click', function () { fileInput.click(); });
    }

    if (uploadArea) {
      uploadArea.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('drag-over');
      });
      uploadArea.addEventListener('dragleave', function () {
        this.classList.remove('drag-over');
      });
      uploadArea.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        handleImageUpload(e.dataTransfer.files);
      });
    }

    if (fileInput) {
      fileInput.addEventListener('change', function () {
        handleImageUpload(this.files);
      });
    }

    // Form submit
    $('#product-form').addEventListener('submit', function (e) {
      e.preventDefault();
      saveProduct();
    });
  }

  function handleImageUpload(files) {
    if (!files || !files.length) return;
    var file = files[0];
    if (!file.type.startsWith('image/')) {
      showNotification('請上傳圖片檔案', 'error');
      return;
    }
    var area = $('#image-upload-area');
    if (area) {
      area.innerHTML = '<div class="upload-preview">' +
        '<div class="preview-thumb" style="background:#f0f0f0;width:100%;height:150px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:48px;">&#127801;</div>' +
        '<p class="preview-name">' + escapeHtml(file.name) + '</p>' +
        '<button type="button" class="btn btn-sm btn-secondary" id="remove-image">移除圖片</button>' +
      '</div>';
      $('#remove-image').addEventListener('click', function () {
        area.innerHTML = '<div class="upload-placeholder">' +
          '<span class="upload-icon">&#128247;</span>' +
          '<p>拖曳圖片至此或</p>' +
          '<button type="button" class="btn btn-sm btn-secondary" id="upload-btn">選擇檔案</button>' +
          '<input type="file" id="pf-image" accept="image/*" style="display:none">' +
        '</div>';
      });
    }
    showNotification('圖片「' + file.name + '」已選擇（示範模式）', 'info');
  }

  function saveProduct() {
    var name = $('#pf-name').value.trim();
    var price = Number($('#pf-price').value);

    if (!name) { showNotification('請輸入商品名稱', 'error'); return; }
    if (!price || price <= 0) { showNotification('請輸入有效價格', 'error'); return; }

    var data = {
      name: name,
      sku: $('#pf-sku').value.trim(),
      category: $('#pf-category').value,
      price: price,
      salePrice: Number($('#pf-sale-price').value) || null,
      stock: Number($('#pf-stock').value) || 0,
      status: $('#pf-status').value,
      description: $('#pf-description').value.trim(),
      featured: $('#pf-featured').checked,
      image: 'images/placeholder.jpg'
    };

    if (state.editingProduct) {
      // Update existing
      Object.assign(state.editingProduct, data);
      showNotification('商品「' + name + '」已更新', 'success');
    } else {
      // Add new
      var maxId = Math.max.apply(null, products.map(function (p) { return p.id; }));
      data.id = maxId + 1;
      data.created = new Date().toISOString().slice(0, 10);
      products.push(data);
      showNotification('商品「' + name + '」已新增', 'success');
    }

    closeModal();
    renderProducts();
  }

  /* ----------------------------------------------------------
     11. CUSTOMERS
     ---------------------------------------------------------- */

  function getFilteredCustomers() {
    var filtered = customers.slice();
    if (state.customerSearch) {
      var q = state.customerSearch.toLowerCase();
      filtered = filtered.filter(function (c) {
        return c.name.toLowerCase().indexOf(q) !== -1 ||
               c.email.toLowerCase().indexOf(q) !== -1 ||
               c.phone.indexOf(q) !== -1;
      });
    }
    return filtered;
  }

  function renderCustomers() {
    var container = $('#customers-content');
    if (!container) return;

    var filtered = getFilteredCustomers();
    var paged = paginate(filtered, state.customerPage, state.perPage);

    var html = '<div class="table-toolbar">' +
      '<div class="toolbar-left">' +
        '<span class="table-info">共 ' + filtered.length + ' 位會員</span>' +
      '</div>' +
      '<div class="toolbar-right">' +
        '<input type="text" class="search-input" id="customer-search" placeholder="搜尋會員..." value="' + escapeHtml(state.customerSearch) + '">' +
      '</div>' +
    '</div>';

    html += '<table class="admin-table customers-table">' +
      '<thead><tr>' +
        '<th>會員編號</th><th>姓名</th><th>Email</th><th>電話</th><th>訂單數</th><th>消費總額</th><th>加入日期</th><th>狀態</th>' +
      '</tr></thead><tbody>';

    if (paged.data.length === 0) {
      html += '<tr><td colspan="8" class="empty-state">沒有找到符合條件的會員</td></tr>';
    } else {
      paged.data.forEach(function (c) {
        var statusBadge = c.status === 'VIP' ? 'status-vip' : c.status === '活躍' ? 'status-completed' : 'status-pending';
        html += '<tr>' +
          '<td>' + escapeHtml(c.id) + '</td>' +
          '<td><strong>' + escapeHtml(c.name) + '</strong></td>' +
          '<td>' + escapeHtml(c.email) + '</td>' +
          '<td>' + escapeHtml(c.phone) + '</td>' +
          '<td class="text-center">' + c.ordersCount + '</td>' +
          '<td class="text-right">' + formatCurrency(c.totalSpent) + '</td>' +
          '<td>' + formatDate(c.joinDate) + '</td>' +
          '<td><span class="badge ' + statusBadge + '">' + c.status + '</span></td>' +
        '</tr>';
      });
    }

    html += '</tbody></table>';
    html += renderPagination(paged.totalPages, state.customerPage, 'customer');

    container.innerHTML = html;

    // Search
    var searchInput = $('#customer-search');
    if (searchInput) {
      var debounce;
      searchInput.addEventListener('input', function () {
        var val = this.value;
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          state.customerSearch = val;
          state.customerPage = 1;
          renderCustomers();
        }, 300);
      });
    }
  }

  /* ----------------------------------------------------------
     12. PAGINATION
     ---------------------------------------------------------- */

  function renderPagination(totalPages, currentPage, type) {
    if (totalPages <= 1) return '';

    var pages = [];
    for (var i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    var html = '<div class="pagination" data-type="' + type + '">';
    html += '<button class="page-btn page-prev" ' + (currentPage === 1 ? 'disabled' : '') + ' data-page="' + (currentPage - 1) + '">&#8249; 上一頁</button>';

    pages.forEach(function (p) {
      if (p === '...') {
        html += '<span class="page-dots">...</span>';
      } else {
        html += '<button class="page-btn ' + (p === currentPage ? 'active' : '') + '" data-page="' + p + '">' + p + '</button>';
      }
    });

    html += '<button class="page-btn page-next" ' + (currentPage === totalPages ? 'disabled' : '') + ' data-page="' + (currentPage + 1) + '">下一頁 &#8250;</button>';
    html += '</div>';

    // We need to bind after render, so use a micro-delay
    setTimeout(function () {
      $$('.pagination[data-type="' + type + '"] .page-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (this.disabled) return;
          var page = Number(this.dataset.page);
          if (type === 'order') { state.orderPage = page; renderOrders(); }
          else if (type === 'product') { state.productPage = page; renderProducts(); }
          else if (type === 'customer') { state.customerPage = page; renderCustomers(); }
        });
      });
    }, 0);

    return html;
  }

  /* ----------------------------------------------------------
     13. MODAL
     ---------------------------------------------------------- */

  function openModal(title, content, extraClass) {
    // Remove existing modal
    closeModal();

    var modal = document.createElement('div');
    modal.className = 'admin-modal-overlay';
    modal.innerHTML = '<div class="admin-modal ' + (extraClass || '') + '">' +
      '<div class="modal-header">' +
        '<h3 class="modal-title">' + title + '</h3>' +
        '<button class="modal-close">&times;</button>' +
      '</div>' +
      '<div class="modal-body">' + content + '</div>' +
    '</div>';

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Animate in
    requestAnimationFrame(function () { modal.classList.add('active'); });

    // Close events
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    // ESC key
    document.addEventListener('keydown', modalEscHandler);
  }

  function closeModal() {
    var modal = $('.admin-modal-overlay');
    if (!modal) return;
    document.removeEventListener('keydown', modalEscHandler);
    modal.classList.remove('active');
    setTimeout(function () {
      if (modal.parentNode) modal.parentNode.removeChild(modal);
      document.body.style.overflow = '';
    }, 300);
  }

  function modalEscHandler(e) {
    if (e.key === 'Escape') closeModal();
  }

  /* ----------------------------------------------------------
     14. SETTINGS
     ---------------------------------------------------------- */

  function initSettingsTabs() {
    $$('.settings-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = this.dataset.tab;
        $$('.settings-tab').forEach(function (t) { t.classList.remove('active'); });
        $$('.settings-panel').forEach(function (p) { p.style.display = 'none'; });
        this.classList.add('active');
        var panel = $('#settings-' + target);
        if (panel) panel.style.display = '';
      });
    });

    // Settings form save buttons
    $$('.settings-save-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        showNotification('設定已儲存', 'success');
      });
    });
  }

  /* ----------------------------------------------------------
     15. INJECT STYLES (notifications + modal animations)
     ---------------------------------------------------------- */

  function injectAdminStyles() {
    if ($('#admin-injected-styles')) return;
    var style = document.createElement('style');
    style.id = 'admin-injected-styles';
    style.textContent = '' +
      /* Notification slide animations */
      '@keyframes slideInRight{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}' +
      '@keyframes slideOutRight{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}' +

      /* Modal overlay */
      '.admin-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:9000;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s ease;padding:20px;}' +
      '.admin-modal-overlay.active{opacity:1}' +
      '.admin-modal{background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);max-width:700px;width:100%;max-height:90vh;overflow-y:auto;transform:translateY(20px);transition:transform .3s ease;}' +
      '.admin-modal-overlay.active .admin-modal{transform:translateY(0)}' +
      '.modal-lg{max-width:900px}' +
      '.modal-header{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid #e5e5e5;}' +
      '.modal-title{margin:0;font-size:18px;}' +
      '.modal-close{background:none;border:none;font-size:28px;cursor:pointer;color:#999;padding:0 4px;line-height:1;}' +
      '.modal-close:hover{color:#333}' +
      '.modal-body{padding:24px;}' +

      /* Confirm dialog */
      '.confirm-dialog{text-align:center;padding:20px 0;}' +
      '.confirm-dialog p{margin:0 0 12px}' +
      '.confirm-actions{display:flex;gap:12px;justify-content:center;margin-top:24px;}' +

      /* Chart bars */
      '.chart-bars{display:flex;align-items:flex-end;gap:12px;height:220px;padding:20px 0;}' +
      '.chart-bar-group{flex:1;display:flex;flex-direction:column;align-items:center;}' +
      '.chart-bar-wrapper{height:180px;width:100%;display:flex;align-items:flex-end;justify-content:center;}' +
      '.chart-bar{background:linear-gradient(180deg,#d4a574,#c8956e);border-radius:6px 6px 0 0;min-width:36px;width:80%;position:relative;transition:height .6s ease;cursor:pointer;}' +
      '.chart-bar:hover{background:linear-gradient(180deg,#c8956e,#b8845e);transform:scaleX(1.05);}' +
      '.chart-bar-label{position:absolute;top:-24px;left:50%;transform:translateX(-50%);font-size:11px;white-space:nowrap;color:#666;display:none;}' +
      '.chart-bar:hover .chart-bar-label{display:block}' +
      '.chart-month{margin-top:8px;font-size:12px;color:#888;}' +
      '.chart-title{margin:0 0 8px;font-size:16px;color:#333;}' +

      /* Status badges */
      '.badge{display:inline-block;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;white-space:nowrap;}' +
      '.status-pending{background:#fff3cd;color:#856404;}' +
      '.status-processing{background:#cce5ff;color:#004085;}' +
      '.status-shipped{background:#d4edda;color:#155724;}' +
      '.status-completed{background:#d1ecf1;color:#0c5460;}' +
      '.status-cancelled{background:#f8d7da;color:#721c24;}' +
      '.status-vip{background:#f3e5f5;color:#6a1b9a;}' +

      /* Stock badges */
      '.stock-badge{display:inline-block;padding:2px 10px;border-radius:12px;font-size:12px;font-weight:600;}' +
      '.stock-ok{background:#d4edda;color:#155724;}' +
      '.stock-low{background:#fff3cd;color:#856404;}' +
      '.stock-out{background:#f8d7da;color:#721c24;}' +

      /* Table */
      '.admin-table{width:100%;border-collapse:collapse;font-size:14px;}' +
      '.admin-table th,.admin-table td{padding:12px 14px;text-align:left;border-bottom:1px solid #eee;}' +
      '.admin-table th{background:#f8f9fa;font-weight:600;color:#555;font-size:13px;white-space:nowrap;}' +
      '.admin-table tbody tr:hover{background:#fafafa;}' +
      '.admin-table tfoot td{border-top:2px solid #ddd;background:#f8f9fa;}' +
      '.text-right{text-align:right;}' +
      '.text-center{text-align:center;}' +
      '.text-muted{color:#999;}' +
      '.empty-state{text-align:center;padding:40px!important;color:#999;}' +
      '.clickable-row{cursor:pointer;}' +
      '.clickable{cursor:pointer;color:#d4a574;}' +
      '.clickable:hover{text-decoration:underline;}' +
      '.customer-cell small{color:#999;}' +

      /* Buttons */
      '.btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:14px;transition:all .2s ease;font-family:inherit;}' +
      '.btn:hover{background:#f5f5f5}' +
      '.btn-primary{background:#d4a574;color:#fff;border-color:#d4a574;}' +
      '.btn-primary:hover{background:#c8956e;}' +
      '.btn-secondary{background:#6c757d;color:#fff;border-color:#6c757d;}' +
      '.btn-secondary:hover{background:#5a6268;}' +
      '.btn-danger{background:#dc3545;color:#fff;border-color:#dc3545;}' +
      '.btn-danger:hover{background:#c82333;}' +
      '.btn-sm{padding:5px 12px;font-size:12px;}' +
      '.btn-icon{padding:6px 8px;font-size:16px;border:none;background:transparent;}' +
      '.btn-icon:hover{background:#f0f0f0;border-radius:6px;}' +
      '.badge-star{color:#f5a623;font-size:16px;}' +

      /* Toolbar */
      '.table-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;}' +
      '.toolbar-left,.toolbar-right{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}' +
      '.table-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}' +
      '.search-input{padding:8px 14px;border:1px solid #ddd;border-radius:6px;font-size:14px;min-width:200px;font-family:inherit;}' +
      '.search-input:focus{outline:none;border-color:#d4a574;box-shadow:0 0 0 3px rgba(212,165,116,.15);}' +
      '.table-info{color:#888;font-size:14px;}' +

      /* Status filters */
      '.status-filters{display:flex;gap:4px;flex-wrap:wrap;}' +
      '.filter-btn{padding:6px 14px;border:1px solid #ddd;border-radius:20px;background:#fff;cursor:pointer;font-size:13px;transition:all .2s;font-family:inherit;}' +
      '.filter-btn:hover{border-color:#d4a574;color:#d4a574;}' +
      '.filter-btn.active{background:#d4a574;color:#fff;border-color:#d4a574;}' +

      /* Bulk actions */
      '.bulk-actions{display:flex;align-items:center;gap:6px;}' +
      '.bulk-actions select{padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-size:13px;font-family:inherit;}' +

      /* Pagination */
      '.pagination{display:flex;align-items:center;justify-content:center;gap:4px;margin-top:20px;padding:10px 0;}' +
      '.page-btn{padding:8px 14px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:13px;transition:all .2s;font-family:inherit;}' +
      '.page-btn:hover:not(:disabled){border-color:#d4a574;color:#d4a574;}' +
      '.page-btn.active{background:#d4a574;color:#fff;border-color:#d4a574;}' +
      '.page-btn:disabled{opacity:.4;cursor:not-allowed;}' +
      '.page-dots{padding:8px 6px;color:#999;}' +

      /* Form */
      '.admin-form .form-grid{display:grid;grid-template-columns:1fr 280px;gap:24px;}' +
      '.admin-form .form-group{margin-bottom:16px;}' +
      '.admin-form label{display:block;margin-bottom:6px;font-weight:600;font-size:13px;color:#555;}' +
      '.admin-form input[type="text"],.admin-form input[type="number"],.admin-form select,.admin-form textarea{width:100%;padding:10px 14px;border:1px solid #ddd;border-radius:6px;font-size:14px;font-family:inherit;box-sizing:border-box;}' +
      '.admin-form input:focus,.admin-form select:focus,.admin-form textarea:focus{outline:none;border-color:#d4a574;box-shadow:0 0 0 3px rgba(212,165,116,.15);}' +
      '.admin-form .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}' +
      '.required{color:#dc3545;}' +
      '.checkbox-label{display:flex!important;align-items:center;gap:8px;font-weight:400!important;cursor:pointer;}' +
      '.form-actions{display:flex;gap:12px;justify-content:flex-end;margin-top:24px;padding-top:20px;border-top:1px solid #eee;}' +

      /* Image upload */
      '.image-upload-area{border:2px dashed #ddd;border-radius:8px;padding:24px;text-align:center;transition:all .2s;}' +
      '.image-upload-area.drag-over{border-color:#d4a574;background:rgba(212,165,116,.05);}' +
      '.upload-placeholder{color:#999;}' +
      '.upload-icon{font-size:36px;display:block;margin-bottom:8px;}' +
      '.upload-preview{margin-top:12px;}' +
      '.preview-name{font-size:12px;color:#888;margin:8px 0;}' +

      /* Order detail */
      '.order-detail .detail-header{display:flex;align-items:center;gap:16px;margin-bottom:24px;}' +
      '.order-detail .detail-header h2{margin:0;}' +
      '.detail-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-bottom:24px;}' +
      '.detail-section{margin-bottom:20px;}' +
      '.detail-section h4{margin:0 0 12px;color:#333;padding-bottom:8px;border-bottom:1px solid #eee;}' +
      '.detail-section p{margin:6px 0;font-size:14px;color:#555;}' +
      '.status-update{display:flex;align-items:center;gap:8px;margin-top:16px;flex-wrap:wrap;}' +
      '.status-update label{margin:0;font-size:14px;}' +
      '.status-select{padding:6px 10px;border:1px solid #ddd;border-radius:6px;font-family:inherit;}' +

      /* Activity feed */
      '.activity-list{list-style:none;padding:0;margin:0;}' +
      '.activity-item{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;}' +
      '.activity-icon{font-size:18px;width:28px;text-align:center;}' +
      '.activity-text{flex:1;color:#555;}' +
      '.activity-time{font-size:12px;color:#999;white-space:nowrap;}' +

      /* Top products */
      '.top-products-list{list-style:none;padding:0;margin:0;}' +
      '.top-product-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;}' +
      '.top-product-name{flex:1;font-weight:500;}' +
      '.top-product-price{color:#d4a574;font-weight:600;}' +
      '.top-product-stock{font-size:12px;color:#888;}' +

      /* Settings tabs */
      '.settings-tabs{display:flex;gap:0;border-bottom:2px solid #eee;margin-bottom:24px;}' +
      '.settings-tab{padding:12px 20px;border:none;background:none;cursor:pointer;font-size:14px;font-weight:500;color:#888;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .2s;font-family:inherit;}' +
      '.settings-tab:hover{color:#555;}' +
      '.settings-tab.active{color:#d4a574;border-bottom-color:#d4a574;}' +

      /* Stat cards */
      '.stat-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06);display:flex;align-items:center;gap:16px;}' +
      '.stat-icon{font-size:32px;width:56px;height:56px;background:#fdf6ef;border-radius:12px;display:flex;align-items:center;justify-content:center;}' +
      '.stat-label{font-size:13px;color:#888;margin-bottom:4px;}' +
      '.stat-value{font-size:22px;font-weight:700;color:#333;}' +
      '.stat-change{font-size:12px;margin-top:4px;}' +
      '.stat-up{color:#27ae60;}' +
      '.stat-down{color:#e74c3c;}' +

      /* Responsive */
      '@media(max-width:768px){' +
        '.admin-form .form-grid{grid-template-columns:1fr;}' +
        '.admin-form .form-row{grid-template-columns:1fr;}' +
        '.detail-grid{grid-template-columns:1fr;}' +
        '.admin-table{font-size:12px;}' +
        '.admin-table th,.admin-table td{padding:8px 6px;}' +
        '.table-toolbar{flex-direction:column;align-items:stretch;}' +
        '.status-filters{overflow-x:auto;flex-wrap:nowrap;padding-bottom:4px;}' +
        '.admin-modal{margin:10px;max-height:95vh;}' +
        '.actions-cell{white-space:nowrap;}' +
      '}' +
    '';
    document.head.appendChild(style);
  }

  /* ----------------------------------------------------------
     16. INIT
     ---------------------------------------------------------- */

  /* --- 前後台資料同步 (localStorage) --- */
  function syncToLocalStorage() {
    try {
      localStorage.setItem('admin_orders', JSON.stringify(orders));
      localStorage.setItem('admin_products', JSON.stringify(products));
      localStorage.setItem('admin_customers', JSON.stringify(customers));
      localStorage.setItem('admin_sync_time', new Date().toISOString());
    } catch (e) { /* ignore */ }
  }

  // 攔截訂單狀態更新，同步至 localStorage
  var _origUpdateOrderStatus = updateOrderStatus;
  updateOrderStatus = function (orderId, newStatus) {
    _origUpdateOrderStatus(orderId, newStatus);
    syncToLocalStorage();
  };

  // 每次渲染後同步
  var _origRenderOrders = renderOrders;
  renderOrders = function () { _origRenderOrders(); syncToLocalStorage(); };
  var _origRenderProducts = renderProducts;
  renderProducts = function () { _origRenderProducts(); syncToLocalStorage(); };

  function init() {
    injectAdminStyles();
    initSidebar();

    // 初始同步
    syncToLocalStorage();

    // Start on dashboard
    navigateTo('dashboard');

    // Window resize handler
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        toggleSidebar(true);
      }
    });

    // Welcome notification
    setTimeout(function () {
      showNotification('歡迎回來，管理員！', 'info');
    }, 500);
  }

  // Expose for external use if needed
  window.FlowerAdmin = {
    init: init,
    navigateTo: navigateTo,
    showNotification: showNotification,
    openModal: openModal,
    closeModal: closeModal,
    state: state,
    data: { products: products, orders: orders, customers: customers, dashboardStats: dashboardStats }
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
