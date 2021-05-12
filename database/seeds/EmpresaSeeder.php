<?php

use Illuminate\Database\Seeder;

class EmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("Seed Empresa - Inicio");

        $createdAt = Carbon\Carbon::now()->subDays(30);

        DB::table('empresa')->insert([
            [
                'nome' => 'Frutaria',
                'created_at' => $createdAt,
            ],
            [
                'nome' => 'Joaquim Vicente',
                'created_at' => $createdAt,
            ],
        ]);
        $this->command->info("Seed empresa - Fim");
    }
}
