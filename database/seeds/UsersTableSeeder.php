<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->info("Seed utilizadores - Inicio");
        $faker = Faker\Factory::create('pt_PT');
        $createdAt = Carbon\Carbon::now()->subDays(30);

        DB::table('users')->insert([
            [
                'name' => 'Frutaria',
                'email' => 'frutaria@iol.pt',
                'password' => bcrypt('123'),
                'api_token' => \Illuminate\Support\Str::random(60),
                'remember_token' => $faker->asciify('**********'),
                'created_at' => $createdAt,
            ],
            [
                'name' => 'Joaquim',
                'email' => 'santamaro@iol.pt',
                'password' => bcrypt('123'),
                'api_token' => \Illuminate\Support\Str::random(60),
                'remember_token' => $faker->asciify('**********'),
                'created_at' => $createdAt,
            ],
        ]);

        $this->command->info("Seed utilizadores - Fim");
    }
}
