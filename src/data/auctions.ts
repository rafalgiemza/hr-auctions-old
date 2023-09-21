export interface Auction {
  userId:   number;
  id:       number;
  title:    string;
  body:     string;
  skills:   string[];
  minPrice: MinPrice;
}

export interface MinPrice {
  value:        number;
  currency:     string;
  contractType: string;
}

export const auctionsData = {
  "auctions":[
      {
        "userId": 1,
        "id": 1,
        "title": "Experineced Python developer with AI",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "skills": ["Python", "AI"],
        "minPrice": {
          "value": 50,
          "currency": "EUR",
          "contractType": "B2B"
        } 
      },
      {
        "userId": 2,
        "id": 2,
        "title": "Fullstack web dev with Java & Angular",
        "body": "qui est esse",
        "skills": ["Java", "Angular"],
        "minPrice": {
          "value": 40,
          "currency": "EUR",
          "contractType": "B2B"
        } 
      },
      {
        "userId": 3,
        "id": 3,
        "title": "Junior frontend developer",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "skills": ["React.js", "HTML", "CSS"],
        "minPrice": {
          "value": 30,
          "currency": "EUR",
          "contractType": "B2B"
        } 
      },
   ],
  "total":3,
  "skip":0,
  "limit":3
}