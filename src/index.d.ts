import type { SvelteComponentTyped } from 'svelte'
import type { SupabaseClient } from '@supabase/supabase-js'

export type Providers = 'azure' | 'bitbucket' | 'discord' | 'facebook' | 'github' | 'gitlab' | 'google'; 

export interface AuthProps {
  supabaseClient: SupabaseClient
  providers?: Providers[]
  view?: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password'
  classes?: string
  style?: string
  socialLayout?: 'vertical' | 'horizontal'
  socialColors?: boolean
  socialButtonSize?: 'medium' | 'large'
}

export default class Auth extends SvelteComponentTyped<AuthProps> {}
