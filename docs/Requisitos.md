_Tema:_ Plataforma de Aluguel de Equipamentos - locadora de filmes, séries e games BLACK-BOX

O projeto visa organizar o acervo de filmes, séries e games para uma locadora, e gerenciar a logística de locação dos produtos para os clientes da locadora.

### Usuários

- Funcionário

---

## 2. Requisitos Funcionais (RF)

- _RF01_ - O sistema deve permitir o cadastro de novos produtos (create)
- _RF02_ - O sistema deve permitir o cadastro de novos clientes (create)
- _RF03_ - O sistema deve exibir cliente cadastrado (list)
- _RF04_ - O sistema deve alterar informações do cliente (update)
- _RF05_ - O sistema deve exibir produtos cadastrados (list)
- _RF06_ - O sistema deve exibir o histórico de alugueis do cliente (list)
- _RF07_ - O sistema deve permitir deletar produtos (delete)
- _RF08_ - O sistema deve exibir o status do produto (alugado, devolvido) (list)

---

## 3. Requisitos Não Funcionais (RNF)

- _RNF01_ - A API deve ser desenvolvida em Node.js com TypeScript
- _RNF02_ - A API deve ser integrada com banco de dados
- _RNF03_ - A API deve usar a biblioteca typeORM
- _RNF04_ - A API deve seguir o padrão MVC

---

## 4. Regras de Negócio (RN)

- _RN01_ - Não é permitido excluir um produto que tenha aluguel vinculados.
- _RN02_ - O CPF do cliente deve ter no mínimo 11 caracteres.
- _RN03_ - Os produtos só podem ser alugados para clientes cadastrados.
- _RN04_ - Deve haver um histórico dos produtos alugados.
- _RN05_ - Caso o prazo de devolução seja excedido será renovado a locação.
