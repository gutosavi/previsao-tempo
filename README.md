# Previsão do Tempo em Tempo Real

> Aplicação web que consome uma API externa para exibir informações climáticas em tempo real de qualquer cidade do mundo

---

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

- Requisições assíncronas com `fetch`
- Uso de `async/await`
- Consumo de API REST
- Manipulação de DOM com JavaScript
- Tratamento de erros
- Boas práticas na organização do código

A aplicação permite que o usuário pesquise uma cidade e visualize:

- Temperatura atual
- Temperatura máxima
- Temperatura mínima
- Umidade
- Velocidade do vento
- Descrição do clima
- Ícone ilustrativo da condição climática

Os dados são fornecidos pela API da OpenWeather.

---

## Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- API REST (OpenWeather)

---

## Como Funciona

1. O usuário digita o nome da cidade.
2. O formulário dispara um evento `submit`.
3. O JavaScript:
   - Cancela o comportamento padrão
   - Monta a URL da API com `encodeURI`
   - Realiza a requisição com `fetch`
4. Se a resposta for `200`:
   - Os dados são exibidos dinamicamente na tela
5. Caso contrário:
   - Uma mensagem de erro é apresentada

---

## Conceitos Aplicados

✔️ Manipulação de eventos  
✔️ Template strings  
✔️ Desestruturação de objetos  
✔️ Métodos numéricos (`toFixed`)  
✔️ Manipulação de atributos (`setAttribute`)  
✔️ Condicionais para controle de fluxo

---

## Observação Importante

A chave da API está exposta no código apenas para fins educacionais.

Em um ambiente de produção, o ideal seria:

- Utilizar variáveis de ambiente
- Criar um backend intermediário para proteger a API Key

---

## Objetivo do Projeto

Este projeto faz parte do meu processo de consolidação em **JavaScript moderno**, preparando a base para trabalhar com frameworks como React no futuro.

Aqui o foco foi entender profundamente:

- Comunicação com APIs
- Fluxo assíncrono
- Organização de lógica e exibição

---

## Preview

![Preview do Projeto](img/previsao-do-tempo.gif)

---

## Contato

👨🏻‍💻 Gustavo Savi  
🔗 [LinkedIn](https://www.linkedin.com/in/gustavo-savi)
