/* ==================================================================
   1) Platform icon library
   ================================================================== */
const ICONS = {
  tiktok: {name:'تيك توك', kind:'فيديو قصير', color:'#22d1c4', bg:'#22d1c422',
    svg:`<svg viewBox="0 0 24 24" fill="none"><path d="M14 3c.4 2.2 1.9 3.7 4 4v3c-1.5 0-2.9-.4-4-1.2v5.6a5.4 5.4 0 11-5-5.4v3.1a2.3 2.3 0 102 2.3V3h3z" fill="#22d1c4"/></svg>`},
  instagram: {name:'انستجرام', kind:'صور وفيديو', color:'#fb4d8a', bg:'#fb4d8a22',
    svg:`<svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="url(#ig)" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" stroke="url(#ig)" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="#fb4d8a"/><defs><linearGradient id="ig" x1="3" y1="21" x2="21" y2="3"><stop offset="0" stop-color="#ffb648"/><stop offset=".5" stop-color="#fb4d8a"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs></svg>`},
  facebook: {name:'فيسبوك', kind:'فيديو ومنشورات', color:'#4f8cff', bg:'#4f8cff22',
    svg:`<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#4f8cff" stroke-width="1.8"/><path d="M13.8 8.2h1.4V5.9h-1.7c-1.9 0-2.9 1.1-2.9 2.9v1.3H9v2.3h1.6V19h2.4v-6.6h1.8l.3-2.3h-2.1V9c0-.5.3-.8.8-.8z" fill="#4f8cff"/></svg>`},
  pinterest: {name:'بينتريست', kind:'أفكار وصور', color:'#ff5a63', bg:'#ff5a6322',
    svg:`<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#ff5a63" stroke-width="1.8"/><path d="M10.5 18c.3-1 .9-3.5.9-3.5s.4.8 1.6.8c2.1 0 3.5-1.9 3.5-4.4 0-1.9-1.6-3.7-4.1-3.7-3.1 0-4.7 2.2-4.7 4.1 0 1.1.4 2.1 1.3 2.5.15.06.28 0 .32-.16l.13-.55c.04-.16.02-.22-.1-.36-.28-.34-.46-.78-.46-1.4 0-1.8 1.35-3.4 3.5-3.4 1.9 0 2.95 1.16 2.95 2.72 0 2.05-.9 3.78-2.25 3.78-.74 0-1.3-.62-1.12-1.37.21-.9.63-1.87.63-2.52 0-.58-.31-1.07-.96-1.07-.76 0-1.37.79-1.37 1.84 0 .67.23 1.13.23 1.13s-.77 3.28-.91 3.86c-.16.68-.1 1.63-.05 2.25" fill="#ff5a63"/></svg>`},
  snapchat: {name:'سناب شات', kind:'قصص وفيديو', color:'#fde047', bg:'#fde04722',
    svg:`<svg viewBox="0 0 24 24" fill="none"><path d="M12 4c2.4 0 3.9 1.9 3.8 4.2l-.1 1.6c1 .4 1.6.1 1.9-.1.3-.2.7-.1.8.2.1.4-.1.7-.4.9-.5.3-1.3.7-2 .9.1.5.5 1.6 1.9 2.5.3.2.3.6-.1.8-.5.2-1.1.4-1.6.5-.1.3-.2.7-.4 1-.2.2-.5.2-1 .1-.7-.1-1.3-.2-2.1.3-.7.5-1.4 1.1-2.7 1.1s-2-.6-2.7-1.1c-.8-.5-1.4-.4-2.1-.3-.5.1-.8.1-1-.1-.2-.3-.3-.7-.4-1-.5-.1-1.1-.3-1.6-.5-.4-.2-.4-.6-.1-.8 1.4-.9 1.8-2 1.9-2.5-.7-.2-1.5-.6-2-.9-.3-.2-.5-.5-.4-.9.1-.3.5-.4.8-.2.3.2.9.5 1.9.1l-.1-1.6C8.1 5.9 9.6 4 12 4z" stroke="#fde047" stroke-width="1.3" stroke-linejoin="round"/></svg>`},
  youtube: {name:'يوتيوب', kind:'فيديو طويل', color:'#ff4d4d', bg:'#ff4d4d22',
    svg:`<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="4" stroke="#ff4d4d" stroke-width="1.8"/><path d="M10.5 9.7v4.6l4-2.3z" fill="#ff4d4d"/></svg>`},
  x: {name:'تويتر / X', kind:'فيديو ومقاطع', color:'#e8e6f0', bg:'#e8e6f022',
    svg:`<svg viewBox="0 0 24 24" fill="none"><path d="M5 4l14 16M19 4L5 20" stroke="#e8e6f0" stroke-width="2.1" stroke-linecap="round"/></svg>`},
};
const ORDER = ['tiktok','instagram','facebook','pinterest','snapchat','youtube','x'];

