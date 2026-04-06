/* ============================================================
   永生花電商網站 - 主要 JavaScript
   ============================================================ */

'use strict';

/* ------------------------------------------------------------
   1. 商品資料 (Mock Data)
   ------------------------------------------------------------ */
const PRODUCTS = [
  {
    id: 1,
    name: '永恆之愛 經典玫瑰花束',
    category: '經典花束',
    price: 2680,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop',
    badge: '熱銷',
    description: '嚴選厄瓜多爾進口永生玫瑰，搭配滿天星與尤加利葉，象徵永不凋零的愛情。適合情人節、紀念日等重要時刻。',
    sku: 'CLS-ROSE-001',
    variants: ['紅色', '粉色', '香檳色'],
    tags: ['情人節', '紀念日', '告白'],
  },
  {
    id: 2,
    name: '夢幻星河 紫色繡球花盒',
    category: '花盒花禮',
    price: 3480,
    originalPrice: 4200,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=600&fit=crop',
    badge: '新品',
    description: '夢幻紫色繡球搭配永生玫瑰，置於精緻圓形花盒中，優雅大方。附贈精美提袋，送禮首選。',
    sku: 'BOX-HYD-002',
    variants: ['紫色', '藍色', '白色'],
    tags: ['生日', '送禮', '母親節'],
  },
  {
    id: 3,
    name: '純白誓約 婚禮胸花組',
    category: '婚禮系列',
    price: 1280,
    originalPrice: 1580,
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&h=600&fit=crop',
    badge: '',
    description: '新郎新娘胸花套組，使用永生花材製作，婚禮全天保持完美狀態。含新郎胸花一枚、新娘胸花一枚。',
    sku: 'WED-COR-003',
    variants: ['純白', '象牙白', '粉白'],
    tags: ['婚禮', '新娘'],
  },
  {
    id: 4,
    name: '金色年華 有錢花花束',
    category: '節日限定',
    price: 4280,
    originalPrice: 5000,
    image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&h=600&fit=crop',
    badge: '限定',
    description: '以金色系永生花搭配精選乾燥花材打造的豪華花束，象徵富貴吉祥。適合開幕誌慶、喬遷之喜等重要場合。',
    sku: 'FES-GLD-004',
    variants: ['經典金', '香檳金', '玫瑰金'],
    tags: ['開幕', '有錢花', '富貴'],
  },
  {
    id: 5,
    name: '靜謐時光 玻璃罩永生花',
    category: '居家擺飾',
    price: 1980,
    originalPrice: 2380,
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?w=600&h=600&fit=crop',
    badge: '熱銷',
    description: '小王子玫瑰靈感設計，單朵永生玫瑰置於精緻玻璃罩中，附LED燈串，夜晚散發柔和光芒。',
    sku: 'HOME-GLS-005',
    variants: ['紅玫瑰', '藍玫瑰', '彩虹玫瑰'],
    tags: ['居家', '禮物', '浪漫'],
  },
  {
    id: 6,
    name: '專屬訂製 姓名字母花框',
    category: '客製化',
    price: 3880,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=600&h=600&fit=crop',
    badge: '客製',
    description: '可指定英文字母或數字，以永生花材填滿立體框架。適合婚禮佈置、新居落成、生日派對等場合。',
    sku: 'CUS-LTR-006',
    variants: ['A-Z 字母', '0-9 數字', '符號 &/#'],
    tags: ['客製化', '婚禮佈置', '派對'],
  },
  {
    id: 7,
    name: '粉黛佳人 粉色花束',
    category: '經典花束',
    price: 2280,
    originalPrice: 2800,
    image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=600&fit=crop',
    badge: '',
    description: '柔美粉色系永生玫瑰與康乃馨，搭配兔尾草與棉花，甜美浪漫。附手寫卡片服務。',
    sku: 'CLS-PNK-007',
    variants: ['淺粉', '桃粉', '漸層粉'],
    tags: ['母親節', '閨蜜', '生日'],
  },
  {
    id: 8,
    name: '琉璃月光 藍色方形花盒',
    category: '花盒花禮',
    price: 4680,
    originalPrice: 5500,
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&h=600&fit=crop',
    badge: '人氣',
    description: '稀有藍色永生玫瑰九朵，排列於方形絨布禮盒中，附永生花保養說明卡。高級感滿滿的頂級花禮。',
    sku: 'BOX-BLU-008',
    variants: ['深藍', '天藍', '湖水藍'],
    tags: ['高級', '送禮', '男性友善'],
  },
  {
    id: 9,
    name: '幸福捧花 新娘永生花捧花',
    category: '婚禮系列',
    price: 5980,
    originalPrice: 7200,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop',
    badge: '熱銷',
    description: '圓形新娘捧花，使用頂級永生花材，婚禮後可永久保存。含專屬收納盒與保養組。可依婚禮色系客製。',
    sku: 'WED-BQT-009',
    variants: ['經典白粉', '復古酒紅', '森林綠'],
    tags: ['婚禮', '新娘捧花'],
  },
  {
    id: 10,
    name: '春暖花開 母親節限定花禮',
    category: '節日限定',
    price: 3280,
    originalPrice: 3980,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop',
    badge: '限定',
    description: '母親節限定款，康乃馨永生花搭配香皂花瓣，附贈按摩精油小樣。用不凋謝的花表達永恆的感謝。',
    sku: 'FES-MOM-010',
    variants: ['粉色系', '紅色系', '混色系'],
    tags: ['母親節', '感恩', '限定'],
  },
  {
    id: 11,
    name: '和風物語 日式永生花擺飾',
    category: '居家擺飾',
    price: 2480,
    originalPrice: 2980,
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=600&fit=crop',
    badge: '',
    description: '日式侘寂風格永生花擺飾，以苔球為基底，搭配永生花與乾燥花材。附天然木質底座。',
    sku: 'HOME-JPN-011',
    variants: ['白綠色系', '粉紫色系', '暖黃色系'],
    tags: ['居家', '日式', '擺飾'],
  },
  {
    id: 12,
    name: '獨一無二 照片客製花盒',
    category: '客製化',
    price: 4580,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&h=600&fit=crop',
    badge: '客製',
    description: '花盒內蓋可放入您提供的照片，掀開即是滿滿驚喜。下方鋪滿永生花材，適合作為告白、求婚道具。',
    sku: 'CUS-PHT-012',
    variants: ['圓形盒', '方形盒', '心形盒'],
    tags: ['客製化', '告白', '求婚'],
  },
];

