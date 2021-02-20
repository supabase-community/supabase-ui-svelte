supabase-ui-svelte
------------------

A set of authentication components for handling Supabase. Built using Svelte.

# Supported Features

- 8 OAUTH providers
- Login and signup with email/password
- Login with magic link
- Password recovery
- Password reset

# Storybook

View the components with different settings:

https://supabase-ui-svelte.vercel.app

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

Add the component anywhere on you page:

```js
<Auth {supabaseClient}/>
```

# License

MIT
