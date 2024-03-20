import { test, expect } from '@playwright/test';

test('Teste de envio de formulário e modal de sucesso', async ({ page }) => {
  // Abre a página
  await page.goto('http://localhost:5173/');

  const typeWithDelay = async (selector: string, text: string, delay: number) => {
    for (const char of text) {
      await page.type(selector, char, { delay });
    }
  };

  // Preenche o formulário
  await typeWithDelay('input[placeholder="Nome"]', 'Lucas Amaral', 100);
  await typeWithDelay('input[placeholder="Telefone"]', '11945043408', 100);
  await typeWithDelay('input[placeholder="E-mail"]', 'analista.sistemas.lucas@gmail.com', 100);

  // Clica no botão "Iniciar Desafio"
  await page.click('button[type="submit"]');

  // Espera até que o botão "Tik Tak Envie Agora" apareça
  await page.waitForSelector('button:has-text("Tik Tak Envie Agora")');

  // Clica no botão "Tik Tak Envie Agora"
  await page.click('button:has-text("Tik Tak Envie Agora")');

  // Aguarda um pouco antes de verificar o modal
  await page.waitForTimeout(1000); // Aguarda 1 segundo

  // Espera até que o modal de sucesso apareça
  await page.waitForSelector('dialog:has-text("Desafio finalizado com sucesso!")');
});
