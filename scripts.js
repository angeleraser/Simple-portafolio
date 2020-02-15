const menu_button=document.getElementById('menu-button'),
      menu=document.getElementById('menu');
menu_button.addEventListener('click', ()=>{
  menu.style.display=menu.style.display =='flex'?'none':'flex';
});