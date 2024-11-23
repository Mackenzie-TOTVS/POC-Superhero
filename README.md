<h1>CONSTRUINDO UMA VITRINE A PARTIR DE UMA API DE ANIMES COM REACT NEXTJS</h1>
<p>Este é um projeto desenvolvido utilizando Next.js que exibe uma lista de animes com suas respectivas informações, consumindo dados de uma API deanimes. A aplicação é composta por uma estrutura simples que traz informações como nome, imagem, inteligência e força de animes, utilizando um Access Token gerado a partir da API Superhero API.</p>
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
<h1>Detalhes da Requisição</h1>
<p>No arquivo page.js, a função useEffect faz uma chamada assíncrona para a API utilizando o Access Token gerado. Caso a requisição seja bem-sucedida, os dados dos animes são armazenados no estado da aplicação (setHerois).</p>

<h3>declaração da função principal </h3>

```js
export default function Home() {
```


<h3>declaração dos estados </h3>

```js
  const [animes, setAnimes] = useState([]); 
 ``` 

<h3>Fetch com JSON Server</h3>

```js
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

<h1>Estilos</h1>
<p>Os estilos são aplicados para garantir um layout limpo e moderno:</p>
<ul>
  <li>page.module.css: Define o estilo dos cards e da grid de animes, com flexbox para exibição em grid.</li>
  <li>global.css: Estilos globais, incluindo a definição da fonte e o fundo da página.</li>
</ul>
