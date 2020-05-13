export class MissingAppProviderError extends Error {
  constructor(message = '') {
    super(`${message ? `${message} ` : message}Your application must be wrapped in an <AppProvider> component.`);
    this.name = 'MissingAppProviderError';
  }
}
