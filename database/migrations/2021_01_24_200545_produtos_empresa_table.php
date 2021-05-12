<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProdutosEmpresaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produto_empresa', function (Blueprint $table) {
            $table->integer('produto_id');
            $table->foreign('produto_id')->references('id')->on('produtos');
            $table->integer('empresa_id');
            $table->foreign('empresa_id')->references('id')->on('empresa');
            $table->float('quantidade','10','3');
            $table->primary(array('produto_id', 'empresa_id'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresa');
    }
}
