<script>
  export let name
  export let label
  export let placeholder = ""
  export let value
  export let icon = null
  export let type = "text"
</script>

<label>
  {label}

  <div class="input">
    {#if icon}
      <span class="icon">{icon}</span>
    {/if}

    {#if type == "text"}
      <input type="text" {name} {placeholder} bind:value>
    {:else if type == "email"}
      <input type="email" {name} {placeholder} bind:value>
    {:else if type == "password"}
      <input type="password" {name} {placeholder} bind:value>
    {/if}
  </div>
</label>
