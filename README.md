<h1>Bernnardo Francisco de oliveira silva </h1>
<h1>CONSTRUINDO UMA VITRINE A PARTIR DE UMA API DE ANIMES COM REACT NEXTJS</h1>

Autor: Bernnardo Francisco de Oliveira Silva <br>
RA:10435832<br><br>
<img src="Captura de Tela 2024-11-24 às 01.26.21.png">
<p>Este é um projeto desenvolvido utilizando Next.js que exibe uma lista de animes com suas respectivas informações, consumindo dados de uma API deanimes. A aplicação é composta por uma estrutura simples que traz informações como nome, imagem, número de episódios e rank dos animes, utilizando um Access Token gerado a partir da API Superhero API. Foi disponibilizada a pasta app (a única modificada). Para ver a apliação renderizada no navegador, basta criar um projeto Next.js, copiar e colar os arquivos e usar o comando `npm run dev`.</p>
<h1>Funcionalidades</h1>
<ul>
<li>Exibição de uma lista de cards de animes com suas imagens e atributos.</li>
<li>Uso de Next.js para renderizar os componentes.</li>
<li>Estilo visual simples e moderno para os cards.</li>
</ul>
<h1>Descrição dos arquivos e pastas</h1>
<ul>
  <li>/pages: Contém a estrutura principal da página e os componentes relacionados.</li>
  <li>page.js: Página principal onde os animes são carregados via API e exibidos.</li>
  <li>components/VitrineAnimesCard.jsx: Componente que representa cada card de herói, exibindo a imagem e as informações.</li>
   <li>components/VitrineAnimesCard.module.css: página de estilos do componente VitrineAnimesCard</li>
  <li>/styles: Contém os arquivos de estilo CSS para a aplicação.</li>
  <li>Home.module.css: Estilos específicos para a página principal.</li>
  <li>global.css: Estilos globais aplicados a todo o site.</li>
  <li>/layout.js: Definição do layout raiz da aplicação, com fontes personalizadas e estrutura HTML básica.</li>
</ul>
<h1>Funcionamento</h1>
<p>A aplicação faz uma requisição para a Superhero API para buscar informações de animes. Após obter os dados, a aplicação renderiza os cards de animes na página.</p>
<h1>Página principal</h1>
<p>No arquivo page.js, a função useEffect faz uma chamada assíncrona para a API utilizando o Access Token gerado. Caso a requisição seja bem-sucedida, os dados dos animes são armazenados no estado da aplicação (setHerois).</p>

<h3>declaração da função principal</h3>

```
export default function Home() {
```


<h3>declaração dos estados </h3>

```
  const [animes, setAnimes] = useState([]); 
 ``` 

<h3>Fetch com JSON Server</h3>

```
  const [animes, setAnimes] = useState([]); 

  useEffect(() => {
      async function fetchAnimes() {
        try {
          const res = await fetch("https://api.jikan.moe/v4/seasons/2021/spring?sfw");
          const data = await res.json(); 
          setAnimes(data); 
          console.log(data);
        } catch (err) {
          console.error("Failed to fetch heroes:", err);
        }
      }
  
      fetchAnimes();
    }, []);
```

```
<h3>retorno do componente</h3>
return (
      <div className={styles.container}>
          <VitrineAnimeCard animes={animes.data}>
              
          </VitrineAnimesCard>
    </div>
  );
  ```
<p>Os animes são então mapeados para componentes VitrineAnimesCard, que exibem o nome, imagem, quantidade de episódios e a popularidade de cada anume.</p>

<h1>Componente VitrineAnimeCard</h1>
<h2>Explicação do Código</h2>

<p>O código é um componente funcional React chamado <code>VitrineAnimeCard</code>. Ele recebe um array de objetos chamado <code>animes</code> como propriedade e renderiza uma vitrine com cards, onde cada card representa um anime.</p>

<h3>Importações</h3>

```
import React from "react";
import styles from "./VitrineAnimeCard.module.css";

```

<ul>
  <li><code>React</code>: Importado para criar o componente funcional.</li>
  <li><code>styles</code>: Importa um arquivo CSS modular para estilização do componente.</li>
</ul>

<h3>Estrutura do Componente</h3>

```
import React from "react";
import styles from "./VitrineAnimeCard.module.css";

export default function VitrineAnimeCard({ animes }) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
      {Array.isArray(animes) &&
        animes
          .filter(
            (data) =>
              data &&
              data.title &&
              data.images &&
              data.rank &&
              data.episodes &&
              data.duration &&
              data.images.jpg &&
              data.images.jpg.image_url
          ) 
```
<ul>
  <li>
    <strong>Verificação da Propriedade <code>animes</code></strong>
    <p>Antes de renderizar, é verificado se <code>animes</code> é um array utilizando <code>Array.isArray</code>.</p>
  </li>
  <li>
    <strong>Filtragem de Dados</strong>
    <p>Os dados do array são filtrados para garantir que todos os objetos tenham os seguintes campos:</p>
    <ul>
      <li><code>title</code></li>
      <li><code>rank</code></li>
       <li><code>duration</code></li>
      <li><code>images</code></li>
      <li><code>images.jpg.image_url</code></li>
    </ul>
  </li>
  <li>

<strong>Mapeamento e Renderização</strong>
    
    .map((data) => (
          <article className={styles.card}>
            <img
              src={data.images.jpg.image_url}
              alt={"imagem de" + data.title}
              key={data.id || Math.random()} 
              className={styles.image}
              
            />
            <h1 className={styles.nome}>{data.nome}</h1>
            <p >Episódios: {data.episodes}</p>
            <p>Duração: {data.duration}</p>
            <p>Rank: {data.rank}</p>
          </article>


  <p>Os dados filtrados são mapeados, gerando um card (<code>&lt;article&gt;</code>) para cada anime. Cada card contém:</p>
  <ul>
    <li><code>&lt;img&gt;</code>: Exibe a imagem do anime, usando <code>large_image_url</code>.</li>
    <li><code>&lt;h1&gt;</code>: Exibe o nome do anime (campo <code>nome</code>).</li>
    <li><code>&lt;p&gt;</code>: Mostra informações adicionais como número de episódios e favoritos.</li>
  </ul>
  </li>
</ul>

<h3>Estilização</h3>
<p>O CSS modular é utilizado para aplicar estilos aos elementos do componente. As classes estilizadas incluem:</p>
<ul>
  <li><code>styles.container</code>: Estiliza o contêiner principal do componente.</li>
  <li><code>styles.div</code>: Estiliza o elemento que envolve os cards.</li>
  <li><code>styles.card</code>: Aplica estilos individuais aos cards.</li>
  <li><code>styles.imagem</code>: Estiliza as imagens dos animes.</li>
  <li><code>styles.nome</code>: Aplica estilo ao título do anime.</li>
</ul>



