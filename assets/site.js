/* 반짝이네 삼촌 — 공통 스크립트 (redesign)
 * 콘텐츠 렌더링, 견적 질문지, Supabase 저장, 유입 추적, 모션을 담당합니다.
 * 공개용(publishable) 키만 사용합니다. 고객 정보 조회는 RLS로 관리자만 가능합니다.
 */
(() => {
'use strict';
const CONFIG = {
  supabaseUrl: 'https://wqojzrpsfjkecfybmuax.supabase.co',
  supabaseKey: 'sb_publishable_VmJzx86G5PeNmazwCRXWgQ_Wdgaz5EC',
  consentVersion: '2026-11-20-v2'
};
const C = window.SITE_CONTENT || {};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
const safeUrl = u => (/^https:\/\//.test(u || '') ? u : '');

/* ── 유입 추적 (30일 보관, 광고 클릭 시 갱신) ── */
const TRACK_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','n_media','n_query','n_rank','n_ad_group','n_ad','n_keyword_id','n_keyword','n_campaign_type','n_ad_group_type','NaPm'];
const store = (() => { try { return window.localStorage; } catch (e) { return null; } })();
const currentAd = () => { const q = new URLSearchParams(location.search), o = {}; TRACK_KEYS.forEach(k => { const v = q.get(k); if (v) o[k] = v.slice(0, 200); }); return o; };
const touch = (() => {
  let t = null; try { t = JSON.parse((store && store.getItem('banjjak_touch_v1')) || 'null'); } catch (e) {}
  if (t && (!t.first_visit_at || Date.now() - Date.parse(t.first_visit_at) > 30 * 864e5)) t = null;
  const ad = currentAd();
  let ref = ''; try { if (document.referrer) { const r = new URL(document.referrer); if (r.host !== location.host) ref = (r.origin + r.pathname).slice(0, 200); } } catch (e) {}
  if (!t || Object.keys(ad).length) {
    t = { params: Object.keys(ad).length ? ad : ((t && t.params) || {}), landing_page: location.pathname, first_visit_at: new Date().toISOString(), referrer: ref || ((t && t.referrer) || '') };
    try { store && store.setItem('banjjak_touch_v1', JSON.stringify(t)); } catch (e) {}
  }
  return t;
})();
function track(name, params) { try { if (typeof gtag === 'function') gtag('event', name, Object.assign({ page_category: document.body.dataset.page || '' }, params || {})); } catch (e) {} }

/* ── 콘텐츠 바인딩 ── */
function photo(src, label, tag) {
  const s = safeUrl(src) || (/^(assets|images)\//.test(src || '') ? src : '');
  return `<div class="photo">${s ? `<img src="${esc(s)}" alt="${esc(label)}" loading="lazy">` : `<div class="ph">${esc(label)}<br>실제 사진 등록 예정</div>`}${tag ? `<span class="tag">${esc(tag)}</span>` : ''}</div>`;
}
function bindText() {
  $$('[data-c]').forEach(el => { const v = get(C, el.dataset.c); if (v != null) el.textContent = v; });
  $$('[data-photo]').forEach(el => { el.outerHTML = photo(get(C, el.dataset.photo), el.dataset.label || '대표 작업 사진'); });
}
function bindSite() {
  const s = C.site || {};
  $$('[data-blog]').forEach(a => { const u = safeUrl(s.blogUrl); if (u) { a.href = u; a.target = '_blank'; a.rel = 'noopener'; } else a.remove(); });
  $$('[data-kakao]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); const u = safeUrl(s.kakaoUrl);
    if (!/^https:\/\/open\.kakao\.com\//.test(u)) { alert('카카오톡 상담 링크를 준비 중입니다. 견적 신청을 이용해 주세요.'); return; }
    track('kakao_click'); window.open(u, '_blank', 'noopener,noreferrer');
  }));
  const b = C.banner || {}; const bn = $('#banner');
  if (bn && b.enabled && b.text) { bn.hidden = false; const u = safeUrl(b.link); bn.innerHTML = u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(b.text)}</a>` : esc(b.text); }
  const biz = s.business || {}; const fb = $('#bizinfo');
  if (fb) { const parts = [biz.name && '상호 ' + biz.name, biz.owner && '대표 ' + biz.owner, biz.regNo && '사업자등록번호 ' + biz.regNo, biz.address, s.phone && '연락처 ' + s.phone, biz.email].filter(Boolean); fb.textContent = parts.length ? parts.join(' · ') : '사업자 정보 등록 예정'; }
}
const R = {
  services(el, list) { el.innerHTML = list.map(x => `<a class="choice" href="${esc(x.href)}" data-rv>${photo(x.image, x.title + ' 대표 사진')}<div class="body"><div class="no">${esc(x.no)} — ${esc(x.en)}</div><h2>${esc(x.title)}</h2><p>${esc(x.desc)}</p></div><span class="go" aria-hidden="true">↗</span></a>`).join(''); },
  concerns(el, list) { el.innerHTML = list.map((x, i) => `<div class="concern" data-rv><div class="n">0${i + 1}</div><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p></div>`).join(''); },
  types(el, list) {
    el.innerHTML = `<div class="tabs" role="tablist">${list.map((x, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-i="${i}">${esc(x.title)}</button>`).join('')}</div><div class="tabpanel" role="tabpanel"></div>`;
    const panel = $('.tabpanel', el);
    const show = i => { const x = list[i]; panel.classList.remove('fade-swap'); void panel.offsetWidth; panel.classList.add('fade-swap');
      panel.innerHTML = `<div><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p><button class="btn" data-quote data-preset="${esc(x.title)}">이 서비스로 견적 받기 <span class="arr">↗</span></button></div>${photo(x.image, x.title + ' 작업 사진')}`; };
    $$('.tab', el).forEach(t => t.addEventListener('click', () => { $$('.tab', el).forEach(o => o.setAttribute('aria-selected', String(o === t))); show(+t.dataset.i); }));
    show(0);
  },
  scope(el, list) { el.innerHTML = list.map(x => `<div class="scope-card" data-rv><h3>${esc(x.area)}<span>${x.items.length}개 항목</span></h3><ul>${x.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join(''); },
  gallery(el, list) { el.innerHTML = list.map(x => `<figure style="margin:0" data-rv><div class="ba">${photo(x.before, x.title + ' 작업 전', 'BEFORE')}${photo(x.after, x.title + ' 작업 후', 'AFTER')}</div><figcaption class="ba-cap">${esc(x.title)}<span>${x.before && x.after ? '실제 작업' : '사진 등록 예정'}</span></figcaption></figure>`).join(''); },
  process(el, list) { el.innerHTML = list.map(x => `<div class="step" data-rv><i></i><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p></div>`).join(''); },
  extra(el, x) { el.innerHTML = `<div class="extra-box" data-rv><h3>추가 요금이 생길 수 있는 경우</h3><ul>${x.added.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div><div class="extra-box" data-rv><h3>기본 작업에서 제외되는 범위</h3><ul>${x.excluded.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`; },
  faq(el, list) { el.innerHTML = list.map(x => `<details data-rv><summary>${esc(x.q)}<i aria-hidden="true"></i></summary><div class="a">${esc(x.a)}</div></details>`).join(''); }
};
function bindLists() { $$('[data-r]').forEach(el => { const [fn, path] = el.dataset.r.split(':'); const v = get(C, path); if (v && R[fn]) R[fn](el, v); }); }

/* ── 견적 질문지 ── */
function Quote(cfg) {
  const sheet = $('#quote'); if (!sheet || !cfg) return null;
  const form = $('#qform', sheet), body = $('#qsteps', sheet), bar = $('#qbarFill', sheet), cnt = $('#qcount', sheet);
  const prev = $('#qprev', sheet), next = $('#qnext', sheet), err = $('#qerr', sheet), main = $('#qmain', sheet), done = $('#qdone', sheet);
  const steps = cfg.steps; let cur = 0, submitting = false, requestId = null, lastFocus = null;
  const today = (() => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); })();
  const optHtml = (s, type) => `<div class="opts${s.columns ? ' c' + s.columns : ''}">${s.options.map((o, i) => `<label class="opt"><input type="${type}" name="q_${esc(s.id)}" value="${i}"><span><b>${esc(o.label)}</b>${o.sub ? `<small>${esc(o.sub)}</small>` : ''}</span></label>`).join('')}</div>`;
  const srcOpts = (C.sources || ['홈페이지']).map(s => `<option>${esc(s)}</option>`).join('');
  body.innerHTML = steps.map((s, i) => {
    let inner = '';
    if (s.type === 'single') inner = optHtml(s, 'radio');
    else if (s.type === 'multi') inner = optHtml(s, 'checkbox');
    else if (s.type === 'text') inner = `<label class="fld"><span class="sr">${esc(s.title)}</span><input name="${esc(s.field)}" maxlength="${s.maxlength || 100}" placeholder="${esc(s.placeholder || '')}" autocomplete="off"></label>`;
    else if (s.type === 'schedule') inner = `<label class="fld">희망 날짜<input name="date" type="date" min="${today}"></label><div class="sublabel">희망 시간대</div>${optHtml(Object.assign({ columns: 3 }, s), 'radio')}<label class="fld" style="margin-top:16px">다른 후보 날짜 (선택)<input name="alt_dates" maxlength="100" placeholder="예: 12월 13일, 12월 셋째 주"></label>`;
    else if (s.type === 'notes') inner = `<label class="fld">요청 사항 (선택)<textarea name="details" rows="4" maxlength="800" placeholder="예: 오후 3시 이후 이삿짐이 들어와요."></textarea></label><label class="fld">반짝이네 삼촌을 어떻게 알게 되셨나요?<select name="source">${srcOpts}</select></label>`;
    else if (s.type === 'contact') inner = `<div class="summary" id="qsummary"></div><label class="fld">성함<input name="name" maxlength="60" autocomplete="name" placeholder="성함"></label><label class="fld">연락처<input name="phone" type="tel" inputmode="tel" maxlength="30" autocomplete="tel" placeholder="010-0000-0000"></label>
      <div class="consent"><label><input type="checkbox" id="cPrivacy"><span><strong>[필수] 개인정보 수집·이용 동의</strong><small>수집: ${esc(cfg.consentCollect)}<br>목적: 견적 안내, 상담, 일정 조율 및 문의 이력 관리<br>보유: 상담 종료 후 1년(법령상 별도 보존 의무가 있는 경우 제외)<br>동의를 거부할 수 있으나, 이 경우 견적 신청이 불가합니다.</small></span></label>
      <label><input type="checkbox" id="cMarketing"><span><strong>[선택] 광고성 정보 수신 동의</strong><small>할인·이벤트·재이용 안내를 문자/전화로 받습니다. 동의하지 않아도 신청할 수 있으며 언제든 철회할 수 있습니다.</small></span></label>
      <span class="pv">동의 여부·문구 버전·일시가 함께 기록됩니다. <a href="privacy.html" target="_blank" rel="noopener">개인정보 처리방침</a></span></div>`;
    return `<section class="qstep" data-i="${i}" aria-labelledby="qt${i}"><span class="eyebrow">STEP ${String(i + 1).padStart(2, '0')}</span><h3 id="qt${i}">${esc(s.title)}</h3><p class="hint">${esc(s.hint || '')}</p>${inner}</section>`;
  }).join('');
  const secs = $$('.qstep', body);
  const val = n => { const el = form.elements[n]; return el ? String(el.value || '').trim() : ''; };
  const picked = s => $$(`[name="q_${s.id}"]:checked`, form).map(i => s.options[+i.value]);
  const digits = () => val('phone').replace(/[^0-9]/g, '');
  function valid(i) {
    const s = steps[i];
    switch (s.type) {
      case 'single': return picked(s).length === 1;
      case 'multi': return picked(s).length > 0;
      case 'text': return val(s.field).length >= (s.minlength || 1);
      case 'schedule': return !!val('date') && val('date') >= today && picked(s).length === 1;
      case 'contact': return val('name').length > 0 && /^0[0-9]{8,10}$/.test(digits()) && /^[0-9][0-9 ()-]{6,29}$/.test(val('phone')) && $('#cPrivacy', form).checked;
      default: return true;
    }
  }
  const refresh = () => { next.disabled = submitting || !valid(cur); };
  function summary() {
    const lines = [];
    steps.forEach(s => {
      if (s.type === 'single' || s.type === 'multi') { const p = picked(s).filter(o => !o.none).map(o => o.label); lines.push(`${(s.label || s.title)}: ${p.join(', ') || '없음'}`); }
      else if (s.type === 'text') lines.push(`${(s.label || s.title)}: ${val(s.field)}`);
      else if (s.type === 'schedule') lines.push(`희망 일정: ${val('date')} ${picked(s).map(o => o.label).join('')}${val('alt_dates') ? ' / 후보: ' + val('alt_dates') : ''}`);
    });
    return lines.join('\n');
  }
  function show(i) {
    cur = i; secs.forEach((s, k) => s.classList.toggle('on', k === i));
    bar.style.width = Math.round((i + 1) / steps.length * 100) + '%'; cnt.textContent = `${i + 1} / ${steps.length}`;
    prev.style.visibility = i === 0 ? 'hidden' : 'visible'; next.textContent = i === steps.length - 1 ? '견적 신청하기' : '다음'; err.textContent = '';
    if (steps[i].type === 'contact') $('#qsummary', form).textContent = summary();
    $('.scroll', sheet).scrollTop = 0; refresh();
    if (matchMedia('(hover:hover)').matches) { const f = $('input:not([type=radio]):not([type=checkbox]),textarea', secs[i]); if (f) setTimeout(() => f.focus({ preventScroll: true }), 60); }
  }
  // "해당 없음"은 단독 선택
  steps.forEach(s => { if (s.type !== 'multi') return; const boxes = $$(`[name="q_${s.id}"]`, form);
    boxes.forEach(b => b.addEventListener('change', () => { if (!b.checked) return; const isNone = s.options[+b.value].none; boxes.forEach(o => { if (o !== b && (isNone || s.options[+o.value].none)) o.checked = false; }); })); });
  form.addEventListener('input', refresh);
  form.addEventListener('change', e => { refresh(); const s = steps[cur];
    if (e.target.type === 'radio' && s.type === 'single' && cur < steps.length - 1) setTimeout(() => { if (valid(cur)) show(cur + 1); }, 280); });
  form.addEventListener('submit', e => { e.preventDefault(); next.click(); });
  prev.addEventListener('click', () => cur > 0 && show(cur - 1));
  next.addEventListener('click', () => {
    if (!valid(cur)) { err.textContent = steps[cur].type === 'contact' ? '성함, 연락처(숫자), 필수 동의를 확인해 주세요.' : '항목을 선택하거나 입력해 주세요.'; return; }
    cur < steps.length - 1 ? show(cur + 1) : submit();
  });
  async function submit() {
    if (submitting) return;
    const svcStep = steps.find(s => s.id === 'service'); const svc = svcStep ? picked(svcStep)[0] : null;
    const memo = val('details');
    const details = ('[견적 질문지]\n' + summary() + (memo ? '\n\n[고객 요청 사항]\n' + memo : '')).slice(0, 1500);
    const attribution = Object.assign({}, touch.params || {}, currentAd(), { landing_category: cfg.category, landing_page: touch.landing_page || location.pathname, submit_page: location.pathname, first_visit_at: touch.first_visit_at || '' }, touch.referrer ? { referrer: touch.referrer } : {});
    if (!requestId) requestId = (crypto.randomUUID ? crypto.randomUUID() : ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)));
    const payload = { request_id: requestId, name: val('name'), phone: val('phone'), service: svc ? svc.service : '', requested_date: val('date'), area: val('address'), size: val('size'), source: val('source') || '홈페이지', details,
      privacy_agreed: true, marketing_agreed: $('#cMarketing', form).checked, consent_version: CONFIG.consentVersion, attribution, service_details: {} };
    submitting = true; refresh(); next.textContent = '보내는 중…'; err.textContent = '';
    const ctrl = new AbortController(); const timer = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch(CONFIG.supabaseUrl + '/rest/v1/rpc/submit_cleaning_inquiry', { method: 'POST', signal: ctrl.signal, headers: { apikey: CONFIG.supabaseKey, 'Content-Type': 'application/json' }, body: JSON.stringify({ p_payload: payload }) });
      if (!res.ok) { const e = new Error('HTTP ' + res.status); e.status = res.status; throw e; }
      track('generate_lead', { service_type: payload.service }); requestId = null; main.hidden = true; done.hidden = false;
    } catch (e) {
      err.textContent = e.status === 429 ? '같은 연락처로 짧은 시간에 여러 번 신청되었습니다. 잠시 후 다시 시도하시거나 카카오톡으로 문의해 주세요.' : e.status === 400 ? '입력 내용을 저장하지 못했습니다. 연락처와 날짜를 다시 확인해 주세요.' : '일시적인 오류로 접수하지 못했습니다. 잠시 후 다시 시도하시거나 카카오톡으로 문의해 주세요.';
      console.error(e);
    } finally { clearTimeout(timer); submitting = false; if (!main.hidden) { next.textContent = '견적 신청하기'; refresh(); } }
  }
  $('#qrestart', sheet).addEventListener('click', () => { form.reset(); main.hidden = false; done.hidden = true; show(0); });
  function open(preset) {
    lastFocus = document.activeElement; sheet.classList.add('open'); sheet.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    if (preset && cur === 0 && main.hidden === false) { const s = steps[0]; const idx = s.options.findIndex(o => o.label === preset);
      if (idx >= 0) { const r = $(`[name="q_${s.id}"][value="${idx}"]`, form); r.checked = true; show(1); return; } }
    show(cur); track('quote_open');
  }
  function close() { sheet.classList.remove('open'); sheet.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if (lastFocus) lastFocus.focus({ preventScroll: true }); }
  $$('[data-close]', sheet).forEach(b => b.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && sheet.classList.contains('open')) close(); });
  document.addEventListener('click', e => { const t = e.target.closest('[data-quote]'); if (t) { e.preventDefault(); open(t.dataset.preset); } });
  $$('[data-kakao-done]', sheet).forEach(b => b.addEventListener('click', () => $('[data-kakao]').click()));
  show(0);
  return { open };
}

/* ── 모션 ── */
function motion() {
  const hd = $('.hd'); if (hd) { const f = () => hd.classList.toggle('scrolled', scrollY > 8); f(); addEventListener('scroll', f, { passive: true }); }
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('motion');
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  $$('[data-rv]').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });
}

bindText(); bindLists(); bindSite();
const page = document.body.dataset.page;
Quote(get(C, 'quote.' + page));
motion();
})();
