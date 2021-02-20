import Auth from '../../src/Component.svelte';
import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(
  'https://evuqlpfsuimdzxurpcgn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwNDIzODk3MywiZXhwIjoxOTE5ODE0OTczfQ.ud4NW5ZFc0Zky-ARnOzbzxqvLcYwVIyvk3GwW3aKC3Y'
)

export default {
  title: 'Auth/Auth',
  component: Auth,
  argTypes: {
    class: { control: 'text' },
    style: { control: 'text' },
    socialLayout: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical']
      }
    },
    socialColors: { control: 'boolean' },
    socialButtonSize: {
      control: {
        type: 'radio',
        options: ['tiny', 'small', 'large', 'medium', 'xlarge']
      }
    },
    providers: {
      control: 'array'
    },
    view: {
      control: {
        type: 'radio',
        options: ['sign_in', 'sign_up', 'forgotten_password', 'magic_link']
      }
    }
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Auth,
  props: { ...args, supabaseClient }
});

export const Default = Template.bind({});
Default.args = {
};

export const WithSocialAuth = Template.bind({});
WithSocialAuth.args = {
  providers: ['facebook', 'google']
};

export const WithAllSocialAuth = Template.bind({});
WithAllSocialAuth.args = {
  providers: ['facebook', 'google', 'twitter', 'github', 'gitlab', 'bitbucket', 'azure'],
};

export const WithSocialLargeButtons = Template.bind({});
WithSocialLargeButtons.args = {
  providers: ['facebook', 'google', 'twitter', 'github', 'gitlab', 'bitbucket', 'azure'],
  socialButtonSize: 'large'
};

export const WithColoredSocialAuth = Template.bind({});
WithColoredSocialAuth.args = {
  socialColors: true,
  providers: ['facebook', 'google', 'twitter', 'github', 'gitlab', 'bitbucket', 'azure'],
};

export const WithSocialAuthHorizontal = Template.bind({});
WithSocialAuthHorizontal.args = {
  providers: ['facebook', 'google', 'twitter'],
  socialLayout: 'horizontal',
};

export const UpdatePassword = Template.bind({});
UpdatePassword.args = {
};

export const ChangeViewState = Template.bind({});
ChangeViewState.args = {
};
