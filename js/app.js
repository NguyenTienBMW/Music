var api =
  "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR2VZzt3i9tYpFGrMl5lf3vVipaWBxFSBqmLPB84LGWARMt5gLGS_bgND8Q";

fetch(api)
  .then((response) => response.json())
  .then((data) => console.log(data));