/* 類別清單 */
const CATEGORIES = [
  '全部',
  '經典花束',
  '花盒花禮',
  '婚禮系列',
  '節日限定',
  '居家擺飾',
  '客製化',
];

/* Hero 輪播資料 */
const HERO_SLIDES = [
  {
    title: '永不凋零的美麗',
    subtitle: '精選永生花，為每個珍貴時刻留下永恆記憶',
    cta: '探索全系列',
    bgImage: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1600&h=900&fit=crop',
  },
  {
    title: '婚禮花藝訂製',
    subtitle: '打造專屬於您的完美婚禮，永生花捧花與佈置一站式服務',
    cta: '了解婚禮方案',
    bgImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&h=900&fit=crop',
  },
  {
    title: '母親節限定花禮',
    subtitle: '用不凋謝的花，傳遞永恆的感謝與愛',
    cta: '選購節日限定',
    bgImage: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1600&h=900&fit=crop',
  },
];

/* ============================================================
   2. 工具函式
   ============================================================ */

/** 格式化金額 */
function formatPrice(n) {
  return 'NT$' + n.toLocaleString('zh-TW');
}

/** 安全選擇元素 */
function qs(selector, parent) {
  return (parent || document).querySelector(selector);
}
function qsa(selector, parent) {
  return Array.from((parent || document).querySelectorAll(selector));
}

/** 建立元素 */
function createElement(tag, attrs, children) {
  const el = document.createElement(tag);
  if (attrs) {
    Object.entries(attrs).forEach(function ([key, val]) {
      if (key === 'className') el.className = val;
      else if (key === 'textContent') el.textContent = val;
      else if (key === 'innerHTML') el.innerHTML = val;
      else if (key.startsWith('data')) el.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), val);
      else el.setAttribute(key, val);
    });
  }
  if (children) {
    (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (typeof c === 'string') el.appendChild(document.createTextNode(c));
      else if (c) el.appendChild(c);
    });
  }
  return el;
}

