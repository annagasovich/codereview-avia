export default (function () {
  const filter = (items, criteria) => {
      return items.sort(criteria);
  }

  return {
      filter
  }
})