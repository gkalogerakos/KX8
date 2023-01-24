function getAnagrams(input, roads) {
  var flag, r;
  var results = [];
  input = input.split("");
  roads.forEach((road) => {
    r = road;
    flag = true;
    input.forEach((char) => {
      if (!r.includes(char)) flag = false;
      else {
        r.replace(char, "");
        console.log(road);
        console.log(r);
      }
    });
    if (flag) results.push(road);
  });
  return results;
}

export default getAnagrams;
