(() => {
  const regions = {
    delta: { label: '尼羅河三角洲', overview: [30.28, 31.13], caption: '亞歷山卓港與塞易斯古都', frame: [29.62, 30.97, 30.71, 31.38] },
    pyramids: { label: '吉薩與薩卡拉', overview: [31.14, 29.93], caption: '從階梯金字塔到吉薩大金字塔', frame: [31.02, 31.34, 29.76, 30.04] },
    amarna: { label: '阿瑪納', overview: [30.9852, 27.6262], caption: '阿肯那頓的新都與皇家谷地', frame: [30.84, 31.035, 27.575, 27.735] },
    abydos: { label: '阿拜多斯', overview: [31.924, 26.176], caption: '早王朝陵墓與新王國金字塔遺址', frame: [31.885, 31.961, 26.143, 26.215] },
    thebes: { label: '底比斯與帝王谷', overview: [32.602, 25.74], caption: '山峰、岩窟墓與西岸祭殿', frame: [32.592, 32.613, 25.729, 25.748] },
    nubia: { label: '阿布辛貝', overview: [31.6256, 22.3369], caption: '納瑟湖畔的拉美西斯二世岩窟神廟', frame: [31.57, 31.68, 22.285, 22.389] },
    kush: { label: '庫魯・今日蘇丹', overview: [31.77093, 18.40947], caption: '庫施王室金字塔墓區', frame: [31.733, 31.816, 18.364, 18.455] }
  };

  const types = {
    pyramid: '金字塔', ruin: '陵墓遺址', tomb: '岩窟墓',
    temple: '祭殿', city: '古城', rock: '岩窟神廟'
  };

  // Representative entrance or complex centroid, in [longitude, latitude].
  const sites = [
    { chapters: ['narmer'], region: 'abydos', coords: [31.90799, 26.17584], type: 'ruin', name: '烏姆卡伯 B17／B18', note: '一般認為這兩間墓室屬於那爾邁。', source: 'https://vici.org/vici/50389/?lang=en' },
    { chapters: ['djoser'], region: 'pyramids', coords: [31.2167, 29.8711], type: 'pyramid', name: '左塞爾階梯金字塔', note: '六層階梯矗立在薩卡拉墓區。', source: 'https://egymonuments.gov.eg/en/monuments/the-step-pyramid-complex-of-djoser/', photo: ['8/82', 'Step_Pyramid_of_Djoser.jpg', 'Dr. Ondřej Havelka', 'by-sa/4.0'] },
    { chapters: ['khufu'], region: 'pyramids', coords: [31.1342, 29.9792], type: 'pyramid', name: '古夫大金字塔', note: '吉薩三座主要金字塔中，古夫的大金字塔位於最北。', source: 'https://egymonuments.gov.eg/monuments/the-great-pyramid/', photo: ['e/e7', 'Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg', 'Douwe C. van der Zee', 'by-sa/4.0'] },
    { chapters: ['pepi2'], region: 'pyramids', coords: [31.2167, 29.8333], type: 'pyramid', name: '南薩卡拉佩皮二世金字塔', note: '金字塔與周邊祭祀建築現為遺址。', source: 'https://aebc.ff.cuni.cz/database/207_saq_s/' },
    { chapters: ['mentuhotep2'], region: 'thebes', coords: [32.60611, 25.73736], type: 'temple', name: '門圖霍特普二世祭殿', note: '坐落在代爾巴哈里峭壁下，緊鄰後來的哈特謝普蘇特祭殿。', source: 'https://egyptartefacts.griffith.ox.ac.uk/node/1074/' },
    { chapters: ['senusret3'], region: 'pyramids', coords: [31.2256, 29.8189], type: 'pyramid', name: '達舒爾辛努塞爾特三世金字塔', note: '泥磚塔心現已崩塌成丘。法老本人可能葬於阿拜多斯。', source: 'https://www.metmuseum.org/essays/the-pyramid-complex-of-senwosret-iii-in-the-cemeteries-of-dahshur' },
    { chapters: ['ahmose1'], region: 'abydos', coords: [31.9378, 26.1757], type: 'pyramid', name: '雅赫摩斯一世金字塔遺址', note: '阿拜多斯的王室祭祀建築群。他是否葬於這裡仍有疑問。', source: 'https://archive.archaeology.org/0107/abstracts/abydos.html' },
    { chapters: ['hatshepsut'], region: 'thebes', coords: [32.60658, 25.73828], type: 'temple', name: '哈特謝普蘇特祭殿', note: '峭壁下的階台是祭殿。她的陵墓入口位於帝王谷 KV20。', source: 'https://egymonuments.gov.eg/monuments/hatshepsut-temple/', photo: ['7/7f', 'Hatshepsut_Temple.jpg', 'James G. Howes'] },
    { chapters: ['thutmose3'], region: 'thebes', coords: [32.60064, 25.73819], type: 'tomb', name: '圖特摩斯三世墓 KV34', note: '入口位在帝王谷南側的狹窄岩隙中。', source: 'https://en.wikipedia.org/wiki/KV34' },
    { chapters: ['akhenaten'], region: 'amarna', coords: [30.9852, 27.6262], type: 'tomb', name: '阿瑪納皇家墓 26 號', note: '入口藏在阿瑪納古城東側的皇家谷地。', source: 'https://www.amarnaproject.com/amarna-the-place/royal-tomb/' },
    { chapters: ['tutankhamun'], region: 'thebes', coords: [32.60150, 25.74020], type: 'tomb', name: '圖坦卡門墓 KV62', note: '墓室不大，彩繪集中在埋葬室的牆面。', source: 'https://egymonuments.gov.eg/monuments/tomb-of-tutankhamun/', photo: ['0/0e', 'Tutankhamun_KV62_burial_chamber_and_sarcophagus.jpg', 'Romagy', 'by-sa/4.0'] },
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
    { coords: [32.59604,25.73642], name: '古爾恩山峰' },
    { coords: [31.8283,18.5367], name: '巴爾卡爾山' }
  ];

  const el = id => document.getElementById(id);
  const view = { region: null, valley: false, index: 0, site: null, traveling: false };
  let chapters;
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
      if (x < 15 || x > W - 15 || y < 25 || y > H - 20) return '';
      const label = view.region ? '<text x="-16" y="29" text-anchor="start" fill="#493524" font-size="17">' + mountain.name + '</text>' : '';
      return '<g transform="translate(' + x + ' ' + y + ')"><path d="M-26 9 L0 -35 L24 9Z" fill="#84624a" stroke="#523e30" stroke-width="2"/><path d="M0 -35 L8 9 H24Z" fill="#a87f55"/>' + label + '</g>';
    }).join('');
    const mapLabels = view.region ? '' : '<text x="230" y="32">地中海</text><text x="275" y="276" transform="rotate(-12 275 276)">埃及</text><text x="287" y="483">蘇丹</text><text x="196" y="356" fill="#2c514b">尼羅河</text>';
    el('adventure-terrain').innerHTML =
      '<defs><linearGradient id="dune-sand" x2=".8" y2="1"><stop stop-color="#f5dda9"/><stop offset="1" stop-color="#d6aa72"/></linearGradient>' +
      '<pattern id="dune-lines" width="135" height="98" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)"><path d="M-24 15 Q13 0 53 17 T137 17 M-13 41 Q26 26 62 43 T145 45 M-29 74 Q17 60 53 76 T140 79" fill="none" stroke="#9c663c" opacity=".18" stroke-width="1.5"/><circle cx="31" cy="54" r="1" fill="#a47143" opacity=".32"/><circle cx="101" cy="64" r="1.5" fill="#95653e" opacity=".20"/></pattern></defs>' +
      '<rect width="480" height="530" fill="url(#dune-sand)"/><rect width="480" height="530" fill="url(#dune-lines)"/>' +
      '<path d="' + sea + '" fill="#83aaa3" stroke="#587d78" stroke-width="2"/><path d="' + waterways + '" fill="none" stroke="#759065" stroke-opacity=".42" stroke-width="14" stroke-linejoin="round"/><path d="' + waterways + '" fill="none" stroke="#417c80" stroke-width="5" stroke-linejoin="round"/>' +
      '<g fill="#62452f" font-size="20" font-weight="650">' + mapLabels + '</g>' + mountainMarks +
      '<path d="M447 50l7-19 7 19-7-5z" fill="#644029"/><text x="454" y="25" text-anchor="middle" fill="#644029" font-size="15">北</text>';
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

  function addControls(item) {
    const { code, title, subtitle, coords, frame, active, action, type, pinCode = code } = item;
    const pin = createElement('button', 'adventure-pin');
    pin.type = 'button';
    pin.setAttribute('aria-label', title);
    pin.setAttribute('aria-description', '地圖代號 ' + pinCode);
    pin.dataset.type = type || 'region';
    if (pinArt[type]) {
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('viewBox', '0 0 34 28');
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = pinArt[type];
      pin.append(icon);
    }
    pin.append(createElement('span', '', pinCode));
    place(pin, coords, frame);
    const choice = createElement('button', 'adventure-choice');
    choice.type = 'button';
    const details = document.createElement('span');
    details.append(createElement('strong', '', title), createElement('small', '', subtitle));
    const arrow = createElement('span', '', '›');
    arrow.setAttribute('aria-hidden', 'true');
    choice.append(createElement('span', 'adventure-code', code), details, arrow);
    for (const control of [pin, choice]) {
      if (active) control.setAttribute('aria-current', 'location');
      control.addEventListener('click', action);
    }
    el('adventure-pins').append(pin);
    el('adventure-regions').append(choice);
    return choice;
  }

  const sceneNumber = index => String(index + 1).padStart(2, '0');

  function renderMap() {
    const region = regions[view.region];
    const frame = view.valley ? valleyFrame : region?.frame ?? overviewFrame;
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
      : 'A–G 是區域代號。進入區域後，數字代表故事幕號。河道與地形為簡化繪製。';
    drawTerrain(frame);

    if (!region) {
      Object.entries(regions).forEach(([id, entry], i) => {
        addControls({
          code: 'ABCDEFG'[i], title: entry.label, subtitle: entry.caption, coords: entry.overview,
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
        if (related.length === 1) {
          addControls({
            code, title: site.name, subtitle: types[site.type] + ' · ' + chapters[first].nameZh + (site.alternate ? '（第 ' + sceneNumber(first) + ' 幕的另一處遺跡）' : ''),
            coords: site.coords, frame, active: view.site === site, type: site.type,
            action: () => travelToStory(first, site)
          });
        } else {
          const firstChoice = addControls({
            code, pinCode: related.map(sceneNumber).join('–'), title: chapters[first].nameZh,
            subtitle: site.name + ' · ' + types[site.type], coords: site.coords,
            frame, active: view.site === site, type: site.type, action: () => travelToStory(first, site)
          });
          const second = related[1];
          const other = firstChoice.cloneNode(true);
          other.removeAttribute('aria-current');
          other.querySelector('.adventure-code').textContent = sceneNumber(second);
          if (view.site === site && view.index === second) {
            firstChoice.removeAttribute('aria-current');
            other.setAttribute('aria-current', 'location');
          }
          other.querySelector('strong').textContent = chapters[second].nameZh;
          other.addEventListener('click', () => travelToStory(second, site));
          choices.append(other);
        }
      });
    }

    const traveler = el('adventure-traveler');
    traveler.hidden = !view.site || (region && view.site.region !== view.region) || (view.valley && view.site.type !== 'tomb');
    if (!traveler.hidden) place(traveler, region ? view.site.coords : regions[view.site.region].overview, frame);
  }

  function scrollToMap() {
    const heading = el('adventure-heading');
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  function showMap(region, valley = false) {
    view.valley = valley;
    document.body.dataset.adventureView = 'map';
    view.region = region;
    renderMap();
    scrollToMap();
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

    if (site.photo) {
      const [hash, filename, author, license] = site.photo;
      const page = 'https://commons.wikimedia.org/wiki/File:' + filename;
      const figure = createElement('figure', 'mt-3 overflow-hidden rounded-lg border border-[#D8CCB8]');
      const anchor = externalLink(page, '');
      const image = document.createElement('img');
      image.src = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/' + hash + '/' + filename + '/960px-' + filename;
      image.alt = site.name + '實景';
      image.loading = 'lazy';
      image.addEventListener('error', () => {
        anchor.textContent = '在 Wikimedia Commons 開啟實景照片 ↗';
        anchor.className = 'block p-3 text-sm';
      }, { once: true });
      anchor.append(image);
      const caption = createElement('figcaption', 'p-2 text-sm', '實景照片 · ');
      caption.append(externalLink(page, author + '／Wikimedia Commons'));
      if (license) caption.append(' · ', externalLink('https://creativecommons.org/licenses/' + license + '/', 'CC BY-SA 4.0'));
      figure.append(anchor, caption);
      panel.append(figure);
    }
  }

  window.adventureMap = {
    initialize(data, openChapter) {
      chapters = data;
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
      document.body.dataset.adventureView = 'map';
      renderMap();
    },
    showStory(index) {
      if (!chapters) return false;
      const openedFromMap = document.body.dataset.adventureView === 'map';
      if (view.index !== index || !view.site) view.site = mainSite(index);
      view.index = index;
      document.body.dataset.adventureView = 'story';
      return openedFromMap;
    },
    updateChapter(index) {
      if (chapters) renderSiteMedia(view.site ?? mainSite(index));
    },
    travelToStory
  };
})();
