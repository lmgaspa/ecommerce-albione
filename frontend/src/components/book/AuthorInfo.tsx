interface AuthorInfoProps {
  author: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  return (
    <div className="bg-background rounded-lg shadow-lg p-8 mb-0">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src="/images/albione.webp" alt={author} className="w-32 h-32 rounded-full shadow-md" />
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">{author}</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Albione Souza Silva: Nascido em Ipiaú – BA, graduado em História pela Universidade Estadual de Santa Cruz (UESC), Itabuna/Ilhéus. Especialista em Educação, Cultura e Memória – Universidade Estadual do Sudoeste da Bahia (UESB), Vitória da Conquista. Mestre em História pela Universidade do Estado da Bahia (UNEB), campus II, Alagoinhas. Membro do Grupo de Pesquisa História, Literatura e Memória, da Universidade do Estado da Bahia. Leciona na Rede de Ensino do Estado da Bahia e na Rede Municipal de Ipiaú.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