/* ============================================================
   3. Toast 通知系統
   ============================================================ */
const Toast = (function () {
  let container = null;

  function getContainer() {
    if (!container) {
      container = createElement('div', { className: 'toast-container' });
      document.body.appendChild(container);
    }
    return container;
  }

  /**
   * @param {string} message
   * @param {'success'|'error'|'info'} type
   * @param {number} duration  ms
   */
  function show(message, type, duration) {
    type = type || 'success';
    duration = duration || 3000;

    var toast = createElement('div', { className: 'toast toast--' + type });
    var icons = { success: '\u2705', error: '\u274C', info: '\u2139\uFE0F' };
    toast.innerHTML =
      '<span class="toast__icon">' + (icons[type] || '') + '</span>' +
      '<span class="toast__msg">' + message + '</span>' +
      '<button class="toast__close" aria-label="關閉">&times;</button>';

    toast.querySelector('.toast__close').addEventListener('click', function () {
      dismiss(toast);
    });

    getContainer().appendChild(toast);

    // trigger reflow then animate in
    requestAnimationFrame(function () {
      toast.classList.add('toast--visible');
    });

    setTimeout(function () {
      dismiss(toast);
    }, duration);
  }

  function dismiss(toast) {
    toast.classList.remove('toast--visible');
    toast.classList.add('toast--out');
    toast.addEventListener('transitionend', function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    });
  }

  return { show: show };
})();

/* ============================================================
   4. 購物車系統
   ============================================================ */
