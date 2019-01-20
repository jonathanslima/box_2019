#TAREFINHAS

MODULOS FINAL PT-1

1. Criar pagina single de categoria e/ ou tag
2. Criar loop com post type
3. Usar o plugin wp-navi para fazer paginação
4. Trocar pasta padrão wp-content para outra pasta com outro nome Ex: assets/
5. Criar um menu usando o Wordpress
6. Início da implementação do tema Kreo com WP utilizando tema sugerido ou um próprio

## Helpers

- É necessário chamar a paginação no mesmo array de chamada do post type
- Tem um repositório como alterar o nome da pasta wp-content

/* ================================================================================================== */

#TAREFINHAS

MODULO 1, 2, 3 e 4_1/2

1. Criar post type (qq nome) (colocar em funcions.php dentro do tema)
2. Criar uma taxonomia para esse post type
3. Crie valores para essa nova taxonomia ex: (posttype: ps4 // taxonomia: genero // valores: terror, fps, guerra, arcade, etc)
3. Cadastre vários itens e set no painel esses diversos valores de taxonomia
4. Clique na home do "site" nas taxonomias e veja se apareceuma nova página filtrando.
5. Instale um novo Wordpress para o projeto final Kreo v5 

## Helpers

- Tema para instalar em wp-content: http://html5blank.com/ 

- Gerador de custom post type: https://generatewp.com/post-type/ 

- Como adicionar uma taxonomia em um post type customizado? - https://www.google.com/search?q=add+taxonomy+to+custom+post+type+wordpress&rlz=1C1GCEB_enBR811BR811&oq=ADD+TAXONOMY+TO+CUSTOM+POST+TYPE&aqs=chrome.2.69i57j0l5.9271j1j7&sourceid=chrome&ie=UTF-8 

- Colocar em localhost código - 
<code>define('FS_METHOD', 'direct');</code>  
em wp-config dentro do <?php para poder instalar plugins em localhost, não necessário em prd

- Para testar instalem o plugin: contactform7

- Caso tenham problemas em publicar arquivos no novo editor WP, instalem o seguinte plugin: https://br.wordpress.org/plugins/classic-editor/ 
