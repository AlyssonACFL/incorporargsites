const botoes=document.querySelectorAll(".copiar");

const toast=document.getElementById("toast");

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        const chave=botao.dataset.pix;

        navigator.clipboard.writeText(chave);

        toast.classList.add("show");

        setTimeout(()=>{

            toast.classList.remove("show");

        },1800);

    });

});
