function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="gemeos"){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.webp");
        imagem.setAttribute("width","300px");

    } else if(valor=="escorpiao"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.webp");
        imagem.setAttribute("width","300px");

    } else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");

    }  else if(valor=="aries"){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");

    }  else if(valor=="touro"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.webp");
        imagem.setAttribute("width","300px");

    }  else if(valor=="libra"){
        texto.innerHTML = "libra";
        imagem.setAttribute("src","img/libra.webp");
        imagem.setAttribute("width","300px");

    }  else if(valor=="cancer"){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");

    }  else if(valor=="leao"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.webp");
        imagem.setAttribute("width","300px");

    }  else if(valor=="virgem"){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","300px");

    }  else if(valor=="aquario"){
        texto.innerHTML = "Áquario";
        imagem.setAttribute("src","img/aquario.webp");
        imagem.setAttribute("width","300px");

    }  else if(valor=="sagitario"){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");

    }  else if(valor=="capricornio"){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");

    } else if(valor=="mamoball") {
        texto.innerHTML = "MEU DEUS VOCÊ ESCREVEU O NOME DO MELHOR JOGO JÁ INVENTADO DA HISTÓRIA!!!!!!!!!!";
        imagem.setAttribute("src","img/mamoball.jpg");
        imagem.setAttribute("width","300px");
    } else if(valor=="neymar") {
        texto.innerHTML = "VOCÊ ESCREVEU O NOME DO MELHOR JOGADOR DE TODA A HISTÓRIA DO FUTEBOL, NEYMAR!!!!!!!!!!!!!!!!!";
        imagem.setAttribute("src","img/neymar.jpg");
        imagem.setAttribute("width","300px");
    } else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/o_meu_momento.png");
        imagem.setAttribute("width","250px");
    }
}