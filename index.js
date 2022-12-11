import { ChatGPTAPI } from 'chatgpt';

(async () => {
  const api = new ChatGPTAPI({ sessionToken: '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', markdown: false });
  await api.ensureAuth();
  const response = await api.sendMessage('Write a python version of bubble sort.');

  console.log(response.status);
})();