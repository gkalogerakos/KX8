// const leap = ["2016", "2020", "2024", "2028", "2032", "2036", "2040"];
// const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var date = new Date();

export default function getDates(year) {
  var CM = getCleanMonday(getEaster(year), year);
  var first = getFirst(CM, year);
  var second = getSecond(CM, year);
  var party = getParty(CM, year);
  var third = getThird(CM, year);
  var parade = getParade(CM, year);
  var awards = getAwards(CM, year);
  var trip = getTrip(CM, year);
  return {
    first: first,
    second: second,
    party: party,
    third: third,
    parade: parade,
    awards: awards,
    trip: trip,
    CM: CM,
  };
}

function getEaster(y) {
  var d = (19 * (y % 19) + 15) % 30;
  var x = d + ((2 * (y % 4) + 4 * (y % 7) - d + 34) % 7) + 114;
  var m = ~~(x / 31);
  d = (x % 31) + 1;
  if (y > 1899 && y < 2100) {
    d += 13;
    if (m === 3 && d > 31) {
      d -= 31;
      m++;
    }
    if (m === 4 && d > 30) {
      d -= 30;
      m++;
    }
  }
  return [d, m];
}

function getCleanMonday(easter, y) {
  date.setFullYear(y);
  date.setMonth(easter[1] - 1);
  date.setDate(easter[0]);
  date.setDate(date.getDate() - 48);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}

function getFirst(CM, y) {
  date.setFullYear(y);
  date.setMonth(CM.month - 1);
  date.setDate(CM.date);
  date.setDate(date.getDate() - 23);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}

function getSecond(CM, y) {
  date.setFullYear(y);
  date.setMonth(CM.month - 1);
  date.setDate(CM.date);
  date.setDate(date.getDate() - 16);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}

function getParty(CM, y) {
  date.setFullYear(y);
  date.setMonth(CM.month - 1);
  date.setDate(CM.date);
  date.setDate(date.getDate() - 11);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}

function getThird(CM, y) {
  date.setFullYear(y);
  date.setMonth(CM.month - 1);
  date.setDate(CM.date);
  date.setDate(date.getDate() - 9);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}

function getParade(CM, y) {
  date.setFullYear(y);
  date.setMonth(CM.month - 1);
  date.setDate(CM.date);
  date.setDate(date.getDate() - 8);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}

function getAwards(CM, y) {
  date.setFullYear(y);
  date.setMonth(CM.month - 1);
  date.setDate(CM.date);
  date.setDate(date.getDate() - 5);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}

function getTrip(CM, y) {
  date.setFullYear(y);
  date.setMonth(CM.month - 1);
  date.setDate(CM.date);
  date.setDate(date.getDate() - 2);
  return { date: date.getDate(), month: date.getMonth() + 1 };
}
