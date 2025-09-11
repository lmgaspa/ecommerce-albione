import Container from '../components/common/Container';
import ContentBlock from '../components/common/ContentBlock';
import { useNavigate } from 'react-router-dom';

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

      <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Livros</h2>
      <div className="flex flex-wrap justify-center gap-16">
        <div onClick={() => navigate('/books/amendoeiras')}>
          <ContentBlock 
            title="Amendoeiras de Outono" 
            imageUrl="/images/amendoeiras.webp" 
            description="Romance marcante de albione Souza Silva." 
          />
        </div>
        <div onClick={() => navigate('/books/chamaoburro')}>
          <ContentBlock 
            title="Chama o burro e outras crônicas de antanho" 
            imageUrl="/images/chamaoburro.webp" 
            description="Crônicas de antanho cheias de memória e emoção." 
          />
        </div>
        <div onClick={() => navigate('/books/entrenuvensdeambar')}>
          <ContentBlock 
            title="Entre nuvens de âmbar" 
            imageUrl="/images/entrenuvensdeambar.webp" 
            description="O sonho tirano insiste e persegue." 
          />
        </div>
        <div onClick={() => navigate('/books/portal')}>
          <ContentBlock 
            title="Portal da Piedade" 
            imageUrl="/images/portaldapiedade.webp" 
            description="Crônicas sensíveis sobre o cotidiano e a memória." 
          />
        </div>
        <div onClick={() => navigate('/books/ocinza')}>
          <ContentBlock 
            title="O cinza e o silêncio" 
            imageUrl="/images/ocinzaeosilencio.webp" 
            description="Reflexões em meio ao silêncio e à saudade." 
          />
        </div>
        <div onClick={() => navigate('/books/lambe')}>
          <ContentBlock 
            title="Lambe-lambe e outros contos" 
            imageUrl="/images/lambe.webp" 
            description="Contos cheios de vida e simplicidade." 
          />
        </div>
        <div onClick={() => navigate('/books/abc')}>
          <ContentBlock 
            title="O abc do Cabôco" 
            imageUrl="/images/oabcdocaboco.webp" 
            description="Retrato popular e poético do cabôco brasileiro." 
          />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