const Cart = (function () {
  var STORAGE_KEY = 'flower_cart';
  var items = [];
  var drawerOpen = false;

  /* --- 持久化 --- */
  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      items = raw ? JSON.parse(raw) : [];
    } catch (_) {
      items = [];
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  /* --- CRUD --- */
  function findIndex(productId, variant) {
    return items.findIndex(function (item) {
      return item.productId === productId && item.variant === (variant || '');
    });
  }

  function add(productId, qty, variant) {
    qty = qty || 1;
    variant = variant || '';
    var idx = findIndex(productId, variant);
    if (idx > -1) {
      items[idx].qty += qty;
    } else {
      var product = PRODUCTS.find(function (p) { return p.id === productId; });
      if (!product) return;
      items.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        variant: variant,
        qty: qty,
      });
    }
    save();
    render();
    Toast.show('已加入購物車', 'success');
  }

  function remove(productId, variant) {
    var idx = findIndex(productId, variant);
    if (idx > -1) {
      items.splice(idx, 1);
      save();
      render();
      Toast.show('已從購物車移除', 'info');
    }
  }

  function updateQty(productId, variant, qty) {
    var idx = findIndex(productId, variant);
    if (idx > -1) {
      if (qty <= 0) {
        remove(productId, variant);
      } else {
        items[idx].qty = qty;
        save();
        render();
      }
    }
  }

  function clear() {
    items = [];
    save();
    render();
  }

  function getTotal() {
    return items.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
  }

  function getCount() {
    return items.reduce(function (sum, item) { return sum + item.qty; }, 0);
  }

  /* --- 購物車抽屜 --- */
  function openDrawer() {
    drawerOpen = true;
    var drawer = qs('.cart-drawer');
    var overlay = qs('.cart-overlay');
    if (drawer) drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerOpen = false;
    var drawer = qs('.cart-drawer');
    var overlay = qs('.cart-overlay');
    if (drawer) drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  function toggleDrawer() {
    if (drawerOpen) closeDrawer();
    else openDrawer();
  }

  /* --- 渲染 --- */
  function render() {
    // 更新 badge
    qsa('.cart-count').forEach(function (el) {
      var count = getCount();
      el.textContent = count;
      el.style.display = count > 0 ? '' : 'none';
    });

    // 渲染抽屜內容
    var list = qs('.cart-drawer__items');
    if (!list) return;

    if (items.length === 0) {
      list.innerHTML =
        '<div class="cart-drawer__empty">' +
          '<p>\uD83D\uDED2</p>' +
          '<p>購物車是空的</p>' +
          '<p>快去挑選喜愛的永生花吧！</p>' +
        '</div>';
      var totalEl = qs('.cart-drawer__total-price');
      if (totalEl) totalEl.textContent = formatPrice(0);
      return;
    }

    list.innerHTML = items.map(function (item) {
      return (
        '<div class="cart-item" data-product-id="' + item.productId + '" data-variant="' + item.variant + '">' +
          '<div class="cart-item__image"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
          '<div class="cart-item__info">' +
            '<h4 class="cart-item__name">' + item.name + '</h4>' +
            (item.variant ? '<span class="cart-item__variant">' + item.variant + '</span>' : '') +
            '<span class="cart-item__price">' + formatPrice(item.price) + '</span>' +
          '</div>' +
          '<div class="cart-item__actions">' +
            '<div class="qty-selector">' +
              '<button class="qty-selector__btn qty-selector__btn--minus" data-action="cart-minus">−</button>' +
              '<span class="qty-selector__val">' + item.qty + '</span>' +
              '<button class="qty-selector__btn qty-selector__btn--plus" data-action="cart-plus">+</button>' +
            '</div>' +
            '<button class="cart-item__remove" data-action="cart-remove" aria-label="移除">&times;</button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    var totalEl = qs('.cart-drawer__total-price');
    if (totalEl) totalEl.textContent = formatPrice(getTotal());
  }

  /* --- 事件委派 --- */
  function initEvents() {
    // 購物車按鈕
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-action]');
      if (!btn) return;
      var action = btn.getAttribute('data-action');

      if (action === 'open-cart') {
        e.preventDefault();
        openDrawer();
        return;
      }
      if (action === 'close-cart') {
        closeDrawer();
        return;
      }

      // 抽屜內操作
      var cartItem = btn.closest('.cart-item');
      if (!cartItem) return;
      var pid = parseInt(cartItem.getAttribute('data-product-id'), 10);
      var variant = cartItem.getAttribute('data-variant') || '';

      if (action === 'cart-minus') {
        var item = items[findIndex(pid, variant)];
        if (item) updateQty(pid, variant, item.qty - 1);
      } else if (action === 'cart-plus') {
        var item2 = items[findIndex(pid, variant)];
        if (item2) updateQty(pid, variant, item2.qty + 1);
      } else if (action === 'cart-remove') {
        remove(pid, variant);
      }
    });

    // 遮罩關閉
    var overlay = qs('.cart-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeDrawer);
    }
  }

  /* --- 初始化 --- */
  function init() {
    load();
    initEvents();
    render();
  }

  return {
    init: init,
    add: add,
    remove: remove,
    updateQty: updateQty,
    clear: clear,
    getTotal: getTotal,
    getCount: getCount,
    openDrawer: openDrawer,
    closeDrawer: closeDrawer,
    toggleDrawer: toggleDrawer,
    getItems: function () { return items.slice(); },
  };
})();

/* ============================================================
   5. Hero 輪播
   ============================================================ */
