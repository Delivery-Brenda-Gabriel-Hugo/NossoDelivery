const listaProdutos = async () => {
  const resposta = await fetch("http://localhost:3000/produto");
  if (resposta.ok) {
    return await resposta.json();
  }
  throw new Error("Não foi possível listar os clientes!");
};

export const produtoService = {
  listaProdutos,
  criaProduto,
  removeProduto,
  detalhaProduto,
  atualizaProduto,
};