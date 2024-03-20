import { test } from '@playwright/test';

test('Teste de navegação durante a contagem do temporizador', async ({ page }) => {
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


  // Aguarda o início da contagem
  await page.waitForSelector('.counter__temporizador');

  // Clica no link "Ver detalhes do candidato"
  await page.click('a[href="/candidate"]');

  // Aguarda um momento para a página carregar
  await page.waitForLoadState('networkidle');

    // Aguarde 2 segundos na página do candidato
    await page.waitForTimeout(3000);

  // Clica no link "Voltar"
  await page.click('a[href="/"]');

  // Espera até que o contador chegue a zero
  await page.waitForFunction(() => {
    const counterElement = document.querySelector('.counter__temporizador');
    return counterElement && counterElement.textContent?.trim() === '0';
  });
});
