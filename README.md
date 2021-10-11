supabase-ui-svelte
------------------

UI components for Supabase authentication using Svelte. Inspired by the [React version](https://github.com/supabase/ui).

# Supported Features

- Login via OAUTH providers: Google, Facebook, Twitter, Github, Azure, Gitlab, Bitbucket, Discord
- Login and signup via email/password
- Login via magic link
- Password recovery
- Password reset

# Storybook

View the components in action:

[supabase-ui-svelte.vercel.app](https://supabase-ui-svelte.vercel.app/?path=/story/auth-auth--default)

# Setup

Install the npm package:

```bash
yarn install -D supabase-ui-svelte
```

Import the component:

```js
import Auth from 'supabase-ui-svelte'
```

Create a supabase client:

```js
import { createClient } from '@supabase/supabase-js'

// get keys via the settings page at https://app.supabase.io
const supabaseClient = createClient('<your supabase url>', '<your supabase key>')
```

Add the component anywhere on your page:

```js
<Auth {supabaseClient}/>
```

# Props

## `supabaseClient`

Required. This is the supabase client object. Call `createClient()` to get it.

## `view`

A `string` that sets which view to display.
Can be one of `sign_in` | `sign_up` | `magic_link` | `forgotten_password`. Default is `sign_in`.

## `providers`

An array of `string`. Can be any combination of `['facebook', 'google', 'twitter', 'github', 'gitlab', 'bitbucket', 'azure', 'discord']`. When left empty, the social login option is not displayed.
Default is an empty array.

## `socialButtonSize`

A `string` that specifies the size of the social buttons. Can be one of `tiny` | `small` | `medium` | `large` | `xlarge`.
Default is `medium`.

## `socialLayout`

A `string` that specifies the layout direction of the social buttons. Valid options are `horizontal` or `vertical`.
Default is `vertical`.

## `socialColors`

A `boolean` that indicates whether the social buttons should use the brand's colors.
Default is `false`.

## `class`

A `string` of CSS classes to add to the outermost container.
Default is empty.

## `style`

A `string` of CSS attributes to add to the outermost container.
Default is empty.

# License

MIT
