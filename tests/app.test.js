import App from '../src/app.wc.svelte';
import { render, waitFor } from '@testing-library/svelte';
import { jest } from '@jest/globals';

describe('App', () => {
  test('span should exist and display test.', async () => {
    const { getByText } = render(App, { props: {} });

    const span = await waitFor(() => getByText('Warning attack !!!'));

    expect(span).toBeInTheDocument();
  });
});
