# Looking

Aplicação de reserva de hotéis utilizando Vue 3, Pinia, Typescript e Tailwind. Os testes unitários utilizam vitest. Comentários foram adicionados no início de alguns arquivos explicando os detalhes da implementação.

# CI/CD

Como a aplicação já conta com deploy automático na Netlify, defini a execução dos testes unitários no pipeline do Github Actions.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
