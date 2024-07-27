export const groupBy = (arr = [], lambda: any) => {
  return arr.reduce((groups: any, current: any) => {
    var val = lambda(current);
    var index = groups.findIndex((x: any) => x.key == val);

    if (index < 0) {
      index = groups.push({ key: val, items: [] }) - 1;
    }

    groups[index].items.push(current);
    return groups;
  }, []);
};

export const groupByYear = (arr: { [key: string]: number }[]) => {
  let response: { [year: string]: { [month: string]: number; total: number } } =
    {};
  arr.forEach((d: { [key: string]: number }) => {
    for (const k in d) {
      const [year, month] = k.split("-");
      //Todo: Fix this
      // if (!response[year]) response[year] = {};
      // if (!response[year][month]) response[year][month] = 0;
      // response[year][month] += d[k];
      // response[year].total += d[k];
    }
  });
  return response;
};

export const sortByKey = (arr: any, key: any) => {
  return arr.sort((a: any, b: any) => (a[key] < b[key] ? 1 : -1));
};

export const sortDate = (arr: any, key: any) => {
  return arr.sort((a: any, b: any) => {
    const item = arr[key];
    return 0;
  });
};

export const range = (start: any, stop: any) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i);
