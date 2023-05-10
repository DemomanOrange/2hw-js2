const myPromise = new Promise((resolve, reject) => {
    const jsonData = '{"name": "IvanZolo2004", "age": 18}';
  
    setTimeout(() => {
      resolve(jsonData);
    }, 2000);
    // reject("Ошибка при загрузке данных");
    // доп дз с ошибочным сценарием, надо раскоментировать для активации

  });
  
  myPromise
    .then((data) => {
      const jsObject = JSON.parse(data);
      console.log("Данные загружены:", jsObject);
    })
    .catch((error) => {
      console.error("Произошла ошибка:", error);
    })
    .finally(() => {
      console.log("Завершение загрузки данных");
    });
  







    