<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("-----------------------------------------------");
        $this->command->info("Inicío Seed - Base de Dados");
        $this->command->info("-----------------------------------------------");

        $this->call(UsersTableSeeder::class);
        $this->call(ProdutosSeeder::class);
        $this->call(EmpresaSeeder::class);
        $this->call(Produto_EmpresaSeeder::class);
        $this->call(MovimentosSeeder::class);


        $this->command->info("-----------------------------------------------");
        $this->command->info("Fim Seed - Base de Dados");
        $this->command->info("-----------------------------------------------");
    }
}
