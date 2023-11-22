# Guia de Execução da Aplicação

Este guia fornece instruções passo a passo para executar a aplicação utilizando Docker e Node. Certifique-se de que o Docker esteja instalado em sua máquina antes de prosseguir.

## Passo 1: Clonar o Repositório

```
git clone https://github.com/parisivitor/cosmos-test
```
```
cd cosmos-test
```

## Passo 2: Executar a Aplicação
Construa e inicie os contêineres Docker.
```
docker-compose up --build -d
```
Acesse o contêiner da aplicação.
```
docker exec -it cosmos_test /bin/bash
```
Uma vez dentro do contêiner, execute o aplicativo Python.
```
node cosmos_test.js
```

## Author
Vitor Risso Parisi
