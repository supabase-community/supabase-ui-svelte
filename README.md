supabase-ui-svelte
------------------

UI components for authenticated Supabase using Svelte.

# Supported Features

- Login via OAUTH providers: Google, Facebook, Twitter, Github, Azure, Gitlab, Bitbucket
- Login and signup via email/password
- Login via magic link
- Password recovery
- Password reset

# Storybook

View the components in action:

https://supabase-ui-svelte.vercel.app/?path=/story/auth-auth--default

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

# License

MIT
