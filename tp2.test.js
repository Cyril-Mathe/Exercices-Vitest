import { expect, test, vi } from "vitest";
import { wait, fetchUser } from "./tp2.js";

// Exercice 1
test('wait valid', async () => {
  const result = await wait();
  expect(result).toBe("Executed after 2 seconds");
});

// Exercice 2
test('fetchUser returns user data', async () => {
  const mockUser = {
    id: 1,
    name: 'Aa Aaaa',
    email: 'aa@example.com',
    username: 'aa'
  };

  // Mock global.fetch
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUser)
    })
  );

  const result = await fetchUser(1);

  // Vérifications
  expect(result).toEqual(mockUser);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/users/1'
  );
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

// Test d'erreur API
test('fetchUser throws error on bad response', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      status: 404
    })
  );

  await expect(() => fetchUser(999)).rejects.toThrow('Erreur API: 404');
});