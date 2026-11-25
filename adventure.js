(() => {
  const photos = {
    narmer: ["d/d7", "Chambers_B17_and_B18_(Umm_el-Qa'ab).jpg", "Oesermaatra0069（推定）", "PD", "烏姆卡伯 B17／B18 墓室現況", 330],
    djoser: ["8/82", "Step_Pyramid_of_Djoser.jpg", "Dr. Ondřej Havelka", "by-sa/4.0", "薩卡拉階梯金字塔", 960],
    khufu: ["e/e7", "Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg", "Douwe C. van der Zee", "by-sa/4.0", "吉薩古夫大金字塔", 960],
    pepi2: ["4/44", "PepiIIPyramid.jpg", "Jon Bodsworth", "free", "南薩卡拉佩皮二世金字塔遺址", 330],
    mentuhotep2: ["7/74", "Mortuary_Temple_of_Mentuhotep_II_from_the_Mortuary_Temple_of_Hatshepsut,_Luxor,_LG,_EGY_(48010482218).jpg", "Warren LeMay", "CC0", "從哈特謝普蘇特祭殿看門圖霍特普二世祭殿遺址", 960],
    senusret3: ["5/56", "Piramide-senusret3.png", "Jolle~commonswiki（推定）", "by-sa/3.0", "達舒爾的辛努塞爾特三世金字塔", 0],
    ahmose1: ["c/cc", "Pyramid_of_Ahmose,_Abydos,_1998.png", "Wannabe Egyptologist", "by-sa/3.0", "阿拜多斯金字塔遺址，1998 年", 0],
    hatshepsut: ["7/7f", "Hatshepsut_Temple.jpg", "James G. Howes", "free", "代爾巴哈里峭壁下的哈特謝普蘇特祭殿", 960],
    thutmose3: ["7/7f", "Egypt.KV34.01.jpg", "Hajor", "by-sa/3.0", "帝王谷 KV34，圖特摩斯三世墓", 0],
    akhenaten: ["e/e1", "Defaced_relief_of_Akhenaten_and_Nefertiti_from_Akhenaten’s_Royal_Tomb.jpg", "Bruce Allardice", "by-sa/2.0", "阿瑪納皇家墓內的阿頓祭祀浮雕", 960],
    tutankhamun: ["0/0e", "Tutankhamun_KV62_burial_chamber_and_sarcophagus.jpg", "Romagy", "by-sa/4.0", "帝王谷 KV62 的石棺與壁畫", 960],
    ramesses2: ["8/8b", "Flickr_-_archer10_(Dennis)_-_Egypt-4A-023.jpg", "Dennis G. Jarvis", "by-sa/2.0", "帝王谷 KV7 墓內第四道走廊入口", 960],
    ramesses3: ["9/92", "KV11_Tomb_of_Ramses_III_DSCF3105.jpg", "R Prazeres", "by-sa/4.0", "帝王谷 KV11，拉美西斯三世墓入口", 960],
    piye: ["5/50", "Al-Kurru,main_pyramid.jpg", "Bertramz", "by/3.0", "庫魯王室墓區環境照，圖中為墓區其他遺構", 960],
    psamtik1: ["7/7f", "Jean-Francois_Champollion_-_Plan_Des_Ruines_De_Sais.cropped.png", "Jean-François Champollion", "PD", "塞易斯遺址歷史平面圖", 960],
    ptolemy1: ["7/75", "Kom_el-Dikka,_Alexandria.jpg", "Abdelrhman 1990", "by/4.0", "亞歷山卓古城區現況，可見較晚期的羅馬劇場", 960],
    nubia: ["e/e6", "Abu_Simbel,_façade_of_the_Great_Temple_(6201194723).jpg", "Arian Zwegers", "by/2.0", "阿布辛貝大神廟與岩壁巨像", 960],
    delta: ["f/f5", "Satellite_picture_of_the_Nile_Delta,_Egypt.jpg", "NASA", "PD", "尼羅河三角洲衛星影像", 960],
    qurn: ["b/b0", "Égypte,_Vallée_des_Rois,_Nécropole_thébaine,_El-Qurn_(la_Corne)_montagne_pyramidale_dominant_la_vallée_(49835131552).jpg", "Marie Thérèse Hébert & Jean Robert Thibault", "by-sa/2.0", "古爾恩山峰與帝王谷", 960],
    barkal: ["4/4e", "Gebel_Barkal.jpg", "LassiHU", "by-sa/4.0", "巴爾卡爾山與努比亞地形", 960]
  };

  const regions = {
    delta: { photo: 'delta', label: '尼羅河三角洲', overview: [30.28, 31.13], caption: '亞歷山卓港與塞易斯古都', frame: [29.62, 30.97, 30.71, 31.38] },
    pyramids: { photo: 'khufu', label: '吉薩與薩卡拉', overview: [31.14, 29.93], caption: '從階梯金字塔到吉薩大金字塔', frame: [31.02, 31.34, 29.76, 30.04] },
    amarna: { photo: 'akhenaten', label: '阿瑪納', overview: [30.9852, 27.6262], caption: '阿肯那頓的新都與皇家谷地', frame: [30.84, 31.035, 27.575, 27.735] },
    abydos: { photo: 'ahmose1', label: '阿拜多斯', overview: [31.924, 26.176], caption: '早王朝陵墓與新王國金字塔遺址', frame: [31.885, 31.961, 26.143, 26.215] },
    thebes: { photo: 'qurn', label: '底比斯與帝王谷', overview: [32.602, 25.74], caption: '山峰、岩窟墓與西岸祭殿', frame: [32.592, 32.613, 25.729, 25.748] },
    nubia: { photo: 'nubia', label: '阿布辛貝', overview: [31.6256, 22.3369], caption: '納瑟湖畔的拉美西斯二世岩窟神廟', frame: [31.57, 31.68, 22.285, 22.389] },
    kush: { photo: 'piye', label: '庫魯・今日蘇丹', overview: [31.77093, 18.40947], caption: '庫施王室金字塔墓區', frame: [31.728, 31.855, 18.345, 18.572] }
  };

  const types = {
    pyramid: '金字塔', ruin: '陵墓遺址', tomb: '岩窟墓',
    temple: '祭殿', city: '古城', rock: '岩窟神廟'
  };

  // Representative entrance or complex centroid, in [longitude, latitude].
  const sites = [
    { chapters: ['narmer'], region: 'abydos', coords: [31.90799, 26.17584], type: 'ruin', name: '烏姆卡伯 B17／B18', note: '一般認為這兩間墓室屬於那爾邁。', source: 'https://vici.org/vici/50389/?lang=en' },
    { chapters: ['djoser'], region: 'pyramids', coords: [31.2167, 29.8711], type: 'pyramid', name: '左塞爾階梯金字塔', note: '六層階梯矗立在薩卡拉墓區。', source: 'https://egymonuments.gov.eg/en/monuments/the-step-pyramid-complex-of-djoser/' },
    { chapters: ['khufu'], region: 'pyramids', coords: [31.1342, 29.9792], type: 'pyramid', name: '古夫大金字塔', note: '吉薩三座主要金字塔中，古夫的大金字塔位於最北。', source: 'https://egymonuments.gov.eg/monuments/the-great-pyramid/' },
    { chapters: ['pepi2'], region: 'pyramids', coords: [31.2167, 29.8333], type: 'pyramid', name: '南薩卡拉佩皮二世金字塔', note: '金字塔與周邊祭祀建築現為遺址。', source: 'https://aebc.ff.cuni.cz/database/207_saq_s/' },
    { chapters: ['mentuhotep2'], region: 'thebes', coords: [32.60611, 25.73736], type: 'temple', name: '門圖霍特普二世祭殿', note: '坐落在代爾巴哈里峭壁下，緊鄰後來的哈特謝普蘇特祭殿。', source: 'https://egyptartefacts.griffith.ox.ac.uk/node/1074/' },
    { chapters: ['senusret3'], region: 'pyramids', coords: [31.2256, 29.8189], type: 'pyramid', name: '達舒爾辛努塞爾特三世金字塔', note: '泥磚塔心現已崩塌成丘。法老本人可能葬於阿拜多斯。', source: 'https://www.metmuseum.org/essays/the-pyramid-complex-of-senwosret-iii-in-the-cemeteries-of-dahshur' },
    { chapters: ['ahmose1'], region: 'abydos', coords: [31.9378, 26.1757], type: 'pyramid', name: '雅赫摩斯一世金字塔遺址', note: '阿拜多斯的王室祭祀建築群。他是否葬於這裡仍有疑問。', source: 'https://archive.archaeology.org/0107/abstracts/abydos.html' },
    { chapters: ['hatshepsut'], region: 'thebes', coords: [32.60658, 25.73828], type: 'temple', name: '哈特謝普蘇特祭殿', note: '峭壁下的階台是祭殿。她的陵墓入口位於帝王谷 KV20。', source: 'https://egymonuments.gov.eg/monuments/hatshepsut-temple/' },
    { chapters: ['thutmose3'], region: 'thebes', coords: [32.60064, 25.73819], type: 'tomb', name: '圖特摩斯三世墓 KV34', note: '入口位在帝王谷南側的狹窄岩隙中。', source: 'https://en.wikipedia.org/wiki/KV34' },
    { chapters: ['akhenaten'], region: 'amarna', coords: [30.9852, 27.6262], type: 'tomb', name: '阿瑪納皇家墓 26 號', note: '入口藏在阿瑪納古城東側的皇家谷地。', source: 'https://www.amarnaproject.com/amarna-the-place/royal-tomb/' },
    { chapters: ['tutankhamun'], region: 'thebes', coords: [32.60150, 25.74020], type: 'tomb', name: '圖坦卡門墓 KV62', note: '墓室不大，彩繪集中在埋葬室的牆面。', source: 'https://egymonuments.gov.eg/monuments/tomb-of-tutankhamun/' },
    { chapters: ['ramesses2'], region: 'thebes', coords: [32.60166, 25.74074], type: 'tomb', name: '拉美西斯二世墓 KV7', note: '神廟位於更南方的阿布辛貝。岩窟墓則在帝王谷。', source: 'https://en.wikipedia.org/wiki/KV7' },
    { chapters: ['ramesses3'], region: 'thebes', coords: [32.60125, 25.74000], type: 'tomb', name: '拉美西斯三世墓 KV11', note: '墓道開鑿於帝王谷的岩層，與他在梅迪奈特哈布的祭殿分處兩地。', source: 'https://vici.org/vici/45243/' },
    { chapters: ['piye'], region: 'kush', coords: [31.77093, 18.40947], type: 'pyramid', name: '庫魯皮耶墓 Ku 17', note: '位於今日蘇丹。原有金字塔上部已不存。', source: 'https://vici.org/vici/21588/?lang=en' },
    { chapters: ['psamtik1'], region: 'delta', coords: [30.76833, 30.96472], type: 'city', name: '塞易斯古都遺址', note: '尼羅河三角洲西部的第二十六王朝都城。', source: 'https://www.ees.ac.uk/resource/sais.html' },
    { chapters: ['ptolemy1', 'cleopatra7'], region: 'delta', coords: [29.9187, 31.2058], type: 'city', name: '亞歷山卓古城區', note: '兩幕共享古城入口。克麗奧佩脫拉七世的墓址仍未確認。', source: 'https://egymonuments.gov.eg/historical-periods/ptolemaic-period/' },
    { chapters: ['ramesses2'], region: 'nubia', alternate: true, coords: [31.6256, 22.3369], type: 'rock', name: '阿布辛貝大神廟', note: '地圖採用神廟 1968 年遷移後的位置。', source: 'https://egymonuments.gov.eg/en/archaeological-sites/abu-simbel' }
  ];

  const W = 480;
  const H = 530;
  const valleyFrame = [32.59955, 32.60285, 25.73765, 25.74145];
  const overviewFrame = [27.7, 35.45, 17.25, 32.55];
  const nile = [[31.22,30.07],[31.23,29.87],[31.27,29.70],[31.11,29.20],[31.00,28.59],[30.77,28.12],[30.85,27.70],[31.13,27.30],[31.20,27.05],[31.40,26.72],[31.70,26.55],[31.99,26.19],[32.23,26.15],[32.72,26.17],[32.77,26.04],[32.68,25.87],[32.64,25.71],[32.54,25.52],[32.54,25.29],[32.69,25.01],[32.88,24.79],[32.93,24.48],[32.87,24.24],[32.89,23.96],[32.74,23.49],[32.41,23.06],[32.10,22.66],[31.65,22.36],[31.43,21.79],[30.70,20.72],[30.39,20.42],[30.48,19.76],[30.82,19.19],[31.01,18.91],[31.34,18.53],[31.75,18.38],[31.91,18.57],[32.42,18.66],[32.87,19.33],[33.23,19.46],[33.73,19.12],[33.96,18.53],[33.96,17.35]];
  const coast = [[27.6,31.16],[28.8,31.00],[29.93,31.22],[30.35,31.43],[30.82,31.48],[31.57,31.48],[31.84,31.54],[32.32,31.30],[32.71,31.07],[33.27,31.13],[33.79,31.21],[34.23,31.32],[35.5,31.7]];
  const deltaWest = [[31.22,30.07],[31.11,30.40],[30.90,30.69],[30.77,30.98],[30.49,31.22],[30.40,31.42]];
  const deltaEast = [[31.22,30.07],[31.27,30.38],[31.43,30.68],[31.61,31.03],[31.80,31.43]];
  const mountains = [
    { coords: [32.59604,25.73642], name: '古爾恩山峰', photo: 'qurn' },
    { coords: [31.8283,18.5367], name: '巴爾卡爾山', photo: 'barkal' }
  ];

  const el = id => document.getElementById(id);
  const view = { region: null, valley: false, index: 0, site: null, traveling: false };
  const tombRoute = {
    djoser: '左塞爾的王陵以六層階梯堆疊，從薩卡拉地面向上升起。',
    khufu: '古夫的大金字塔改用斜面外形，墓室位於塔體內部。',
    tutankhamun: '圖坦卡門葬在帝王谷，墓室開鑿於岩層中。'
  };
  const timeline = { themed: false, opened: null, offset: 0 };
  const timelineCards = [];
  let chapters;
  let chapterEras;
  let enterStory;

  function project(coords, frame) {
    const [west, east, south, north] = frame;
    return [(coords[0] - west) / (east - west) * W, (north - coords[1]) / (north - south) * H];
  }

  function pathFor(points, frame) {
    return points.map((point, i) => (i ? 'L' : 'M') + project(point, frame).map(value => value.toFixed(1)).join(' ')).join(' ');
  }

  function drawTerrain(frame) {
    const sea = pathFor(coast, frame) + ' V-10 H-10 Z';
    const waterways = [nile, deltaWest, deltaEast].map(points => pathFor(points, frame)).join(' ');
    const mountainMarks = mountains.map(mountain => {
      const [x, y] = project(mountain.coords, frame);
      if (!view.region || x < 15 || x > W - 15 || y < 25 || y > H - 20) return '';
      return '<g transform="translate(' + x + ' ' + y + ')"><circle r="4" fill="#ffebb6" stroke="#473321" stroke-width="2"/><text y="22" text-anchor="middle" class="terrain-label" font-size="17">' + mountain.name + '</text></g>';
    }).join('');
    const mapLabels = view.region ? '' : '<text x="230" y="32">地中海</text><text x="275" y="276" transform="rotate(-12 275 276)">埃及</text><text x="287" y="483">蘇丹</text><text x="196" y="356">尼羅河</text>';
    el('adventure-terrain').innerHTML =
      '<defs><linearGradient id="ocean-shade" x2="0" y2="1"><stop stop-color="#17363a"/><stop offset="1" stop-color="#2a5955"/></linearGradient></defs>' +
      '<rect width="480" height="530" fill="#2b1809" opacity=".09"/>' +
      '<path d="' + sea + '" fill="url(#ocean-shade)" stroke="#c2976b" stroke-width="2"/><path d="' + waterways + '" fill="none" stroke="#798259" stroke-opacity=".68" stroke-width="15" stroke-linejoin="round"/><path d="' + waterways + '" fill="none" stroke="#22453f" stroke-width="6" stroke-linejoin="round"/><path d="' + waterways + '" fill="none" stroke="#68a397" stroke-width="3" stroke-linejoin="round"/>' +
      '<g class="terrain-label" font-size="20" font-weight="650">' + mapLabels + '</g>' + mountainMarks +
      '<path d="M447 50l7-19 7 19-7-5z" fill="#ffe6ab" stroke="#4e3120"/><text x="454" y="25" text-anchor="middle" class="terrain-label" font-size="15">北</text>';
  }

  function place(element, coords, frame) {
    const [x, y] = project(coords, frame);
    element.style.left = x / W * 100 + '%';
    element.style.top = y / H * 100 + '%';
  }

  function createElement(tag, className, label) {
    const node = document.createElement(tag);
    node.className = className;
    if (label) node.textContent = label;
    return node;
  }

  const pinArt = {
    pyramid: '<path d="M2 25L17 3l15 22z" fill="#e9b971"/><path d="M17 3l15 22H20z" fill="#b27443"/>',
    ruin: '<path d="M3 24l4-9 7 1 4-8 6 5 6 11z" fill="#c18f55"/><path d="M11 21h11v5H11z" fill="#633c26"/>',
    tomb: '<path d="M2 25L7 7l10-4 9 5 6 17z" fill="#a97e59"/><path d="M12 25V15l5-3 5 3v10z" fill="#383432"/>',
    rock: '<path d="M2 25L6 6h23l3 19z" fill="#ba865b"/><path d="M7 11h20v13H7z" fill="#e3b782"/><path d="M10 13v11m14-11v11m-7-8v8" stroke="#745039" stroke-width="3"/>',
    temple: '<path d="M2 10L17 3l15 7v4H2zm3 12h24v4H5z" fill="#e0b580"/><path d="M8 12v11m9-11v11m9-11v11" stroke="#94694d" stroke-width="3"/>',
    city: '<path d="M3 25V12h6v-6h8v6h5v-3h9v16z" fill="#c68855"/><path d="M10 17v4m7-4v4m8-4v4" stroke="#fff0cd" stroke-width="2"/>'
  };

  function photoUrl(photo, thumbnail = false) {
    const [hash, filename, , , , fullWidth] = photo;
    const name = encodeURIComponent(filename);
    const width = fullWidth && (thumbnail ? 330 : fullWidth);
    return width
      ? 'https://thumb.wikimedia.org/wikipedia/commons/thumb/' + hash + '/' + name + '/' + width + 'px-' + name
      : 'https://upload.wikimedia.org/wikipedia/commons/' + hash + '/' + name;
  }

  function photoPage(photo) {
    return 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(photo[1]);
  }

  function addPhotoCredit(container, photo) {
    const [, , author, license] = photo;
    container.append(externalLink(photoPage(photo), author + '／Wikimedia Commons'));
    if (license.startsWith('by')) {
      container.append(' · ', externalLink('https://creativecommons.org/licenses/' + license + '/', 'CC ' + license.replace('/', ' ').toUpperCase()));
    } else {
      container.append(' · ' + ({ PD: '公有領域', CC0: 'CC0', free: '來源頁授權' })[license]);
    }
  }

  function placeImage(container, photo, type, lazy = false) {
    const fallback = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    fallback.setAttribute('viewBox', '0 0 34 28');
    fallback.setAttribute('aria-hidden', 'true');
    fallback.innerHTML = pinArt[type] || pinArt.ruin;
    container.append(fallback);
    if (!photo) return;
    const image = document.createElement('img');
    image.alt = '';
    image.decoding = 'async';
    if (lazy) image.loading = 'lazy';
    image.style.opacity = '0';
    image.addEventListener('load', () => {
      fallback.remove();
      image.style.opacity = '';
    }, { once: true });
    image.addEventListener('error', () => image.remove(), { once: true });
    image.src = photoUrl(photo, true);
    container.append(image);
  }

  function addChoice({ code, title, subtitle, active, action, type, photo }) {
    const choice = createElement('button', 'adventure-choice');
    choice.type = 'button';
    if (active) choice.setAttribute('aria-current', 'location');
    const thumb = createElement('span', 'choice-image');
    placeImage(thumb, photo, type);
    thumb.append(createElement('span', 'adventure-code', code));
    const details = document.createElement('span');
    details.append(createElement('strong', '', title), createElement('small', '', subtitle));
    const arrow = createElement('span', 'adventure-arrow', '›');
    arrow.setAttribute('aria-hidden', 'true');
    choice.append(thumb, details, arrow);
    choice.addEventListener('click', action);
    el('adventure-regions').append(choice);
    return choice;
  }

  function addControls(item) {
    const { code, title, coords, frame, active, action, type, photo, pinCode = code, shift = 0 } = item;
    const pin = createElement('button', 'adventure-pin');
    pin.type = 'button';
    pin.setAttribute('aria-label', title);
    pin.setAttribute('aria-description', '地圖代號 ' + pinCode);
    if (active) pin.setAttribute('aria-current', 'location');
    pin.style.setProperty('--pin-shift', shift + 'px');
    const picture = createElement('span', 'pin-image');
    placeImage(picture, photo, type);
    pin.append(picture, createElement('span', 'pin-anchor'), createElement('span', 'pin-label', pinCode));
    if (shift) {
      const leader = createElement('span', 'pin-leader');
      leader.style.width = Math.hypot(shift, 9) + 'px';
      leader.style.transform = 'rotate(' + Math.atan2(-9, shift) + 'rad)';
      pin.prepend(leader);
    }
    place(pin, coords, frame);
    pin.addEventListener('click', action);
    el('adventure-pins').append(pin);
    addChoice(item);
  }

  const sceneNumber = index => String(index + 1).padStart(2, '0');

  function renderMap() {
    const region = regions[view.region];
    const frame = view.valley ? valleyFrame : region?.frame ?? overviewFrame;
    el('adventure').dataset.scope = region ? 'detail' : 'overview';
    el('adventure-directory-title').textContent = region ? '選擇遺跡' : '選擇地區';
    const usedPhotos = new Set();
    const pins = el('adventure-pins');
    const choices = el('adventure-regions');
    pins.replaceChildren();
    choices.replaceChildren();
    el('adventure-start').hidden = Boolean(region);
    el('adventure-all').hidden = !region;
    el('adventure-valley').hidden = view.region !== 'thebes';
    el('adventure-valley').textContent = view.valley ? '回底比斯西岸' : '放大帝王谷';
    el('adventure-heading').textContent = view.valley ? '帝王谷岩窟墓' : region?.label ?? '沿尼羅河探訪法老';
    el('adventure-context').textContent = view.valley ? '在谷地裡比較四座法老岩窟墓。' : region?.caption ?? '選擇地區，探索 17 幕故事。';
    el('adventure-map-note').textContent = region
      ? '數字是故事幕號。放大地圖仍使用相同幕號，相鄰入口可從地點清單選取。'
      : 'A–G 是區域代號，小圖數字是故事幕號。河道為簡化繪製，沙漠底紋為場景插畫。';
    drawTerrain(frame);

    if (!region) {
      Object.entries(regions).forEach(([id, entry], i) => {
        const photo = photos[entry.photo];
        usedPhotos.add(photo);
        addControls({
          photo, code: 'ABCDEFG'[i], title: entry.label, subtitle: entry.caption, coords: entry.overview,
          frame, type: ['city', 'pyramid', 'tomb', 'ruin', 'tomb', 'rock', 'pyramid'][i], active: view.site?.region === id, action: () => {
            if (view.traveling) return;
            view.region = id;
            renderMap();
            scrollToMap();
          }
        });
      });
    } else {
      sites.filter(site => site.region === view.region && (!view.valley || site.type === 'tomb')).forEach(site => {
        const related = site.chapters.map(id => chapters.findIndex(chapter => chapter.id === id));
        const first = related[0];
        const code = sceneNumber(first) + (site.alternate ? 'B' : '');
        const photo = photos[site.alternate ? 'nubia' : site.chapters[0]];
        usedPhotos.add(photo);
        const shift = view.region === 'thebes' && !view.valley
          ? ({ '05': -22, '08': 24, '09': -48, '11': 10, '12': 47, '13': -19 })[code]
          : ({ '11': -12, '12': 12 })[code] || 0;
        if (related.length === 1) {
          addControls({
            photo, shift, code, title: site.name, subtitle: types[site.type] + ' · ' + chapters[first].nameZh + (site.alternate ? '（第 ' + sceneNumber(first) + ' 幕的另一處遺跡）' : ''),
            coords: site.coords, frame, active: view.site === site, type: site.type,
            action: () => travelToStory(first, site)
          });
        } else {
          const subtitle = site.name + ' · ' + types[site.type];
          addControls({
            photo, code, pinCode: related.map(sceneNumber).join('–'), title: chapters[first].nameZh,
            subtitle, coords: site.coords, frame, active: view.site === site && view.index === first, type: site.type,
            action: () => travelToStory(first, site)
          });
          const second = related[1];
          addChoice({
            photo, code: sceneNumber(second), title: chapters[second].nameZh, subtitle, type: site.type,
            active: view.site === site && view.index === second, action: () => travelToStory(second, site)
          });
        }
      });
    }

    if (region) {
      for (const mountain of mountains) {
        const [x, y] = project(mountain.coords, frame);
        if (x < 15 || x > W - 15 || y < 38 || y > H - 20) continue;
        const photo = photos[mountain.photo];
        usedPhotos.add(photo);
        const landmark = createElement('div', 'adventure-pin mountain-pin');
        landmark.setAttribute('aria-hidden', 'true');
        const picture = createElement('span', 'pin-image');
        placeImage(picture, photo, 'pyramid');
        landmark.append(picture);
        place(landmark, mountain.coords, frame);
        pins.append(landmark);
      }
    }
    renderMapCredits(usedPhotos);

    const traveler = el('adventure-traveler');
    traveler.hidden = !view.site || (region && view.site.region !== view.region) || (view.valley && view.site.type !== 'tomb');
    if (!traveler.hidden) place(traveler, region ? view.site.coords : regions[view.site.region].overview, frame);
  }

  function renderMapCredits(usedPhotos) {
    const existing = el('adventure-credit');
    const details = createElement('details', 'adventure-credit');
    details.id = 'adventure-credit';
    details.open = Boolean(existing?.open);
    const list = document.createElement('ul');
    for (const photo of usedPhotos) {
      const item = createElement('li', '', photo[4] + ' · ');
      addPhotoCredit(item, photo);
      list.append(item);
    }
    details.append(createElement('summary', '', '地標圖像來源'), list);
    if (existing) existing.replaceWith(details);
    else el('adventure-map-note').after(details);
  }

  function scrollToMap() {
    const heading = el('adventure-heading');
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  function showMap(region, valley = false) {
    view.valley = valley;
    setExploreView('map');
    view.region = region;
    renderMap();
    scrollToMap();
  }

  function setExploreView(mode) {
    document.body.dataset.adventureView = mode;
    for (const name of ['map', 'timeline']) {
      el('explore-' + name).setAttribute('aria-pressed', String(name === mode));
    }
    el('history-scroll').hidden = mode !== 'timeline';
  }

  function focusTimelineItem(item, offset = 0) {
    item.focus({ preventScroll: true });
    const top = window.scrollY + item.getBoundingClientRect().top;
    window.scrollTo({ top: Math.max(0, top - Math.max(offset, el('explore-nav').offsetHeight + 12)), behavior: 'instant' });
  }

  function setTimelineFilter(themed) {
    timeline.themed = themed;
    el('history-all').setAttribute('aria-pressed', String(!themed));
    el('history-tombs').setAttribute('aria-pressed', String(themed));
    el('history-filter-note').hidden = !themed;
    chapterEras.forEach(era => {
      const group = el('history-' + era.id);
      const hasTombs = chapters.some(chapter => chapter.eraId === era.id && chapter.id in tombRoute);
      group.hidden = themed && !hasTombs;
      el('history-link-' + era.id).hidden = themed && !hasTombs;
    });
    chapters.forEach((chapter, index) => {
      const highlight = tombRoute[chapter.id];
      const card = timelineCards[index];
      card.hidden = themed && !highlight;
      card.querySelector('.history-summary').textContent = themed && highlight ? highlight : chapter.turningPoint;
    });
  }

  function showTimeline(index) {
    if (view.traveling) return;
    setExploreView('timeline');
    if (index == null) {
      el('history-heading').focus({ preventScroll: true });
      return;
    }
    const card = timelineCards[index];
    const restorePosition = !card.hidden && timeline.opened === index;
    if (card.hidden) setTimelineFilter(false);
    focusTimelineItem(card, restorePosition ? timeline.offset : 24);
  }

  function initializeTimeline() {
    const spans = chapterEras.map(era => era.span.match(/\d+/g).map(Number));
    const oldest = Math.max(...spans.flat());
    const latest = Math.min(...spans.flat());
    const position = year => (oldest - year) / (oldest - latest) * 100;
    const scale = el('history-scale');
    scale.append(createElement('span', 'history-axis'));

    chapterEras.forEach((era, eraIndex) => {
      const [begin, end] = spans[eraIndex];
      const band = createElement('span', 'history-range');
      band.style.left = position(begin) + '%';
      band.style.width = position(end) - position(begin) + '%';
      band.style.backgroundColor = era.color;
      band.setAttribute('aria-hidden', 'true');
      scale.append(band);

      const section = createElement('section', 'history-era');
      section.id = 'history-' + era.id;
      section.style.setProperty('--era-color', era.color);
      const heading = createElement('h3', 'font-serif-display', era.label);
      heading.tabIndex = -1;
      section.append(heading, createElement('time', '', era.span));
      el('history-chapters').append(section);

      const jump = createElement('button', '', era.label);
      jump.type = 'button';
      jump.id = 'history-link-' + era.id;
      jump.style.setProperty('--era-color', era.color);
      jump.addEventListener('click', () => focusTimelineItem(heading, 16));
      el('history-era-links').append(jump);

      chapters.forEach((chapter, index) => {
        if (chapter.eraId !== era.id) return;
        const site = mainSite(index);
        const card = createElement('button', 'history-card');
        card.type = 'button';
        const picture = createElement('span', 'history-picture');
        placeImage(picture, photos[site.chapters[0]], site.type, true);
        const details = createElement('span', '');
        details.append(
          createElement('strong', 'font-serif-display', sceneNumber(index) + ' · ' + chapter.nameZh),
          createElement('time', '', chapter.yearsText),
          createElement('span', 'history-summary', chapter.turningPoint)
        );
        card.append(picture, details);
        card.addEventListener('click', () => {
          timeline.opened = index;
          timeline.offset = Math.max(12, card.getBoundingClientRect().top);
          view.site = site;
          view.index = index;
          enterStory(index);
        });
        timelineCards[index] = card;
        section.append(card);
      });
    });

    [oldest, 2000, 1000, latest].forEach((year, index) => {
      const tick = createElement('span', 'history-tick', index === 0 ? '前 ' + year : String(year));
      tick.style.left = position(year) + '%';
      tick.dataset.edge = index === 0 ? 'start' : year === latest ? 'end' : 'middle';
      scale.append(tick);
    });
    el('history-all').addEventListener('click', () => setTimelineFilter(false));
    el('history-tombs').addEventListener('click', () => setTimelineFilter(true));
  }

  function mainSite(index) {
    return sites.find(site => site.chapters.includes(chapters[index].id));
  }

  async function travelToStory(index, destination = mainSite(index)) {
    if (view.traveling || !destination) return;
    const motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const origin = view.site;
    view.traveling = true;
    el('adventure-status').textContent = '前往' + destination.name;

    try {
      if (motion && origin !== destination) {
        const local = (!origin && view.region === destination.region) || origin?.region === destination.region;
        const zoomValley = local && view.valley && destination.type === 'tomb' && (!origin || origin.type === 'tomb');
        showMap(local ? destination.region : null, zoomValley);
        const traveler = el('adventure-traveler');
        const frame = zoomValley ? valleyFrame : local ? regions[destination.region].frame : overviewFrame;
        const end = local ? destination.coords : regions[destination.region].overview;
        const start = origin
          ? (local ? origin.coords : regions[origin.region].overview)
          : [(frame[0] + frame[1]) / 2, frame[2] + (frame[3] - frame[2]) * .12];
        traveler.hidden = false;
        place(traveler, start, frame);
        traveler.getBoundingClientRect();
        traveler.classList.add('travelling');
        place(traveler, end, frame);
        await new Promise(resolve => window.setTimeout(resolve, 510));
        traveler.classList.remove('travelling');
      }
      view.index = index;
      view.site = destination;
      enterStory(index);
    } finally {
      view.traveling = false;
    }
  }

  function externalLink(url, label) {
    const link = createElement('a', '', label);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  }

  function renderSiteMedia(site) {
    const panel = el('site-media-content');
    el('site-media').hidden = false;
    const info = createElement('p', 'text-base mb-2', types[site.type] + ' · ' + site.name);
    const description = createElement('p', 'text-base mb-3', site.note);
    const source = externalLink(site.source, '遺跡資料 ↗');
    panel.replaceChildren(info, description, source);

    const photo = photos[site.alternate ? 'nubia' : site.chapters[0]];
    if (photo) {
      const figure = createElement('figure', 'mt-3 overflow-hidden rounded-lg border border-[#D8CCB8]');
      const anchor = externalLink(photoPage(photo), '');
      const image = document.createElement('img');
      image.src = photoUrl(photo);
      image.alt = photo[4];
      image.loading = 'lazy';
      image.addEventListener('error', () => {
        anchor.textContent = '在 Wikimedia Commons 開啟圖像 ↗';
        anchor.className = 'block p-3 text-sm';
      }, { once: true });
      anchor.append(image);
      const caption = createElement('figcaption', 'p-2 text-sm', photo[4] + ' · ');
      addPhotoCredit(caption, photo);
      figure.append(anchor, caption);
      panel.append(figure);
    }
  }

  window.adventureMap = {
    initialize(data, eras, openChapter) {
      chapters = data;
      chapterEras = eras;
      initializeTimeline();
      el('explore-nav').hidden = false;
      el('chapter-history').hidden = false;
      el('explore-map').addEventListener('click', () => {
        if (!view.traveling && document.body.dataset.adventureView !== 'map') {
          setExploreView('map');
          renderMap();
        }
      });
      el('explore-timeline').addEventListener('click', () => showTimeline());
      el('chapter-history').addEventListener('click', () => showTimeline(view.index));
      enterStory = openChapter;
      el('adventure').hidden = false;
      el('adventure-return').hidden = false;
      el('adventure-start').addEventListener('click', () => travelToStory(0));
      el('adventure-all').addEventListener('click', () => {
        if (!view.traveling) showMap(null);
      });
      el('adventure-return').addEventListener('click', () => showMap(view.site?.region ?? null, view.valley && view.site?.type === 'tomb'));
      el('adventure-valley').addEventListener('click', () => {
        if (!view.traveling) showMap('thebes', !view.valley);
      });
      setExploreView('map');
      renderMap();
    },
    showStory(index) {
      if (!chapters) return false;
      const openedFromExplorer = document.body.dataset.adventureView !== 'story';
      if (view.index !== index || !view.site) view.site = mainSite(index);
      view.index = index;
      setExploreView('story');
      return openedFromExplorer;
    },
    updateChapter(index) {
      if (!chapters) return;
      timelineCards.forEach((card, i) => {
        if (i === index) card.setAttribute('aria-current', 'step');
        else card.removeAttribute('aria-current');
      });
      const era = chapterEras.find(item => item.id === chapters[index].eraId);
      el('chapter-history').textContent = era.label + ' · 第 ' + sceneNumber(index) + '／' + chapters.length + ' 幕 ↗';
      el('chapter-history').setAttribute('aria-label', el('chapter-history').textContent + '，回時間線');
      renderSiteMedia(view.site ?? mainSite(index));
    },
    showTimeline,
    travelToStory
  };
})();
