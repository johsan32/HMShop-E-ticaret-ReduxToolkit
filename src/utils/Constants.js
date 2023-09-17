export const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
    params: {
      lang: 'en',
      country: 'us'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

 export const options2 = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
  params: {
    country: 'us',
    lang: 'en',
    currentpage: '0',
    pagesize: '30',
    categories: 'ladies_all'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};
export const categoryOpt = {
   params: {
    country: 'us',
    lang: 'en',
    currentpage: '0',
    pagesize: '30',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

export const categoryOpt2 = {

  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

export const detailOpt = {

  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};