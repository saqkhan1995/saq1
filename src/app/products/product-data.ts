import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        'id': 1,
        'productName': 'Game of Thrones',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/81SEA1FUdNL._SL1500_.jpg',
        'tags': ['HBO', 'Fantasy', 'TV', 'Season']
      },
      {
        'id': 2,
        'productName': 'Vikings',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': 'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://m.media-amazon.com/images/M/MV5BNDYyNzk1NzYwOF5BMl5BanBnXkFtZTgwMTQ0Nzc4MzI@._V1_QL50_SY1000_CR0,0,738,1000_AL_.jpg'
      },
      {
        'id': 5,
        'productName': 'The Big Bang Theory',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
        'tags': ['TV', 'Comedy', 'Season']
      },
      {
        'id': 8,
        'productName': 'Into the Badlands',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': 'A mighty warrior and a young boy search for enlightenment in a ruthless territory controlled by feudal barons.',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/916oynxCGlL._RI_SX380_.jpg'
      },
      {
        'id': 10,
        'productName': 'Narcos',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2018',
        'description': 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'http://idora.gazetevatan.com/vatanmediafile/Haber598x362/2016/09/09/narcos-3-ve-4-sezonlari-icin-hayranlarina-mujde--2386545.Jpeg'
      }
    ];
    return { products };
  }
}