/* ==================================================================
   2) Splash sequence
   ================================================================== */
(function initSplash(){
  const titleHost = document.getElementById('splashTitle');
  [..."Download"].forEach((ch,idx)=>{
    const span = document.createElement('span');
    span.textContent = ch;
    if(idx>=4) span.classList.add('grad-letter');
    span.style.animationDelay = (0.9 + idx*0.055)+'s';
    titleHost.appendChild(span);
  });

  const particleHost = document.getElementById('particles');
  for(let i=0;i<24;i++){
    const s = document.createElement('span');
    s.style.left = (Math.random()*100)+'%';
    s.style.animationDuration = (4+Math.random()*5)+'s';
    s.style.animationDelay = (Math.random()*6)+'s';
    particleHost.appendChild(s);
  }

  const convergeHost = document.getElementById('convergeIcons');
  ORDER.forEach((key,idx)=>{
    const p = ICONS[key];
    const angle = (idx/ORDER.length)*Math.PI*2 + 0.3;
    const dist = 230 + Math.random()*70;
    const tx = Math.cos(angle)*dist, ty = Math.sin(angle)*dist;
    const chip = document.createElement('div');
    chip.className='cchip';
    chip.style.setProperty('--tx', tx+'px');
    chip.style.setProperty('--ty', ty+'px');
    chip.style.animationDelay = (0.15+idx*0.11)+'s';
    chip.innerHTML = p.svg;
    convergeHost.appendChild(chip);
  });
})();

let bootTimer = null;
function startBoot(){
  const bootFill = document.getElementById('bootFill');
  const bootLabel = document.getElementById('bootLabel');
  const messages = ['جاري تجهيز الواجهة…','تحميل المنصّات…','كل حاجة جاهزة…'];
  let pct = 0;
  bootTimer = setInterval(()=>{
    pct += Math.random()*15+7;
    if(pct>=100){
      pct=100; clearInterval(bootTimer);
      bootLabel.textContent='تم ✓';
      setTimeout(closeSplash, 450);
    } else {
      bootLabel.textContent = messages[Math.min(messages.length-1, Math.floor(pct/34))];
    }
    bootFill.style.width = pct+'%';
  }, 250);
}
setTimeout(startBoot, 2050);

function closeSplash(){
  if(bootTimer) clearInterval(bootTimer);
  document.getElementById('splash').classList.add('hide');
}

/* ==================================================================
   3) Render platform grid / mini icons / hero orbit
   ================================================================== */
const grid = document.getElementById('platformGrid');
ORDER.forEach(key=>{
  const p = ICONS[key];
  grid.innerHTML += `
    <div class="p-card">
      <div class="icon-wrap" style="background:${p.bg}">${p.svg}</div>
      <div class="name">${p.name}</div>
      <div class="kind">${p.kind}</div>
    </div>`;
});

const mini = document.getElementById('miniIcons');
['tiktok','instagram','youtube','x'].forEach(k=>{ mini.innerHTML += ICONS[k].svg; });

const orbitHost = document.getElementById('orbitIcons');
let i1=0, i2=0;
ORDER.forEach((key,idx)=>{
  const p = ICONS[key];
  const isInner = idx < 3;
  const angle = isInner ? (i1++ * 120) : (i2++ * 90) + 40;
  const r = isInner ? 115 : 200;
  const delay = (idx*0.35).toFixed(2);
  orbitHost.innerHTML += `
    <div class="platform-chip" style="
        top:calc(50% - 26px + ${r}px * ${Math.sin(angle*Math.PI/180)});
        left:calc(50% - 26px + ${r}px * ${Math.cos(angle*Math.PI/180)});
        animation-delay:${delay}s;">
      ${p.svg}
    </div>`;
});

/* ==================================================================
   4) URL detect + panel
   ================================================================== */
function detectPlatform(url){
  url = url.toLowerCase();
  if(url.includes('tiktok')) return 'tiktok';
  if(url.includes('instagram')) return 'instagram';
  if(url.includes('facebook') || url.includes('fb.watch')) return 'facebook';
  if(url.includes('pinterest') || url.includes('pin.it')) return 'pinterest';
  if(url.includes('snapchat')) return 'snapchat';
  if(url.includes('youtube') || url.includes('youtu.be')) return 'youtube';
  if(url.includes('twitter') || url.includes('x.com')) return 'x';
  return null;
}

