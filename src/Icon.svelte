<script>
  import { KeyIcon, MailIcon, InboxIcon } from 'svelte-feather-icons'
  import GoogleIcon from './social-icons/GoogleIcon.svelte'
  import FacebookIcon from './social-icons/FacebookIcon.svelte'
  import TwitterIcon from './social-icons/TwitterIcon.svelte'
  import GithubIcon from './social-icons/GithubIcon.svelte'
  import GitlabIcon from './social-icons/GitlabIcon.svelte'
  import BitbucketIcon from './social-icons/BitbucketIcon.svelte'
  import AzureIcon from './social-icons/AzureIcon.svelte'
  import DiscordIcon from './social-icons/DiscordIcon.svelte'
  import SpotifyIcon from './social-icons/SpotifyIcon.svelte'
  import AppleIcon from './social-icons/AppleIcon.svelte'

  const map = {
    mail: MailIcon,
    key: KeyIcon,
    inbox: InboxIcon,
    google: GoogleIcon,
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    github: GithubIcon,
    gitlab: GitlabIcon,
    bitbucket: BitbucketIcon,
    azure: AzureIcon,
    discord: DiscordIcon,
    spotify: SpotifyIcon,
    apple: AppleIcon
  }

  export let name
  export let size = 10
</script>

<svelte:component this={map[name]} {size}/>
