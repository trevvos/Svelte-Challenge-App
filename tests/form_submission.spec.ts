import { test, expect } from '@playwright/test';

test('Teste de clique no botão "Iniciar Desafio"', async ({ page }) => {
  // Abre a página
  await page.goto('http://localhost:5173/');

  // Função para preencher um campo com um atraso
  const typeWithDelay = async (selector: string, text: string, delay: number) => {
    for (const char of text) {
      await page.type(selector, char, { delay });
    }
  };

  // Preenche os campos do formulário automaticamente com um atraso de 100ms entre cada caractere
  await typeWithDelay('input[placeholder="Nome"]', 'Lucas Amaral', 100);
  await typeWithDelay('input[placeholder="Telefone"]', '11945043408', 100);
  await typeWithDelay('input[placeholder="E-mail"]', 'analista.sistemas.lucas@gmail.com', 100);

  // Clique no botão "Iniciar Desafio" para iniciar o desafio
  await page.click('button[type="submit"]');

  // Espera o botão "Tik Tak Envie Agora" ser renderizado na página
  await page.waitForSelector('button[type="button"]');

  // Verifica se a página está conforme o esperado após o clique no botão
  const button = await page.$('button[type="button"]');
  expect(button).not.toBeNull(); // Verifica se o botão "Tik Tak Envie Agora" está presente na página
});
