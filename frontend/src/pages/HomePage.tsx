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
            description="A obra destaca as narrativas das personagens rurais retratadas por Euclides Neto, dando voz aos trabalhadores silenciados e marginalizados pela história oficial. Em vez de glorificar os grandes fazendeiros do cacau, o autor coloca os camponeses no centro, mostrando sua luta, sofrimento e dignidade. Os despossuídos da terra revela a vida dos anônimos que sustentavam a riqueza baiana, tornando-se uma leitura necessária por trazer esperança mesmo em meio às adversidades."
          />
        </div>
        <div onClick={() => navigate("/books/cido")}>
          <ContentBlock
            title="Cido, O Pequeno Cidadão"
            imageUrl="/images/cido.webp"
            description="Conhecer a cultura, a história e os aspectos sociais do lugar onde se vive é essencial para formar uma consciência cidadã. No livro Cido, o pequeno cidadão, percebe-se a intenção de transmitir esse conhecimento, envolvido por memórias afetivas do autor em relação ao seu local de origem."
          />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