let currentOptId = 'hd';

function handleFetch(){
  const input = document.getElementById('urlInput');
  const val = input.value.trim();
  let key = detectPlatform(val);
  if(!val){ input.focus(); input.placeholder='الصق رابط الفيديو الأول 🙂'; return; }
  if(!key){ key = 'tiktok'; }
  openPanel(key);
}

function openPanel(key){
  const p = ICONS[key];
  document.getElementById('panelIconWrap').style.background = p.bg;
  document.getElementById('panelIconWrap').innerHTML = p.svg;
  document.getElementById('panelPlatName').textContent = p.name;
  document.getElementById('panelDuration').textContent = ['00:18','00:24','00:41','01:02'][Math.floor(Math.random()*4)];

  const opts = [
    {id:'hd', label:'فيديو — جودة عالية HD', meta:'720p · WEBM', size:'~2MB'},
    {id:'sd', label:'فيديو — جودة متوسطة', meta:'360p · WEBM', size:'~1MB'},
    {id:'audio', label:'صوت فقط', meta:'WAV', size:'~250KB'},
  ];
  const optsList = document.getElementById('optsList');
  optsList.innerHTML = opts.map((o,idx)=>`
    <div class="opt ${idx===0?'selected':''}" data-id="${o.id}" onclick="selectOpt(this)">
      <div class="left">
        <div class="radio"></div>
        <div class="info"><b>${o.label}</b><span>${o.meta}</span></div>
      </div>
      <div class="size">${o.size}</div>
    </div>`).join('');
  currentOptId = 'hd';

  resetDlBtn();
  document.getElementById('panelOverlay').classList.add('show');
}
function closePanel(){ document.getElementById('panelOverlay').classList.remove('show'); }
function selectOpt(el){
  document.querySelectorAll('.opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  currentOptId = el.dataset.id;
}

function resetDlBtn(){
  document.getElementById('dlFill').style.width='0%';
  document.getElementById('dlLabel').textContent='تحميل الآن';
  document.getElementById('dlBtn').disabled = false;
  document.getElementById('successBox').classList.remove('show');
}

/* ==================================================================
   5) REAL file generation + real browser download
   (No backend exists here to fetch the actual TikTok/Instagram file,
   so this generates a genuine playable demo clip locally and saves
   it to the device — the save-to-device mechanism is fully real.)
   ================================================================== */
function triggerDownload(blob, filename){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url), 4000);
}

function encodeWAV(audioBuffer){
  const samples = audioBuffer.getChannelData(0);
  const sampleRate = audioBuffer.sampleRate;
  const buffer = new ArrayBuffer(44 + samples.length*2);
  const view = new DataView(buffer);
  function writeStr(offset, str){ for(let i=0;i<str.length;i++) view.setUint8(offset+i, str.charCodeAt(i)); }
  writeStr(0,'RIFF'); view.setUint32(4, 36+samples.length*2, true); writeStr(8,'WAVE');
  writeStr(12,'fmt '); view.setUint32(16,16,true); view.setUint16(20,1,true);
  view.setUint16(22,1,true); view.setUint32(24,sampleRate,true);
  view.setUint32(28,sampleRate*2,true); view.setUint16(32,2,true); view.setUint16(34,16,true);
  writeStr(36,'data'); view.setUint32(40,samples.length*2,true);
  let offset=44;
  for(let i=0;i<samples.length;i++){
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s<0 ? s*0x8000 : s*0x7FFF, true);
    offset+=2;
  }
  return new Blob([view], {type:'audio/wav'});
}

async function generateAudioClip(){
  const duration = 2.2, sampleRate = 44100;
  const ctx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, Math.ceil(sampleRate*duration), sampleRate);
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq,i)=>{
    const osc = ctx.createOscillator();
    osc.type='sine'; osc.frequency.value=freq;
    const gain = ctx.createGain();
    const start = i*0.18;
    gain.gain.setValueAtTime(0,start);
    gain.gain.linearRampToValueAtTime(0.28,start+0.04);
    gain.gain.exponentialRampToValueAtTime(0.001,start+0.85);
    osc.connect(gain).connect(ctx.destination);
    osc.start(start); osc.stop(start+0.85);
  });
  const rendered = await ctx.startRendering();
  return encodeWAV(rendered);
}

