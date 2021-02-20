<script>
  export let block = false
  export let shadow = false
  export let size = 'tiny'
  export let loading = false
  export let icon = null
  export let style = {}

  $: styleString = Object.entries(style).map(([key, value]) => {
    return `${key}: ${value}`
  }).join(';')
</script>

<button class:block class={size} style={styleString} on:click disabled={loading}>
  {#if icon}
    <span class="icon">{icon}</span>
  {/if}
  <span><slot/></span>
</button>

<style>
  button {
    background: rgba(101, 217, 165);
    color: white;
    text-shadow: 0px 0px 4px rgb(38 111 78 / 50%);

    border-color: transparent;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    position: relative;
    text-align: center;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    border-radius: 0.25rem;
    font-family: inherit;
    font-weight: inherit;
  }

  button.large {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  button.block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
