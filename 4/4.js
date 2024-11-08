const text=document.querySelectorAll('article p');
for(i=0;i<text.length;i++){
    let hr=document.createElement('hr');
    text[i].after(hr);
}
