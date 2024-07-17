# Pet Adoption API

Esta é uma API para adoção de cachorros e gatos, construída com Node.js, Express e MongoDB.

## Requisitos

- Node.js
- MongoDB
- Docker (opcional, para rodar o MongoDB)

## Rotas da API

- POST /api/users/register - Registrar um novo usuário
- POST /api/users/login - Login de usuário
- POST /api/pets - Criar um novo pet (autenticado)
- GET /api/pets - Listar todos os pets
- GET /api/pets/:id - Obter detalhes de um pet por ID
- PUT /api/pets/:id - Atualizar um pet (autenticado)
- DELETE /api/pets/:id - Deletar um pet (autenticado)
