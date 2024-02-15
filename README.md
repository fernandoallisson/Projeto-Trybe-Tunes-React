# :construction: Projeto Trybe Tunes :construction:
Este projeto é uma aplicação web desenvolvida em React com Typescript para criação de uma plataforma de streaming de música chamada Trybetunes. A aplicação oferece funcionalidades para pesquisa de álbuns, visualização de músicas, marcação de músicas como favoritas e edição do perfil do usuário.

## Componentes Principais:

### App: 
Componente principal da aplicação, responsável por rotear as diferentes páginas e organizar a estrutura da interface.

### Layout: 
Componente que define o layout da aplicação, incluindo o cabeçalho com links de navegação e o conteúdo renderizado de acordo com a rota.

### Header: 
Cabeçalho da aplicação, exibindo o nome do usuário logado (se houver) e links para as páginas de busca, favoritos e perfil.

### MusicCard: 
Componente responsável por exibir detalhes de uma música, como nome, reprodução e opção de marcar como favorita.

### Album: 
Página que exibe os detalhes de um álbum específico, incluindo o nome do artista, o nome do álbum e a lista de músicas.

### Search:
Página de busca, onde o usuário pode pesquisar álbuns pelo nome do artista.

### Favorites:
Página que exibe a lista de músicas marcadas como favoritas pelo usuário.

### Profile:
Página de perfil do usuário, onde são exibidas informações sobre o usuário e suas preferências.

### ProfileEdit:
Página de edição do perfil do usuário, onde ele pode atualizar suas informações pessoais.

### Login: 
Página de login, onde o usuário pode inserir seu nome para acessar a plataforma.

### NotFound:
Página de erro 404, exibida quando uma rota não é encontrada.

## Funcionalidades Principais:

### Pesquisa de álbuns: 
Permite ao usuário buscar álbuns pelo nome do artista.
### Visualização de álbuns: 
Exibe os detalhes de um álbum específico, incluindo o nome do artista, nome do álbum e lista de músicas.
### Marcação de músicas favoritas: 
Permite ao usuário marcar músicas como favoritas, utilizando uma opção de marcação.
### Edição do perfil do usuário: 
Permite ao usuário editar suas informações pessoais, como nome de usuário.
### Autenticação: 
Requer que o usuário faça login com seu nome para acessar a plataforma.
## Tecnologias Utilizadas:

### React: 
Biblioteca JavaScript para construção de interfaces de usuário.
### React Router DOM: 
Biblioteca para roteamento de páginas na aplicação.
### Typescript: 
Superset JavaScript que adiciona tipagem estática à linguagem.
### useEffect e useState: 
Hooks do React para gerenciamento de efeitos colaterais e estado nos componentes funcionais.
### CSS: 
Estilos para a interface da aplicação.

## Conclusão:
Este projeto oferece uma experiência de usuário interativa e responsiva, permitindo ao usuário navegar, pesquisar e interagir com músicas de forma fácil e intuitiva. Além disso, a utilização do Typescript adiciona segurança e robustez ao código, facilitando sua manutenção e escalabilidade.