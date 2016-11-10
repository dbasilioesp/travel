# Travel

Este site foi desenvolvido utilizando NodeJS.

https://nodejs.org/en/

Instale as dependências listadas no arquivo _package.json_ utilizando o seguinte comando:

	npm install

Para continuar é preciso ter instalado globalmente a interface de linha de comando do pacote Grunt.

	npm install -g grunt-cli 

Agora é só inicializar o servidor web e visualizar a página pela url http://localhost:9001 .

	grunt


## Styles

O arquivo _app.css_ não é incluido no versionamento do projeto, por isso é preciso compilar os arquivos de Sass com os seguintes comandos:

    grunt sass
    grunt postcss
