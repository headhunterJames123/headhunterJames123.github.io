'use strict';
const profile = window.PROFILE;
const el = (tag, text, cls) => { const node = document.createElement(tag); if(text) node.textContent=text; if(cls) node.className=cls; return node; };
document.title = `${profile.name} · AI & Robotics Recruiting`;
const name = document.querySelector('#name'); name.textContent=profile.name; name.append(el('span','.','period'));
document.querySelector('#headline').textContent=profile.headline;
document.querySelector('#footer-name').textContent=profile.name;
profile.bio.forEach(text=>document.querySelector('#bio').append(el('p',text)));
profile.directions.forEach((item,i)=>{
  const card=el('article',null,'direction');
  card.append(el('span',String(i+1).padStart(2,'0'),'number'));
  const title=el('div',null,'direction-title'); title.append(el('p',item.english,'english'),el('h3',item.title));
  const detail=el('div',null,'detail'); detail.append(el('p',item.description));
  const roles=el('ul',null,'roles'); item.roles.forEach(role=>roles.append(el('li',role))); detail.append(roles,el('p',item.keywords,'keywords'));
  card.append(title,detail);document.querySelector('#directions').append(card);
});
const contacts=document.querySelector('#contact-links');
function addLink(label,url){const a=el('a',label,'contact-link');a.href=url;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}contacts.append(a);}
if(profile.email) addLink(profile.email,`mailto:${profile.email}`);
for(const key of ['linkedin','github']){if(profile[key] && /^https:\/\//.test(profile[key])) addLink(key==='linkedin'?'LinkedIn ↗':'GitHub ↗',profile[key]);}
if(profile.wechat){
  const line=el('div',null,'wechat');line.append(el('span',`微信 ${profile.wechat}`));
  const button=el('button','复制微信');button.type='button';button.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(profile.wechat);document.querySelector('#copy-status').textContent='微信号已复制。';}
    catch{document.querySelector('#copy-status').textContent=`请手动复制微信号：${profile.wechat}`;}
  });line.append(button);contacts.append(line);
}
if(contacts.children.length){document.querySelector('#contact').hidden=false;document.querySelector('[data-contact]').hidden=false;}
