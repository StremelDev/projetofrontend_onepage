# Eletrongold - OnePage Simplificada

Bem-vindo à OnePage da **Eletrongold**, especialista em mecatrônica automotiva móvel.

## 📁 Estrutura de Arquivos

```
eletrongold-simples/
├── index.html           # Arquivo principal (abra este no navegador)
├── assets/
│   ├── style.css        # Estilos CSS
│   └── script.js        # JavaScript para interatividade
├── img/
│   └── logo.png         # Logo da Eletrongold
└── README.md            # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente (Mais Simples)
1. Baixe todos os arquivos
2. Abra o arquivo **`index.html`** diretamente no seu navegador
3. Pronto! O site funcionará 100% offline

### Opção 2: Publicar Online
1. Faça upload de TODOS os arquivos para seu servidor web
2. **Importante**: Mantenha a estrutura de pastas:
   ```
   /seu-dominio.com/
   ├── index.html
   ├── assets/
   │   ├── style.css
   │   └── script.js
   └── img/
       └── logo.png
   ```
3. Acesse `seu-dominio.com` no navegador

## 🎨 Seções do Site

✅ **Header** - Navegação com logo
✅ **Hero** - Apresentação principal com call-to-action
✅ **Serviços** - 8 serviços oferecidos em cards
✅ **Diferenciais** - 6 vantagens competitivas + estatísticas
✅ **Sobre** - Informações sobre Fernando Luís Fabiano Stremel (SENAI-SP)
✅ **Contato** - Formulário e informações de contato
✅ **Footer** - Links rápidos e redes sociais

## ✏️ Como Customizar

### 1. Mudar Informações de Contato
Abra `index.html` e procure por:
- `contato@eletrongold.com.br` → seu email
- `(11) 99999-9999` → seu telefone
- `https://wa.me/5511999999999` → seu WhatsApp

### 2. Mudar Cores
Abra `assets/style.css` e procure por:
```css
:root {
  --primary: #d4af37;      /* Cor dourada */
  --dark: #0a0a0a;         /* Cor preta */
  --light: #ffffff;        /* Cor branca */
}
```

### 3. Mudar Logo
1. Substitua o arquivo `img/logo.png` pela sua logo
2. Mantenha o nome "logo.png"
3. A logo será atualizada automaticamente

### 4. Editar Textos
Abra `index.html` e procure pelo texto que deseja mudar. Todos os textos estão em HTML simples e fácil de editar.

### 5. Adicionar/Remover Serviços
Procure pela seção `<!-- SERVIÇOS -->` e adicione ou remova cards:
```html
<div class="service-card">
  <div class="icon">⚡</div>
  <h3>Nome do Serviço</h3>
  <p>Descrição do serviço</p>
</div>
```

## 🎯 Recursos Inclusos

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação suave (smooth scroll)
- ✅ Formulário de contato com validação
- ✅ Animações ao scroll
- ✅ Ícones do Font Awesome
- ✅ Bootstrap 5 integrado
- ✅ Sem dependências externas (tudo incluído)
- ✅ Otimizado para performance

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Smartphones e tablets
- ✅ Funciona offline
- ✅ Carregamento rápido

## 🔧 Troubleshooting

### Página em branco?
- Verifique se todos os arquivos estão na pasta correta
- Tente abrir com outro navegador
- Limpe o cache (Ctrl+Shift+Delete)

### Imagens não aparecem?
- Certifique-se de que a pasta `img/` existe
- Verifique se o arquivo `logo.png` está lá
- Tente recarregar a página (F5)

### Estilos não aparecem?
- Verifique se a pasta `assets/` existe
- Certifique-se de que `style.css` está dentro de `assets/`
- Tente limpar o cache do navegador

### Formulário não funciona?
- O formulário valida os dados localmente
- Para enviar emails, você precisará de um servidor backend
- Consulte a documentação do seu hosting para soluções de formulário

## 📞 Suporte

Para dúvidas sobre o site:
1. Verifique este README
2. Consulte os comentários no código HTML
3. Procure pela seção relevante em `index.html` ou `assets/style.css`

## 🚀 Próximos Passos

Para melhorar ainda mais o site:
1. **Adicionar integração de email** - Conectar formulário a um serviço de email
2. **Adicionar galeria de fotos** - Mostrar trabalhos realizados
3. **Adicionar depoimentos** - Incluir avaliações de clientes
4. **Otimizar para SEO** - Melhorar posicionamento em buscadores
5. **Adicionar blog** - Publicar artigos sobre mecatrônica

## 📄 Licença

Este site foi desenvolvido para a Eletrongold e pode ser usado livremente.

---

**Desenvolvido com ❤️ para Eletrongold**

**Pronto para começar? Abra `index.html` no seu navegador!**


## 🖼️ Adicionar Foto do Fernando

1. Coloque uma foto sua em `img/fernando.jpg`
2. A foto será exibida automaticamente na seção "Sobre"
3. Recomendado: foto profissional quadrada (500x500px ou maior)

## 🏆 Adicionar Trabalhos Realizados

1. Coloque fotos dos trabalhos em `img/trabalho-1.jpg`, `img/trabalho-2.jpg`, etc.
2. Edite o HTML para adicionar mais cards de trabalhos
3. Cada trabalho pode ter título e descrição
