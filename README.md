# React Acordion

![CI/CD](https://github.com/dyarleniber/react-workflow-gh-actions/workflows/CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/thomazot/react-accordion/branch/master/graph/badge.svg)](https://codecov.io/gh/thomazot/react-accordion)
![License](https://img.shields.io/github/license/dyarleniber/react-workflow-gh-actions)

O Projeto foi desenvolvido com base dos dados abaixo:

### Vídeo:

![tree.gif](https://github.com/HiPlatform/prova-frontend/blob/master/tree.gif?raw=true)

### Screenshot:

![tree.png](https://github.com/HiPlatform/prova-frontend/blob/master/tree.png?raw=true)

Estrutura desenvolvida objeto db.json

```
  [{
    "id": "a853dddc-b639-41e6-a876-958b1e7f65d1",
    "name": "Harald Svante August",
    "level": 1,
    "children": []
  }]
```

##### Comportamento:

- Para cada item, o usuário deve poder marcar o checkbox dessa linha.
- Para cada item que tenha filhos (ou seja, um item pai), quando o usuário marcar ou desmarcar o checkbox, o estado deve ser cascateado a todos os seus descendentes.
- Para cada item que seja um item pai, o usuário deve ser capaz de mostrar ou esconder os itens internos.

##### Liberdade:

- Você pode usar qualquer tecnologia que melhor lhe servir.
- Você é livre para estruturar o projeto da maneira que achar mais organizada.
- Você é livre para implementar o código em qualquer padrão que achar mais adequado.
- Você pode adicionar funcionalidades ao componente como desejar, mas não fuja da simplicidade.

##### Nós valorizamos atenção para os seguintes pontos:

- Acoplamento e coesão
- Testes
- Performance
- Recuperação de estado (por exemplo: recuperar estado dos checkboxes após um page refresh)
- Experiência do usuário (área de clique, scroll jump, etc.)

## Exemplo no Github Pages

[Link do Exercicio](https://thomazot.github.io/react-accordion/)
