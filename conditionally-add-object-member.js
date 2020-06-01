var empty = {
  ...(false && { liran: "1" }),
}; // {}

var withMember = {
  ...(false && { liran: "1" }),
}; // {liran: '1'}
