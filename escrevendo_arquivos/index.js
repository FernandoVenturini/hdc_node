// Importa o módulo HTTP do Node.js para criar um servidor web
const http = require("http");

// Importa o módulo FS (File System) para ler e escrever arquivos no computador
const fs = require("fs");

// Importa o módulo URL para analisar e extrair informações das URLs das requisições
const url = require("url");

// Define a porta 3000 onde o servidor vai ficar "escutando" as requisições
const port = 3000;

// Cria um servidor HTTP. A função dentro do createServer é chamada toda vez que alguém acessa o servidor
const server = http.createServer((req, res) => {
	// req = requisição (o que o cliente enviou)
	// res = resposta (o que o servidor vai devolver)

	// Analisa a URL da requisição (ex: http://localhost:3000/?nome=Fernando)
	// O 'true' faz com que os parâmetros da URL sejam convertidos em um objeto JavaScript
	const urlInfo = url.parse(req.url, true);

	// Extrai o valor do parâmetro 'name' da URL (ex: ?name=Fernando -> name = "Fernando")
	const name = urlInfo.query.name;

	// Verifica se o parâmetro 'name' NÃO foi enviado na URL
	// Se não foi enviado (name é undefined, null ou vazio), entra nesse bloco
	if (!name) {
		// Tenta ler o arquivo "index.html" do disco usando codificação UTF-8 (texto)
		fs.readFile("index.html", "utf8", (err, data) => {
			// err: contém erro se não conseguiu ler o arquivo
			// data: contém o conteúdo do arquivo se leu com sucesso

			// Se ocorreu um erro ao ler o arquivo (ex: arquivo não existe)
			if (err) {
				// Define o status HTTP 500 (Erro Interno do Servidor)
				// E informa que a resposta será em texto puro
				res.writeHead(500, { "Content-Type": "text/plain" });

				// Encerra a resposta enviando a mensagem de erro para o cliente
				return res.end("Erro ao ler o arquivo");
			}

			// Se leu o arquivo com sucesso:
			// Define o status HTTP 200 (Sucesso) e informa que a resposta será HTML
			res.writeHead(200, { "Content-Type": "text/html" });

			// Escreve o conteúdo do arquivo index.html na resposta
			res.write(data);

			// Encerra a resposta (envia tudo para o cliente/navegador)
			return res.end();
		});
	} else {
		// Se o parâmetro 'name' FOI enviado na URL, entra nesse bloco

		// Cria/sobrescreve o arquivo "arquivo.txt" com o nome recebido na URL
		// name: o conteúdo a ser escrito no arquivo
		// function(err): callback executada quando terminar de escrever
		fs.writeFile("arquivo.txt", name, function (err) {
			// Se ocorreu um erro ao escrever o arquivo (ex: permissão negada)
			if (err) {
				// Define o status HTTP 500 (Erro Interno do Servidor)
				// E informa que a resposta será em texto puro
				res.writeHead(500, { "Content-Type": "text/plain" });

				// Encerra a resposta enviando a mensagem de erro para o cliente
				return res.end("Erro ao escrever o arquivo");
			}

			// Se escreveu o arquivo com sucesso:
			// Define o status HTTP 302 (Redirecionamento)
			// E informa que o cliente deve ser redirecionado para a página inicial "/"
			res.writeHead(302, { Location: "/" });

			// Encerra a resposta (o navegador vai automaticamente para a página inicial)
			return res.end();
		});
	}
});

// Inicia o servidor na porta definida (3000)
// A função callback é executada quando o servidor começar a rodar
server.listen(port, () => {
	// Exibe uma mensagem no console/terminal informando que o servidor está ativo
	// Mostra também o endereço onde o servidor pode ser acessado
	console.log(`Servidor rodando em http://localhost:${port}`);
});
