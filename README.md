# 🎬 Locadora Retrô API

API REST que desenvolvi para o gerenciamento interno de uma locadora retrô, com autenticação JWT e controle de acesso por perfil de usuário.

> Projeto realizado em colaboração com DanielGS85

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** — escolhi usar tipagem estática para garantir mais segurança e previsibilidade no desenvolvimento
- **Express.js** — utilizei para estruturar as rotas e middlewares da aplicação
- **TypeORM** — adotei como ORM para mapear as entidades e manipular o banco de dados de forma orientada a objetos
- **PostgreSQL** — banco de dados relacional que escolhi pela robustez e suporte a tipos avançados
- **bcrypt** — implementei para garantir que nenhuma senha seja armazenada em texto puro
- **JWT (JSON Web Token)** — utilizei para autenticação stateless e controle de acesso por perfil

---

## ✅ Funcionalidades

- Cadastro e gerenciamento de **clientes**
- Cadastro e gerenciamento de **produtos** (filmes, jogos, séries)
- Registro e controle de **locações**
- **Autenticação JWT** para funcionários da locadora
- **Controle de acesso por perfil** — separei as permissões entre admin e funcionário

---

## 🔐 Autenticação e Autorização

Projetei o sistema voltado ao **funcionário da locadora**, que é o único tipo de usuário que opera a API. Apenas funcionários autenticados conseguem acessar os endpoints.

| Ação                | Funcionário | Admin |
| ------------------- | ----------- | ----- |
| Cadastrar clientes  | ✅          | ✅    |
| Visualizar clientes | ✅          | ✅    |
| Atualizar clientes  | ✅          | ✅    |
| Deletar clientes    | ❌          | ✅    |
| Cadastrar produtos  | ✅          | ✅    |
| Visualizar produtos | ✅          | ✅    |
| Atualizar produtos  | ✅          | ✅    |
| Deletar produtos    | ❌          | ✅    |
| Registrar locações  | ✅          | ✅    |
| Visualizar locações | ✅          | ✅    |

---

## 📋 Regras de Negócio

Implementei as seguintes regras para garantir a integridade dos dados:

- Não é permitido excluir um produto que esteja com status **alugado**
- O CPF do cliente deve ter exatamente **14 caracteres** (incluindo `.` e `-`)
- Produtos só podem ser locados para **clientes cadastrados** no sistema
- O histórico de locações é **mantido permanentemente** — não há deleção de locações
- Ao registrar uma locação, o status do produto muda automaticamente para **alugado**
- Ao registrar a devolução, o status volta automaticamente para **disponível**

---

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` com suas credenciais do banco:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
JWT=sua_chave_secreta
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse a documentação interativa em:

```
http://localhost:3000/docs
```
