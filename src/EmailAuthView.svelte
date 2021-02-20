<script>
  import LinkButton from './LinkButton.svelte'
  import Text from './Text.svelte'
  import Button from './Button.svelte'
  import Input from './Input.svelte'

  export let supabaseClient
  export let view

  let error = '', message = '', loading = false, email = "", password = ""

  async function submit(e) {
    error = ''
    message = ''
    loading = true

    if (view == 'sign_up') {
      const { error: signUpError } = await supabaseClient.auth.signIn({
        email, password
      })

      if (signUpError) error = signUpError.message
    } else if (view == 'sign_in') {
      const { error: signInError } = await supabaseClient.auth.signUp({
        email, password
      })

      if (signInError) error = signInError.message
    }

    loading = false
  }
</script>

<form on:submit|preventDefault={submit}>
  <Input name="email" type="email" label="Email address" icon="mail" bind:value={email}/>
  <Input name="password" type="password" label="Password" icon="key" bind:value={password}/>

  {#if view == 'sign_up'}
    <Button block size="large" {loading} icon="inbox">Sign up</Button>
    <LinkButton on:click={() => view = 'magic_link'}>Sign in with magic link</LinkButton>
    <LinkButton on:click={() => view = 'sign_in'}>Do you have an account? Sign in</LinkButton>
  {:else}
    <Button block size="large" {loading} icon="inbox">Sign in</Button>
    <LinkButton on:click={() => view = 'sign_up'}>Don't have an account? Sign up</LinkButton>
  {/if}

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</form>
