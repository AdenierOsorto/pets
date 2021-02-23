
const fetchQuizQuestion = async () => {
 
  const endpoint = ``;
  const response = await fetch(endpoint);
  const data = await response.json();
  
  
  return data;
};

export default fetchQuizQuestion;
