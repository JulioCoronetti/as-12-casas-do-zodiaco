function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const descricao = document.getElementById('desc')
    const valor = document.querySelector('#valor').value;
    
    if((valor=="gemeos") || (valor=="Gemeos") || (valor=="Gêmeos") || (valor=="gêmeos")){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";

    } else if((valor=="escorpiao") || (valor=="escorpião") || (valor=="Escorpião") || (valor=="Escorpiao")){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "A Casa de Escorpião é a oitava das Doze Casas do Zodíaco de Ouro, o coração do Santuário e uma fortaleza de proteção em torno do Palácio do Grande Mestre e do Templo de Atena. "

    } else if((valor=="peixes") || (valor=="Peixes")){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Pisces Aphrodite (Afrodite de Peixes), é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas."

    }  else if((valor=="aries") || (valor=="Aries") || (valor=="Áries") || (valor=="áries")){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco."

    }  else if((valor=="touro") || (valor=="Touro")){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Fazendo jus à sua constelação, Aldebaran de Touro é o maior dos Cavaleiros de Ouro de Atena, um verdadeiro tanque. No entanto, sua velocidade não deve ser subestimada por isso, afinal ele tem um dos golpes mais velozes de Cavaleiros do Zodíaco, o Grande Chifre"

    }  else if((valor=="libra") || (valor=="Libra")){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades."

    }  else if((valor=="cancer") || (valor=="Cancer") || (valor=="câncer") || (valor=="Câncer")){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "O verdadeiro nome do Cavaleiro de Câncer até hoje não foi revelado, sendo somente chamado de Máscara da Morte (Deathmask no original)."

    }  else if((valor=="leao") || (valor=="leão") || (valor=="Leão") || (valor=="Leao")){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "o Cavaleiro de Leão é Regulus, companheiro de treinamento de Yato de Unicórnio. Ele é o mais jovem dos 12 Cavaleiros de Ouro e é considerado um prodígio, tendo muito poder e compreensão do Cosmo, aprendendo e entendendo golpes rapidamente."

    }  else if((valor=="virgem") || (valor=="Virgem")){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências."

    }  else if((valor=="aquario") || (valor=="Aquario") || (valor=="Áquario") || (valor=="áquario")){
        texto.innerHTML = "Áquario";
        imagem.setAttribute("src","img/aquario.webp");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade."

    }  else if((valor=="sagitario") || (valor=="Sagitario") || (valor=="sagitário") || (valor=="Sagitário")){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação."

    }  else if((valor=="capricornio") || (valor=="Capricornio") || (valor=="Capricórnio") || (valor=="capricórnio")){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
        descricao.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito."

    } else if(valor=="mamoball") {
        texto.innerHTML = "MEU DEUS VOCÊ ESCREVEU O NOME DO MELHOR JOGO JÁ INVENTADO DA HISTÓRIA!!!!!!!!!!";
        imagem.setAttribute("src","img/mamoball.jpg");
        imagem.setAttribute("width","300px");
    } else if(valor=="neymar") {
        texto.innerHTML = "VOCÊ ESCREVEU O NOME DO MELHOR JOGADOR DE TODA A HISTÓRIA DO FUTEBOL, NEYMAR!!!!!!!!!!!!!!!!!";
        imagem.setAttribute("src","img/neymar.jpg");
        imagem.setAttribute("width","300px");
    } else{
        texto.innerHTML = "O cavaleiro não foi encontrado 😥👍";
        imagem.setAttribute("src","img/o_meu_momento.png");
        imagem.setAttribute("width","250px");
    }
}