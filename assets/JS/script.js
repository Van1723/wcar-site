function abrirWhatsapp(){  
  document.getElementById("formSubmit").onsubmit;
  var Nome = document.getElementById("nome").value; 
  var Celular = document.getElementById("celular").value;
  var Problema  = document.getElementById("problema").value; // e assim vai
  var marcaModelo = document.getElementById("marcaModelo").value;
  var Descricao = document.getElementById("descricao").value; 
  var mensagem = "Celular: " + Celular  +  "\n Problema: "+ Problema +" "+ "\n Marca e modelo: " + " "
  + marcaModelo +" "+ "\n Descrição: "+ " "+ Descricao; // Adicione outros campos conforme necessário  
  const phoneNumber = "5518997125999"; // Substitua pelo número desejado


  console.log(mensagem);
  // Formata a mensagem para a URL
  const whatsappMessage = `Olá, meu nome é ${encodeURIComponent(Nome)} ${encodeURIComponent(mensagem)}`;

  // Monta o link do WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;


  // Redireciona o usuário para o WhatsApp
  window.open(whatsappURL, "_blank");

}