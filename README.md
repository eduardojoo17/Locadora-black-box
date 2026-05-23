# 🎬 Locadora Retrô API

API REST desenvolvida para o gerenciamento interno de uma locadora retrô, com autenticação JWT e controle de acesso por perfil de usuário.

> Projeto realizado em colaboração com DanielGS85

---

###  Tecnologias Utilizadas

- **TypeScript** — tipagem estática e segurança no desenvolvimento
- **Express.js** — framework web para criação das rotas e middlewares
- **TypeORM** — ORM para mapeamento e manipulação do banco de dados
- **PostgreSQL** — banco de dados relacional
- **bcrypt** — criptografia de senhas
- **JWT (JSON Web Token)** — autenticação e autorização

---

###  Funcionalidades

- Cadastro e gerenciamento de **clientes**
- Cadastro e gerenciamento de **produtos** (filmes, jogos, etc.)
- Registro e controle de **locações**
- **Autenticação JWT** para funcionários da locadora
- **Controle de acesso por perfil** (admin e funcionário)

---

###  Autenticação e Autorização

O sistema é voltado ao **funcionário da locadora**, que é o usuário do sistema. Apenas funcionários autenticados podem operar a API.

| Ação | Funcionário | Admin |
|------|-------------|-------|
| Cadastrar clientes | ✅ | ✅ |
| Visualizar clientes | ✅ | ✅ |
| Atualizar clientes | ✅ | ✅ |
| Deletar clientes | ❌ | ✅ |
| Cadastrar produtos | ✅ | ✅ |
| Visualizar produtos | ✅ | ✅ |
| Atualizar produtos | ✅ | ✅ |
| Deletar produtos | ❌ | ✅ |
| Registrar locações | ✅ | ✅ |
| Visualizar locações | ✅ | ✅ |

---

---

##  Regras de Negócio

- Não é permitido excluir um produto que possua locações vinculadas
- O CPF do cliente deve ter no mínimo 11 caracteres
- Produtos só podem ser alugados para clientes cadastrados
- Histórico de locações é mantido permanentemente
- Caso o prazo de devolução seja excedido, será renovado a data de locação final

---

## Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
   npm install
```

3. Configure o arquivo `.env`
   

5. Execute o projeto:
```bash
   npm run dev
```






