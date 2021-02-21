const axios = require('axios');
const TotalVoice = require('totalvoice-node');
const client = new TotalVoice('b46d6fd08e44271ec09d88434fe20c26');

const servers = [
	{
		name: 'Servidor 1',
		url: 'http://localhost:4001',
		developer: {
			name: 'Mateus Souza',
			telephone: '99991947191',
		},
	},
	{
		name: 'Servidor 2',
		url: 'http://localhost:4002',
		developer: {
			name: 'Mateus Souza',
			number: '99991947191',
		},
	},
];

(async function () {
	console.log('Iniciando monitoramento dos servidores');
	for (const server of servers) {
		await axios({
			url: server.url,
			method: 'get',
		})
			.then((response) => {
				console.log(`${server.name} está no ar`);
			})
			.catch((err) => {
				console.log(`${server.name} parou de funcionar`);
				const message = `Olá ${server.developer.name} você acaba de ligar para o tele  sexo , você deseja loira ou morena ?`;
				const options = {
					velocidade: 2,
					tipo_voz: 'br-Vitoria',
				};
				client.tts.enviar(server.developer.number, message, options).then(() => {
					console.log(`o desenvolvedor ${server.developer.name} já foi avisado!`);
				});
			});
	}
	console.log('Finalizando monitoramento dos servidores');
})();
