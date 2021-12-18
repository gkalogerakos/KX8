function getAnagrams(input, roads) {
  var flag;
  var results = [];
  input = input.split("");
  roads.forEach((road) => {
    flag = true;
    input.forEach((char) => {
      if (!road.includes(char)) flag = false;
    });
    if (flag) results.push(road);
  });
  return results;
}

export default getAnagrams;