const HeroSlider = (function () {
  var currentIndex = 0;
  var timer = null;
  var container = null;
  var dotsWrap = null;
  var INTERVAL = 5000;

  function goTo(index) {
    if (!container) return;
    var slides = qsa('.hero-slide', container);
    var dots = dotsWrap ? qsa('.hero-dot', dotsWrap) : [];

    currentIndex = ((index % slides.length) + slides.length) % slides.length;

    slides.forEach(function (s, i) {
      s.classList.toggle('is-active', i === currentIndex);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('is-active', i === currentIndex);
    });
  }

  function next() {
    goTo(currentIndex + 1);
  }

  function prev() {
    goTo(currentIndex - 1);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, INTERVAL);
  }

  function stopAuto() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function buildSlides() {
    container = qs('.hero-slider');
    if (!container) return;

    var slidesHtml = HERO_SLIDES.map(function (slide, i) {
      return (
        '<div class="hero-slide' + (i === 0 ? ' is-active' : '') + '" style="background:url(\'' + slide.bgImage + '\') center/cover no-repeat;">' +
          '<div class="hero-slide__overlay"></div>' +
          '<div class="hero-slide__content">' +
            '<h2 class="hero-slide__title">' + slide.title + '</h2>' +
            '<p class="hero-slide__subtitle">' + slide.subtitle + '</p>' +
            '<a href="products.html" class="hero-slide__cta btn btn--primary">' + slide.cta + '</a>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    var dotsHtml = HERO_SLIDES.map(function (_, i) {
      return '<button class="hero-dot' + (i === 0 ? ' is-active' : '') + '" data-slide="' + i + '" aria-label="第' + (i + 1) + '張"></button>';
    }).join('');

    container.innerHTML =
      '<div class="hero-slides">' + slidesHtml + '</div>' +
      '<button class="hero-arrow hero-arrow--prev" aria-label="上一張">&#10094;</button>' +
      '<button class="hero-arrow hero-arrow--next" aria-label="下一張">&#10095;</button>' +
      '<div class="hero-dots">' + dotsHtml + '</div>';

    dotsWrap = qs('.hero-dots', container);
  }

  function initEvents() {
    if (!container) return;

    container.addEventListener('click', function (e) {
      if (e.target.closest('.hero-arrow--prev')) { prev(); startAuto(); }
      else if (e.target.closest('.hero-arrow--next')) { next(); startAuto(); }
      else if (e.target.closest('.hero-dot')) {
        var idx = parseInt(e.target.getAttribute('data-slide'), 10);
        goTo(idx);
        startAuto();
      }
    });

    // 滑鼠懸停暫停
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);
  }

  function init() {
    buildSlides();
    initEvents();
    startAuto();
  }

  return { init: init, goTo: goTo, next: next, prev: prev };
})();

/* ============================================================
   6. 搜尋功能
   ============================================================ */
const Search = (function () {
  var overlay = null;
  var input = null;
  var results = null;

  function open() {
    overlay = qs('.search-overlay');
    if (!overlay) return;
    overlay.classList.add('is-visible');
    input = qs('.search-overlay__input', overlay);
    results = qs('.search-overlay__results', overlay);
    if (input) { input.value = ''; input.focus(); }
    if (results) results.innerHTML = '';
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (overlay) overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  function doSearch(keyword) {
    if (!results) return;
    keyword = keyword.trim().toLowerCase();

    if (!keyword) {
      results.innerHTML = '<p class="search-overlay__hint">請輸入關鍵字搜尋商品...</p>';
      return;
    }

    var matched = PRODUCTS.filter(function (p) {
      return (
        p.name.toLowerCase().includes(keyword) ||
        p.category.includes(keyword) ||
        p.description.toLowerCase().includes(keyword) ||
        (p.tags && p.tags.some(function (t) { return t.includes(keyword); }))
      );
    });

    if (matched.length === 0) {
      results.innerHTML = '<p class="search-overlay__hint">找不到符合「' + keyword + '」的商品</p>';
      return;
    }

    results.innerHTML = matched.map(function (p) {
      return (
        '<a href="product-detail.html?id=' + p.id + '" class="search-result">' +
          '<span class="search-result__image"><img src="' + p.image + '" alt="' + p.name + '"></span>' +
          '<div class="search-result__info">' +
            '<span class="search-result__name">' + p.name + '</span>' +
            '<span class="search-result__price">' + formatPrice(p.price) + '</span>' +
          '</div>' +
        '</a>'
      );
    }).join('');
  }

  function initEvents() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-action="open-search"]')) {
        e.preventDefault();
        open();
      }
      if (e.target.closest('[data-action="close-search"]')) {
        close();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    // 即時搜尋
    document.addEventListener('input', function (e) {
      if (e.target.closest('.search-overlay__input')) {
        doSearch(e.target.value);
      }
    });
  }

  function init() {
    initEvents();
  }

  return { init: init, open: open, close: close };
})();

/* ============================================================
   7. 行動選單
   ============================================================ */
const MobileMenu = (function () {
  var isOpen = false;

  function toggle() {
    isOpen = !isOpen;
    var nav = qs('.nav-mobile');
    var burger = qs('.burger-btn');
    if (nav) nav.classList.toggle('is-open', isOpen);
    if (burger) burger.classList.toggle('is-active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    var nav = qs('.nav-mobile');
    var burger = qs('.burger-btn');
    if (nav) nav.classList.remove('is-open');
    if (burger) burger.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function init() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('.burger-btn')) { toggle(); return; }
      if (e.target.closest('.nav-mobile a')) { close(); }
    });
  }

  return { init: init, toggle: toggle, close: close };
})();

