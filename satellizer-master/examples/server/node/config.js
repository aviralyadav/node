module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/sociallogin',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '9b160244862bd6edad0c60e4ac9a1145',
  FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || 'YOUR_FOURSQUARE_CLIENT_SECRET',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'Wscy3uZDKk2vhVZUxFbnx_xT',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'YOUR_GITHUB_CLIENT_SECRET',
  INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || 'YOUR_INSTAGRAM_CLIENT_SECRET',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'YOUR_LINKEDIN_CLIENT_SECRET',
  TWITCH_SECRET: process.env.TWITCH_SECRET || 'YOUR_TWITCH_CLIENT_SECRET',
  WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || 'YOUR_MICROSOFT_CLIENT_SECRET',
  YAHOO_SECRET: process.env.YAHOO_SECRET || 'YOUR_YAHOO_CLIENT_SECRET',
  BITBUCKET_SECRET: process.env.BITBUCKET_SECRET || 'YOUR_BITBUCKET_CLIENT_SECRET',
  SPOTIFY_SECRET: process.env.SPOTIFY_SECRET || 'YOUR_SPOTIFY_CLIENT_SECRET',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || 'zIGjFcEaU5xYKhMsF0k9BgZLg',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'G59eQvkDvS60nKKOvWw3weCcSlS4kXZRCZGoN0pN1es6MEj3aD'
};
