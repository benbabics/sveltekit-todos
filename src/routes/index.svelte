<h1>{ title }</h1>

<form action="" method="">
  <input type="text" name="text" aria-label="Add a todo" placeholder="+ type to add a todo" />
</form>

<TodoItem />

<svelte:head>
  <title>{ title }</title>
</svelte:head>


<script lang="ts">
  import TodoItem from "$lib/TodoItem.svelte";

  const title = "Todos";
</script>
