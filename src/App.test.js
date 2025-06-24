import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('navbar başlığını görüntüler', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/SenKimSin\?/i)).toBeInTheDocument();
});

test('varsayılan olarak Anasayfa açılır', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Hoş Geldiniz!/i)).toBeInTheDocument();
});

test('/tests yolunda testler sayfası yüklenir', () => {
  render(
    <MemoryRouter initialEntries={['/tests']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Kendinizi Keşfedin!/i)).toBeInTheDocument();
});

test('/test/:id/details yolunda detay sayfası açılır', () => {
  render(
    <MemoryRouter initialEntries={['/test/1/details']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Teste Başla/i)).toBeInTheDocument();
});
