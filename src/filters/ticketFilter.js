export default (function () {
  const sort = (items, criteria = false) => {
    return criteria ? items.sort(criteria) : items;
  };
  const filter = (items, conditions) => {
    let filtered = items;
    conditions.forEach((item) => {
      if (item.name.includes("date")) {
        filtered = filtered.filter((dataItem) => sameDate(dataItem[item.name], item.value));
      } else if (item.name.includes("_count")) {
        let param = item.name.split('_');
        let value = parseInt(item.value.replace(param[0], ''));
        filtered = filtered.filter(
            (dataItem) => dataItem[param[0]].length === value
        );
      } else {
        filtered = filtered.filter(
          (dataItem) => dataItem[item.name] === item.value
        );
      }
    });
    return filtered;
  };

  const paginate = (items, page) => {
    return items.slice(0, page * 5);
  };

  const sameDate = (a, b) => {
    if(!isNaN(a)) {
      a = new Date(a)
    }
    if(!isNaN(b)) {
      b = new Date(b)
    }
    return (
      a.getDate() === b.getDate() &&
      a.getMonth() === b.getMonth() &&
      a.getFullYear() === b.getFullYear()
    );
  };

  return {
    sort,
    filter,
    paginate,
  };
});
