# 🖥️ CYBER-SENAI — Sistema de Autenticação com Bloqueio

![STATUS](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-8A2BE2?style=for-the-badge)
![VERSÃO](https://img.shields.io/badge/VERSÃO-2.0-0A66C2?style=for-the-badge)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🧠 Sobre o Projeto

O **CYBER-SENAI** é uma aplicação web que simula um **terminal de autenticação seguro**, com sistema de login, controle de tentativas e bloqueio automático.

O projeto foi desenvolvido com foco educacional, explorando conceitos fundamentais de **JavaScript**, **lógica de programação** e **manipulação do DOM**, além de uma interface visual inspirada em sistemas hackers/cyberpunk.

---

## 🎯 Objetivo

- Simular um sistema de login real
- Controlar tentativas de acesso
- Implementar bloqueio de sistema
- Trabalhar com eventos e validações
- Criar uma interface moderna e interativa

---

## ⚙️ Funcionalidades

✔ Sistema de autenticação com login e senha  
✔ Lista interna de usuários válidos  
✔ Controle de tentativas (3 chances)  
✔ Bloqueio automático após erro consecutivo  
✔ Mensagens dinâmicas de status  
✔ Botão de reinício do sistema  
✔ Relógio em tempo real no terminal  
✔ Interface temática estilo “terminal hacker”  

---

## 🔐 Regras do Sistema

- O usuário possui **3 tentativas** para acertar login e senha  
- A cada erro, uma tentativa é removida  
- Após zerar as tentativas:
  ```
  SISTEMA BLOQUEADO
  ```
- Após login correto:
  ```
  ACESSO LIBERADO
  ```
- Não é possível logar novamente sem reiniciar o sistema  

---

## 🧪 Exemplo de Usuários

```javascript
{ login: "Rafaela", senha: "1510" }
{ login: "Rafael", senha: "dcba" }
{ login: "Felipe", senha: "abc12" }
```

---

## 🖥️ Interface

O sistema possui uma interface inspirada em um terminal de segurança:

- Tema escuro com neon verde
- Efeito de “scanline” (estilo monitor antigo)
- Indicador visual de tentativas (♥)
- Feedback visual de erro, sucesso e bloqueio
- Animações suaves e interativas

---

## 🧠 Conceitos Aplicados

Este projeto utiliza diversos conceitos importantes:

- Manipulação do DOM (`getElementById`)
- Eventos (`addEventListener`)
- Estruturas condicionais (`if / else`)
- Arrays e método `.find()`
- Controle de estado (tentativas e acesso)
- Atualização dinâmica de conteúdo (`textContent`)
- Temporizador com `setInterval` (relógio)

---

## 📂 Estrutura do Projeto

```
📁 cyber-senai
│
├── index.html      # Estrutura da aplicação
├── style.css       # Estilização (tema cyberpunk)
├── script.js       # Lógica do sistema
└── README.md       # Documentação
```

---

## 🚀 Como Executar

### 🔹 Método simples

1. Baixe os arquivos  
2. Abra o arquivo:

```
index.html
```

no navegador

---

### 🔹 Usando VS Code

1. Instale a extensão **Live Server**
2. Clique com botão direito em `index.html`
3. Clique em:

```
Open with Live Server
```

---

## 🎨 Destaques do Design

- Interface estilo **terminal hacker**
- Cores neon (verde, vermelho, amarelo)
- Animações (blink, shake, fade)
- Layout centralizado e responsivo
- Tipografia tecnológica (monospace)

---

## 💡 Melhorias Futuras

- [ ] Criptografia de senha
- [ ] Integração com banco de dados
- [ ] Sistema de cadastro de usuários
- [ ] Logs de acesso
- [ ] Modo dark/light alternável
- [ ] Responsividade mobile completa

---

## 🎓 Objetivo Educacional

Projeto desenvolvido para prática de:

- JavaScript básico
- Lógica de programação
- Interfaces interativas
- Sistemas de autenticação simples

---

## 👩‍💻 Autora

**Rafaela Oliveira**  

Estudante de Desenvolvimento de Sistemas  

