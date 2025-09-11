import Container from "../components/common/Container";
import ContentBlock from "../components/common/ContentBlock";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentBlock
        title="Albione Souza Silva"
        imageUrl="/images/albione.webp"
        description="Albione Souza Silva: Nascido em Ipiaú – BA, graduado em História pela Universidade Estadual 
        de Santa Cruz (UESC), Itabuna/Ilhéus. Especialista em Educação, Cultura e Memória – Universidade
        Estadual do Sudoeste da Bahia (UESB), Vitória da Conquista.
        Mestre em História pela Universidade do Estado da Bahia (UNEB), campus II, Alagoinhas. Membro do Grupo de Pesquisa História, Literatura e Memória, da Universidade do Estado da Bahia. Leciona na Rede de Ensino do Estado da Bahia e na Rede Municipal de Ipiaú."
        isAuthor
      />

      <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">
        Livros
      </h2>
      <div className="flex flex-wrap justify-center gap-16">
        <div onClick={() => navigate("/books/daterra")}>
          <ContentBlock
            title="Os despossuídos da terra – Edição especial: 100 anos de Euclides Neto"
            imageUrl="/images/daterra.webp"
            description="Dentre outros pontos, nesta obra tratamos das narrativas e idiossincrasias das
     personagens rurais que Euclides Neto apresenta
    em suas obras literárias, salientando o olhar dos silenciados e
    excluídos da história tradicional. <br><br>Portanto, volta-se para os trabalhadores
    e trabalhadoras que, com seu sangue, suor e lágrimas, geravam a riqueza dos
    grandes cacauicultores baianos.<br><br>
    Na literatura euclidiana não há exaltação
    aos ditos “vitoriosos desbravadores”, que colonizaram as matas,
    tornaram-se os donos do fruto do ouro e ostentavam a riqueza como troféu.<br><br>
    Suas tramas seguem um caminho inverso, pois, em seu enredo, o fazendeiro é o
    coadjuvante, à sombra do trabalhador.<br><br> Assim sendo, nesse prisma, com muito viço,
    entram em cena os subalternos despossuídos da terra, anônimos, esquálidos, vivendo
    nos ranchos de taipas, cobertos de indaiás em meio aos venerados cacauais.<br><br>

Os despossuídos da terra é, portanto, um livro necessário nesses tempos sombrios, pois sugere esperança, de onde se espera apenas a aridez da luta diante de tantas adversidades. `,"
          />
        </div>
        <div onClick={() => navigate("/books/cido")}>
          <ContentBlock
            title="Cido, O Pequeno Cidadão"
            imageUrl="/images/cido.webp"
            description="Conhecer a cultura, a história e os aspectos sociais 
    do ambiente em que se vive são fatores imprescindíveis
     para se construir uma consciência cidadã.<br><br> Em Cido, o pequeno cidadão percebemos todo um propósito de conhecimento envolvido por um sentimento pessoal do autor com uma memória afetiva do seu lugar de origem."
          />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