/* ============================================================
   8. Header 捲動效果
   ============================================================ */
function initHeaderScroll() {
  var header = qs('.site-header');
  if (!header) return;

  var threshold = 60;
  var ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        header.classList.toggle('scrolled', window.scrollY > threshold);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 初始檢查
}

/* ============================================================
   9. 商品列表頁 - 篩選與排序
   ============================================================ */
const ProductList = (function () {
  var currentCategory = '全部';
  var currentSort = 'default';
  var grid = null;

  function getFiltered() {
    var filtered = currentCategory === '全部'
      ? PRODUCTS.slice()
      : PRODUCTS.filter(function (p) { return p.category === currentCategory; });

    switch (currentSort) {
      case 'price-asc':
        filtered.sort(function (a, b) { return a.price - b.price; });
        break;
      case 'price-desc':
        filtered.sort(function (a, b) { return b.price - a.price; });
        break;
      case 'newest':
        filtered.sort(function (a, b) { return b.id - a.id; });
        break;
      default:
        break;
    }

    return filtered;
  }

  function renderCard(product) {
    var discount = product.originalPrice
      ? '<span class="product-card__original">' + formatPrice(product.originalPrice) + '</span>'
      : '';
    var badge = product.badge
      ? '<span class="product-card__badge">' + product.badge + '</span>'
      : '';

    return (
      '<div class="product-card" data-product-id="' + product.id + '">' +
        badge +
        '<a href="product-detail.html?id=' + product.id + '" class="product-card__image-link">' +
          '<div class="product-card__image"><img src="' + product.image + '" alt="' + product.name + '" loading="lazy"></div>' +
        '</a>' +
        '<div class="product-card__body">' +
          '<span class="product-card__category">' + product.category + '</span>' +
          '<h3 class="product-card__name">' +
            '<a href="product-detail.html?id=' + product.id + '">' + product.name + '</a>' +
          '</h3>' +
          '<div class="product-card__pricing">' +
            '<span class="product-card__price">' + formatPrice(product.price) + '</span>' +
            discount +
          '</div>' +
          '<button class="btn btn--sm btn--primary product-card__add-cart" data-action="add-to-cart" data-product-id="' + product.id + '">' +
            '加入購物車' +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function render() {
    if (!grid) return;
    var products = getFiltered();

    if (products.length === 0) {
      grid.innerHTML = '<div class="product-grid__empty"><p>此分類目前沒有商品</p></div>';
      return;
    }

    grid.innerHTML = products.map(renderCard).join('');

    // 更新計數
    var countEl = qs('.product-count');
    if (countEl) countEl.textContent = '共 ' + products.length + ' 件商品';
  }

  function renderCategoryFilters() {
    var wrap = qs('.category-filters');
    if (!wrap) return;

    wrap.innerHTML = CATEGORIES.map(function (cat) {
      return '<button class="category-filter' + (cat === currentCategory ? ' is-active' : '') + '" data-category="' + cat + '">' + cat + '</button>';
    }).join('');
  }

  function initEvents() {
    // 分類篩選（事件委派）
    document.addEventListener('click', function (e) {
      var filterBtn = e.target.closest('.category-filter');
      if (filterBtn) {
        currentCategory = filterBtn.getAttribute('data-category');
        qsa('.category-filter').forEach(function (b) {
          b.classList.toggle('is-active', b.getAttribute('data-category') === currentCategory);
        });
        render();
        return;
      }

      // 加入購物車
      var addBtn = e.target.closest('[data-action="add-to-cart"]');
      if (addBtn) {
        e.preventDefault();
        var pid = parseInt(addBtn.getAttribute('data-product-id'), 10);
        Cart.add(pid, 1);
        return;
      }
    });

    // 排序
    var sortSelect = qs('.sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        currentSort = sortSelect.value;
        render();
      });
    }
  }

  function init() {
    grid = qs('.product-grid');
    if (!grid) return;
    renderCategoryFilters();
    initEvents();
    render();
  }

  return { init: init, render: render };
})();

/* ============================================================
   10. 商品詳細頁
   ============================================================ */
