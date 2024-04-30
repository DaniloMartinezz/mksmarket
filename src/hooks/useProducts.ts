import { useQuery } from 'react-query';

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

// Ajustando para mapear a resposta corretamente
const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    console.log('Dados recebidos:', json);


    if (!json.products) {
      throw new Error('Products field not found in the response');
    }
    return json.products;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

export const useProducts = () => {
  return useQuery<Product[], Error>('products', fetchProducts, {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
};