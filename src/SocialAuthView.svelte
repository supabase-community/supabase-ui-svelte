<script>
  import Button from './Button.svelte'
  import Text from './Text.svelte'

  export let supabaseClient
  export let providers
  export let socialLayout
  export let socialButtonSize
  export let socialColors

  let loading = false, error = ''

  const buttonStyles = {
    google: {
      backgroundColor: '#ce4430',
      color: 'white',
    },
    facebook: {
      backgroundColor: '#4267B2',
      color: 'white',
    },
    twitter: {
      backgroundColor: '#1DA1F2',
    },
    gitlab: {
      backgroundColor: '#FC6D27',
    },
    github: {
      backgroundColor: '#333',
      color: 'white',
    },
    bitbucket: {
      backgroundColor: '#205081',
      color: 'white',
    },
  }

  $: hasProviders = providers && providers.length > 0

  async function handleProviderSignIn(provider) {
    loading = true

    const { error: signInError } = await supabaseClient.auth.signIn({ provider })
    if (signInError) error = signInError.message

    loading = false
  }
</script>

{#if hasProviders}
  <div class="providers">
    {#each providers as provider}
      <Button block shadow size={socialButtonSize} style={buttonStyles[provider]} on:click={() => handleProviderSignIn(provider)}>
        {#if socialLayout == 'vertical'}
          Sign up with {provider}
        {/if}
      </Button>
    {/each}
  </div>
{/if}

{#if error}
  <Text type="danger">{error}</Text>
{/if}

<style>
  .providers {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
