<script>
  export let block = false
  export let shadow = false
  export let size = 'tiny'
  export let loading = false
  export let icon = null
</script>

<button class:block on:click disabled={loading}>
  {#if icon}
    <span class="icon">{icon}</span>
  {/if}
  <span><slot/></span>
</button>
