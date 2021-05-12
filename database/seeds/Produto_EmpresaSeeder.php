<?php

use Illuminate\Database\Seeder;

class Produto_EmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("Produto_Empresa seeder - Start");
        $produtos = DB::table('produtos')->pluck('id')->toArray();

        foreach ($produtos as $produto) {
            $faker = Faker\Factory::create('pt_PT');
            DB::table('produto_empresa')->insert([
                'produto_id' => $produto,
                'empresa_id' => 1,
                'quantidade' => $faker->numberBetween(-20, 20),
            ]);
        }

        $this->command->info("Produto_Empresa seeder - Finish");
    }
}
