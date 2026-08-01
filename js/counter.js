// All-site daily dedup visit counter
// Each browser counts once per day regardless of which page is visited first
(function(){
  var TOTAL_KEY = 'mililab_visit_total';
  var DATE_KEY  = 'mililab_visit_date';
  var today = new Date().toISOString().slice(0, 10);  // "2026-06-14"

  var lastDate = localStorage.getItem(DATE_KEY);
  if (lastDate !== today) {
    var total = (parseInt(localStorage.getItem(TOTAL_KEY)) || 0) + 1;
    localStorage.setItem(TOTAL_KEY, total);
    localStorage.setItem(DATE_KEY, today);
  }
})();
