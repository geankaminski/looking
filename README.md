# Looking

Aplicação de reserva de hotéis utilizando Vue 3, Pinia, Typescript e Tailwind. Os testes unitários utilizam vitest. Storybook foi utilizado para documentar os componentes mais essenciais como Button e Input.

Optei pelo uso do Tailwind para agilizar a construção das páginas e componentes.

Comentários foram adicionados no início de alguns arquivos explicando os detalhes da implementação.

Os parâmetros da busca por hóteis, bem como os dados de pagamento, apenas simulam o comportamento real de uma aplicação.

Os hóteis exibidos podem ser reservados ou adicionados aos favoritos.
Na tela de favoritos o usuário pode comparar as opções previamente selecionadas.
A tela de pagamento exibe os detalhes da reserva e o formulário de pagamento.

![Resultados do Lighthouse](https://exemplo.com/logo.png)

# CI/CD

A aplicação conta com deploy automático na Netlify. Defini a execução dos testes unitários no pipeline do Github Actions, sendo notificado se algo der errado após algum merge na main.

# Próximos passos

- Alcançar cobertura de 100% nos testes unitários

- Adicionar testes e2e

- Integrar com a API do Maps para buscar cidades conforme o usuário digita

- Adicionar mais stories e documentação no Storybook

- Adicionar validações e máscara nos dados do cartão

## Instruções

```sh
npm install
```

### Compilar e rodar

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Testes unitários

```sh
npm run test:unit
```

### Storybook

```sh
npm run stoybook
```
