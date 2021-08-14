<script>
  import Icon from './Icon.svelte'

  export let name
  export let label
  export let placeholder = ''
  export let value
  export let icon = null
  export let type = 'text'
</script>

<label for={name}>
  {label}

  <div class="input">
    {#if icon}
      <span class="icon">
        <Icon name={icon} size=21/>
      </span>
    {/if}

    {#if type == 'text'}
      <input type="text" {name} {placeholder} bind:value>
    {:else if type == 'email'}
      <input type="email" {name} {placeholder} bind:value>
    {:else if type == 'password'}
      <input type="password" {name} {placeholder} autocomplete="on" bind:value>
    {/if}
  </div>
</label>

<style>
  label {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 1rem;
  }
  input {
    font-size: 0.9rem;
    font-weight: 300;
    background: transparent;
    border-radius: 0.375rem;
    border-style: solid;
    border-width: 1px;
    border-color: #ccc;
    box-sizing: border-box;
    display: block;
    flex: 1;
    padding: 5px 3px 8px 35px;
  }
  .icon {
    position: absolute;
    margin: 7px;
    color: #ccc;
  }
  .input {
    position: relative;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: flex;
  }
</style>
