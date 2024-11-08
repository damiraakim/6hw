function chess(){
    const board=document.createElement('div');
    board.style.height="160px";
    board.style.width="160px";
    board.style.position="relative";

    for(let r=0; r<8; r++){
        for(let c=0; c<8; c++){
            const a=document.createElement("div");
            a.style.height="20px";
            a.style.width="20px";
            a.style.display="inline-block";
            if((r+c)%2==0){
                a.style.backgroundColor="black";
            }
            else{
                a.style.backgroundColor="white";
            }
            board.appendChild(a);
        }
        const br=document.createElement("br");
        board.appendChild(br);
    }
    return board;
}
