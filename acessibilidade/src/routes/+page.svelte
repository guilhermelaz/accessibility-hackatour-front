<script lang="ts">
    import { onMount } from 'svelte';

    let place = "";
    let data = {};

    async function search() {
        const response = await fetch("http://localhost:8080/interest-point/process-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ place }) // Send the place name directly as an object
        });
        data = await response.json(); // Handle the response data here
    }
</script>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Ambas as colunas têm a mesma largura */
        grid-template-rows: auto auto auto;
        gap: 10px; /* Reduz o espaço entre as colunas da grade */
        padding: 2px;
        color: #f59d19;
        min-width: 300px; /* Define a largura mínima para o elemento principal */
    }

    img {
        margin-top:10px;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 50%; /* Reduz a largura da imagem para 50% do seu tamanho original */
    }

    h1 {
        margin-left: 70px; /* Adiciona um espaço à esquerda do título */
        grid-row: 1 / 2;
        grid-column: 1 / 3;
    }

    form {
        grid-row: 2 / 4;
        grid-column: 1 / 3;
    }

    p {
        color: black;
        grid-row: 4 / 5;
        grid-column: 1 / 3;
    }
</style>

<main class="container">
    <img src="logo.png" alt="Logo" class="img-fluid mx-auto d-block">
    <h1 class="text-center my-4">Consultar acessibilidade</h1>
    <form on:submit|preventDefault={search} class="mb-4">
        <div class="mb-3">
            <input bind:value={place} placeholder="Insira nome do local" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Consultar</button>
    </form>
    {#if typeof data === 'string'}
        <p class="text-center">{data}</p>
    {:else if Object.keys(data).length > 0}
        <p class="text-center">Acessibilidades: {Object.values(data).join(', ')}</p>
    {/if}
</main>