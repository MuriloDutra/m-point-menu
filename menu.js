const sandwiches = [
  {
    name: 'Natural de frango',
    price: 12.00,
    description: 'Pão de forma, patê de frango, alface e tomate'
  },
  {
    name: 'Bauru',
    price: 12.00,
    description: 'Pão francês, presunto, queijo, tomate e orégano'
  },
  {
    name: 'Misto Quente',
    price: 12.00,
    description: 'Pão francês, presunto e queijo'
  },
  {
    name: 'Misto Quente c/ ovo',
    price: 14.00,
    description: 'Pão francês, presunto, queijo, ovo e orégano'
  },
  {
    name: 'Misto especial',
    price: 16.00,
    description: 'Pão francês, presunto, queijo, ovo, orégano, alface e tomate'
  },
  {
    name: 'Pão c/ ovo',
    price: 11.00,
    description: 'Pão francês, 2 ovos'
  },
  {
    name: 'Toscana',
    price: 20.00,
    description: 'Pão francês, linguiça toscana, queijo, alface e tomate'
  },
  {
    name: 'X-Salada',
    price: 20.00,
    description: 'Pão de hamburguer, hamburguer, presunto, queijo, alface e tomate'
  },
  {
    name: 'X-EGG',
    price: 22.00,
    description: 'Pão de hamburguer, hamburguer, ovo, presunto, queijo, alface e tomate'
  },
  {
    name: 'X-Picanha',
    price: 28.00,
    description: 'Pão de hamburguer, hamburguer de picanha, ovo, presunto, queijo, alface e tomate'
  },
  {
    name: 'X-Linguiça',
    price: 26.00,
    description: 'Pão de hamburguer, hamburguer de linguiça toscana, queijo, alface e tomate'
  },
  {
    name: 'Franguinho',
    price: 20.00,
    description: 'Pão francês, Filé de frango, queijo, alface e tomate'
  },
  {
    name: 'Churrasquinho',
    price: 20.00,
    description: 'Pão francês, Filé bovino, queijo, alface e tomate'
  },
  {
    name: 'Pão na chapa',
    price: 4.00,
    description: 'Pão francês c/ manteiga'
  },
  {
    name: 'Pão c/ manteiga',
    price: 3.50,
    description: 'Pão francês c/ manteiga'
  }
]

const salads = [
  {
    name: 'Salada M.Point',
    price: 21.99,
    description: 'Alface, tomate, cenoura e carne (filé de frango ou bife carne)'
  }
]

const hotDrinks = [
  {
    name: 'Café',
    price: 4.00
  },
  {
    name: 'Pingado',
    price: 5.00
  },
  {
    name: 'Capuccino',
    price: 6.00
  },
  {
    name: 'Achocolatado',
    price: 6.00
  }
]

const coldDrinks = [
  {
    name: 'Água s/ gás',
    price: 3.50
  },
  {
    name: 'Água c/ gás',
    price: 4.50
  },
  {
    name: 'Guaraviton',
    price: 5.50
  },
  {
    name: 'Achocolatado',
    price: 6.00
  },
  {
    name: 'Refrigerante caçulinha',
    price: 4.00
  },
  {
    name: 'Refrigerante KS',
    price: 5.00
  },
  {
    name: 'Refrigerante lata',
    price: 7.00
  },
  {
    name: 'Refrigerante 600ml',
    price: 9.00
  },
  {
    name: 'Suco Del Valle lata',
    price: 8.00
  },
  {
    name: 'Suco natural de laranja',
    price: 10.00
  },
  {
    name: 'Suco de polpa',
    price: 10.00,
    description: 'Sabores: Abacaxi, Abacaxi c/ hortelã, Maracujá, Morango'
  },
  {
    name: 'Energético Monster',
    price: 13.00
  },
  {
    name: 'H2O',
    price: 8.00
  },
  {
    name: 'Refrigerante 1 litro',
    price: 12.00
  },
  {
    name: 'Refrigerante 1,5 litros',
    price: 14.00
  },
  {
    name: 'Refrigerante 2 litros',
    price: 16.00
  }
]

const desserts = [
  {
    name: 'Pavê',
    price: 14.00
  },
  {
    name: 'Bolo de pote',
    price: 14.00,
    description: 'Vários sabores'
  },
  {
    name: 'Pudim',
    price: 8.00
  },
  {
    name: 'Torta doce',
    price: 10.00
  },
  {
    name: 'Açaí',
    price: 14.00,
    description: 'Vários sabores'
  },
  {
    name: 'Sorvete',
    price: 8.00,
    description: 'Vários sabores'
  }
]

const menu = [
  {
    label: 'Salgados',
    items: [
      {
        name: 'Salgados assados',
        price: 9.00
      },
      {
        name: 'Salgados fritos',
        price: 9.00
      },
      {
        name: 'Torta mini',
        price: 12.00
      },
      {
        name: 'Torta pedaço',
        price: 14.00
      },
      {
        name: 'Croassant',
        price: 12.00
      }
    ]
  },
  {
    label: 'Lanches',
    items: sandwiches
  },
  {
    label: 'Saladas',
    items: salads
  },
  {
    label: 'Bebidas quentes',
    items: hotDrinks
  },
  {
    label: 'Bebidas geladas',
    items: coldDrinks
  },
  {
    label: 'Sobremesas',
    items: desserts
  }
]

export default menu;