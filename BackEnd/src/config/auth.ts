interface IAuthConfig {
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export default {
  jwt: {
    secret: '123123',
    expiresIn: '1d',
  },
} as IAuthConfig;
