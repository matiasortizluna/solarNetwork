<?php

use Illuminate\Database\Seeder;

class ProdutosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("Seed Produtos - Inicio");

        $faker = Faker\Factory::create('pt_PT');
        $createdAt = Carbon\Carbon::now()->subDays(30);

        DB::table('produtos')->insert([
            [
                'nome' => 'Alheira',
                'foto' => 'alheira.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Farinheira',
                'foto' => 'farinheira.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Morcela',
                'foto' => 'morcela.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Chourição',
                'foto' => 'chouricao.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Chouriça',
                'foto' => 'chourica.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Negro',
                'foto' => 'negro.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Presunto',
                'foto' => 'presunto.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Fiambre',
                'foto' => 'fiambre.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Queijo Fatiado',
                'foto' => 'queijofatiado.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Queijo Fresco',
                'foto' => 'queijofresco.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Feijão Enlatado',
                'foto' => 'feijaoenlatado.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Leite Condensado',
                'foto' => 'leitecondensado.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Pimenta',
                'foto' => 'pimenta.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Queijo Seco',
                'foto' => 'queijoseco.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Manteiga',
                'foto' => 'manteiga.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Vaqueiro',
                'foto' => 'vaqueiro.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Bróculos',
                'foto' => 'broculos.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Espinafres',
                'foto' => 'espinafres.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Ervilhas',
                'foto' => 'ervilhas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Bacalhau com natas',
                'foto' => 'bacalhaucomnatas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Bacalhau à brás',
                'foto' => 'bacalhauabras.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Rissóis',
                'foto' => 'rissois.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Pastéis de bacalhau',
                'foto' => 'pasteisbacalhau.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Panados',
                'foto' => 'panados.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Favas',
                'foto' => 'favas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Grelos',
                'foto' => 'grelos.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Hambúrger',
                'foto' => 'hamburger.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Sortido',
                'foto' => 'sortido.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Massa Esparguete',
                'foto' => 'massaesparguete.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Waffer',
                'foto' => 'waffer.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Mistura Pensal',
                'foto' => 'misturapensal.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Liquído Louça',
                'foto' => 'liquidolouca.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Chocolates',
                'foto' => 'chocolates.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Ferraduras',
                'foto' => 'ferraduras.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Parrameiros',
                'foto' => 'parrameiros.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Broas',
                'foto' => 'broas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Canela Pau',
                'foto' => 'canelapau.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Canela Moída',
                'foto' => 'canelamoida.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Erva Doce',
                'foto' => 'ervadoce.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Vinagre',
                'foto' => 'vinagre.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Pão Ralado',
                'foto' => 'paoralado.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Massas Letras',
                'foto' => 'massaletras.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Polpa de Tomate',
                'foto' => 'polpatomate.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Pimentão',
                'foto' => 'pimentao.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Ferrero Rocher',
                'foto' => 'ferrerorocher.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Acendalhas',
                'foto' => 'acendalhas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Sal',
                'foto' => 'sal.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Atum',
                'foto' => 'atum.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Salsichas',
                'foto' => 'salsichas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Galão',
                'foto' => 'galao.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Nesquik',
                'foto' => 'nesquik.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Café',
                'foto' => 'cafe.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Chá Tetley',
                'foto' => 'chatetley.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Chá Diese',
                'foto' => 'chadiese.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Chá 100% Sem Gordura',
                'foto' => 'chasemgordura.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Smarties',
                'foto' => 'smarties.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Rebuçados',
                'foto' => 'rebuçados.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Sementes Girassol',
                'foto' => 'sementesgirassol.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Sementes Chia',
                'foto' => 'sementeschia.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Sementes Linhaça',
                'foto' => 'sementeslinhaca.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Sementes Quinoa',
                'foto' => 'sementesquinoa.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Infusão Sem Cento',
                'foto' => 'infusaosemcento.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Granola',
                'foto' => 'granola.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Leite Chocolate',
                'foto' => 'leitechocolate.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Lenços',
                'foto' => 'lencos.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Bagas Gogi',
                'foto' => 'bagasgogi.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Ice Tea',
                'foto' => 'icetea.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Vinho',
                'foto' => 'vinho.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Leite',
                'foto' => 'leite.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Açúcar',
                'foto' => 'açucar.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Óleo',
                'foto' => 'oleo.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Arroz',
                'foto' => 'arroz.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Farinha',
                'foto' => 'farinha.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Cogumelos',
                'foto' => 'cogumelos.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Bolachas',
                'foto' => 'bolachas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Natas',
                'foto' => 'natas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Gel Banho',
                'foto' => 'gelbanho.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Papel Higiénico',
                'foto' => 'papelhigienico.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Rolos Cozinha',
                'foto' => 'roloscozinha.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Guardanapos',
                'foto' => 'guardanapos.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Sumo',
                'foto' => 'sumo.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Pão',
                'foto' => 'pao.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Bolas',
                'foto' => 'bolas.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Pão com Chouriço',
                'foto' => 'paocomchourico.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Doces',
                'foto' => 'doces.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Mel',
                'foto' => 'mel.png',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Batata Palha',
                'foto' => 'batatapalha.png',
                'created_at' => $createdAt,
            ],
        ]);
        $this->command->info("Seed produtos - Fim");
    }
}