const ProductDetail = (function () {
  var product = null;
  var selectedVariant = '';
  var qty = 1;

  function getProductFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get('id'), 10);
    return PRODUCTS.find(function (p) { return p.id === id; }) || PRODUCTS[0];
  }

  /* --- 數量選擇器 --- */
  function initQtySelector() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.qty-selector__btn');
      if (!btn) return;
      var wrap = btn.closest('.product-detail__qty');
      if (!wrap) return;

      var display = qs('.qty-selector__val', wrap);
      if (btn.classList.contains('qty-selector__btn--minus')) {
        qty = Math.max(1, qty - 1);
      } else if (btn.classList.contains('qty-selector__btn--plus')) {
        qty = Math.min(99, qty + 1);
      }
      if (display) display.textContent = qty;
    });
  }

  /* --- 變體選擇 --- */
  function initVariantSelector() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.variant-btn');
      if (!btn) return;

      selectedVariant = btn.getAttribute('data-variant');
      qsa('.variant-btn').forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-variant') === selectedVariant);
      });
    });
  }

  /* --- 分頁切換 --- */
  function initTabs() {
    document.addEventListener('click', function (e) {
      var tab = e.target.closest('.detail-tab');
      if (!tab) return;

      var tabId = tab.getAttribute('data-tab');
      qsa('.detail-tab').forEach(function (t) {
        t.classList.toggle('is-active', t.getAttribute('data-tab') === tabId);
      });
      qsa('.detail-panel').forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-panel') === tabId);
      });
    });
  }

  /* --- 圖片 Gallery --- */
  function initGallery() {
    document.addEventListener('click', function (e) {
      var thumb = e.target.closest('.gallery-thumb');
      if (!thumb) return;

      var src = thumb.getAttribute('data-image');
      var mainImg = qs('.gallery-main');
      if (mainImg && src) {
        mainImg.innerHTML = '<img src="' + src + '" alt="" style="width:100%;height:100%;object-fit:cover;">';
      }

      qsa('.gallery-thumb').forEach(function (t) {
        t.classList.toggle('is-active', t === thumb);
      });
    });
  }

  /* --- 加入購物車 --- */
  function initAddToCart() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.product-detail__add-cart');
      if (!btn) return;

      if (!product) return;

      if (product.variants && product.variants.length > 0 && !selectedVariant) {
        Toast.show('請選擇款式', 'error');
        return;
      }

      Cart.add(product.id, qty, selectedVariant);
    });

    // 立即購買
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.product-detail__buy-now');
      if (!btn) return;

      if (!product) return;

      if (product.variants && product.variants.length > 0 && !selectedVariant) {
        Toast.show('請選擇款式', 'error');
        return;
      }

      Cart.add(product.id, qty, selectedVariant);
      Cart.openDrawer();
    });
  }

  /* --- 渲染商品詳細 --- */
  function render() {
    product = getProductFromUrl();
    if (!product) return;

    // 頁面標題
    document.title = product.name + ' - 六號花藝交易所';

    // 商品名稱
    var nameEl = qs('.product-detail__name');
    if (nameEl) nameEl.textContent = product.name;

    // 價格
    var priceEl = qs('.product-detail__price');
    if (priceEl) priceEl.textContent = formatPrice(product.price);

    var origEl = qs('.product-detail__original-price');
    if (origEl) {
      if (product.originalPrice) {
        origEl.textContent = formatPrice(product.originalPrice);
        origEl.style.display = '';
      } else {
        origEl.style.display = 'none';
      }
    }

    // SKU
    var skuEl = qs('.product-detail__sku');
    if (skuEl) skuEl.textContent = '商品編號：' + product.sku;

    // 描述
    var descEl = qs('.product-detail__desc');
    if (descEl) descEl.textContent = product.description;

    // Badge
    var badgeEl = qs('.product-detail__badge');
    if (badgeEl) {
      if (product.badge) {
        badgeEl.textContent = product.badge;
        badgeEl.style.display = '';
      } else {
        badgeEl.style.display = 'none';
      }
    }

    // Gallery 主圖
    var mainImg = qs('.gallery-main');
    if (mainImg) mainImg.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '" style="width:100%;height:100%;object-fit:cover;">';

    // 變體按鈕
    var variantWrap = qs('.product-detail__variants');
    if (variantWrap && product.variants) {
      selectedVariant = '';
      variantWrap.innerHTML =
        '<span class="variant-label">款式選擇：</span>' +
        product.variants.map(function (v) {
          return '<button class="variant-btn" data-variant="' + v + '">' + v + '</button>';
        }).join('');
    }

    // 分類
    var catEl = qs('.product-detail__category');
    if (catEl) catEl.textContent = product.category;

    // 分頁內容
    var descPanel = qs('[data-panel="description"]');
    if (descPanel) {
      descPanel.innerHTML =
        '<h3>商品描述</h3>' +
        '<p>' + product.description + '</p>' +
        '<h3>商品規格</h3>' +
        '<ul>' +
          '<li>商品編號：' + product.sku + '</li>' +
          '<li>分類：' + product.category + '</li>' +
          '<li>保存期限：妥善保養可維持2-3年</li>' +
          '<li>包裝：精美禮盒包裝</li>' +
        '</ul>';
    }

    var carePanel = qs('[data-panel="care"]');
    if (carePanel) {
      carePanel.innerHTML =
        '<h3>保養說明</h3>' +
        '<ul>' +
          '<li>請避免放置於陽光直射處</li>' +
          '<li>請避免放置於高溫潮濕環境</li>' +
          '<li>請勿澆水或噴水</li>' +
          '<li>可用吹風機冷風輕柔除塵</li>' +
          '<li>建議放置於玻璃罩或展示盒中保存</li>' +
        '</ul>';
    }

    var shippingPanel = qs('[data-panel="shipping"]');
    if (shippingPanel) {
      shippingPanel.innerHTML =
        '<h3>配送資訊</h3>' +
        '<ul>' +
          '<li>台灣本島免運費（滿NT$1,500）</li>' +
          '<li>離島地區運費NT$150</li>' +
          '<li>下單後3-5個工作天出貨</li>' +
          '<li>客製化商品約7-14個工作天</li>' +
        '</ul>' +
        '<h3>退換貨政策</h3>' +
        '<p>因永生花為特殊商品，除商品瑕疵外恕不接受退換貨。收到商品如有任何問題，請於7日內聯繫客服。</p>';
    }
  }

  function init() {
    render();
    initQtySelector();
    initVariantSelector();
    initTabs();
    initGallery();
    initAddToCart();
  }

  return { init: init };
})();

