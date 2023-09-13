# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

**Persona Geral:** 
Ana Clara, tem 34 anos e é designer gráfica. Cresceu na cidade mas sempre gostou muito da natureza, suas férias favoritas eram quando seus pais a levavam para acampar ou visitar parques. Ana é apaixonada por ecoturismo, camping e trilhas. Sempre que pode, escapa para um retiro natural, seja um final de semana em uma reserva ecológica ou uma viagem de mochilão por destinos menos tradicionais. Acredita que todo mundo pode fazer algo para contribuir com a saúde do planeta, seja através de pequenas mudanças de estilo de vida ou através de ativismo. Utiliza o site para saber mais sobre hábitos sustentáveis e os ambientes que vai visitar, sua condição de conservação e as espécies que pode encontrar por lá.

**Persona estudante:**
Felipe, um estudante de 21 anos, está cursando Biologia na universidade. Desde criança, ele é fascinado pela vida selvagem e tem um forte interesse em aprender sobre biomas em extinção e os animais que neles habitam. Seu sonho é se tornar um pesquisador de campo para contribuir com a preservação da biodiversidade. Felipe é curioso, defensor da natureza, usa a tecnologia para se informar, compartilha informações nas redes sociais e adora tirar fotos da natureza. Ele usaria o site para pesquisa, aprendizado, recursos confiáveis, atualizações regulares e conscientização. 

**Persona empresarial:**
Carolina, CEO de 42 anos de uma empresa de sustentabilidade, é uma empresária experiente e comprometida com a causa ambiental. Com visão estratégica e vasta rede de contatos, ela busca conciliar o crescimento da indústria com a conservação da biodiversidade. Carolina utiliza o site para pesquisar, obter insights para estratégias de negócios sustentáveis, estabelecer parcerias e educar sua equipe. Sua abordagem informada e focada na colaboração a torna uma líder influente no campo da sustentabilidade industrial.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                  |PARA ... `MOTIVO/VALOR`                                          |
|--------------------|-----------------------------------------------------|-----------------------------------------------------------------|
|Persona Geral       | de informações sobre destinos de ecoturismo         | encontrar locais para visitar e saber mais sobre eles           |
|Persona Geral       | de informações sobre espécies de animais e plantas  | saber quais delas posso encontrar nos passeios                  |
|Persona Geral       | saber sobre as espécies em perigo de extinção       | entender melhor a situação do nosso ambiente                    |
|Persona Geral       | saber mais sobre hábitos sustentáveis               | mudar meu estilo de vida e contribuir para a saúde do planeta   |
|Persona Estudante   | de recursos e informações confiáveis                | progredir nos meus estudos                                      |
|Persona Estudante   | poder compartilhar minhas observações e fotos       | gerar engajamento e dividir experiências com outras pessoas     |
|Persona Empresarial | de estratégias de negócios                          | conciliar o crescimento da minha empresa com a sustentabilidade |
|Persona Empresarial | um espaço que me ofereça oportunidades de parcerias | colaborar com organizações de conservação                       |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário consulte informações sobre animais em extinção | ALTA |  |
|RF-002| Permitir que o usuário consulte informações sobre biomas em risco   | ALTA | |
|RF-003| Permitir que o usuário acesse informações sobre pontos de turismo ecológicos   | ALTA | |
|RF-004| Disponibilizar artigos, relatórios e estudos atualizados sobre sustentabilidade industrial   | ALTA | |
|RF-005| Disponibilizar dicas de estratégias de negócios sustentáveis   | ALTA | |
|RF-006| Permitir que o usuário filtre os pontos de turismo ecológico por cidade   | MÉDIA | |
|RF-007| Permitir que o usuário filtre os animais em extinção | MÉDIA |
|RF-008| Permitir que o usuário filtre por biomas em extinção | MÉDIA |
|RF-009| Permitir que o usuário filtre por data do conteúdo | MÉDIA |
|RF-010| Permitir que o usuário filtre por tipo de conteúdo | MÉDIA |
|RF-011| Disponibilizar fóruns de discussão e grupos de trabalho virtuais.   | MÉDIA | |
|RF-012| Disponibilizar um espaço para comentário de usuários   | BAIXA | |
|RF-013| Disponibilizar um local para publicar fotos de animais silvestres e onde foram avistados   | BAIXA | |
|RF-014| Permitir conexão com outros líderes do setor de sustentabilidade industrial   | BAIXA | |



### Requisitos não Funcionais

|ID        | Descrição do Requisito  |Prioridade |
|----------|-------------------------|----|
|RNF-001| A interface do site deve ser intuitiva e fácil de navegar, com um design responsivo que funcione bem em dispositivos móveis e desktop |ALTA | 
|RNF-002| Garantir a privacidade dos dados dos usuários, cumprindo todas as regulamentações de privacidade aplicáveis | ALTA |
|RNF-003| Ser compatível com uma variedade de navegadores, como Chrome, Firefox, Safari e Edge, para garantir uma experiência consistente | MÉDIA |
|RNF-004| Ser otimizado para funcionar bem em smartphones e tablets, com design responsivo e boa usabilidade em telas menores | BAIXA |
|RNF-005| Cumprir os padrões de acessibilidade da web para garantir que pessoas com deficiência possam acessar e utilizar o site sem dificuldades | BAIXA |
|RNF-006| Permitir que os usuários controlem suas configurações de privacidade | BAIXA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O front end será desenvolvido apenas com HTML, CSS e JS puros, sem framework      |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
