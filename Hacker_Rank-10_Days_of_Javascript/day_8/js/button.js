let num = document.getElementById('btn');
num.addEventListener('click', function(){
    let valor = this.innerHTML;
    this.innerHTML = parseInt(valor)+1;
});