/* ============================================================
   11. 電子報表單
   ============================================================ */
function initNewsletter() {
  document.addEventListener('submit', function (e) {
    var form = e.target.closest('.newsletter-form');
    if (!form) return;

    e.preventDefault();
    var input = qs('.newsletter-form__input', form);
    if (!input) return;

    var email = input.value.trim();
    if (!email) {
      Toast.show('請輸入電子信箱', 'error');
      return;
    }

    // 簡單 email 驗證
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show('請輸入有效的電子信箱', 'error');
      return;
    }

    // Mock 提交
    Toast.show('訂閱成功！感謝您的支持', 'success');
    input.value = '';
  });
}

/* ============================================================
   12. 回到頂部按鈕
   ============================================================ */
function initBackToTop() {
  var btn = qs('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   13. 平滑滾動（錨點連結）
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var targetId = link.getAttribute('href');
    if (targetId === '#') return;

    var target = qs(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ============================================================
   14. 頁面初始化
   ============================================================ */
function initPage() {
  // 通用模組（所有頁面）
  Cart.init();
  Search.init();
  MobileMenu.init();
  initHeaderScroll();
  initNewsletter();
  initBackToTop();
  initSmoothScroll();

  // 根據 body class 初始化對應頁面模組
  var body = document.body;

  if (body.classList.contains('page-home')) {
    HeroSlider.init();
    ProductList.init();
  }

  if (body.classList.contains('page-products')) {
    ProductList.init();
  }

  if (body.classList.contains('page-product-detail')) {
    ProductDetail.init();
  }

  // 如果沒有特定 class 但有對應元素，也做初始化
  if (!body.className && qs('.hero-slider')) {
    HeroSlider.init();
  }
  if (!body.className && qs('.product-grid')) {
    ProductList.init();
  }
  if (!body.className && qs('.product-detail')) {
    ProductDetail.init();
  }
}

/* --- DOM Ready --- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
