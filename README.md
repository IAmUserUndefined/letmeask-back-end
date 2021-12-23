# Letmeask - Back-end - Api

# 🔗 Letmeask
<p>🚀 Aplicação voltada interação de usuários por meio de salas de perguntas e respostas</p>

# Status da Aplicação
<p>🔥 Aplicação Finalizada</p>

# Features
- Cadastro de Usuário
- Atualização de Email
- Atualização de Senha
- Recuperação de Senha
- Exclusão de Usuário
- Criação, Leitura e Exclusão de Salas
- Criação, Leitura e Exclusão de Perguntas
- Criação, Leitura e Exclusão de Respostas

# Tecnologias
- Node
- Typescript
- Nodemailer
- Prisma
- Jest

# Instalação

Você precisa ter instalado em sua máquina o Node, GIT e o pacote Yarn instalado de forma global, após isso rode o seguinte comando: 
```sh
  git clone https://github.com/JPedro910/letmeask-back-end.git
```
Após clonar a aplicação, entre em sua pasta e rode o seguinte comando:
```sh
  yarn install
```
# Execução

Após a instalação, substitua no arquivo de variáveis de ambiente de teste o email e senha que a aplicação pede, você deve permitir o acesso do nodemailer a seu email, após isso rode o seguinte comando:
```sh
  yarn test --watchAll
```
Após a execução dos testes, substitua as variáveis de ambiente necessárias no arquivo principal e rode o seguinte comando:
```sh
  yarn dev
```
