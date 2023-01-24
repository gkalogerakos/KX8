function getAnagrams(input, roads) {
  var flag, r;
  var results = [];
  input = input.split("");
  roads.forEach((road) => {
    r = road;
    flag = true;
    input.forEach((char) => {
      if (!r.includes(char)) {
        flag = false;
      } else {
        r = r.replace(char, "");
      }
    });
    if (flag) results.push(road);
  });
  return results;
}

export default getAnagrams;
