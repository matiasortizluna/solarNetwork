<?php

use Illuminate\Database\Seeder;

class MovimentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("Movimentos seeder - Start");
        $produtos = DB::table('produtos')->pluck('id')->toArray();
        $faker = Faker\Factory::create('pt_PT');
        $createdAt = Carbon\Carbon::now()->subDays(30);

        for ($i = 0; $i < 500; $i++) {
            DB::table('movimentos')->insert([
                'produto_id' => $faker->randomElement($produtos),
                'quantidade' => $faker->numberBetween(-20, 20),
                'operacao' => $faker->randomElement(["a","r"]),
                'created_at' => $createdAt,
            ]);
        }

        $this->command->info("Produto_Empresa seeder - Finish");
    }
}
