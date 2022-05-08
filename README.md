# 📄 Pokédex: 

### :dart: Objetivo do projeto
A ideia é usar a Poke Api como fonte de dados para o projeto. Ela é uma API pública, bastante utilizada como fonte de dados para aplicações focadas em aprendizado de programação. Assim o objetivo é criar um site sobre Pokémon com o intuito de aplicar os conhcemintos adquiridos ao longo da décima primeira semana do bootcamp de desenvolvimento web fullstack da Labenu. O foco principal desse projeto foi aplicar os conhecimentos sobre:  Estado Global, React Context, Providers e Consumers, Hook useContext, Organização dos dados e do componente de Estado Global. Consequentemente contribuiu para fixar conhcecimentos anteriores sobre o desenvolvimento com React.

### :small_blue_diamond: Os requisitos do projeto são:
- **Home** (necessário login para acessar - é a parte **privada**)
    * o usuário deve receber uma lista de pokemons vinda da API. 
    * o usuário pode armazenar Pokémons em sua Pokédex clicando em cada um
    * não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex. 

- **Pokedex** 
    *  o usuário deve pode ver os Pokemons que foram adicionados em sua Pokedex
    
- **Detalhe do Pokemon** 
    *  deve ser possível ir para uma página de detalhes do Pokémon ao clicar no mesmo, estando tanto na Home quanto na Pokédex

## :black_nib: Wireframe
[wireframe](https://www.figma.com/file/YCEbRNrw59vTRT62cmfklN/Pok%C3%A9dex-team-library?node-id=416%3A50)

## ✔️ Funcionalidades
- Header dinâmico: Botões para transitar entre as páginas de batalha, pokédex, home e um botão de voltar de acordo com a página na qual ele está sendo renderizado
- Páginação: São renderizados ao todo 898 pokémon, sendo 21 por página
- Cards: Ao clicar na imagem do pokémon o usuário é rediracionado para a tela de detalhes, além disso ele pode adicionar ou remover um pokémon da pokédex ao clicar na pokebola.
- Pokédex: Renderiza todos os pokémon que foram capturados e permite que o usuário os remova da mesma
- Página de Detalhes: Rederiza os detalhes do pokémon que o usuário clicou na home ou na pokédex, além disso ele consegue transitar entre os detalhes de todos os pokémon ao clicar nas setas de próximo e anterior. E por fim, o usuário consegue adicionar ou remover o pokémon da pokédex.

## :books: Bibliotecas utilizadas
- [styled-components](https://styled-components.com/)
- [axios](https://github.com/axios/axios)
- [react-icons](https://react-icons.github.io/react-icons)
- [react-router-dom](https://v5.reactrouter.com/)
- [chackra ui](https://chakra-ui.com/)
- [ajna/pagination](https://www.npmjs.com/package/@ajna/pagination)

## 🔗 Link Surge 
[Acesse a página da nossa pokédex](http://pokedex-grupo1-shaw.surge.sh/)


##  :computer: Desenvolvedores

|[Matheus Martinelle](https://github.com/MatthsMB) |[Layane Bastos](https://github.com/LayaneB) |[Lis Ribeiro](https://github.com/lisfribeiro) |
| :---: | :---: | :---: |

## 📷 Imagens

#### DESKTOP

![image](https://user-images.githubusercontent.com/50851374/167298952-4509cda7-dd6d-43d7-ae3e-ba9c56f3bb41.png)
![image](https://user-images.githubusercontent.com/50851374/167299012-feed2804-f668-481b-99ee-361da2e2106b.png)
![image](https://user-images.githubusercontent.com/50851374/167299195-21a2d44a-9c2c-47f7-bdfa-1d5dbdd53ec2.png)
![image](https://user-images.githubusercontent.com/50851374/167299272-dcbe50ee-cbff-4387-8f7b-bfa877cfd268.png)
![image](https://user-images.githubusercontent.com/50851374/167299308-126e8dbf-0fbe-4bce-8ac5-b995e73dac3e.png)
![image](https://user-images.githubusercontent.com/50851374/167299327-b516171f-d9e4-4ae4-b8c6-7c4248ad3b5b.png)