function pickMime(){
  const options = ['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'];
  for(const o of options){ if(window.MediaRecorder && MediaRecorder.isTypeSupported(o)) return o; }
  return '';
}

function generateVideoClip(quality, onProgress){
  return new Promise((resolve,reject)=>{
    const mime = pickMime();
    if(!window.MediaRecorder || !mime){ reject(new Error('unsupported')); return; }
    const w = quality==='hd' ? 640 : 400, h = quality==='hd' ? 360 : 225;
    const canvas = document.createElement('canvas');
    canvas.width=w; canvas.height=h;
    const ctx = canvas.getContext('2d');
    const stream = canvas.captureStream(30);
    let recorder;
    try{ recorder = new MediaRecorder(stream, {mimeType:mime}); }
    catch(e){ reject(e); return; }
    const chunks=[];
    recorder.ondataavailable = e=>{ if(e.data && e.data.size) chunks.push(e.data); };
    recorder.onerror = e=> reject(e.error || new Error('recorder error'));
    recorder.onstop = ()=> resolve(new Blob(chunks, {type:'video/webm'}));

    const duration = 2400;
    const start = performance.now();
    recorder.start();

    function draw(now){
      const t = now - start;
      onProgress(Math.min(t/duration, 1));
      const grad = ctx.createLinearGradient(0,0,w,h);
      grad.addColorStop(0, `hsl(${255 + (t/30)%40},80%,55%)`);
      grad.addColorStop(.5, `hsl(${325 + (t/25)%30},80%,60%)`);
      grad.addColorStop(1, `hsl(${190 + (t/28)%30},75%,55%)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,w,h);

      ctx.save();
      ctx.translate(w/2, h/2);
      const scale = 1 + 0.06*Math.sin(t/220);
      ctx.scale(scale, scale);
      ctx.strokeStyle = 'rgba(255,255,255,.9)';
      ctx.lineWidth = h*0.045;
      ctx.beginPath();
      ctx.arc(0, 0, h*0.24, -Math.PI/2, -Math.PI/2 + (Math.min(t/duration,1))*Math.PI*2);
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `800 ${h*0.13}px Tajawal, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Download', 0, h*0.02);
      ctx.restore();

      if(t < duration){ requestAnimationFrame(draw); }
      else { recorder.stop(); }
    }
    requestAnimationFrame(draw);
  });
}

async function startDownload(){
  const btn = document.getElementById('dlBtn');
  const fill = document.getElementById('dlFill');
  const label = document.getElementById('dlLabel');
  btn.disabled = true;
  fill.style.width = '0%';
  document.getElementById('successBox').classList.remove('show');

  try{
    if(currentOptId === 'audio'){
      label.textContent = 'جاري تجهيز الصوت…';
      fill.style.width = '45%';
      const blob = await generateAudioClip();
      fill.style.width = '100%';
      label.textContent = 'تم ✓';
      triggerDownload(blob, 'download-audio.wav');
      document.getElementById('successSub').textContent = 'ملف صوتي (WAV) اتحفظ على جهازك';
    } else {
      label.textContent = 'جاري التحميل… 0%';
      const blob = await generateVideoClip(currentOptId, p=>{
        const pct = Math.floor(p*100);
        fill.style.width = pct+'%';
        label.textContent = 'جاري التحميل… '+pct+'%';
      });
      label.textContent = 'تم ✓';
      triggerDownload(blob, currentOptId==='hd' ? 'download-hd.webm' : 'download-sd.webm');
      document.getElementById('successSub').textContent = 'ملف فيديو (WEBM) اتحفظ على جهازك';
    }
    document.getElementById('successBox').classList.add('show');
  }catch(err){
    console.error(err);
    label.textContent = 'المتصفح ده مش داعم التسجيل، جرّب متصفح تاني';
    fill.style.width = '0%';
  }finally{
    btn.disabled = false;
  }
}

document.getElementById('urlInput').addEventListener('keydown', e=>{ if(e.key==='Enter') handleFetch(); });

/* ==================================================================
   6) Scroll reveal — steps appear progressively as you scroll
   ================================================================== */
(function initScrollReveal(){
  const cards = document.querySelectorAll('.step-card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const idx = [...cards].indexOf(entry.target);
        setTimeout(()=> entry.target.classList.add('reveal'), idx*160);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25, rootMargin: '0px 0px -40px 0px' });
  cards.forEach(c=> io.observe(c));
})();
