# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, email, senha, Estado e Cidade e clica no botão "Continuar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta parte 2**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa gênero, seu tipo de usuário (cuidador ou comum), data de nascimento e clica em criar.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela de login.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

|*Caso de Teste*                                 |*TC-01 - Acessar informações sobre animais*                                         |
|---|---|
|Requisito Associado | RF-001 - Permitir que o usuário consulte informações sobre animais em extinção.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1txfQ0xRn1Vp-sbnTR6HrPTpatj8y_ook/view?usp=sharing| 

|*Caso de Teste*                                 |*TC-02 - Acessar informações sobre biomas*                                         |
|---|---|
|Requisito Associado | RF-002 - Permitir que o usuário consulte informações sobre biomas em risco.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1EPg8ThmksrLQAqF539HNJeoyVWqQmuEX/view?usp=sharing | 

|*Caso de Teste*                                 |*TC-03 - Acessar informações sobre ecoturismo*                                         |
|---|---|
|Requisito Associado | RF-003 - Permitir que o usuário acesse informações sobre pontos de turismo ecológicos.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1bIWiaIP0ndbvdvRpQVqju1b7Mthmi2Ti/view?usp=sharing |

|*Caso de Teste*                                 |*TC-04 - Acessar informações sobre negócios*                                         |
|---|---|
|Requisito Associado | RF-005 - Disponibilizar dicas de estratégias de negócios sustentáveis|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1rm2rFSUR4Ms1aOzC9hOYvovW8-HIpf6C/view?usp=sharing |

|*Caso de Teste*                                 |*TC-05 - Acesso a informações sobre parceiros*                                         |
|---|---|
|Requisito Associado | RF-014 - Permitir conexão com outros líderes do setor de sustentabilidade industrial|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1fnKFm9XhyowqPyb6O3kFwjHmp3_kKIWB/view?usp=sharing |

|*Caso de Teste*                                 |*TC-06 - Acessar fórum e comentar*                                         |
|---|---|
|Requisito Associado |RF-011 - Disponibilizar fóruns de discussão e grupos de trabalho virtuais. RF-012 - Disponibilizar um espaço para comentários de usuários.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/16bXyUx95hbo4uDVm5r7sa5oqCu6sNm_Z/view?usp=sharing|

## Avaliação dos Testes de Software

A avaliação dos testes de software realizados para a sua aplicação revela diversos aspectos importantes sobre o funcionamento e a eficácia da solução.

- **Pontos Fortes:**
Funcionalidade Abrangente: A aplicação cobre uma gama variada de funcionalidades, desde informações sobre animais em extinção até fóruns de discussão e sustentabilidade empresarial. Isso indica uma boa compreensão das necessidades dos usuários e um esforço para atender a uma variedade de interesses.

- **Pontos Fracos e Falhas:**
Segurança e Privacidade: Testes relacionados à segurança de dados e privacidade dos usuários não são mencionados, o que é crítico especialmente ao lidar com fóruns de discussão e informações de empresas parceiras.
Falta de Navegação Intuitiva para Retorno: A aplicação não oferece uma maneira simples e intuitiva de retornar à página original após o usuário navegar para diferentes seções. 

- **Melhorias e Próximas Iterações:**
Otimizar Desempenho: Realizar testes de carga e desempenho para garantir que a aplicação funcione de forma eficiente, mesmo sob alta demanda.
Fortalecer Segurança e Privacidade: Implementar testes rigorosos de segurança, como testes de penetração, para garantir a proteção de dados dos usuários.
Melhoria Sugerida: Implementar botões de "voltar" de fácil acesso em todas as páginas. 

- **Falhas Detectadas e Ações Corretivas:**
Falha: Ausência de testes focados em segurança e privacidade.
Ação Corretiva: Desenvolver e implementar um conjunto de testes de segurança para identificar e corrigir vulnerabilidades.

Em resumo, a aplicação demonstra solidez em suas funcionalidades principais, mas requer atenção adicional em áreas como usabilidade, desempenho e segurança. As próximas iterações devem focar em abordar esses pontos fracos para melhorar a experiência geral do usuário e a robustez da aplicação.


## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade

**Taxa de Sucesso e Satisfação Subjetiva:**
- Todos os cenários demonstraram uma taxa de sucesso de 100%, indicando que as funcionalidades estão operando conforme esperado.
- A satisfação subjetiva dos usuários foi consistentemente alta, com médias variando entre 4 e 5, refletindo uma experiência positiva com a aplicação.

**Tempo de Conclusão:**
- O tempo médio de conclusão dos cenários pelos usuários é maior do que o tempo gasto pelo especialista, o que é esperado. Contudo, a discrepância não é excessivamente grande, sugerindo que a aplicação é relativamente fácil de navegar.
  
**Oportunidades de Melhoria e Observações dos Usuários:**


- Usuários sugeriram a inclusão de destinos internacionais, indicando uma demanda por uma variedade maior de conteúdo.
- Comentários positivos sobre a facilidade de encontrar informações, mas uma observação sobre a qualidade da imagem (foto esticada) sugere a necessidade de atenção à qualidade visual.
- Usuários sentiram falta de informações mais direcionadas para indivíduos e menos focadas no aspecto empresarial.
- Há uma necessidade de fornecer fontes para as informações apresentadas, a fim de aumentar a credibilidade e o valor educativo do site.
- Problemas parciais com o compartilhamento e um desejo por mais opções interativas, como compartilhamento de imagens, indicam uma área importante para melhorias.
- Comentários positivos sobre a facilidade de encontrar informações e parceiros, mas uma sugestão para maior engajamento com outras organizações.

**Conclusão e Recomendações:**
- A aplicação é altamente eficaz em termos de funcionalidade e satisfação do usuário, mas há espaço para melhorias no conteúdo, na interatividade.
- Melhorar a diversidade e a profundidade do conteúdo, juntamente com a apresentação visual, pode enriquecer a experiência do usuário.
- Aprimorar as funcionalidades de compartilhamento e interação no fórum pode aumentar o engajamento dos usuários e promover uma comunidade mais ativa.

Em resumo, os testes de usabilidade atualizados mostram uma aplicação bem recebida pelos usuários com várias oportunidades para refinamento e aprimoramento, focando na melhoria da interatividade, do conteúdo e da credibilidade das informações.


