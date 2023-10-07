
function clk(){

  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  var h = run(a, b, c)
  console.log(h)
  document.getElementById("h").textContent = h;

}